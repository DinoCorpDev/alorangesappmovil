@extends('backend.layouts.app')

@section('content')
    <div class="aiz-titlebar text-left mt-2 mb-3">
        <h5 class="mb-0 h6">{{ translate('Add New Service') }}</h5>
    </div>
    <form class="form form-horizontal mar-top" id="service_form" action="{{ route('service.store') }}" method="POST"
        enctype="multipart/form-data">
        @csrf
        <div class="row gutters-5">
            <div class="col-lg">

                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Service Information') }}</h5>
                    </div>
                    <div class="card-body">
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">
                                {{ translate('Service Name') }} <span class="text-danger">*</span>
                            </label>
                            <div class="col-md-8">
                                <input class="form-control" name="name" type="text"
                                    placeholder="{{ translate('Service Name') }}" required>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Unit') }}</label>
                            <div class="col-md-8">
                                <input class="form-control" name="unit" type="text"
                                    placeholder="{{ translate('Unit (e.g. 500 Gram, 2 Litre, 5 Pc etc)') }}">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">
                                {{ translate('Minimum Purchase Qty') }} <span class="text-danger">*</span>
                            </label>
                            <div class="col-md-8">
                                <input class="form-control" name="min_qty" type="number" value="1" min="1"
                                    required>
                                <small class="text-muted">
                                    {{ translate('Customer need to purchase this minimum quantity for this service. Minimum should be 1.') }}
                                </small>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Maximum Purchase Qty') }}</label>
                            <div class="col-md-8">
                                <input class="form-control" name="max_qty" type="number" value="0" min="0">
                                <small class="text-muted">
                                    {{ translate('Customer will be able to purchase this maximum quantity for this service. Default 0 for unlimited.') }}
                                </small>
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
                            <label class="col-md-3 col-form-label" for="signinSrEmail">
                                {{ translate('Thumbnail Image') }} <small>(300x300)</small>
                            </label>
                            <div class="col-md-8">
                                <div class="input-group" data-toggle="aizuploader" data-type="image" data-mu>
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}
                                        </div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input class="selected-files" name="thumbnail_img" type="hidden">
                                </div>
                                <div class="file-preview box sm"></div>
                                <small class="text-muted">
                                    {{ translate('This image is visible in all service box. Use 300x300 sizes image. Keep some blank space around the main object of your image as we had to crop some edge in different devices to make it responsive.') }}
                                </small>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label"
                                for="signinSrEmail">{{ translate('Gallery Images') }}<small>(600x600)</small></label>
                            <div class="col-md-8">
                                <div class="input-group" data-toggle="aizuploader" data-type="image" data-multiple="true">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input class="selected-files" name="photos" type="hidden">
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
                                <input name="is_variant" type="checkbox" onchange="is_variant_service(this)">
                                <span></span>
                            </label>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="no_service_variant">
                            <div class="form-group row">
                                <label class="col-md-3 col-from-label">{{ translate('Regular price') }} <span
                                        class="text-danger">*</span></label>
                                <div class="col-md-8">
                                    <input class="form-control" name="price" type="number" value="1"
                                        step="0.01" min="0" placeholder="{{ translate('Price') }}" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 col-from-label">{{ translate('SKU') }}</label>
                                <div class="col-md-8">
                                    <input class="form-control" name="sku" type="test"
                                        placeholder="{{ translate('SKU') }}">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 col-from-label">{{ translate('Stock') }} <span
                                        class="text-danger">*</span></label>
                                <div class="col-md-8">
                                    <select class="form-control aiz-selectpicker" name="stock">
                                        <option value="1">{{ translate('In stock') }}</option>
                                        <option value="0">{{ translate('Out of stock') }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="has_service_variant" style="display: none">
                            <div class="alert alert-info">
                                {{ translate('Select an option for this service and then select choices of each option. Max 3 options') }}
                            </div>

                            <div class="customer_choice_options">
                                <div class="form-group row gutters-10 ">
                                    <div class="col-xxl-3 col-xl-4 col-md-5 attr-names">
                                        <select class="form-control aiz-selectpicker" name="service_options[]"
                                            data-live-search="true" title="{{ translate('Select an option') }}"
                                            onchange="get_option_choices(this)">
                                            @foreach ($attributes as $key => $attribute)
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
                            </div>
                            <div class="sku_combination" id="sku_combination">

                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Service Discount') }}</h5>
                    </div>
                    <div class="card-body">
                        <div class="form-group row">
                            <label class="col-sm-3 control-label"
                                for="start_date">{{ translate('Discount Date Range') }}</label>
                            <div class="col-sm-9">
                                <input class="form-control aiz-date-range" name="date_range" data-time-picker="true"
                                    data-format="DD-MM-Y HH:mm:ss" data-separator=" to " type="text"
                                    placeholder="Select Date" autocomplete="off">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Discount') }} <span
                                    class="text-danger">*</span></label>
                            <div class="col-md-6">
                                <input class="form-control" name="discount" type="number" value="0"
                                    lang="en" min="0" step="0.01"
                                    placeholder="{{ translate('Discount') }}" required>
                            </div>
                            <div class="col-md-3">
                                <select class="form-control aiz-selectpicker" name="discount_type">
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
                            <label class="col-md-3 col-from-label">{{ translate('Standard delivery time') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="standard_delivery_time" type="number"
                                        value="24" step="0.01" min="0" required>
                                    <div class="input-group-append"><span class="input-group-text">hr(s)</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Express delivery time') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="express_delivery_time" type="number"
                                        value="24" step="0.01" min="0" required>
                                    <div class="input-group-append"><span class="input-group-text">hr(s)</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Weight') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="weight" type="number" value="0"
                                        step="0.01" min="0" required>
                                    <div class="input-group-append"><span
                                            class="input-group-text">{{ get_setting('weight_unit') }}</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Height') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="height" type="number" value="0"
                                        step="0.01" min="0" required>
                                    <div class="input-group-append"><span
                                            class="input-group-text">{{ get_setting('dimension_unit') }}</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Length') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="length" type="number" value="0"
                                        step="0.01" min="0" required>
                                    <div class="input-group-append"><span
                                            class="input-group-text">{{ get_setting('dimension_unit') }}</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Width') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="width" type="number" value="0"
                                        step="0.01" min="0" required>
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
                            <label class="col-md-3 col-from-label">{{ translate('Description') }}</label>
                            <div class="col-md-8">
                                <textarea class="aiz-text-editor" name="description"></textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Intake') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="intake" type="text"
                                        placeholder="{{ translate('Intake') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Material') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="material" type="text"
                                        placeholder="{{ translate('Material') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('SI1') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="unit_metering" type="text"
                                        placeholder="{{ translate('SI1') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Crimp size') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="engaste" type="text"
                                        placeholder="{{ translate('Crimp size') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('si2') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="si2" type="text"
                                        placeholder="{{ translate('si2') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Medidas embalaje') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="medidas_de_embalaje" type="text"
                                        placeholder="{{ translate('Medidas embalaje') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('si3') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="si3" type="text"
                                        placeholder="{{ translate('si3') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Peso de servicio') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="peso_de_servicio" type="text"
                                        placeholder="{{ translate('Peso de servicio') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('si4') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="si4" type="text"
                                        placeholder="{{ translate('si4') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Peso de envio') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="peso_de_envio" type="text"
                                        placeholder="{{ translate('Peso de envio') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Tipo de conexion') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="tipo_de_coneccion" type="text"
                                        placeholder="{{ translate('Tipo de conexion') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Eficiencia') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="eficiencia" type="text"
                                        placeholder="{{ translate('Eficiencia') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Caracteristica 1') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="caracteristica1" type="text"
                                        placeholder="{{ translate('Caracteristica 1') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Caracteristica 2') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="caracteristica2" type="text"
                                        placeholder="{{ translate('Caracteristica 2') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Caracteristica 3') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="caracteristica3" type="text"
                                        placeholder="{{ translate('Caracteristica 3') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Caracteristica 4') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="caracteristica4" type="text"
                                        placeholder="{{ translate('Caracteristica 4') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Caracteristica 5') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="caracteristica5" type="text"
                                        placeholder="{{ translate('Caracteristica 5') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Caracteristica 6') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="caracteristica6" type="text"
                                        placeholder="{{ translate('Caracteristica 6') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Caracteristica 7') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="caracteristica7" type="text"
                                        placeholder="{{ translate('Caracteristica 7') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Caracteristica 8') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="caracteristica8" type="text"
                                        placeholder="{{ translate('Caracteristica 8') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Beneficio 1') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="beneficio1" type="text"
                                        placeholder="{{ translate('Beneficio 1') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Beneficio 2') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="beneficio2" type="text"
                                        placeholder="{{ translate('Beneficio 2') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Beneficio 3') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="beneficio3" type="text"
                                        placeholder="{{ translate('Beneficio 3') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Beneficio 4') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="beneficio4" type="text"
                                        placeholder="{{ translate('Beneficio 4') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Beneficio 5') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="beneficio5" type="text"
                                        placeholder="{{ translate('Beneficio 5') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Postventa') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="postventa" type="text"
                                        placeholder="{{ translate('Postventa') }}">
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
                                    <input class="selected-files" name="imagen1" type="hidden">
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
                                    <input class="selected-files" name="imagen2" type="hidden">
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
                                    <input class="selected-files" name="imagen3" type="hidden">
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
                                    <input class="selected-files" name="imagen4" type="hidden">
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
                                    <input class="selected-files" name="video" type="hidden">
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
                                    <input class="selected-files" name="video2" type="hidden">
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
                                    <input class="selected-files" name="video3" type="hidden">
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
                                    <input class="selected-files" name="video4" type="hidden">
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
                                    <input class="selected-files" name="ficha_tecnica_imagen1" type="hidden">
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
                                    <input class="selected-files" name="ficha_tecnica_imagen2" type="hidden">
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
                                    <input class="selected-files" name="ficha_tecnica_imagen3" type="hidden">
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
                                    <input class="selected-files" name="ficha_tecnica_imagen4" type="hidden">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('manual de servicio') }}</label>
                            <div class="col-md-8">
                                <div class="input-group" data-toggle="aizuploader" data-type="image">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input class="selected-files" name="manual_de_servicio" type="hidden">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('ficha tecnica del servicio') }}</label>
                            <div class="col-md-8">
                                <div class="input-group" data-toggle="aizuploader" data-type="image">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input class="selected-files" name="ficha_tecnica_del_servicio" type="hidden">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('manual de instalacion') }}</label>
                            <div class="col-md-8">
                                <div class="input-group" data-toggle="aizuploader" data-type="image">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input class="selected-files" name="manual_de_instalacion" type="hidden">
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
                                        placeholder="{{ translate('vida_util') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('plastico') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="plastico" type="text"
                                        placeholder="{{ translate('plastico') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('carton') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="carton" type="text"
                                        placeholder="{{ translate('carton') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('peso_carton') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="peso_carton" type="text"
                                        placeholder="{{ translate('peso carton') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('papel') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="papel" type="text"
                                        placeholder="{{ translate('papel') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('peso papel') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="peso_papel" type="text"
                                        placeholder="{{ translate('peso_papel') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('metal') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="metal" type="text"
                                        placeholder="{{ translate('metal') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('peso metal') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="peso_metal" type="text"
                                        placeholder="{{ translate('peso_metal') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('vidrio') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="vidrio" type="text"
                                        placeholder="{{ translate('vidrio') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('peso_vidrio') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="peso_vidrio" type="text"
                                        placeholder="{{ translate('peso_vidrio') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('madera') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="madera" type="text"
                                        placeholder="{{ translate('madera') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('peso madera') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="peso_madera" type="text"
                                        placeholder="{{ translate('peso_madera') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('textil') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="textil" type="text"
                                        placeholder="{{ translate('textil') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('peso textil') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="peso_textil" type="text"
                                        placeholder="{{ translate('peso_textil') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('bateria electrico') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="bateria_electrico" type="text"
                                        placeholder="{{ translate('bateria_electrico') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('peso bateria electrico') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="peso_bateria_electrico" type="text"
                                        placeholder="{{ translate('peso_bateria_electrico') }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('impacto ambiental') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input class="form-control" name="impacto_ambiental" type="text"
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
                                    placeholder="{{ translate('Meta Title') }}">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Description') }}</label>
                            <div class="col-md-8">
                                <textarea class="form-control" name="meta_description" rows="8"></textarea>
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
                                    <input class="selected-files" name="meta_image" type="hidden">
                                </div>
                                <div class="file-preview box sm">
                                </div>
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
                        <select class="form-control aiz-selectpicker" name="status">
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
                        <select class="form-control aiz-selectpicker" name="brand_id" data-live-search="true"
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
                                @foreach ($categories as $category)
                                    <li>
                                        <label class="aiz-checkbox">
                                            <input name="category_ids[]" type="checkbox" value="{{ $category->id }}">
                                            <span class="aiz-square-check"></span>
                                            <span>{{ $category->getTranslation('name') }}</span>
                                        </label>
                                        @if (count($category->childrenCategories) > 0)
                                            <ul class="list-unstyled ml-3">
                                                @foreach ($category->childrenCategories as $childCategory)
                                                    <li>
                                                        <label class="aiz-checkbox">
                                                            <input name="category_ids[]" type="checkbox"
                                                                value="{{ $childCategory->id }}">
                                                            <span class="aiz-square-check"></span>
                                                            <span>{{ $childCategory->getTranslation('name') }}</span>
                                                        </label>
                                                        @if (count($childCategory->childrenCategories) > 0)
                                                            <ul class="list-unstyled ml-3">
                                                                @foreach ($childCategory->childrenCategories as $grandChildCategory)
                                                                    <li>
                                                                        <label class="aiz-checkbox">
                                                                            <input name="category_ids[]" type="checkbox"
                                                                                value="{{ $grandChildCategory->id }}">
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

                            <div class="form-row">
                                <div class="form-group col-6">
                                    <input class="form-control" name="taxes[]" type="number" value="0"
                                        lang="en" min="0" step="0.01"
                                        placeholder="{{ translate('Tax') }}" required>
                                </div>
                                <div class="form-group col-6">
                                    <select class="form-control aiz-selectpicker" name="tax_types[]" required>
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
                            <input name="has_warranty" type="checkbox">
                            <span></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="mar-all text-right mb-3">
            <button class="btn btn-primary" id="upload-service"
                type="submit">{{ translate('Upload Service') }}</button>
        </div>
    </form>
@endsection

@section('script')
    <script type="text/javascript">
        // $(document).ready(function(){
        //     $('body').addClass('side-menu-closed');
        // });
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
