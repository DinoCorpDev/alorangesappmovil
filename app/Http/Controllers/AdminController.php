<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use Str;

class AdminController extends Controller
{
    /**
     * Show the admin dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function dashboard_data(Request $request)
    {
        $totales = array();

        array_push($totales, array(
            "tag" => 'totalOrders',
            "value" => \App\Models\Order::where('delivery_status', 'order_placed')->count()
        ));

        array_push($totales, array(
            "tag" => 'totalOffers',
            "value" => \App\Models\Offer::count()
        ));

        array_push($totales, array(
            "tag" => 'totalCoupon',
            "value" => \App\Models\Coupon::count()
        ));

        array_push($totales, array(
            "tag" => 'totalBrands',
            "value" => \App\Models\Brand::count()
        ));

        array_push($totales, array(
            "tag" => 'totalCategories',
            "value" => \App\Models\Category::count()
        ));

        array_push($totales, array(
            "tag" => 'totalSales',
            "value" => \App\Models\Order::where('delivery_status', '!=', 'cancelled')->sum('grand_total')
        ));

        array_push($totales, array(
            "tag" => 'totalOrderss',
            "value" => \App\Models\Order::count()
        ));

        array_push($totales, array(
            "tag" => 'totalProducts',
            "value" => \App\Models\Product::count()
        ));

        array_push($totales, array(
            "tag" => 'totalCustomers',
            "value" => \App\Models\User::where('user_type', 'customer')->count()
        ));

        array_push($totales, array(
            "tag" => 'confirmedOrder',
            "value" => \App\Models\Order::where('delivery_status', 'confirmed')->count()
        ));

        array_push($totales, array(
            "tag" => 'processedOrder',
            "value" => \App\Models\Order::where('delivery_status', 'processed')->count()
        ));

        array_push($totales, array(
            "tag" => 'orderDelivered',
            "value" => \App\Models\Order::where('delivery_status', 'delivered')->count()
        ));

        return response()->json([
            'success' => true,
            'data' => [],
            'totals' => $totales
        ]);
    }

    /**
     * Show the admin dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function admin_dashboard(Request $request)
    {
        return view('backend.dashboard');
    }

    function clearCache(Request $request)
    {
        cache_clear();
        Setting::where('type', 'force_cache_clear_version')->update([
            "value" => strtolower(Str::random(30))
        ]);
        flash(translate('Cache cleared successfully'))->success();
        return back();
    }
}
