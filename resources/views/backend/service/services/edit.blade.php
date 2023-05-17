@extends('backend.layouts.app')

@section('content')
    <div class="aiz-titlebar text-left mt-2 mb-3">
        <h1 class="mb-0 h6">{{ translate('Edit Service') }}</h5>
    </div>
    <form class="form form-horizontal mar-top" id="service_form" action="{{ route('service.update', $service->id) }}"
        method="POST" enctype="multipart/form-data">
        @csrf
        <input name="id" type="hidden" value="{{ $service->id }}">
        <input name="lang" type="hidden" value="{{ $lang }}">
        <ul class="nav nav-tabs nav-fill border-light">
            @foreach (\App\Models\Language::where('status', 1)->get() as $key => $language)
                <li class="nav-item">
                    <a class="nav-link text-reset @if ($language->code == $lang) active @else bg-soft-dark border-light border-left-0 @endif py-3"
                        href="{{ route('service.edit', ['id' => $service->id, 'lang' => $language->code]) }}">
                        <img class="mr-1" src="{{ static_asset('assets/img/flags/' . $language->flag . '.png') }}"
                            height="11">
                        <span>{{ $language->name }}</span>
                    </a>
                </li>
            @endforeach
        </ul>
        <div class="row gutters-5">
            <div class="col-lg">
                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Service Information') }}</h5>
                    </div>
                    <div class="card-body">
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Reference') }} <span
                                    class="text-danger">*</span></label>
                            <div class="col-md-8">
                                <input class="form-control" name="reference" type="text"
                                    value="{{ $service->reference }}" placeholder="{{ translate('Reference') }}" required>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Service Name') }} <span
                                    class="text-danger">*</span> <i class="las la-language text-danger"
                                    title="{{ translate('Translatable') }}"></i></label>
                            <div class="col-md-8">
                                <input class="form-control" name="name" type="text" value="{{ $service->name }}"
                                    placeholder="{{ translate('Service Name') }}" required>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Unit') }} <i
                                    class="las la-language text-danger"
                                    title="{{ translate('Translatable') }}"></i></label>
                            <div class="col-md-8">
                                <input class="form-control" name="unit" type="text"
                                    value="{{ $service->getTranslation('unit', $lang) }}"
                                    placeholder="{{ translate('Unit (e.g. 500 Gram, 2 Litre, 5 Pc etc)') }}">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Minimum Purchase Qty') }} <span
                                    class="text-danger">*</span></label>
                            <div class="col-md-8">
                                <input class="form-control" name="min_qty" type="number" value="{{ $service->min_qty }}"
                                    min="1" required>
                                <small
                                    class="text-muted">{{ translate('Customer need to purchase this minimum quantity for this service. Minimum should be 1.') }}</small>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Maximum Purchase Qty') }}</label>
                            <div class="col-md-8">
                                <input class="form-control" name="max_qty" type="number" value="{{ $service->max_qty }}"
                                    min="0">
                                <small
                                    class="text-muted">{{ translate('Customer will be able to purchase this maximum quantity for this service. Default 0 for unlimited.') }}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Service Images') }}</h5>
                    </div>
                    <div class="card-body">
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label" for="signinSrEmail">{{ translate('Thumbnail Image') }}
                                <small>(300x300)</small></label>
                            <div class="col-md-8">
                                <div class="input-group" data-toggle="aizuploader" data-type="image" data-mu>
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input class="selected-files" name="thumbnail_img" type="hidden"
                                        value="{{ $service->thumbnail_img }}">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                                <small
                                    class="text-muted">{{ translate('This image is visible in all service box. Use 300x300 sizes image. Keep some blank space around the main object of your image as we had to crop some edge in different devices to make it responsive.') }}</small>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label"
                                for="signinSrEmail">{{ translate('Gallery Images') }}<small>(600x600)</small></label>
                            <div class="col-md-8">
                                <div class="input-group" data-toggle="aizuploader" data-type="image"
                                    data-multiple="true">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input class="selected-files" name="photos" type="hidden"
                                        value="{{ $service->photos }}">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                                <small
                                    class="text-muted">{{ translate("These images are visible in the service details page gallery. Use 600x600 or higher sizes images for better quality. But try to keep file size low as it'll increase page load time.") }}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- price and stock -->
                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Service price, stock') }}</h5>
                        <div class="d-flex mt-2">
                            <label class="mb-0 mr-3 ml-0">{{ translate('Variant Service') }}</label>
                            <label class="aiz-switch aiz-switch-success mb-0">
                                <input name="is_variant" type="checkbox" onchange="is_variant_service(this)"
                                    @if ($service->is_variant) checked @endif>
                                <span></span>
                            </label>
                        </div>
                    </div>
                    <div class="card-body">
                        @php
                            $first_variation = $service->variations->first();
                            $price = 0;
                            $sku = null;
                            $stock = 1;
                            if ($service->is_variant) {
                                $price = $first_variation->price;
                                $sku = $first_variation->sku;
                                $stock = $first_variation->stock;
                            }
                        @endphp
                        <div>
                            <div class="form-group row">
                                <label class="col-md-3 col-from-label">{{ translate('Currency') }}</label>
                                <div class="col-md-8">
                                    <input class="form-control" name="currency" type="text"
                                        value="{{ $service->currency }}" placeholder="{{ translate('Currency') }}">
                                </div>
                            </div>
                        </div>
                        <div class="no_service_variant" @if ($service->is_variant) style="display:none;" @endif>
                            <div class="form-group row">
                                <label class="col-md-3 col-from-label">{{ translate('Regular price') }} <span
                                        class="text-danger">*</span></label>
                                <div class="col-md-8">
                                    <input class="form-control" name="price" type="number"
                                        value="{{ $price }}" step="0.01" min="0"
                                        placeholder="{{ translate('Price') }}" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 col-from-label">{{ translate('SKU') }}</label>
                                <div class="col-md-8">
                                    <input class="form-control" name="sku" type="test"
                                        value="{{ $sku }}" placeholder="{{ translate('SKU') }}">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 col-from-label">{{ translate('Stock') }} <span
                                        class="text-danger">*</span></label>
                                <div class="col-md-8">
                                    <select class="form-control aiz-selectpicker" name="stock"
                                        data-selected="{{ $stock }}">
                                        <option value="1">{{ translate('In stock') }}</option>
                                        <option value="0">{{ translate('Out of stock') }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="has_service_variant" @if (!$service->is_variant) style="display:none;" @endif>
                            <div class="alert alert-info">
                                {{ translate('Select an option for this service and then select choices of each option. Max 3 options') }}
                            </div>

                            <div class="customer_choice_options">

                                @forelse (generate_variation_options($service->variation_combinations) as $key => $combination)
                                    <div class="form-group row gutters-10 ">
                                        <div class="col-xxl-3 col-xl-4 col-md-5 attr-names">
                                            <select class="form-control aiz-selectpicker" name="service_options[]"
                                                data-live-search="true" data-selected="{{ $combination['id'] }}"
                                                title="{{ translate('Select an option') }}"
                                                onchange="get_option_choices(this)">
                                                @foreach ($all_attributes as $attribute)
                                                    <option value="{{ $attribute->id }}">
                                                        {{ $attribute->getTranslation('name') }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                        <div class="col attr-values">
                                            @php
                                                $attribute_values = \App\Models\AttributeValue::where('attribute_id', $combination['id'])->get();
                                                $old_val = array_map(function ($val) {
                                                    return $val['id'];
                                                }, $combination['values']);
                                            @endphp
                                            <select class="form-control aiz-selectpicker"
                                                name="option_{{ $combination['id'] }}_choices[]" data-live-search="true"
                                                data-selected="{{ json_encode($old_val) }}" multiple
                                                onchange="update_sku()">
                                                @foreach ($attribute_values as $attribute_value)
                                                    <option value="{{ $attribute_value->id }}">
                                                        {{ $attribute_value->getTranslation('name') }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                        @if ($key == 0)
                                            <div class="col-auto">
                                                <button class="btn btn-icon btn-soft-secondary" type="button"
                                                    onclick="add_new_option()">
                                                    <i class="la-plus las opacity-70"></i>
                                                </button>
                                            </div>
                                        @else
                                            <div class="col-auto">
                                                <button class="btn btn-icon p-0" data-toggle="remove-parent"
                                                    data-parent=".row" type="button" onclick="update_sku()">
                                                    <i class="la-2x la-trash las opacity-70"></i>
                                                </button>
                                            </div>
                                        @endif
                                    </div>
                                @empty
                                    <div class="form-group row gutters-10 ">
                                        <div class="col-xxl-3 col-xl-4 col-md-5 attr-names">
                                            <select class="form-control aiz-selectpicker" name="service_options[]"
                                                data-live-search="true" title="{{ translate('Select an option') }}"
                                                onchange="get_option_choices(this)">
                                                @foreach ($all_attributes as $key => $attribute)
                                                    <option value="{{ $attribute->id }}">
                                                        {{ $attribute->getTranslation('name') }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                        <div class="col attr-values">
                                            <div class="form-control">
                                                <span>{{ translate('Select an option') }}</span>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <button class="btn btn-icon btn-soft-secondary" type="button"
                                                onclick="add_new_option()">
                                                <i class=" la-plus las opacity-70"></i>
                                            </button>
                                        </div>
                                    </div>
                                @endforelse

                            </div>
                            <div class="sku_combination" id="sku_combination">
                                @if ($service->is_variant)
                                    @include('backend.service.services.sku_combinations_edit', [
                                        'variations' => $service->variations,
                                    ])
                                @endif
                            </div>
                        </div>
                        <div>
                            <div class="form-group row">
                                <label class="col-md-3 col-from-label">{{ translate('Time Warranty') }} <span
                                        class="text-danger">*</span></label>
                                <div class="col-md-8">
                                    <input class="form-control" name="warranty_text" type="text"
                                        value="{{ $service->warranty_text }}"
                                        placeholder="{{ translate('Time Warranty') }}" required>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Service Discount') }}</h5>
                    </div>
                    <div class="card-body">
                        @php
                            if ($service->discount_start_date) {
                                $start_date = date('d-m-Y H:i:s', $service->discount_start_date);
                                $end_date = date('d-m-Y H:i:s', $service->discount_end_date);
                                $discount_date = $start_date . ' to ' . $end_date;
                            } else {
                                $discount_date = '';
                            }
                        @endphp
                        <div class="form-group row">
                            <label class="col-sm-3 control-label"
                                for="start_date">{{ translate('Discount Date Range') }}</label>
                            <div class="col-sm-9">
                                <input class="form-control aiz-date-range" name="date_range" data-time-picker="true"
                                    data-format="DD-MM-Y HH:mm:ss" data-separator=" to " type="text"
                                    value="{{ $discount_date }}" placeholder="Select Date" autocomplete="off">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Discount') }} <span
                                    class="text-danger">*</span></label>
                            <div class="col-md-6">
                                <input class="form-control" name="discount" type="number"
                                    value="{{ $service->discount }}" lang="en" min="0" step="0.01"
                                    placeholder="{{ translate('Discount') }}" required>
                            </div>
                            <div class="col-md-3">
                                <select class="form-control aiz-selectpicker" name="discount_type"
                                    data-selected="{{ $service->discount_type }}">
                                    <option value="flat">{{ translate('Flat') }}</option>
                                    <option value="percent">{{ translate('Percent') }}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Shipping Information') }}</h5>
                    </div>
                    <div class="card-body">
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Shipping') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="shipping" type="text"
                                        value="{{ $service->shipping }}" placeholder="{{ translate('Shipping') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Standard delivery time') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="standard_delivery_time" type="number"
                                        value="{{ $service->standard_delivery_time }}" step="0.01" min="0"
                                        required>
                                    <div class="input-group-append"><span class="input-group-text">hr(s)</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Express delivery time') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="express_delivery_time" type="number"
                                        value="{{ $service->express_delivery_time }}" step="0.01" min="0"
                                        required>
                                    <div class="input-group-append"><span class="input-group-text">hr(s)</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Weight') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="weight" type="number"
                                        value="{{ $service->weight }}" step="0.01" min="0" required>
                                    <div class="input-group-append"><span
                                            class="input-group-text">{{ get_setting('weight_unit') }}</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Height') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="height" type="number"
                                        value="{{ $service->height }}" step="0.01" min="0" required>
                                    <div class="input-group-append"><span
                                            class="input-group-text">{{ get_setting('dimension_unit') }}</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Length') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="length" type="number"
                                        value="{{ $service->length }}" step="0.01" min="0" required>
                                    <div class="input-group-append"><span
                                            class="input-group-text">{{ get_setting('dimension_unit') }}</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Width') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="width" type="number"
                                        value="{{ $service->width }}" step="0.01" min="0" required>
                                    <div class="input-group-append"><span
                                            class="input-group-text">{{ get_setting('dimension_unit') }}</span></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Service Description') }}</h5>
                    </div>
                    <div class="card-body">
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Description') }} <i
                                    class="las la-language text-danger"
                                    title="{{ translate('Translatable') }}"></i></label>
                            <div class="col-md-8">
                                <textarea class="aiz-text-editor" name="description">{!! $service->description !!}</textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Intake') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="intake" type="text"
                                        value="{{ $service->intake }}" placeholder="{{ translate('Intake') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Material') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="material" type="text"
                                        value="{{ $service->material }}" placeholder="{{ translate('Material') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('SI1') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="unit_metering" type="text"
                                        value="{{ $service->unit_metering }}" placeholder="{{ translate('SI1') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Crimp size') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="engaste" type="text"
                                        value="{{ $service->engaste }}" placeholder="{{ translate('Crimp size') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('si2') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="si2" type="text"
                                        value="{{ $service->si2 }}" placeholder="{{ translate('si2') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Medidas embalaje') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="medidas_de_embalaje" type="text"
                                        value="{{ $service->medidas_de_embalaje }}"
                                        placeholder="{{ translate('Medidas embalaje') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('si3') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="si3" type="text"
                                        value="{{ $service->si3 }}" placeholder="{{ translate('si3') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Peso de servicio') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="peso_de_servicio" type="text"
                                        value="{{ $service->peso_de_servicio }}"
                                        placeholder="{{ translate('Peso de servicio') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('si4') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="si4" type="text"
                                        value="{{ $service->si4 }}" placeholder="{{ translate('si4') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Peso de envio') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="peso_de_envio" type="text"
                                        value="{{ $service->peso_de_envio }}"
                                        placeholder="{{ translate('Peso de envio') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Tipo de conexion') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="tipo_de_coneccion" type="text"
                                        value="{{ $service->tipo_de_coneccion }}"
                                        placeholder="{{ translate('Tipo de conexion') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Eficiencia') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="eficiencia" type="text"
                                        value="{{ $service->eficiencia }}"
                                        placeholder="{{ translate('Eficiencia') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Caracteristica 1') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="caracteristica1" type="text"
                                        value="{{ $service->caracteristica1 }}"
                                        placeholder="{{ translate('Caracteristica 1') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Caracteristica 2') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="caracteristica2" type="text"
                                        value="{{ $service->caracteristica2 }}"
                                        placeholder="{{ translate('Caracteristica 2') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Caracteristica 3') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="caracteristica3" type="text"
                                        value="{{ $service->caracteristica3 }}"
                                        placeholder="{{ translate('Caracteristica 3') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Caracteristica 4') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="caracteristica4" type="text"
                                        value="{{ $service->caracteristica4 }}"
                                        placeholder="{{ translate('Caracteristica 4') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Caracteristica 5') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="caracteristica5" type="text"
                                        value="{{ $service->caracteristica5 }}"
                                        placeholder="{{ translate('Caracteristica 5') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Caracteristica 6') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="caracteristica6" type="text"
                                        value="{{ $service->caracteristica6 }}"
                                        placeholder="{{ translate('Caracteristica 6') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Caracteristica 7') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="caracteristica7" type="text"
                                        value="{{ $service->caracteristica7 }}"
                                        placeholder="{{ translate('Caracteristica 7') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Caracteristica 8') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="caracteristica8" type="text"
                                        value="{{ $service->caracteristica8 }}"
                                        placeholder="{{ translate('Caracteristica 8') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Beneficio 1') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="beneficio1" type="text"
                                        value="{{ $service->beneficio1 }}"
                                        placeholder="{{ translate('Beneficio 1') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Beneficio 2') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="beneficio2" type="text"
                                        value="{{ $service->beneficio2 }}"
                                        placeholder="{{ translate('Beneficio 2') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Beneficio 3') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="beneficio3" type="text"
                                        value="{{ $service->beneficio3 }}"
                                        placeholder="{{ translate('Beneficio 3') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Beneficio 4') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="beneficio4" type="text"
                                        value="{{ $service->beneficio4 }}"
                                        placeholder="{{ translate('Beneficio 4') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Beneficio 5') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="beneficio5" type="text"
                                        value="{{ $service->beneficio5 }}"
                                        placeholder="{{ translate('Beneficio 5') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Postventa') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="postventa" type="text"
                                        value="{{ $service->postventa }}" placeholder="{{ translate('Postventa') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('Imagen 1') }}</label>
                            <div class="col-md-8">
                                <div class="input-group" data-toggle="aizuploader" data-type="image">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input class="selected-files" name="imagen1" type="hidden"
                                        value="{{ $service->imagen1 }}">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('Imagen 2') }}</label>
                            <div class="col-md-8">
                                <div class="input-group" data-toggle="aizuploader" data-type="image">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input class="selected-files" name="imagen2" type="hidden"
                                        value="{{ $service->imagen2 }}">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('Imagen 3') }}</label>
                            <div class="col-md-8">
                                <div class="input-group" data-toggle="aizuploader" data-type="image">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input class="selected-files" name="imagen3" type="hidden"
                                        value="{{ $service->imagen3 }}">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('Imagen 4') }}</label>
                            <div class="col-md-8">
                                <div class="input-group" data-toggle="aizuploader" data-type="image">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input class="selected-files" name="imagen4" type="hidden"
                                        value="{{ $service->imagen4 }}">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('Video') }}</label>
                            <div class="col-md-8">
                                <div class="input-group" data-toggle="aizuploader" data-type="video">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input class="selected-files" name="video" type="hidden"
                                        value="{{ $service->video }}">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('Video 2') }}</label>
                            <div class="col-md-8">
                                <div class="input-group" data-toggle="aizuploader" data-type="video">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input class="selected-files" name="video2" type="hidden"
                                        value="{{ $service->video2 }}">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('Video 3') }}</label>
                            <div class="col-md-8">
                                <div class="input-group" data-toggle="aizuploader" data-type="video">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input class="selected-files" name="video3" type="hidden"
                                        value="{{ $service->video3 }}">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('Video 4') }}</label>
                            <div class="col-md-8">
                                <div class="input-group" data-toggle="aizuploader" data-type="video">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input class="selected-files" name="video4" type="hidden"
                                        value="{{ $service->video4 }}">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('Ficha tecnica imagen 1') }}</label>
                            <div class="col-md-8">
                                <div class="input-group" data-toggle="aizuploader" data-type="image">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input class="selected-files" name="ficha_tecnica_imagen1" type="hidden"
                                        value="{{ $service->ficha_tecnica_imagen1 }}">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('Ficha tecnica imagen 2') }}</label>
                            <div class="col-md-8">
                                <div class="input-group" data-toggle="aizuploader" data-type="image">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input class="selected-files" name="ficha_tecnica_imagen2" type="hidden"
                                        value="{{ $service->ficha_tecnica_imagen2 }}">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('Ficha tecnica imagen 3') }}</label>
                            <div class="col-md-8">
                                <div class="input-group" data-toggle="aizuploader" data-type="image">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input class="selected-files" name="ficha_tecnica_imagen3" type="hidden"
                                        value="{{ $service->ficha_tecnica_imagen3 }}">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('Ficha tecnica imagen 4') }}</label>
                            <div class="col-md-8">
                                <div class="input-group" data-toggle="aizuploader" data-type="image">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input class="selected-files" name="ficha_tecnica_imagen4" type="hidden"
                                        value="{{ $service->ficha_tecnica_imagen4 }}">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('manual_de_servicio') }}</label>
                            <div class="col-md-8">
                                <div class="input-group" data-toggle="aizuploader" data-type="image">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input class="selected-files" name="manual_de_servicio" type="hidden"
                                        value="{{ $service->manual_de_servicio }}">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('ficha_tecnica_del_servicio') }}</label>
                            <div class="col-md-8">
                                <div class="input-group" data-toggle="aizuploader" data-type="image">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input class="selected-files" name="ficha_tecnica_del_servicio" type="hidden"
                                        value="{{ $service->ficha_tecnica_del_servicio }}">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('manual_de_instalacion') }}</label>
                            <div class="col-md-8">
                                <div class="input-group" data-toggle="aizuploader" data-type="image">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input class="selected-files" name="manual_de_instalacion" type="hidden"
                                        value="{{ $service->manual_de_instalacion }}">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('vida_util') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="vida_util" type="text"
                                        value="{{ $service->vida_util }}" placeholder="{{ translate('vida_util') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('plastico') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="plastico" type="text"
                                        value="{{ $service->plastico }}" placeholder="{{ translate('plastico') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('carton') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="carton" type="text"
                                        value="{{ $service->carton }}" placeholder="{{ translate('carton') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('peso_carton') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="peso_carton" type="text"
                                        value="{{ $service->peso_carton }}"
                                        placeholder="{{ translate('peso_carton') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('papel') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="papel" type="text"
                                        value="{{ $service->papel }}" placeholder="{{ translate('papel') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('peso_papel') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="peso_papel" type="text"
                                        value="{{ $service->peso_papel }}"
                                        placeholder="{{ translate('peso_papel') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('metal') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="metal" type="text"
                                        value="{{ $service->metal }}" placeholder="{{ translate('metal') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('peso_metal') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="peso_metal" type="text"
                                        value="{{ $service->peso_metal }}"
                                        placeholder="{{ translate('peso_metal') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('vidrio') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="vidrio" type="text"
                                        value="{{ $service->vidrio }}" placeholder="{{ translate('vidrio') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('peso_vidrio') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="peso_vidrio" type="text"
                                        value="{{ $service->peso_vidrio }}"
                                        placeholder="{{ translate('peso_vidrio') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('madera') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="madera" type="text"
                                        value="{{ $service->madera }}" placeholder="{{ translate('madera') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('peso_madera') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="peso_madera" type="text"
                                        value="{{ $service->peso_madera }}"
                                        placeholder="{{ translate('peso_madera') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('textil') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="textil" type="text"
                                        value="{{ $service->textil }}" placeholder="{{ translate('textil') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('peso_textil') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="peso_textil" type="text"
                                        value="{{ $service->peso_textil }}"
                                        placeholder="{{ translate('peso_textil') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('bateria_electrico') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="bateria_electrico" type="text"
                                        value="{{ $service->bateria_electrico }}"
                                        placeholder="{{ translate('bateria_electrico') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('peso_bateria_electrico') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="peso_bateria_electrico" type="text"
                                        value="{{ $service->peso_bateria_electrico }}"
                                        placeholder="{{ translate('peso_bateria_electrico') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('impacto_ambiental') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="impacto_ambiental" type="text"
                                        value="{{ $service->impacto_ambiental }}"
                                        placeholder="{{ translate('impacto_ambiental') }}">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Service attributes') }}</h5>
                        <button class="btn btn-soft-dark" type="button"
                            onclick="add_new_attribute()">{{ translate('Add new attribute') }}</button>
                    </div>
                    <div class="card-body">
                        <div class="alert alert-info">
                            {{ translate('These attributes will be used only for filtering.') }}</div>
                        <div class="all-attributes">
                            @foreach ($service->attributes as $service_attribute)
                                <div class="form-group row gutters-10">
                                    <div class="col-xxl-3 col-xl-4 col-md-5 attr-names">
                                        <select class="form-control aiz-selectpicker" name="service_attributes[]"
                                            data-selected="{{ $service_attribute->attribute_id }}"
                                            data-live-search="true" onchange="get_attributes_values(this)" readonly>
                                            <option value="">{{ translate('Select an attribute') }}</option>
                                            @foreach ($all_attributes as $key => $attribute)
                                                <option value="{{ $attribute->id }}">
                                                    {{ $attribute->getTranslation('name') }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="col attr-values">
                                        @php
                                            $attribute_values = \App\Models\AttributeValue::where('attribute_id', $service_attribute->attribute_id)->get();
                                        @endphp
                                        <select class="form-control aiz-selectpicker"
                                            name="attribute_{{ $service_attribute->attribute_id }}_values[]"
                                            data-selected="{{ $service->attribute_values->where('attribute_id', $service_attribute->attribute_id)->pluck('attribute_value_id') }}"
                                            data-live-search="true" multiple>
                                            @foreach ($attribute_values as $key => $attribute_value)
                                                <option value="{{ $attribute_value->id }}">
                                                    {{ $attribute_value->getTranslation('name') }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="col-auto">
                                        <button class="btn btn-icon p-0" data-toggle="remove-parent" data-parent=".row"
                                            type="button">
                                            <i class="la-2x la-trash las opacity-70"></i>
                                        </button>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('SEO Meta Tags') }}</h5>
                    </div>
                    <div class="card-body">
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Meta Title') }}</label>
                            <div class="col-md-8">
                                <input class="form-control" name="meta_title" type="text"
                                    value="{{ $service->meta_title }}" placeholder="{{ translate('Meta Title') }}">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Description') }}</label>
                            <div class="col-md-8">
                                <textarea class="form-control" name="meta_description" rows="8">{{ $service->meta_description }}</textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label"
                                for="signinSrEmail">{{ translate('Meta Image') }}</label>
                            <div class="col-md-8">
                                <div class="input-group" data-toggle="aizuploader" data-type="image">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input class="selected-files" name="meta_image" type="hidden"
                                        value="{{ $service->meta_image }}">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('Slug') }}</label>
                            <div class="col-md-8">
                                <input class="form-control" id="slug" name="slug" type="text"
                                    value="{{ $service->slug }}" placeholder="{{ translate('Slug') }}">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-lg-auto w-lg-300px w-xxl-400px">
                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Service Status') }}</h5>
                    </div>
                    <div class="card-body">
                        <select class="form-control aiz-selectpicker" name="status"
                            data-selected="{{ $service->published }}">
                            <option value="0">{{ translate('Draft') }}</option>
                            <option value="1" selected>{{ translate('Published') }}</option>
                        </select>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Service Brand') }}</h5>
                    </div>
                    <div class="card-body">
                        <select class="form-control aiz-selectpicker" name="brand_id"
                            data-selected="{{ $service->brand_id }}" data-live-search="true"
                            title="{{ translate('Select Brand') }}">
                            @foreach (\App\Models\Brand::all() as $brand)
                                <option value="{{ $brand->id }}">{{ $brand->name }}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Service Category') }}</h5>
                    </div>
                    <div class="card-body ">
                        <div class="h-300px overflow-auto c-scrollbar-light">
                            <ul class="list-unstyled">
                                @php
                                    $old_categories = $service->service_categories->pluck('category_id')->toArray();
                                @endphp
                                @foreach ($categories as $category)
                                    <li>
                                        <label class="aiz-checkbox">
                                            <input name="category_ids[]" type="checkbox" value="{{ $category->id }}"
                                                @if (in_array($category->id, $old_categories)) checked @endif>
                                            <span class="aiz-square-check"></span>
                                            <span>{{ $category->getTranslation('name') }}</span>
                                        </label>
                                        @if (count($category->childrenCategories) > 0)
                                            <ul class="list-unstyled ml-3">
                                                @foreach ($category->childrenCategories as $childCategory)
                                                    <li>
                                                        <label class="aiz-checkbox">
                                                            <input name="category_ids[]" type="checkbox"
                                                                value="{{ $childCategory->id }}"
                                                                @if (in_array($childCategory->id, $old_categories)) checked @endif>
                                                            <span class="aiz-square-check"></span>
                                                            <span>{{ $childCategory->getTranslation('name') }}</span>
                                                        </label>
                                                        @if (count($childCategory->childrenCategories) > 0)
                                                            <ul class="list-unstyled ml-3">
                                                                @foreach ($childCategory->childrenCategories as $grandChildCategory)
                                                                    <li>
                                                                        <label class="aiz-checkbox">
                                                                            <input name="category_ids[]" type="checkbox"
                                                                                value="{{ $grandChildCategory->id }}"
                                                                                @if (in_array($grandChildCategory->id, $old_categories)) checked @endif>
                                                                            <span class="aiz-square-check"></span>
                                                                            <span>{{ $grandChildCategory->getTranslation('name') }}</span>
                                                                        </label>
                                                                    </li>
                                                                @endforeach
                                                            </ul>
                                                        @endif
                                                    </li>
                                                @endforeach
                                            </ul>
                                        @endif
                                    </li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Service Tags') }}</h5>
                    </div>
                    <div class="card-body">
                        <input class="form-control aiz-tag-input" name="tags" type="text"
                            value="{{ $service->tags }}"
                            placeholder="{{ translate('Type and hit enter to add a tag') }}">
                        <small class="text-muted">{{ translate('These will be used for service search.') }}</small>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('VAT & Tax') }}</h5>
                    </div>
                    <div class="card-body">
                        @foreach (\App\Models\Tax::all() as $tax)
                            <label for="name">
                                {{ $tax->name }}
                                <input name="tax_ids[]" type="hidden" value="{{ $tax->id }}">
                            </label>

                            @php
                                $tax_amount = 0;
                                $tax_type = 'flat';
                                foreach ($service->taxes as $row) {
                                    if ($row->tax_id == $tax->id) {
                                        $tax_amount = $row->tax;
                                        $tax_type = $row->tax_type;
                                    }
                                }
                            @endphp

                            <div class="form-row">
                                <div class="form-group col-6">
                                    <input class="form-control" name="taxes[]" type="number"
                                        value="{{ $tax_amount }}" lang="en" min="0" step="0.01"
                                        placeholder="{{ translate('Tax') }}" required>
                                </div>
                                <div class="form-group col-6">
                                    <select class="form-control aiz-selectpicker" name="tax_types[]"
                                        data-selected="{{ $tax_type }}" required>
                                        <option value="flat">{{ translate('Flat') }}</option>
                                        <option value="percent">{{ translate('Percent') }}</option>
                                    </select>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Warranty') }}</h5>
                    </div>
                    <div class="card-body">
                        <div class="mb-2">{{ translate('Warranty available for this service?') }}</div>
                        <label class="aiz-switch aiz-switch-success mb-0">
                            <input name="has_warranty" type="checkbox"
                                @if ($service->has_warranty) checked @endif>
                            <span></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="mar-all text-right mb-3">
            <button class="btn btn-primary" id="upload-service"
                type="submit">{{ translate('Update Service') }}</button>
        </div>
    </form>

@endsection

@section('script')
    <script type="text/javascript">
        $(document).ready(function() {
            // $('body').addClass('side-menu-closed');
            $('.all-attributes').find('.attr-names').find('.aiz-selectpicker').siblings('.dropdown-toggle')
                .addClass("disabled");
            if ($('.customer_choice_options').find('.attr-names').find('.aiz-selectpicker').val() !== '') {
                $('.customer_choice_options').find('.attr-names').find('.aiz-selectpicker').siblings(
                    '.dropdown-toggle').addClass("disabled");
            }
        });
        $('#service_form').bind('submit', function(e) {
            // Disable the submit button while evaluating if the form should be submitted
            $("#upload-service").prop('disabled', true);

            var valid = true;

            if (!valid) {
                e.preventDefault();

                // Reactivate the button if the form was not submitted
                $("#upload-service").button.prop('disabled', false);
            }
        });

        function is_variant_service(el) {
            $(".has_service_variant").hide();
            $(".no_service_variant").hide();
            if ($(el).is(':checked')) {
                $(".has_service_variant").show();
            } else {
                $(".no_service_variant").show();
            }
        }

        function add_new_attribute() {
            $.ajax({
                type: "POST",
                data: $('#service_form').serialize(),
                url: '{{ route('service.new_attribute') }}',
                success: function(data) {
                    if (data.count == -1) {
                        AIZ.plugins.notify('warning', '{{ translate('Please select an attribute.') }}');
                    } else if (data.count > 0) {
                        $('.all-attributes').find('.attr-names').find('.aiz-selectpicker').siblings(
                            '.dropdown-toggle').addClass("disabled");
                        $('.all-attributes').append(data.view);
                        AIZ.plugins.bootstrapSelect();
                    } else {
                        AIZ.plugins.notify('info', '{{ translate('No more arrtribute found.') }}');
                    }
                }
            });
        }

        function get_attributes_values(e) {
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': AIZ.data.csrf
                },
                type: "POST",
                data: {
                    attribute_id: $(e).val()
                },
                url: '{{ route('service.get_attribute_values') }}',
                success: function(data) {
                    $(e).closest('.row').find('.attr-values').html(data);
                    AIZ.plugins.bootstrapSelect();
                }
            });
        }

        function add_new_option() {
            $.ajax({
                type: "POST",
                data: $('#service_form').serialize(),
                url: '{{ route('service.new_option') }}',
                success: function(data) {
                    if (data.count == -2) {
                        AIZ.plugins.notify('warning', '{{ translate('Maximum option limit reached.') }}');
                    } else if (data.count == -1) {
                        AIZ.plugins.notify('warning', '{{ translate('Please select an option.') }}');
                    } else if (data.count > 0) {
                        $('.customer_choice_options').find('.attr-names').find('.aiz-selectpicker').siblings(
                            '.dropdown-toggle').addClass("disabled");
                        $('.customer_choice_options').append(data.view);
                        AIZ.plugins.bootstrapSelect();
                    } else {
                        AIZ.plugins.notify('info', '{{ translate('No more option found.') }}');
                    }
                }
            });
        }

        function get_option_choices(e) {
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': AIZ.data.csrf
                },
                type: "POST",
                data: {
                    attribute_id: $(e).val()
                },
                url: '{{ route('service.get_option_choices') }}',
                success: function(data) {
                    $(e).closest('.row').find('.attr-values').html(data);
                    AIZ.plugins.bootstrapSelect();
                }
            });
        }

        function update_sku() {
            $.ajax({
                type: "POST",
                url: '{{ route('service.sku_combination') }}',
                data: $('#service_form').serialize(),
                success: function(data) {
                    $('#sku_combination').html(data);
                    setTimeout(() => {
                        AIZ.uploader.previewGenerate();
                        AIZ.plugins.bootstrapSelect('refresh');
                    }, 500);
                }
            });
        }
    </script>
@endsection
