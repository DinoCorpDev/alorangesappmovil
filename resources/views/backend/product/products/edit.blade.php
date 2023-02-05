@extends('backend.layouts.app')

@section('content')
    <div class="aiz-titlebar text-left mt-2 mb-3">
        <h1 class="mb-0 h6">{{ translate('Edit Product') }}</h5>
    </div>
    <form class="form form-horizontal mar-top" action="{{ route('product.update', $product->id) }}" method="POST"
        enctype="multipart/form-data" id="product_form">
        @csrf
        <input type="hidden" name="id" value="{{ $product->id }}">
        <input type="hidden" name="lang" value="{{ $lang }}">
        <ul class="nav nav-tabs nav-fill border-light">
            @foreach (\App\Models\Language::where('status',1)->get() as $key => $language)
                <li class="nav-item">
                    <a class="nav-link text-reset @if ($language->code == $lang) active @else bg-soft-dark border-light border-left-0 @endif py-3"
                        href="{{ route('product.edit', ['id' => $product->id, 'lang' => $language->code]) }}">
                        <img src="{{ static_asset('assets/img/flags/' . $language->flag . '.png') }}" height="11"
                            class="mr-1">
                        <span>{{ $language->name }}</span>
                    </a>
                </li>
            @endforeach
        </ul>
        <div class="row gutters-5">
            <div class="col-lg">
                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Product Information') }}</h5>
                    </div>
                    <div class="card-body">
                    <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Reference') }} <span
                                    class="text-danger">*</span></label>
                            <div class="col-md-8">
                                <input type="text" class="form-control" name="reference"
                                    placeholder="{{ translate('Reference') }}"
                                    value="{{ $product->reference }}" required>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Product Name') }} <span
                                    class="text-danger">*</span> <i class="las la-language text-danger"
                                    title="{{ translate('Translatable') }}"></i></label>
                            <div class="col-md-8">
                                <input type="text" class="form-control" name="name"
                                    placeholder="{{ translate('Product Name') }}"
                                    value="{{ $product->name }}" required>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Unit') }} <i
                                    class="las la-language text-danger"
                                    title="{{ translate('Translatable') }}"></i></label>
                            <div class="col-md-8">
                                <input type="text" class="form-control" name="unit"
                                    placeholder="{{ translate('Unit (e.g. 500 Gram, 2 Litre, 5 Pc etc)') }}"
                                    value="{{ $product->getTranslation('unit', $lang) }}">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Minimum Purchase Qty') }} <span
                                    class="text-danger">*</span></label>
                            <div class="col-md-8">
                                <input type="number" class="form-control" name="min_qty" min="1"
                                    value="{{ $product->min_qty }}" required>
                                <small
                                    class="text-muted">{{ translate('Customer need to purchase this minimum quantity for this product. Minimum should be 1.') }}</small>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Maximum Purchase Qty') }}</label>
                            <div class="col-md-8">
                                <input type="number" class="form-control" name="max_qty"
                                    value="{{ $product->max_qty }}" min="0">
                                <small
                                    class="text-muted">{{ translate('Customer will be able to purchase this maximum quantity for this product. Default 0 for unlimited.') }}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Product Images') }}</h5>
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
                                    <input type="hidden" name="thumbnail_img" class="selected-files"
                                        value="{{ $product->thumbnail_img }}">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                                <small
                                    class="text-muted">{{ translate('This image is visible in all product box. Use 300x300 sizes image. Keep some blank space around the main object of your image as we had to crop some edge in different devices to make it responsive.') }}</small>
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
                                    <input type="hidden" name="photos" class="selected-files"
                                        value="{{ $product->photos }}">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                                <small
                                    class="text-muted">{{ translate("These images are visible in the product details page gallery. Use 600x600 or higher sizes images for better quality. But try to keep file size low as it'll increase page load time.") }}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- price and stock -->
                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Product price, stock') }}</h5>
                        <div class="d-flex mt-2">
                            <label class="mb-0 mr-3 ml-0">{{ translate('Variant Product') }}</label>
                            <label class="aiz-switch aiz-switch-success mb-0">
                                <input type="checkbox" name="is_variant" onchange="is_variant_product(this)"
                                    @if ($product->is_variant) checked @endif>
                                <span></span>
                            </label>
                        </div>
                    </div>
                    <div class="card-body">
                        @php
                            $first_variation = $product->variations->first();
                            $price = 0;
                            $sku = null;
                            $stock = 1;
                            if($product->is_variant){
                                $price = $first_variation->price;
                                $sku = $first_variation->sku;
                                $stock = $first_variation->stock;
                            }
                        @endphp
                        <div>
                            <div class="form-group row">
                                <label class="col-md-3 col-from-label">{{ translate('Currency') }}</label>
                                <div class="col-md-8">
                                    <input type="text" value="{{ $product->currency }}"
                                        placeholder="{{ translate('Currency') }}" name="currency" class="form-control"
                                        >
                                </div>
                            </div>
                        </div>
                        <div class="no_product_variant" @if ($product->is_variant) style="display:none;" @endif>
                            <div class="form-group row">
                                <label class="col-md-3 col-from-label">{{ translate('Regular price') }} <span
                                        class="text-danger">*</span></label>
                                <div class="col-md-8">
                                    <input type="number" step="0.01" min="0" value="{{ $price }}"
                                        placeholder="{{ translate('Price') }}" name="price" class="form-control"
                                        required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 col-from-label">{{ translate('SKU') }}</label>
                                <div class="col-md-8">
                                    <input type="test" placeholder="{{ translate('SKU') }}" value="{{ $sku }}"
                                        name="sku" class="form-control">
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
                        <div class="has_product_variant" @if (!$product->is_variant) style="display:none;" @endif>
                            <div class="alert alert-info">
                                {{ translate('Select an option for this product and then select choices of each option. Max 3 options') }}
                            </div>

                            <div class="customer_choice_options">

                                @forelse (generate_variation_options($product->variation_combinations) as $key => $combination)
                                    <div class="form-group row gutters-10 ">
                                        <div class="col-xxl-3 col-xl-4 col-md-5 attr-names">
                                            <select class="form-control aiz-selectpicker" name="product_options[]"
                                                onchange="get_option_choices(this)" data-live-search="true"
                                                title="{{ translate('Select an option') }}"
                                                data-selected="{{ $combination['id'] }}">
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
                                                name="option_{{ $combination['id'] }}_choices[]" multiple
                                                data-live-search="true" onchange="update_sku()"
                                                data-selected="{{ json_encode($old_val) }}">
                                                @foreach ($attribute_values as $attribute_value)
                                                    <option value="{{ $attribute_value->id }}">
                                                        {{ $attribute_value->getTranslation('name') }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                        @if ($key == 0)
                                            <div class="col-auto">
                                                <button type="button" class="btn btn-icon btn-soft-secondary"
                                                    onclick="add_new_option()">
                                                    <i class="la-plus las opacity-70"></i>
                                                </button>
                                            </div>
                                        @else
                                            <div class="col-auto">
                                                <button type="button" data-toggle="remove-parent" class="btn btn-icon p-0"
                                                    data-parent=".row" onclick="update_sku()">
                                                    <i class="la-2x la-trash las opacity-70"></i>
                                                </button>
                                            </div>
                                        @endif
                                    </div>
                                @empty
                                    <div class="form-group row gutters-10 ">
                                        <div class="col-xxl-3 col-xl-4 col-md-5 attr-names">
                                            <select class="form-control aiz-selectpicker" name="product_options[]"
                                                onchange="get_option_choices(this)" data-live-search="true"
                                                title="{{ translate('Select an option') }}">
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
                                            <button type="button" class="btn btn-icon btn-soft-secondary"
                                                onclick="add_new_option()">
                                                <i class=" la-plus las opacity-70"></i>
                                            </button>
                                        </div>
                                    </div>
                                @endforelse

                            </div>
                            <div class="sku_combination" id="sku_combination">
                                @if ($product->is_variant)
                                    @include('backend.product.products.sku_combinations_edit',['variations' =>
                                    $product->variations])
                                @endif
                            </div>
                        </div>
                        <div>
                            <div class="form-group row">
                                <label class="col-md-3 col-from-label">{{ translate('Time Warranty') }} <span
                                        class="text-danger">*</span></label>
                                <div class="col-md-8">
                                    <input type="text" value="{{ $product->warranty_text }}"
                                        placeholder="{{ translate('Time Warranty') }}" name="warranty_text" class="form-control"
                                        required>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Product Discount') }}</h5>
                    </div>
                    <div class="card-body">
                        @php
                            if ($product->discount_start_date) {
                                $start_date = date('d-m-Y H:i:s', $product->discount_start_date);
                                $end_date = date('d-m-Y H:i:s', $product->discount_end_date);
                                $discount_date = $start_date . ' to ' . $end_date;
                            } else {
                                $discount_date = '';
                            }
                        @endphp
                        <div class="form-group row">
                            <label class="col-sm-3 control-label"
                                for="start_date">{{ translate('Discount Date Range') }}</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control aiz-date-range" name="date_range"
                                    placeholder="Select Date" data-time-picker="true" data-format="DD-MM-Y HH:mm:ss"
                                    data-separator=" to " value="{{ $discount_date }}" autocomplete="off">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Discount') }} <span
                                    class="text-danger">*</span></label>
                            <div class="col-md-6">
                                <input type="number" lang="en" min="0" value="{{ $product->discount }}" step="0.01"
                                    placeholder="{{ translate('Discount') }}" name="discount" class="form-control"
                                    required>
                            </div>
                            <div class="col-md-3">
                                <select class="form-control aiz-selectpicker" name="discount_type"
                                    data-selected="{{ $product->discount_type }}">
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
                                    <input type="text" placeholder="{{ translate('Shipping') }}"  class="form-control" name="shipping" value="{{ $product->shipping }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Standard delivery time') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="number" step="0.01" class="form-control" name="standard_delivery_time"
                                        min="0" value="{{ $product->standard_delivery_time }}" required>
                                    <div class="input-group-append"><span class="input-group-text">hr(s)</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Express delivery time') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="number" step="0.01" class="form-control" name="express_delivery_time"
                                        min="0" value="{{ $product->express_delivery_time }}" required>
                                    <div class="input-group-append"><span class="input-group-text">hr(s)</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Weight') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="number" step="0.01" class="form-control" name="weight" min="0"
                                        value="{{ $product->weight }}" required>
                                    <div class="input-group-append"><span
                                            class="input-group-text">{{ get_setting('weight_unit') }}</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Height') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="number" step="0.01" class="form-control" name="height" min="0"
                                        value="{{ $product->height }}" required>
                                    <div class="input-group-append"><span
                                            class="input-group-text">{{ get_setting('dimension_unit') }}</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Length') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="number" step="0.01" class="form-control" name="length" min="0"
                                        value="{{ $product->length }}" required>
                                    <div class="input-group-append"><span
                                            class="input-group-text">{{ get_setting('dimension_unit') }}</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Width') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="number" step="0.01" class="form-control" name="width" min="0"
                                        value="{{ $product->width }}" required>
                                    <div class="input-group-append"><span
                                            class="input-group-text">{{ get_setting('dimension_unit') }}</span></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Product Description') }}</h5>
                    </div>
                    <div class="card-body">
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Description') }} <i
                                    class="las la-language text-danger"
                                    title="{{ translate('Translatable') }}"></i></label>
                            <div class="col-md-8">
                                <textarea class="aiz-text-editor" name="description">{!! $product->description !!}</textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Intake') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('Intake') }}"  class="form-control" name="intake" value="{{ $product->intake }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Material') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('Material') }}"  class="form-control" name="material" value="{{ $product->material }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('SI1') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('SI1') }}"  class="form-control" name="unit_metering" value="{{ $product->unit_metering }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Crimp size') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('Crimp size') }}"  class="form-control" name="engaste" value="{{ $product->engaste }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('si2') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('si2') }}"  class="form-control" name="si2" value="{{ $product->si2 }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Medidas embalaje') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('Medidas embalaje') }}"  class="form-control" name="medidas_de_embalaje" value="{{ $product->medidas_de_embalaje }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('si3') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('si3') }}"  class="form-control" name="si3" value="{{ $product->si3 }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Peso de producto') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('Peso de producto') }}"  class="form-control" name="peso_de_producto" value="{{ $product->peso_de_producto }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('si4') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('si4') }}"  class="form-control" name="si4" value="{{ $product->si4 }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Peso de envio') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('Peso de envio') }}"  class="form-control" name="peso_de_envio" value="{{ $product->peso_de_envio }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Tipo de conexion') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('Tipo de conexion') }}"  class="form-control" name="tipo_de_coneccion" value="{{ $product->tipo_de_coneccion }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Eficiencia') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('Eficiencia') }}"  class="form-control" name="eficiencia" value="{{ $product->eficiencia }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Caracteristica 1') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('Caracteristica 1') }}"  class="form-control" name="caracteristica1" value="{{ $product->caracteristica1 }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Caracteristica 2') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('Caracteristica 2') }}"  class="form-control" name="caracteristica2" value="{{ $product->caracteristica2 }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Caracteristica 3') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('Caracteristica 3') }}"  class="form-control" name="caracteristica3" value="{{ $product->caracteristica3 }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Caracteristica 4') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('Caracteristica 4') }}"  class="form-control" name="caracteristica4" value="{{ $product->caracteristica4 }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Caracteristica 5') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('Caracteristica 5') }}"  class="form-control" name="caracteristica5" value="{{ $product->caracteristica5 }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Caracteristica 6') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('Caracteristica 6') }}"  class="form-control" name="caracteristica6" value="{{ $product->caracteristica6 }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Caracteristica 7') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('Caracteristica 7') }}"  class="form-control" name="caracteristica7" value="{{ $product->caracteristica7 }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Caracteristica 8') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('Caracteristica 8') }}"  class="form-control" name="caracteristica8" value="{{ $product->caracteristica8 }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Beneficio 1') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('Beneficio 1') }}"  class="form-control" name="beneficio1" value="{{ $product->beneficio1 }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Beneficio 2') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('Beneficio 2') }}"  class="form-control" name="beneficio2" value="{{ $product->beneficio2 }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Beneficio 3') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('Beneficio 3') }}"  class="form-control" name="beneficio3" value="{{ $product->beneficio3 }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Beneficio 4') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('Beneficio 4') }}"  class="form-control" name="beneficio4" value="{{ $product->beneficio4 }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Beneficio 5') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('Beneficio 5') }}"  class="form-control" name="beneficio5" value="{{ $product->beneficio5 }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Postventa') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('Postventa') }}"  class="form-control" name="postventa" value="{{ $product->postventa }}">
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
                                    <input type="hidden" name="imagen1" class="selected-files"
                                        value="{{ $product->imagen1 }}">
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
                                    <input type="hidden" name="imagen2" class="selected-files"
                                        value="{{ $product->imagen2 }}">
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
                                    <input type="hidden" name="imagen3" class="selected-files"
                                        value="{{ $product->imagen3 }}">
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
                                    <input type="hidden" name="imagen4" class="selected-files"
                                        value="{{ $product->imagen4 }}">
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
                                    <input type="hidden" name="video" class="selected-files"
                                        value="{{ $product->video }}">
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
                                    <input type="hidden" name="video2" class="selected-files"
                                        value="{{ $product->video2 }}">
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
                                    <input type="hidden" name="video3" class="selected-files"
                                        value="{{ $product->video3 }}">
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
                                    <input type="hidden" name="video4" class="selected-files"
                                        value="{{ $product->video4 }}">
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
                                    <input type="hidden" name="ficha_tecnica_imagen1" class="selected-files"
                                        value="{{ $product->ficha_tecnica_imagen1 }}">
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
                                    <input type="hidden" name="ficha_tecnica_imagen2" class="selected-files"
                                        value="{{ $product->ficha_tecnica_imagen2 }}">
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
                                    <input type="hidden" name="ficha_tecnica_imagen3" class="selected-files"
                                        value="{{ $product->ficha_tecnica_imagen3 }}">
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
                                    <input type="hidden" name="ficha_tecnica_imagen4" class="selected-files"
                                        value="{{ $product->ficha_tecnica_imagen4 }}">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('manual_de_producto') }}</label>
                            <div class="col-md-8">
                                <div class="input-group" data-toggle="aizuploader" data-type="image">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input type="hidden" name="manual_de_producto" class="selected-files"
                                        value="{{ $product->manual_de_producto }}">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('ficha_tecnica_del_producto') }}</label>
                            <div class="col-md-8">
                                <div class="input-group" data-toggle="aizuploader" data-type="image">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input type="hidden" name="ficha_tecnica_del_producto" class="selected-files"
                                        value="{{ $product->ficha_tecnica_del_producto }}">
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
                                    <input type="hidden" name="manual_de_instalacion" class="selected-files"
                                        value="{{ $product->manual_de_instalacion }}">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('vida_util') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('vida_util') }}"  class="form-control" name="vida_util" value="{{ $product->vida_util }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('plastico') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('plastico') }}"  class="form-control" name="plastico" value="{{ $product->plastico }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('carton') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('carton') }}"  class="form-control" name="carton" value="{{ $product->carton }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('peso_carton') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('peso_carton') }}"  class="form-control" name="peso_carton" value="{{ $product->peso_carton }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('papel') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('papel') }}"  class="form-control" name="papel" value="{{ $product->papel }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('peso_papel') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('peso_papel') }}"  class="form-control" name="peso_papel" value="{{ $product->peso_papel }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('metal') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('metal') }}"  class="form-control" name="metal" value="{{ $product->metal }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('peso_metal') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('peso_metal') }}"  class="form-control" name="peso_metal" value="{{ $product->peso_metal }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('vidrio') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('vidrio') }}"  class="form-control" name="vidrio" value="{{ $product->vidrio }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('peso_vidrio') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('peso_vidrio') }}"  class="form-control" name="peso_vidrio" value="{{ $product->peso_vidrio }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('madera') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('madera') }}"  class="form-control" name="madera" value="{{ $product->madera }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('peso_madera') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('peso_madera') }}"  class="form-control" name="peso_madera" value="{{ $product->peso_madera }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('textil') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('textil') }}"  class="form-control" name="textil" value="{{ $product->textil }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('peso_textil') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('peso_textil') }}"  class="form-control" name="peso_textil" value="{{ $product->peso_textil }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('bateria_electrico') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('bateria_electrico') }}"  class="form-control" name="bateria_electrico" value="{{ $product->bateria_electrico }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('peso_bateria_electrico') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('peso_bateria_electrico') }}"  class="form-control" name="peso_bateria_electrico" value="{{ $product->peso_bateria_electrico }}">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('impacto_ambiental') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="text" placeholder="{{ translate('impacto_ambiental') }}"  class="form-control" name="impacto_ambiental" value="{{ $product->impacto_ambiental }}">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Product attributes') }}</h5>
                        <button class="btn btn-soft-dark" type="button"
                            onclick="add_new_attribute()">{{ translate('Add new attribute') }}</button>
                    </div>
                    <div class="card-body">
                        <div class="alert alert-info">
                            {{ translate('These attributes will be used only for filtering.') }}</div>
                        <div class="all-attributes">
                            @foreach ($product->attributes as $product_attribute)
                                <div class="form-group row gutters-10">
                                    <div class="col-xxl-3 col-xl-4 col-md-5 attr-names">
                                        <select class="form-control aiz-selectpicker" name="product_attributes[]"
                                            onchange="get_attributes_values(this)"
                                            data-selected="{{ $product_attribute->attribute_id }}"
                                            data-live-search="true" readonly>
                                            <option value="">{{ translate('Select an attribute') }}</option>
                                            @foreach ($all_attributes as $key => $attribute)
                                                <option value="{{ $attribute->id }}">
                                                    {{ $attribute->getTranslation('name') }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="col attr-values">
                                        @php
                                            $attribute_values = \App\Models\AttributeValue::where('attribute_id', $product_attribute->attribute_id)->get();
                                        @endphp
                                        <select class="form-control aiz-selectpicker"
                                            name="attribute_{{ $product_attribute->attribute_id }}_values[]"
                                            data-selected="{{ $product->attribute_values->where('attribute_id', $product_attribute->attribute_id)->pluck('attribute_value_id') }}"
                                            multiple data-live-search="true">
                                            @foreach ($attribute_values as $key => $attribute_value)
                                                <option value="{{ $attribute_value->id }}">
                                                    {{ $attribute_value->getTranslation('name') }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" data-toggle="remove-parent" class="btn btn-icon p-0"
                                            data-parent=".row">
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
                                <input type="text" class="form-control" name="meta_title"
                                    placeholder="{{ translate('Meta Title') }}" value="{{ $product->meta_title }}">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Description') }}</label>
                            <div class="col-md-8">
                                <textarea name="meta_description" rows="8"
                                    class="form-control">{{ $product->meta_description }}</textarea>
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
                                    <input type="hidden" name="meta_image" class="selected-files"
                                        value="{{ $product->meta_image }}">
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('Slug') }}</label>
                            <div class="col-md-8">
                                <input type="text" placeholder="{{ translate('Slug') }}" id="slug" name="slug"
                                    value="{{ $product->slug }}" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-lg-auto w-lg-300px w-xxl-400px">
                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Product Status') }}</h5>
                    </div>
                    <div class="card-body">
                        <select class="form-control aiz-selectpicker" name="status"
                            data-selected="{{ $product->published }}">
                            <option value="0">{{ translate('Draft') }}</option>
                            <option value="1" selected>{{ translate('Published') }}</option>
                        </select>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Product Brand') }}</h5>
                    </div>
                    <div class="card-body">
                        <select class="form-control aiz-selectpicker" name="brand_id"
                            data-selected="{{ $product->brand_id }}" data-live-search="true"
                            title="{{ translate('Select Brand') }}">
                            @foreach (\App\Models\Brand::all() as $brand)
                                <option value="{{ $brand->id }}">{{ $brand->name }}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Product Category') }}</h5>
                    </div>
                    <div class="card-body ">
                        <div class="h-300px overflow-auto c-scrollbar-light">
                            <ul class="list-unstyled">
                                @php
                                    $old_categories = $product->product_categories->pluck('category_id')->toArray();
                                @endphp
                                @foreach ($categories as $category)
                                    <li>
                                        <label class="aiz-checkbox">
                                            <input type="checkbox" value="{{ $category->id }}" name="category_ids[]"
                                                @if (in_array($category->id, $old_categories)) checked @endif>
                                            <span class="aiz-square-check"></span>
                                            <span>{{ $category->getTranslation('name') }}</span>
                                        </label>
                                        @if (count($category->childrenCategories) > 0)
                                            <ul class="list-unstyled ml-3">
                                                @foreach ($category->childrenCategories as $childCategory)
                                                    <li>
                                                        <label class="aiz-checkbox">
                                                            <input type="checkbox" value="{{ $childCategory->id }}"
                                                                name="category_ids[]" @if (in_array($childCategory->id, $old_categories)) checked @endif>
                                                            <span class="aiz-square-check"></span>
                                                            <span>{{ $childCategory->getTranslation('name') }}</span>
                                                        </label>
                                                        @if (count($childCategory->childrenCategories) > 0)
                                                            <ul class="list-unstyled ml-3">
                                                                @foreach ($childCategory->childrenCategories as $grandChildCategory)
                                                                    <li>
                                                                        <label class="aiz-checkbox">
                                                                            <input type="checkbox"
                                                                                value="{{ $grandChildCategory->id }}"
                                                                                name="category_ids[]"
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
                        <h5 class="mb-0 h6">{{ translate('Product Tags') }}</h5>
                    </div>
                    <div class="card-body">
                        <input type="text" class="form-control aiz-tag-input" name="tags"
                            placeholder="{{ translate('Type and hit enter to add a tag') }}"
                            value="{{ $product->tags }}">
                        <small class="text-muted">{{ translate('These will be used for product search.') }}</small>
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
                                <input type="hidden" value="{{ $tax->id }}" name="tax_ids[]">
                            </label>

                            @php
                                $tax_amount = 0;
                                $tax_type = 'flat';
                                foreach ($product->taxes as $row) {
                                    if ($row->tax_id == $tax->id) {
                                        $tax_amount = $row->tax;
                                        $tax_type = $row->tax_type;
                                    }
                                }
                            @endphp

                            <div class="form-row">
                                <div class="form-group col-6">
                                    <input type="number" lang="en" min="0" value="{{ $tax_amount }}" step="0.01"
                                        placeholder="{{ translate('Tax') }}" name="taxes[]" class="form-control"
                                        required>
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
                        <div class="mb-2">{{ translate('Warranty available for this product?') }}</div>
                        <label class="aiz-switch aiz-switch-success mb-0">
                            <input type="checkbox" name="has_warranty" @if ($product->has_warranty) checked @endif>
                            <span></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="mar-all text-right mb-3">
            <button type="submit" class="btn btn-primary"
                id="upload-product">{{ translate('Update Product') }}</button>
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
        $('#product_form').bind('submit', function(e) {
            // Disable the submit button while evaluating if the form should be submitted
            $("#upload-product").prop('disabled', true);

            var valid = true;

            if (!valid) {
                e.preventDefault();

                // Reactivate the button if the form was not submitted
                $("#upload-product").button.prop('disabled', false);
            }
        });

        function is_variant_product(el) {
            $(".has_product_variant").hide();
            $(".no_product_variant").hide();
            if ($(el).is(':checked')) {
                $(".has_product_variant").show();
            } else {
                $(".no_product_variant").show();
            }
        }

        function add_new_attribute() {
            $.ajax({
                type: "POST",
                data: $('#product_form').serialize(),
                url: '{{ route('product.new_attribute') }}',
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
                url: '{{ route('product.get_attribute_values') }}',
                success: function(data) {
                    $(e).closest('.row').find('.attr-values').html(data);
                    AIZ.plugins.bootstrapSelect();
                }
            });
        }

        function add_new_option() {
            $.ajax({
                type: "POST",
                data: $('#product_form').serialize(),
                url: '{{ route('product.new_option') }}',
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
                url: '{{ route('product.get_option_choices') }}',
                success: function(data) {
                    $(e).closest('.row').find('.attr-values').html(data);
                    AIZ.plugins.bootstrapSelect();
                }
            });
        }

        function update_sku() {
            $.ajax({
                type: "POST",
                url: '{{ route('product.sku_combination') }}',
                data: $('#product_form').serialize(),
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
