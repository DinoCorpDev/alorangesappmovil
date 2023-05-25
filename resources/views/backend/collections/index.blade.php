@extends('backend.layouts.app')

@section('content')
    <div class="aiz-titlebar text-left mt-2 mb-3">
        <div class="row align-items-center">
            <div class="col-md-4">
                <h1 class="h3">{{ translate('All collections') }}</h1>
            </div>
            <div class="col-md-3 offset-md-2 text-md-right">
                @can('add_products')
                    <label
                        class="btn btn-secondary w-100 mb-0"
                        for="openCSV"
                        href="#"
                    >
                        <span id="span-btn-excel">{{ translate('Import Collections') }}</span>
                        <div
                            class="spinner-border m-auto"
                            id="spinner-excel"
                            role="status"
                            style="width: 20px; height: 20px; display: none"
                        >
                            <span class="sr-only">Loading...</span>
                        </div>
                    </label>
                    <form
                        class="d-none"
                        id="formCSV"
                        action="{{ route('collection.import') }}"
                        method="post"
                        enctype="multipart/form-data"
                    >
                        @csrf
                        <input
                            class="form-control"
                            id="openCSV"
                            id="uploaded_file"
                            name="uploaded_file"
                            type="file"
                            onchange="document.getElementById('formCSV').submit();document.getElementById('span-btn-excel').style.display = 'none';document.getElementById('spinner-excel').style.display = 'block'"
                            required
                        >
                    </form>
                @endcan
            </div>
            <div class="col-md-3 text-md-right">
                @can('add_products')
                    <a
                        class="btn btn-primary w-100"
                        href="{{ route('collection.create') }}"
                    >
                        <span>{{ translate('Add New Collection') }}</span>
                    </a>
                @endcan
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
                    <h5 class="mb-md-0 h6">{{ translate('All Collections') }}</h5>
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
                        <th
                            data-breakpoints="md"
                            width="20%"
                        >{{ translate('Categories') }}</th>
                        <th data-breakpoints="md">{{ translate('Brand') }}</th>
                        <th
                            class="text-right"
                            data-breakpoints="md"
                        >{{ translate('Options') }}</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($collections as $key => $collection)
                        <tr>
                            <td>{{ $key + 1 + ($collections->currentPage() - 1) * $collections->perPage() }}</td>
                            <td>
                                <a
                                    class="text-reset d-block"
                                    href="{{ route('collection', $collection->slug) }}"
                                    target="_blank"
                                >
                                    <div class="d-flex align-items-center">
                                        <img
                                            class="size-60px size-xxl-80px mr-2"
                                            src="{{ uploaded_asset($collection->imagen1) }}"
                                            alt="Image"
                                            onerror="this.onerror=null;this.src='{{ static_asset('/assets/img/placeholder.jpg') }}';"
                                        />
                                        <span class="flex-grow-1 minw-0">
                                            <div class=" text-truncate-2 fs-12">
                                                {{ $collection->coleccion }}</div>
                                        </span>
                                    </div>
                                </a>
                            </td>
                            <td>
                            @php
                               $ca =  \App\Models\Category::find($collection->categoria);
                               $sub =  \App\Models\Category::find($collection->subcategoria);
                               $brand =  \App\Models\Brand::find($collection->marca);
                            @endphp
                                {{ $ca->name }} <br>
                                {{ $sub->name }}
                            </td>
                            <td>
                                {{ $brand->name }}
                            </td>
                            <td class="text-right">
                                @can('view_products')
                                    <a
                                        class="btn btn-soft-primary btn-icon btn-circle btn-sm"
                                        href="{{ route('collection.show', $collection->id) }}"
                                        title="{{ translate('View') }}"
                                    >
                                        <i class="las la-eye"></i>
                                    </a>
                                @endcan
                                @can('edit_products')
                                    <a
                                        class="btn btn-soft-info btn-icon btn-circle btn-sm"
                                        href="{{ route('collection.edit', ['id' => $collection->id, 'lang' => env('DEFAULT_LANGUAGE')]) }}"
                                        title="{{ translate('Edit') }}"
                                    >
                                        <i class="las la-edit"></i>
                                    </a>
                                @endcan
                                @can('delete_products')
                                    <a
                                        class="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                                        data-href="{{ route('collection.destroy', $collection->id) }}"
                                        href="#"
                                        title="{{ translate('Delete') }}"
                                    >
                                        <i class="las la-trash"></i>
                                    </a>
                                @endcan
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            <div class="aiz-pagination">
                {{ $collections->appends(request()->input())->links() }}
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
