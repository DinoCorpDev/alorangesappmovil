@extends('backend.layouts.app')

@section('content')
    <div class="aiz-titlebar text-left mt-2 mb-3">
        <h5 class="mb-0 h6">{{ translate('Add New Collection') }}</h5>
    </div>
    <form
        class="form form-horizontal mar-top"
        id="product_form"
        action="{{ route('collection.store') }}"
        method="POST"
        enctype="multipart/form-data"
    >
        @csrf
        <div class="row gutters-5">
            <div class="col-lg">

                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Collection Information') }}</h5>
                    </div>
                    <div class="card-body">
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">
                                {{ translate('Collection Name') }} <span class="text-danger">*</span>
                            </label>
                            <div class="col-md-8">
                                <input
                                    class="form-control"
                                    name="coleccion"
                                    type="text"
                                    placeholder="{{ translate('Collection Name') }}"
                                    required
                                >
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">
                                {{ translate('Reference') }} <span class="text-danger">*</span>
                            </label>
                            <div class="col-md-8">
                                <input
                                    class="form-control"
                                    name="referencia"
                                    type="text"
                                    placeholder="{{ translate('Collection Reference') }}"
                                    required
                                >
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- price and stock -->
                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Product price, stock') }}</h5>
                    </div>
                    <div class="card-body">
                        <div class="no_product_variant">
                            <div class="form-group row">
                                <label class="col-md-3 col-from-label">{{ translate('Price') }} <span
                                        class="text-danger"
                                    >*</span></label>
                                <div class="col-md-8">
                                    <input
                                        class="form-control"
                                        name="precio"
                                        type="number"
                                        value="1"
                                        step="0.01"
                                        min="0"
                                        placeholder="{{ translate('Price') }}"
                                        required
                                    >
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-md-3 col-from-label">{{ translate('Divisa') }} <span
                                        class="text-danger"
                                    >*</span></label>
                                <div class="col-md-8">
                                    <input
                                        class="form-control"
                                        name="divisa"
                                        type="text"
                                        value=""
                                        step="0.01"
                                        min="0"
                                        placeholder="{{ translate('Divisa') }}"
                                    >
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-md-3 col-from-label">{{ translate('Stock') }} <span
                                        class="text-danger">*</span></label>
                                <div class="col-md-8">
                                    <input
                                        class="form-control"
                                        name="stock"
                                        type="number"
                                        value=""
                                        step="1"
                                        min="0"
                                        placeholder="{{ translate('stock') }}"
                                    >
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-md-3 col-from-label">{{ translate('Discount') }} 
                                <div class="col-md-8">
                                    <input
                                        class="form-control"
                                        name="descuento"
                                        type="text"
                                        value=""
                                        lang="en"
                                        min="0"
                                        step="1"
                                        placeholder="{{ translate('Discount') }}"
                                    >
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-md-3 col-from-label">{{ translate('Garantia') }} 
                                <div class="col-md-8">
                                    <input
                                        class="form-control"
                                        name="garantia"
                                        type="text"
                                        value="1"
                                        step="1"
                                        min="0"
                                        placeholder="{{ translate('garantia') }}"
                                    >
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
                            <label class="col-md-3 col-from-label">{{ translate('Description') }}</label>
                            <div class="col-md-8">
                                <textarea
                                    class="aiz-text-editor"
                                    name="description"
                                ></textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Envio') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input
                                        class="form-control"
                                        name="envio"
                                        type="text"
                                        placeholder="{{ translate('Envio') }}"
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Material') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input
                                        class="form-control"
                                        name="material"
                                        type="text"
                                        placeholder="{{ translate('Material') }}"
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('SI1') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input
                                        class="form-control"
                                        name="si1"
                                        type="text"
                                        placeholder="{{ translate('SI1') }}"
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Medidas de proyecto') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input
                                        class="form-control"
                                        name="medida_de_proyecto"
                                        type="text"
                                        placeholder="{{ translate('Medidas de proyecto') }}"
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('aforo') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input
                                        class="form-control"
                                        name="aforo"
                                        type="text"
                                        placeholder="{{ translate('aforo') }}"
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-from-label">{{ translate('Postventa') }}</label>
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input
                                        class="form-control"
                                        name="postventa"
                                        type="text"
                                        placeholder="{{ translate('Postventa') }}"
                                    >
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('Diagrama') }}</label>
                            <div class="col-md-8">
                                <div
                                    class="input-group"
                                    data-toggle="aizuploader"
                                    data-type="image"
                                >
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input
                                        class="selected-files"
                                        name="diagrama_proyecto"
                                        type="hidden"
                                    >
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('Imagen 1') }}</label>
                            <div class="col-md-8">
                                <div
                                    class="input-group"
                                    data-toggle="aizuploader"
                                    data-type="image"
                                >
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input
                                        class="selected-files"
                                        name="imagen1"
                                        type="hidden"
                                    >
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('Imagen 2') }}</label>
                            <div class="col-md-8">
                                <div
                                    class="input-group"
                                    data-toggle="aizuploader"
                                    data-type="image"
                                >
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input
                                        class="selected-files"
                                        name="imagen2"
                                        type="hidden"
                                    >
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('Imagen 3') }}</label>
                            <div class="col-md-8">
                                <div
                                    class="input-group"
                                    data-toggle="aizuploader"
                                    data-type="image"
                                >
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input
                                        class="selected-files"
                                        name="imagen3"
                                        type="hidden"
                                    >
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('Imagen 4') }}</label>
                            <div class="col-md-8">
                                <div
                                    class="input-group"
                                    data-toggle="aizuploader"
                                    data-type="image"
                                >
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input
                                        class="selected-files"
                                        name="imagen4"
                                        type="hidden"
                                    >
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('Video') }}</label>
                            <div class="col-md-8">
                                <div
                                    class="input-group"
                                    data-toggle="aizuploader"
                                    data-type="video"
                                >
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input
                                        class="selected-files"
                                        name="video1"
                                        type="hidden"
                                    >
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('Video 2') }}</label>
                            <div class="col-md-8">
                                <div
                                    class="input-group"
                                    data-toggle="aizuploader"
                                    data-type="video"
                                >
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input
                                        class="selected-files"
                                        name="video2"
                                        type="hidden"
                                    >
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('Video 3') }}</label>
                            <div class="col-md-8">
                                <div
                                    class="input-group"
                                    data-toggle="aizuploader"
                                    data-type="video"
                                >
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input
                                        class="selected-files"
                                        name="video3"
                                        type="hidden"
                                    >
                                </div>
                                <div class="file-preview box sm">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">{{ translate('Video 4') }}</label>
                            <div class="col-md-8">
                                <div
                                    class="input-group"
                                    data-toggle="aizuploader"
                                    data-type="video"
                                >
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-soft-secondary font-weight-medium">
                                            {{ translate('Browse') }}</div>
                                    </div>
                                    <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                                    <input
                                        class="selected-files"
                                        name="video4"
                                        type="hidden"
                                    >
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
                        <h5 class="mb-0 h6">{{ translate('Collection Status') }}</h5>
                    </div>
                    <div class="card-body">
                        <select
                            class="form-control aiz-selectpicker"
                            name="status"
                        >
                            <option value="0">{{ translate('Draft') }}</option>
                            <option
                                value="1"
                                selected
                            >{{ translate('Published') }}</option>
                        </select>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Collection Brand') }}</h5>
                    </div>
                    <div class="card-body">
                        <select
                            class="form-control aiz-selectpicker"
                            name="brand_id"
                            data-live-search="true"
                            title="{{ translate('Select Brand') }}"
                        >
                            @foreach (\App\Models\Brand::all() as $brand)
                                <option value="{{ $brand->id }}">{{ $brand->name }}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h5 class="mb-0 h6">{{ translate('Collection Category') }}</h5>
                    </div>
                    <div class="card-body ">
                        <div class="h-300px overflow-auto c-scrollbar-light">
                            <ul class="list-unstyled">
                                @foreach ($categories as $category)
                                    <li>
                                        <label class="aiz-checkbox">
                                            <input
                                                name="category_ids[]"
                                                type="checkbox"
                                                value="{{ $category->id }}"
                                            >
                                            <span class="aiz-square-check"></span>
                                            <span>{{ $category->getTranslation('name') }}</span>
                                        </label>
                                        @if (count($category->childrenCategories) > 0)
                                            <ul class="list-unstyled ml-3">
                                                @foreach ($category->childrenCategories as $childCategory)
                                                    <li>
                                                        <label class="aiz-checkbox">
                                                            <input
                                                                name="category_ids[]"
                                                                type="checkbox"
                                                                value="{{ $childCategory->id }}"
                                                            >
                                                            <span class="aiz-square-check"></span>
                                                            <span>{{ $childCategory->getTranslation('name') }}</span>
                                                        </label>
                                                        @if (count($childCategory->childrenCategories) > 0)
                                                            <ul class="list-unstyled ml-3">
                                                                @foreach ($childCategory->childrenCategories as $grandChildCategory)
                                                                    <li>
                                                                        <label class="aiz-checkbox">
                                                                            <input
                                                                                name="category_ids[]"
                                                                                type="checkbox"
                                                                                value="{{ $grandChildCategory->id }}"
                                                                            >
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
            </div>
        </div>
        <div class="mar-all text-right mb-3">
            <button
                class="btn btn-primary"
                id="upload-product"
                type="submit"
            >{{ translate('Upload Collection') }}</button>
        </div>
    </form>
@endsection

@section('script')
    <script type="text/javascript">
        // $(document).ready(function(){
        //     $('body').addClass('side-menu-closed');
        // });
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

    </script>
@endsection
