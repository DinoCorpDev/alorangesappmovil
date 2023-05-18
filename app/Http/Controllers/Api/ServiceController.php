<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\AttributeCollection;
use App\Http\Resources\BrandCollection;
use App\Http\Resources\CategoryCollection;
use App\Http\Resources\CategorySingleCollection;
use App\Http\Resources\ServiceCollection;
use App\Http\Resources\ServiceSingleCollection;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Service;
use App\Models\Attribute;
use App\Models\AttributeCategory;
use App\Models\OrderDetail;
use Illuminate\Http\Request;
use App\Utility\CategoryUtility;

class ServiceController extends Controller
{
    public function index()
    {
        return new ServiceCollection(Service::latest()->paginate(10));
    }

    public function show($service_slug)
    {
        //$service = filter_products(Service::query())
        $service = Service::where('slug', $service_slug)
            ->with(['brand', 'variations', 'variation_combinations', 'shop' => function ($query) {
                $query->withCount('reviews');
            }])
            ->withCount(['reviews', 'reviews_1', 'reviews_2', 'reviews_3', 'reviews_4', 'reviews_5'])
            ->first();
        if ($service) {
            return new ServiceSingleCollection($service);
        } else {
            return response()->json([
                'success' => false,
                'data' => null,
                'message' => translate('Service not found')
            ]);
        }
    }

    public function get_by_ids(Request $request)
    {
        if ($request->has('service_ids') && is_array($request->service_ids)) {
            return new ServiceCollection(filter_products(Service::whereIn('id', $request->service_ids))->get());
        } else {
            return response()->json([
                'success' => false,
                'data' => null,
                'message' => translate('Services not found')
            ], 200);
        }
    }

    public function related($service_id)
    {
        $services = filter_products(Service::query())->whereHas('service_categories', function ($query) use ($service_id) {
            $query->whereIn('category_id', Service::find($service_id)->service_categories->pluck('category_id')->toArray());
        })->where('id', '!=', $service_id)->limit(10)->get();
        return new ServiceCollection($services);
    }

    public function bought_together($service_id)
    {
        $order_ids = OrderDetail::where('service_id', $service_id)->pluck('order_id')->toArray();
        $service_ids = OrderDetail::distinct()->whereIn('order_id', $order_ids)->where('service_id', '!=', $service_id)->pluck('service_id')->toArray();
        $services = filter_products(Service::whereIn('id', $service_ids))->limit(10)->get();
        return new ServiceCollection($services);
    }

    public function random_services($limit, $service_id = null)
    {
        //return new ServiceCollection(filter_products(Service::where('id', '!=', $service_id))->inRandomOrder()->limit($limit)->get());
        return new ServiceCollection(Service::where('id', '!=', $service_id)->inRandomOrder()->limit($limit)->get());
    }
    public function latest_services($limit)
    {
        return new ServiceCollection(filter_products(Service::query())->latest()->limit($limit)->get());
    }

    public function search(Request $request)
    {
        $category                   = $request->category_slug ? Category::where('slug', $request->category_slug)->first() : null;
        $search_keyword             = $request->keyword;
        $sort_by                    = $request->sort_by;
        $category_id                = optional($category)->id;
        $brand_ids                  = $request->brand_ids ? explode(',', $request->brand_ids) : null;
        $category_ids               = $request->category_ids ? explode(',', $request->category_ids) : null;
        $min_price                  = $request->min_price;
        $max_price                  = $request->max_price;
        $attributes                 = Attribute::with('attribute_values')->get();
        $selected_attribute_values  = $request->attribute_values ? explode(',', $request->attribute_values) : null;

        //$services = filter_products(Service::with(['variations']));
        $services = Service::query();

        //brand check
        if ($brand_ids != null) {
            $services->whereIn('brand_id', $brand_ids);
        }

        // search keyword check
        if ($search_keyword != null) {
            $services->where(function ($q) use ($search_keyword) {
                foreach (explode(' ', trim($search_keyword)) as $word) {
                    $q->where('name', 'like', '%' . $word . '%')->orWhere('tags', 'like', '%' . $word . '%');
                }
            });
        }

        // category + child category check
        if ($category_id != null) {

            $category_ids = CategoryUtility::children_ids($category_id);
            $category_ids[] = $category_id;

            $services->with('service_categories')->whereHas('service_categories', function ($query) use ($category_ids) {
                return $query->whereIn('category_id', $category_ids);
            });

            $attribute_ids = AttributeCategory::whereIn('category_id', $category_ids)->pluck('attribute_id')->toArray();
            $attributes = Attribute::with('attribute_values')->whereIn('id', $attribute_ids)->get();
        } else if ($category_ids != null) {
            $services->with('service_categories')->whereHas('service_categories', function ($query) use ($category_ids) {
                return $query->whereIn('category_id', $category_ids);
            });

            $attribute_ids = AttributeCategory::whereIn('category_id', $category_ids)->pluck('attribute_id')->toArray();
            $attributes = Attribute::with('attribute_values')->whereIn('id', $attribute_ids)->get();
        } else {
            $category_ids = [];
            if ($search_keyword != null) {
                foreach (explode(' ', trim($search_keyword)) as $word) {
                    $ids = Category::where('name', 'like', '%' . $word . '%')->pluck('id')->toArray();
                    if (count($ids) > 0) {
                        foreach ($ids as $id) {
                            $category_ids[] = $id;
                            array_merge($category_ids, CategoryUtility::children_ids($id));
                        }
                    }
                }

                $attribute_ids = AttributeCategory::whereIn('category_id', $category_ids)->pluck('attribute_id')->toArray();
                $attributes = Attribute::with('attribute_values')->whereIn('id', $attribute_ids)->get();
            }
        }

        //price range
        if ($min_price != null) {
            $services->where('lowest_price', '>=', $min_price);
        }
        if ($max_price != null) {
            $services->where('highest_price', '<=', $max_price);
        }

        //filter by attribute value
        if ($selected_attribute_values) {
            $services->with('attribute_values')->whereHas('attribute_values', function ($query) use ($selected_attribute_values) {
                return $query->whereIn('attribute_value_id', $selected_attribute_values);
            });
        }


        //sorting
        switch ($sort_by) {
            case 'latest':
                $services->orderBy('created_at', 'desc');
                break;
            case 'oldest':
                $services->orderBy('created_at', 'asc');
                break;
            case 'highest_price':
                $services->orderBy('highest_price', 'desc');
                break;
            case 'lowest_price':
                $services->orderBy('lowest_price', 'asc');
                break;
            default:
                $services->orderBy('num_of_sale', 'desc');
                break;
        }

        $collection = new ServiceCollection($services->paginate(20));

        return response()->json([
            'success' => true,
            'metaTitle' => $category ? $category->meta_title : get_setting('meta_title'),
            'services' => $collection,
            'totalPage' => $collection->lastPage(),
            'currentPage' => $collection->currentPage(),
            'total' => $collection->total(),
            'parentCategory' => $category && $category->parent_id != 0 ? new CategorySingleCollection(Category::find($category->parent_id)) : null,
            'currentCategory' => $category ? new CategorySingleCollection($category) : null,
            'childCategories' => $category ? new CategoryCollection($category->childrenCategories) : null,
            'rootCategories' => new CategoryCollection(Category::where('level', 0)->orderBy('order_level', 'desc')->get()),
            'allBrands' => new BrandCollection(Brand::all()),
            'attributes' => new AttributeCollection($attributes)
        ]);
    }
}
