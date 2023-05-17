@extends('backend.layouts.app')

@section('content')
    <div class="aiz-titlebar text-left mt-2 mb-3">
        <div class="row align-items-center">
            <div class="col-md-4">
                <h1 class="h3">{{ translate('All services') }}</h1>
            </div>
            <div class="col-md-3 offset-md-2 text-md-right">
                @can('add_services')
                    <label class="btn btn-secondary w-100 mb-0" for="openCSV" href="#">
                        <span id="span-btn-excel">{{ translate('Import Services') }}</span>
                        <div class="spinner-border m-auto" id="spinner-excel" role="status"
                            style="width: 20px; height: 20px; display: none">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </label>
                    <form class="d-none" id="formCSV" action="{{ route('service.import') }}" method="post"
                        enctype="multipart/form-data">
                        @csrf
                        <input class="form-control" id="openCSV" id="uploaded_file" name="uploaded_file" type="file"
                            onchange="document.getElementById('formCSV').submit();document.getElementById('span-btn-excel').style.display = 'none';document.getElementById('spinner-excel').style.display = 'block'"
                            required>
                    </form>
                @endcan
            </div>
            <div class="col-md-3 text-md-right">
                @can('add_services')
                    <a class="btn btn-primary w-100" href="{{ route('service.create') }}">
                        <span>{{ translate('Add New Service') }}</span>
                    </a>
                @endcan
            </div>
        </div>
    </div>

    <div class="card">
        <form class="" id="sort_services" action="" method="GET">
            <div class="card-header row gutters-5">
                <div class="col text-center text-md-left">
                    <h5 class="mb-md-0 h6">{{ translate('All Services') }}</h5>
                </div>
                <div class="col-md-2 ml-auto">
                    <select class="form-control form-control-sm aiz-selectpicker mb-2 mb-md-0" id="type" name="type"
                        onchange="sort_services()">
                        <option value="">{{ translate('Sort By') }}</option>
                        <option value="rating,desc"
                            @isset($col_name, $query) @if ($col_name == 'rating' && $query == 'desc') selected @endif @endisset>
                            {{ translate('Rating (High > Low)') }}
                        </option>
                        <option value="rating,asc"
                            @isset($col_name, $query) @if ($col_name == 'rating' && $query == 'asc') selected @endif @endisset>
                            {{ translate('Rating (Low > High)') }}
                        </option>
                        <option value="num_of_sale,desc"
                            @isset($col_name, $query) @if ($col_name == 'num_of_sale' && $query == 'desc') selected @endif @endisset>
                            {{ translate('Num of Sale (High > Low)') }}
                        </option>
                        <option value="num_of_sale,asc"
                            @isset($col_name, $query) @if ($col_name == 'num_of_sale' && $query == 'asc') selected @endif @endisset>
                            {{ translate('Num of Sale (Low > High)') }}
                        </option>
                        <option value="unit_price,desc"
                            @isset($col_name, $query) @if ($col_name == 'unit_price' && $query == 'desc') selected @endif @endisset>
                            {{ translate('Base Price (High > Low)') }}
                        </option>
                        <option value="unit_price,asc"
                            @isset($col_name, $query) @if ($col_name == 'unit_price' && $query == 'asc') selected @endif @endisset>
                            {{ translate('Base Price (Low > High)') }}
                        </option>
                    </select>
                </div>
                <div class="col-md-2">
                    <div class="input-group">
                        <input class="form-control form-control-sm" id="search" name="search" type="text"
                            @isset($sort_search) value="{{ $sort_search }}" @endisset
                            placeholder="{{ translate('Type & Enter') }}">
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
                        <th data-breakpoints="md" width="20%">{{ translate('Categories') }}</th>
                        <th data-breakpoints="md">{{ translate('Brand') }}</th>
                        <th data-breakpoints="md">{{ translate('Published') }}</th>
                        <th class="text-right" data-breakpoints="md">{{ translate('Options') }}</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($services as $key => $service)
                        <tr>
                            <td>{{ $key + 1 + ($services->currentPage() - 1) * $services->perPage() }}</td>
                            <td>
                                <a class="text-reset d-block" href="{{ route('service', $service->slug) }}"
                                    target="_blank">
                                    <div class="d-flex align-items-center">
                                        <img class="size-60px size-xxl-80px mr-2"
                                            src="{{ uploaded_asset($service->thumbnail_img) }}" alt="Image"
                                            onerror="this.onerror=null;this.src='{{ static_asset('/assets/img/placeholder.jpg') }}';" />
                                        <span class="flex-grow-1 minw-0">
                                            <div class=" text-truncate-2 fs-12">
                                                {{ $service->name }}</div>
                                        </span>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <div>
                                    <div><span>{{ translate('Rating') }}</span>: <span
                                            class="rating rating-sm my-2">{{ renderStarRating($service->rating) }}</span>
                                    </div>
                                    <div><span>{{ translate('Toal Sold') }}</span>: <span
                                            class="fw-600">{{ $service->num_of_sale }}</span></div>
                                    <div>
                                        <span>{{ translate('Price') }}</span>:
                                        @if ($service->highest_price != $service->lowest_price)
                                            <span class="fw-600">{{ format_price($service->lowest_price) }} -
                                                {{ format_price($service->highest_price) }}</span>
                                        @else
                                            <span class="fw-600">{{ format_price($service->lowest_price) }}</span>
                                        @endif
                                    </div>
                                </div>
                            </td>
                            <td>
                                @foreach ($service->categories as $category)
                                    <span
                                        class="badge badge-inline badge-md bg-soft-dark mb-1">{{ $category->getTranslation('name') }}</span>
                                @endforeach
                            </td>
                            <td>
                                @if ($service->brand)
                                    <div class="h-50px w-100px d-flex align-items-center justify-content-center">
                                        <img class="mw-100 mh-100" src="{{ uploaded_asset($service->brand->logo) }}"
                                            alt="{{ translate('Brand') }}"
                                            onerror="this.onerror=null;this.src='{{ static_asset('/assets/img/placeholder.jpg') }}';" />
                                    </div>
                                @else
                                    <span>{{ translate('No brand') }}</span>
                                @endif
                            </td>
                            <td>
                                <label class="aiz-switch aiz-switch-success mb-0">
                                    <input type="checkbox" value="{{ $service->id }}" onchange="update_published(this)"
                                        @if ($service->published == 1) checked @endif>
                                    <span class="slider round"></span>
                                </label>
                            </td>
                            <td class="text-right">
                                @can('view_services')
                                    <a class="btn btn-soft-primary btn-icon btn-circle btn-sm"
                                        href="{{ route('service.show', $service->id) }}" title="{{ translate('View') }}">
                                        <i class="las la-eye"></i>
                                    </a>
                                @endcan
                                @can('edit_services')
                                    <a class="btn btn-soft-info btn-icon btn-circle btn-sm"
                                        href="{{ route('service.edit', ['id' => $service->id, 'lang' => env('DEFAULT_LANGUAGE')]) }}"
                                        title="{{ translate('Edit') }}">
                                        <i class="las la-edit"></i>
                                    </a>
                                @endcan
                                @can('duplicate_services')
                                    <a class="btn btn-soft-success btn-icon btn-circle btn-sm"
                                        href="{{ route('service.duplicate', ['id' => $service->id, 'type' => $type]) }}"
                                        title="{{ translate('Duplicate') }}">
                                        <i class="las la-copy"></i>
                                    </a>
                                @endcan
                                @can('delete_services')
                                    <a class="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                                        data-href="{{ route('service.destroy', $service->id) }}" href="#"
                                        title="{{ translate('Delete') }}">
                                        <i class="las la-trash"></i>
                                    </a>
                                @endcan
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            <div class="aiz-pagination">
                {{ $services->appends(request()->input())->links() }}
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

        function update_published(el) {
            if (el.checked) {
                var status = 1;
            } else {
                var status = 0;
            }
            $.post('{{ route('service.published') }}', {
                _token: '{{ csrf_token() }}',
                id: el.value,
                status: status
            }, function(data) {
                if (data == 1) {
                    AIZ.plugins.notify('success', '{{ translate('Published services updated successfully') }}');
                } else {
                    AIZ.plugins.notify('danger', '{{ translate('Something went wrong') }}');
                }
            });
        }

        function sort_services(el) {
            $('#sort_services').submit();
        }
    </script>
@endsection
