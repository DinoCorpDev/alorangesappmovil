@extends('backend.layouts.app')

@section('content')
<div class="aiz-titlebar text-left mt-2 mb-3">
    <h5 class="mb-0 h6">{{ translate('Brand Information') }}</h5>
</div>

<div class="col-lg-8 mx-auto">
    <div class="card">
        <div class="card-body p-0">
          <ul class="nav nav-tabs nav-fill border-light">
                @foreach (\App\Models\Language::where('status', 1)->get() as $key => $language)
                    <li class="nav-item">
                        <a class="nav-link text-reset @if ($language->code == $lang) active @else bg-soft-dark border-light border-left-0 @endif py-3" href="{{ route('brands.edit', ['id' => $brand->id, 'lang' => $language->code] ) }}">
                            <img src="{{ static_asset('assets/img/flags/' . $language->flag . '.png') }}" height="11" class="mr-1">
                            <span>{{ $language->name }}</span>
                        </a>
                    </li>
	            @endforeach
    		</ul>
            <form class="p-4" action="{{ route('brands.update', $brand->id) }}" method="POST" enctype="multipart/form-data">
                <input name="_method" type="hidden" value="PATCH">
                <input type="hidden" name="lang" value="{{ $lang }}">

                @csrf
                <div class="form-group row">
                    <label class="col-sm-3 col-from-label" for="name">{{ translate('Name') }} <i class="las la-language text-danger" title="{{ translate('Translatable') }}"></i></label>
                    <div class="col-sm-9">
                        <input type="text" placeholder="{{ translate('Name') }}" id="name" name="name" value="{{ $brand->getTranslation('name', $lang) }}" class="form-control" required>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-md-3 col-form-label" for="signinSrEmail">{{ translate('Logo') }} <small>({{ translate('120x80') }})</small></label>
                    <div class="col-md-9">
                        <div class="input-group" data-toggle="aizuploader" data-type="image">
                            <div class="input-group-prepend">
                                <div class="input-group-text bg-soft-secondary font-weight-medium">{{ translate('Browse') }}</div>
                            </div>
                            <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                            <input type="hidden" name="logo" value="{{ $brand->logo }}" class="selected-files">
                        </div>
                        <div class="file-preview box sm">
                        </div>
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label class="col-sm-3 col-from-label" for="name">{{ translate('Biografia') }}</label>
                    <div class="col-sm-9">
                        <input type="text" placeholder="{{ translate('Biografia') }}" name="biografia"
                            class="form-control" value="{{ $brand->biografia }}" required>
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label class="col-sm-3 col-from-label" for="name">{{ translate('Banner') }}
                        <small>({{ translate('120x80') }})</small></label>
                    <div class="col-sm-9">
                        <div class="input-group" data-toggle="aizuploader" data-type="image">
                            <div class="input-group-prepend">
                                <div class="input-group-text bg-soft-secondary font-weight-medium">
                                    {{ translate('Browse') }}</div>
                            </div>
                            <div class="form-control file-amount">{{ translate('Choose File') }}</div>
                            <input type="hidden" name="banner" value="{{ $brand->banner }}" class="selected-files">
                        </div>
                        <div class="file-preview box sm">
                        </div>
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label class="col-sm-3 col-from-label" for="name">{{ translate('Fundacion') }}</label>
                    <div class="col-sm-9">
                        <input type="text" placeholder="{{ translate('Fundacion') }}" name="fundacion"
                            class="form-control" value="{{ $brand->fundacion }}" required>
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label class="col-sm-3 col-from-label" for="name">{{ translate('Ensamblado') }}</label>
                    <div class="col-sm-9">
                        <input type="text" placeholder="{{ translate('Ensamblado') }}" name="ensamblado"
                            class="form-control" value="{{ $brand->ensamblado }}" required>
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label class="col-sm-3 col-from-label" for="name">{{ translate('Segmento1') }}</label>
                    <div class="col-sm-9">
                        <input type="text" placeholder="{{ translate('Segmento1') }}" name="segmento1"
                            class="form-control" value="{{ $brand->segmento1 }}" required>
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label class="col-sm-3 col-from-label" for="name">{{ translate('Segmento2') }}</label>
                    <div class="col-sm-9">
                        <input type="text" placeholder="{{ translate('Segmento2') }}" name="segmento2"
                            class="form-control" value="{{ $brand->segmento2 }}" required>
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label class="col-sm-3 col-from-label" for="name">{{ translate('Segmento3') }}</label>
                    <div class="col-sm-9">
                        <input type="text" placeholder="{{ translate('Segmento3') }}" name="segmento3"
                            class="form-control" value="{{ $brand->segmento3 }}" required>
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label class="col-sm-3 col-from-label" for="name">{{ translate('Segmento4') }}</label>
                    <div class="col-sm-9">
                        <input type="text" placeholder="{{ translate('Segmento4') }}" name="segmento4"
                            class="form-control" value="{{ $brand->segmento4 }}" required>
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label class="col-sm-3 col-from-label" for="name">{{ translate('Linea1') }}</label>
                    <div class="col-sm-9">
                        <input type="text" placeholder="{{ translate('Linea1') }}" name="linea1"
                            class="form-control" value="{{ $brand->linea1 }}" required>
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label class="col-sm-3 col-from-label" for="name">{{ translate('Linea2') }}</label>
                    <div class="col-sm-9">
                        <input type="text" placeholder="{{ translate('Linea2') }}" name="linea2"
                            class="form-control" value="{{ $brand->linea2 }}" required>
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label class="col-sm-3 col-from-label" for="name">{{ translate('Linea3') }}</label>
                    <div class="col-sm-9">
                        <input type="text" placeholder="{{ translate('Linea3') }}" name="linea3"
                            class="form-control" value="{{ $brand->linea3 }}" required>
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label class="col-sm-3 col-from-label" for="name">{{ translate('Linea4') }}</label>
                    <div class="col-sm-9">
                        <input type="text" placeholder="{{ translate('Linea4') }}" name="linea4"
                            class="form-control" value="{{ $brand->linea4 }}" required>
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label class="col-sm-3 col-from-label" for="name">{{ translate('Diseño') }}</label>
                    <div class="col-sm-9">
                        <input type="text" placeholder="{{ translate('Diseño') }}" name="diseno"
                            class="form-control" value="{{ $brand->diseno }}" required>
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label class="col-sm-3 col-from-label" for="name">{{ translate('Resumen') }}</label>
                    <div class="col-sm-9">
                        <textarea rowspan="5" type="text" placeholder="{{ translate('Resumen') }}" name="resumen"
                            class="form-control" value="{{ $brand->resumen }}" required>{{ $brand->resumen }}</textarea>
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label class="col-sm-3 col-from-label" for="name">{{ translate('Pais') }}</label>
                    <div class="col-sm-9">
                        <input type="text" placeholder="{{ translate('Pais') }}" name="pais"
                            class="form-control" value="{{ $brand->pais }}" required>
                    </div>
                </div>

                {{-- <div class="form-group row">
                    <label class="col-sm-3 col-from-label">{{translate('Meta Title')}}</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" name="meta_title" value="{{ $brand->meta_title }}" placeholder="{{translate('Meta Title')}}">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-3 col-from-label">{{translate('Meta Description')}}</label>
                    <div class="col-sm-9">
                        <textarea name="meta_description" rows="8" class="form-control">{{ $brand->meta_description }}</textarea>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-3 col-from-label" for="name">{{translate('Slug')}}</label>
                    <div class="col-sm-9">
                        <input type="text" placeholder="{{translate('Slug')}}" id="slug" name="slug" value="{{ $brand->slug }}" class="form-control">
                    </div>
                </div> --}}
                <div class="form-group mb-0 text-right">
                    <button type="submit" class="btn btn-primary">{{ translate('Save') }}</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
