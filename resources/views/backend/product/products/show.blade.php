@extends('backend.layouts.app')

@section('content')
    <div class="card">
        <div class="card-body">
            <div class="row align-items-center">
                <div class="col-lg-auto">
                    <img src="{{ uploaded_asset($product->thumbnail_img) }}" class="size-200px">
                </div>
                <div class="col-lg">
                    <h1 class="h5 fw-700">{{ $product->name }}</h1>
                    <div class="d-flex align-items-center mb-3">
                        <span class="rating">
                            {{ renderStarRating($product->rating) }}
                        </span>
                        <span class="ml-1 mr-0 opacity-50">({{ number_format($product->rating, 2) }})</span>
                    </div>
                    <div class="d-flex flex-wrap">
                        <div class="border border-dotted rounded py-2 px-3 mr-3 ml-0">
                            <div class="h3 mb-0 fw-700">{{ $product->reviews_count }}</div>
                            <div class="opacity-60 fs-12">{{ translate('Reviews') }}</div>
                        </div>
                        <div class="border border-dotted rounded py-2 px-3 mr-3 ml-0">
                            <div class="h3 mb-0 fw-700">{{ $product->wishlists_count }}</div>
                            <div class="opacity-60 fs-12">{{ translate('In wishlist') }}</div>
                        </div>
                        <div class="border border-dotted rounded py-2 px-3 mr-3 ml-0">
                            <div class="h3 mb-0 fw-700">{{ $product->carts_count }}</div>
                            <div class="opacity-60 fs-12">{{ translate('In cart') }}</div>
                        </div>
                        <div class="border border-dotted rounded py-2 px-3 mr-3 ml-0">
                            <div class="h3 mb-0 fw-700">{{ $product->num_of_sale }}</div>
                            <div class="opacity-60 fs-12">{{ translate('Times sold') }}</div>
                        </div>
                        <div class="border border-dotted rounded py-2 px-3 mr-3 ml-0">
                            <div class="h3 mb-0 fw-700">{{ format_price($product->orderDetails()->sum('price')) }}</div>
                            <div class="opacity-60 fs-12">{{ translate('Amount sold') }}</div>
                        </div>
                        @if ($product->discount > 0)
                            <div class="border border-dotted rounded py-2 px-3 mr-3 ml-0 bg-danger text-white">
                                @if ($product->discount_type == 'flat')
                                    <span class="h3 mb-0 fw-700">{{ format_price($product->discount) }}</span>
                                @else
                                    <span class="h3 mb-0 fw-700">{{ $product->discount }}%</span>
                                @endif
                                {{ translate('Off') }}
                                <div class="opacity-60 fs-12">
                                    {{ date('Y/m/d H:i:s', $product->discount_start_date) }} -
                                    {{ date('Y/m/d H:i:s', $product->discount_end_date) }}
                                </div>
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-auto w-lg-320px">
            <div class="card">
                <div class="card-body">
                <div class="mb-3 d-flex justify-content-between">
                        <span class="mr-2 ml-0">{{ translate('Reference') }}:</span>
                        <span>{{ $product->reference }}</span>
                    </div>
                    <div class="mb-3 d-flex justify-content-between">
                        <span class="mr-2 ml-0">{{ translate('Status') }}:</span>
                        @if ($product->published)
                            <span class="badge badge-inline badge-success">{{ translate('Published') }}</span>
                        @else
                            <span class="badge badge-inline badge-secondary">{{ translate('Draft') }}</span>
                        @endif
                    </div>
                    <div class="mb-3 d-flex justify-content-between">
                        <span class="mr-2 ml-0">{{ translate('Brand') }}:</span>
                        @if ($product->brand)
                            <div class="h-30px w-100px d-flex align-items-center justify-content-end">
                                <img src="{{ uploaded_asset($product->brand->logo) }}" alt="{{ translate('Brand') }}"
                                    class="mw-100 mh-100">
                            </div>
                        @else
                            <span>{{ translate('No brand') }}</span>
                        @endif
                    </div>
                    <div class="mb-3 d-flex justify-content-between">
                        <span class="mr-2 ml-0">{{ translate('Category') }}:</span>
                        <span class="text-right">
                            @foreach ($product->categories as $category)
                                <span
                                    class="badge badge-inline badge-md bg-soft-dark mb-1">{{ $category->getTranslation('name') }}</span>
                            @endforeach
                        </span>
                    </div>
                    <div class="mb-3 d-flex justify-content-between">
                        <span class="mr-2 ml-0">{{ translate('Tags') }}:</span>
                        <span class="text-right">
                            {{ $product->tags }}
                        </span>
                    </div>
                    <div class="mb-3 d-flex justify-content-between">
                        <span class="mr-2 ml-0">{{ translate('Warranty') }}:</span>

                        @if ($product->has_warranty)
                            <span class="badge badge-inline badge-success">{{ translate('Has warranty') }}</span>
                        @else
                            <span class="badge badge-inline badge-secondary">{{ translate('No warranty') }}</span>
                        @endif
                    </div>
                    <div class="mb-3 d-flex justify-content-between">
                        <span class="mr-2 ml-0"></span>
                        <span>{{ $product->warranty_text }}</span>
                    </div>
                    <div class="mb-3 d-flex justify-content-between">
                        <span class="mr-2 ml-0">{{ translate('Minimum Purchase Qty ') }}:</span>
                        <span>{{ $product->min_qty }}</span>
                    </div>
                    <div class="mb-3 d-flex justify-content-between">
                        <span class="mr-2 ml-0">{{ translate('Maximum Purchase Qty ') }}:</span>
                        <span>{{ $product->max_qty }}</span>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0 h6">{{ translate('VAT & Tax') }}</h5>
                </div>
                <div class="card-body">
                    @foreach (\App\Models\Tax::all() as $tax)

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
                                <label for="name">
                                    {{ $tax->name }}
                                    <input type="hidden" value="{{ $tax->id }}" name="tax_ids[]">
                                </label>
                            </div>
                            <div class="form-group col-6">
                                @if ($tax_type == 'flat')
                                    <span class="">{{ format_price($tax_amount) }}</span>
                                @else
                                    <span class="">{{ $tax_amount }}%</span>
                                @endif
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
        <div class="col-lg">
            <div class="card">
                <div class="card-header mb-0 h6">{{ translate('Product price, stock') }}</div>
                <div class="card-body">
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Currency') }}</label>
                        <div class="col-md-8">
                                <input type="text" class="form-control" name="width" min="0"
                                    value="{{ $product->currency }}" required readonly />
                        </div>
                    </div>
                    <table class="table table-bordered table-responsive-xl">
                        <thead>
                            <tr>
                                @if ($product->is_variant)
                                    <td class="">
                                        <label for="" class="control-label">{{ translate('Variant') }}</label>
                                    </td>
                                @endif
                                <td class="">
                                    <label for="" class="control-label">{{ translate('Price') }}</label>
                                </td>
                                <td class="">
                                    <label for="" class="control-label">{{ translate('Stock') }}</label>
                                </td>
                                <td class="">
                                    <label for="" class="control-label">{{ translate('SKU') }}</label>
                                </td>
                                @if ($product->is_variant)
                                    <td class="">
                                        <label for="" class="control-label">{{ translate('Image') }}</label>
                                    </td>
                                @endif
                            </tr>
                        </thead>

                        <tbody>
                            @foreach ($product->variations as $key => $variation)
                                @php
                                    $name = '';
                                    $code_array = array_filter(explode('/', $variation->code));
                                    $lstKey = array_key_last($code_array);
                                    
                                    foreach ($code_array as $j => $comb) {
                                        $comb = explode(':', $comb);
                                    
                                        $option_name = \App\Models\Attribute::find($comb[0])->getTranslation('name');
                                        $choice_name = \App\Models\AttributeValue::find($comb[1])->getTranslation('name');
                                    
                                        $name .= $option_name . ': ' . $choice_name;
                                    
                                        if ($lstKey != $j) {
                                            $name .= ' / ';
                                        }
                                    }
                                @endphp
                                <tr class="variant">
                                    @if ($product->is_variant)
                                        <td>
                                            <div>{{ $name }}</div>
                                        </td>
                                    @endif
                                    <td>
                                        <div>{{ format_price($variation->price) }}</div>
                                    </td>
                                    <td>
                                        <div>
                                            @if ($variation->stock == '1')
                                                {{ translate('In stock') }}
                                            @else
                                                {{ translate('Out of stock') }}
                                            @endif
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            {{ $variation->sku }}
                                        </div>
                                    </td>
                                    @if ($product->is_variant)
                                        <td>
                                            <img src="{{ uploaded_asset($variation->img) }}" class="size-50px">
                                        </td>
                                    @endif
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0 h6">{{ translate('Gallery') }}</h5>
                </div>
                <div class="card-body">
                    <div class="aiz-carousel gutters-10 half-outside-arrow" data-items="5" data-xl-items="5"
                        data-lg-items="3" data-md-items="2" data-sm-items="1">
                        @foreach (explode(',', $product->photos) as $key => $image)
                            <div class="carousel-box">
                                <img src="{{ uploaded_asset($image) }}" class="img-fluid">
                            </div>
                        @endforeach
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
                                <input type="text" class="form-control" name="width" min="0"
                                    value="{{ $product->shipping }}" required readonly />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Standard delivery time') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="number" class="form-control" name="standard_delivery_time" min="0"
                                    value="{{ $product->standard_delivery_time }}" required readonly>
                                <div class="input-group-append"><span class="input-group-text">hr(s)</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Express delivery time') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="number" class="form-control" name="express_delivery_time" min="0"
                                    value="{{ $product->express_delivery_time }}" required readonly>
                                <div class="input-group-append"><span class="input-group-text">hr(s)</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Weight') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="number" class="form-control" name="weight" min="0"
                                    value="{{ $product->weight }}" required readonly>
                                <div class="input-group-append"><span
                                        class="input-group-text">{{ get_setting('weight_unit') }}</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Height') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="number" class="form-control" name="height" min="0"
                                    value="{{ $product->height }}" required readonly>
                                <div class="input-group-append"><span
                                        class="input-group-text">{{ get_setting('dimension_unit') }}</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Length') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="number" class="form-control" name="length" min="0"
                                    value="{{ $product->length }}" required readonly>
                                <div class="input-group-append"><span
                                        class="input-group-text">{{ get_setting('dimension_unit') }}</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Width') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="number" class="form-control" name="width" min="0"
                                    value="{{ $product->width }}" required readonly>
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
                    {!! $product->getTranslation('description') !!}

                    <div class="form-group row mt-5">
                        <label class="col-md-3 col-from-label">{{ translate('Intake') }}</label>
                        <div class="col-md-8">
                                <input type="text" class="form-control" name="width" min="0"
                                    value="{{ $product->intake }}" required readonly />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Material') }}</label>
                        <div class="col-md-8">
                                <input type="text" class="form-control" name="width" min="0"
                                    value="{{ $product->material }}" required readonly />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('SI1') }}</label>
                        <div class="col-md-8">
                                <input type="text" class="form-control" name="width" min="0"
                                    value="{{ $product->unit_metering }}" required readonly />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Crimp size') }}</label>
                        <div class="col-md-8">
                                <input type="text" class="form-control" name="width" min="0"
                                    value="{{ $product->engaste }}" required readonly />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('si2') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('si2') }}"  class="form-control" name="si2" value="{{ $product->si2 }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Medidas embalaje') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('Medidas embalaje') }}"  class="form-control" name="medidas_de_embalaje" value="{{ $product->medidas_de_embalaje }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('si3') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('si3') }}"  class="form-control" name="si3" value="{{ $product->si3 }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Peso de producto') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('Peso de producto') }}"  class="form-control" name="peso_de_producto" value="{{ $product->peso_de_producto }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('si4') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('si4') }}"  class="form-control" name="si4" value="{{ $product->si4 }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Peso de envio') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('Peso de envio') }}"  class="form-control" name="peso_de_envio" value="{{ $product->peso_de_envio }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Tipo de conexion') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('Tipo de conexion') }}"  class="form-control" name="tipo_de_coneccion" value="{{ $product->tipo_de_coneccion }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Eficiencia') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('Eficiencia') }}"  class="form-control" name="eficiencia" value="{{ $product->eficiencia }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Caracteristica 1') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('Caracteristica 1') }}"  class="form-control" name="caracteristica1" value="{{ $product->caracteristica1 }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Caracteristica 2') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('Caracteristica 2') }}"  class="form-control" name="caracteristica2" value="{{ $product->caracteristica2 }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Caracteristica 3') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('Caracteristica 3') }}"  class="form-control" name="caracteristica3" value="{{ $product->caracteristica3 }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Caracteristica 4') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('Caracteristica 4') }}"  class="form-control" name="caracteristica4" value="{{ $product->caracteristica4 }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Caracteristica 5') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('Caracteristica 5') }}"  class="form-control" name="caracteristica5" value="{{ $product->caracteristica5 }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Caracteristica 6') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('Caracteristica 6') }}"  class="form-control" name="caracteristica6" value="{{ $product->caracteristica6 }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Caracteristica 7') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('Caracteristica 7') }}"  class="form-control" name="caracteristica7" value="{{ $product->caracteristica7 }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Caracteristica 8') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('Caracteristica 8') }}"  class="form-control" name="caracteristica8" value="{{ $product->caracteristica8 }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Beneficio 1') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('Beneficio 1') }}"  class="form-control" name="beneficio1" value="{{ $product->beneficio1 }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Beneficio 2') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('Beneficio 2') }}"  class="form-control" name="beneficio2" value="{{ $product->beneficio2 }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Beneficio 3') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('Beneficio 3') }}"  class="form-control" name="beneficio3" value="{{ $product->beneficio3 }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Beneficio 4') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('Beneficio 4') }}"  class="form-control" name="beneficio4" value="{{ $product->beneficio4 }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Beneficio 5') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('Beneficio 5') }}"  class="form-control" name="beneficio5" value="{{ $product->beneficio5 }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('Postventa') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('Postventa') }}"  class="form-control" name="postventa" value="{{ $product->postventa }}">
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
                                <input required readonly type="hidden" name="imagen1" class="selected-files"
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
                                <input required readonly type="hidden" name="imagen2" class="selected-files"
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
                                <input required readonly type="hidden" name="imagen3" class="selected-files"
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
                                <input required readonly type="hidden" name="imagen4" class="selected-files"
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
                                <input required readonly type="hidden" name="video" class="selected-files"
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
                                <input required readonly type="hidden" name="video2" class="selected-files"
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
                                <input required readonly type="hidden" name="video3" class="selected-files"
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
                                <input required readonly type="hidden" name="video4" class="selected-files"
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
                                <input required readonly type="hidden" name="ficha_tecnica_imagen1" class="selected-files"
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
                                <input required readonly type="hidden" name="ficha_tecnica_imagen2" class="selected-files"
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
                                <input required readonly type="hidden" name="ficha_tecnica_imagen3" class="selected-files"
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
                                <input required readonly type="hidden" name="ficha_tecnica_imagen4" class="selected-files"
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
                                <input required readonly type="hidden" name="manual_de_producto" class="selected-files"
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
                                <input required readonly type="hidden" name="ficha_tecnica_del_producto" class="selected-files"
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
                                <input required readonly type="hidden" name="manual_de_instalacion" class="selected-files"
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
                                <input required readonly type="text" placeholder="{{ translate('vida_util') }}"  class="form-control" name="vida_util" value="{{ $product->vida_util }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('plastico') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('plastico') }}"  class="form-control" name="plastico" value="{{ $product->plastico }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('carton') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('carton') }}"  class="form-control" name="carton" value="{{ $product->carton }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('peso_carton') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('peso_carton') }}"  class="form-control" name="peso_carton" value="{{ $product->peso_carton }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('papel') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('papel') }}"  class="form-control" name="papel" value="{{ $product->papel }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('peso_papel') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('peso_papel') }}"  class="form-control" name="peso_papel" value="{{ $product->peso_papel }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('metal') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('metal') }}"  class="form-control" name="metal" value="{{ $product->metal }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('peso_metal') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('peso_metal') }}"  class="form-control" name="peso_metal" value="{{ $product->peso_metal }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('vidrio') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('vidrio') }}"  class="form-control" name="vidrio" value="{{ $product->vidrio }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('peso_vidrio') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('peso_vidrio') }}"  class="form-control" name="peso_vidrio" value="{{ $product->peso_vidrio }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('madera') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('madera') }}"  class="form-control" name="madera" value="{{ $product->madera }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('peso_madera') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('peso_madera') }}"  class="form-control" name="peso_madera" value="{{ $product->peso_madera }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('textil') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('textil') }}"  class="form-control" name="textil" value="{{ $product->textil }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('peso_textil') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('peso_textil') }}"  class="form-control" name="peso_textil" value="{{ $product->peso_textil }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('bateria_electrico') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('bateria_electrico') }}"  class="form-control" name="bateria_electrico" value="{{ $product->bateria_electrico }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('peso_bateria_electrico') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('peso_bateria_electrico') }}"  class="form-control" name="peso_bateria_electrico" value="{{ $product->peso_bateria_electrico }}">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-from-label">{{ translate('impacto_ambiental') }}</label>
                        <div class="col-md-8">
                            <div class="input-group">
                                <input required readonly type="text" placeholder="{{ translate('impacto_ambiental') }}"  class="form-control" name="impacto_ambiental" value="{{ $product->impacto_ambiental }}">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
@endsection
