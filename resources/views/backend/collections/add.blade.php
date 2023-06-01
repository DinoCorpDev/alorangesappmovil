@extends('backend.layouts.app')

@section('content')
    <div class="aiz-titlebar text-left mt-2 mb-3">
        <div class="row align-items-center">
            <div class="col-md-4">
                <h1 class="h3">{{ translate('Add product to collection') }}</h1>
            </div>
        </div>
    </div>

    <div class="card">
        <form
            class=""
            id="sort_products"
            action=""
            method="GET"
        >
            <div class="card-header row gutters-5">
                <div class="col text-center text-md-left">
                    <h5 class="mb-md-0 h6">
                        {{ translate('Add product to collection') }}
                        {{ $collection->coleccion }}
                        <a
                            class="font-weight-bold ml-3"
                            href="{{ route('collection.show', $collection->id) }}"
                            title="{{ translate('Add') }}"
                        >
                            <span>Volver</span>
                        </a>
                    </h5>
                </div>
                <div class="col-md-2 ml-auto">
                    <select
                        class="form-control form-control-sm aiz-selectpicker mb-2 mb-md-0"
                        id="type"
                        name="type"
                        onchange="sort_products()"
                    >
                        <option value="">{{ translate('Sort By') }}</option>
                        <option
                            value="rating,desc"
                            @isset($col_name, $query) @if ($col_name == 'rating' && $query == 'desc') selected @endif @endisset
                        >
                            {{ translate('Rating (High > Low)') }}
                        </option>
                        <option
                            value="rating,asc"
                            @isset($col_name, $query) @if ($col_name == 'rating' && $query == 'asc') selected @endif @endisset
                        >
                            {{ translate('Rating (Low > High)') }}
                        </option>
                        <option
                            value="num_of_sale,desc"
                            @isset($col_name, $query) @if ($col_name == 'num_of_sale' && $query == 'desc') selected @endif @endisset
                        >
                            {{ translate('Num of Sale (High > Low)') }}
                        </option>
                        <option
                            value="num_of_sale,asc"
                            @isset($col_name, $query) @if ($col_name == 'num_of_sale' && $query == 'asc') selected @endif @endisset
                        >
                            {{ translate('Num of Sale (Low > High)') }}
                        </option>
                        <option
                            value="unit_price,desc"
                            @isset($col_name, $query) @if ($col_name == 'unit_price' && $query == 'desc') selected @endif @endisset
                        >
                            {{ translate('Base Price (High > Low)') }}
                        </option>
                        <option
                            value="unit_price,asc"
                            @isset($col_name, $query) @if ($col_name == 'unit_price' && $query == 'asc') selected @endif @endisset
                        >
                            {{ translate('Base Price (Low > High)') }}
                        </option>
                    </select>
                </div>
                <div class="col-md-2">
                    <div class="input-group">
                        <input
                            class="form-control form-control-sm"
                            id="search"
                            name="search"
                            type="text"
                            @isset($sort_search) value="{{ $sort_search }}" @endisset
                            placeholder="{{ translate('Type & Enter') }}"
                        >
                    </div>
                </div>
            </div>
        </form>
        <div class="card-body">
            <table class="table aiz-table mb-0">
                <thead>
                    <tr>
                        <th class="w-40px">#</th>
                        <th class="col-xl-2">{{ translate('Name') }}</th>
                        <th data-breakpoints="md">{{ translate('Info') }}</th>
                        <th
                            data-breakpoints="md"
                            width="20%"
                        >
                            {{ translate('Categories') }}
                        </th>
                        <th data-breakpoints="md">{{ translate('Brand') }}</th>
                        <th data-breakpoints="md">{{ translate('Published') }}</th>
                        <th
                            class="text-right"
                            data-breakpoints="md"
                        >
                            {{ translate('Options') }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($products as $key => $product)
                        <tr>
                            <td>{{ $key + 1 + ($products->currentPage() - 1) * $products->perPage() }}</td>
                            <td>
                                <a
                                    class="text-reset d-block"
                                    href="{{ route('product', $product->slug) }}"
                                    target="_blank"
                                >
                                    <div class="d-flex align-items-center">
                                        <img
                                            class="size-60px size-xxl-80px mr-2"
                                            src="{{ uploaded_asset($product->thumbnail_img) }}"
                                            alt="Image"
                                            onerror="this.onerror=null;this.src='{{ static_asset('/assets/img/placeholder.jpg') }}';"
                                        />
                                        <span class="flex-grow-1 minw-0">
                                            <div class=" text-truncate-2 fs-12">
                                                {{ $product->name }}
                                            </div>
                                        </span>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <div>
                                    <div>
                                        <span>{{ translate('Rating') }}</span>:
                                        <span class="rating rating-sm my-2">{{ renderStarRating($product->rating) }}</span>
                                    </div>
                                    <div>
                                        <span>{{ translate('Toal Sold') }}</span>:
                                        <span class="fw-600">{{ $product->num_of_sale }}</span>
                                    </div>
                                    <div>
                                        <span>{{ translate('Price') }}</span>:
                                        @if ($product->highest_price != $product->lowest_price)
                                            <span class="fw-600">{{ format_price($product->lowest_price) }} -
                                                {{ format_price($product->highest_price) }}
                                            </span>
                                        @else
                                            <span class="fw-600">{{ format_price($product->lowest_price) }}</span>
                                        @endif
                                    </div>
                                </div>
                            </td>
                            <td>
                                @foreach ($product->categories as $category)
                                    <span class="badge badge-inline badge-md bg-soft-dark mb-1">
                                        {{ $category->getTranslation('name') }}
                                    </span>
                                @endforeach
                            </td>
                            <td>
                                @if ($product->brand)
                                    <div class="h-50px w-100px d-flex align-items-center justify-content-center">
                                        <img
                                            class="mw-100 mh-100"
                                            src="{{ uploaded_asset($product->brand->logo) }}"
                                            alt="{{ translate('Brand') }}"
                                            onerror="this.onerror=null;this.src='{{ static_asset('/assets/img/placeholder.jpg') }}';"
                                        />
                                    </div>
                                @else
                                    <span>{{ translate('No brand') }}</span>
                                @endif
                            </td>
                            <td>
                                <label class="aiz-switch aiz-switch-success mb-0">
                                    <input
                                        type="checkbox"
                                        value="{{ $product->id }}"
                                        onchange="update_published(this)"
                                        @if ($product->published == 1) checked @endif
                                    >
                                    <span class="slider round"></span>
                                </label>
                            </td>
                            <td>
                                <a
                                    class="btn btn-soft-primary"
                                    href="{{ route('collection.addProduct', ['id' => $collection->id, 'idProduct' => $product->id]) }}"
                                    title="{{ translate('Add') }}"
                                >
                                    <span>Agregar a colección</span>
                                </a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            <div class="aiz-pagination">
                {{ $products->appends(request()->input())->links() }}
            </div>
        </div>
    </div>

    @php
        CoreComponentRepository::instantiateShopRepository();
    @endphp
@endsection

@section('modal')
    @include('backend.inc.delete_modal')
@endsection


@section('script')
    <script type="text/javascript">
        $(document).ready(function() {
            //$('#container').removeClass('mainnav-lg').addClass('mainnav-sm');
        });


        function sort_products(el) {
            $('#sort_products').submit();
        }
    </script>
@endsection
