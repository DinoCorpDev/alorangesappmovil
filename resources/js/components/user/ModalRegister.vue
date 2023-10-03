<template>
    <v-dialog content-class="modal-register" v-model="showRegister">
        <v-card class="modal-register-card">
            <v-card-title class="text-xs-center justify-center primary title white--text darken-2 font-weight-bold">
                REGISTRO
            </v-card-title>
            <v-form
                class="modal-register-form"
                ref="loginForm"
                lazy-validation
                @submit.prevent="register()"
                enctype="multipart/form-data"
            >
                <v-stepper v-model="numberPag" v-if="registerNotification == false">
                    <v-stepper-header>
                        <v-stepper-step
                            :class="numberPag > 1 ? 'v-stepper__step--complete' : ''"
                            class="modal-register-step"
                            step="1"
                        />

                        <v-divider :class="numberPag > 1 ? 'step-active' : ''" />

                        <v-stepper-step
                            :class="numberPag > 2 ? 'v-stepper__step--complete' : ''"
                            class="modal-register-step"
                            step="2"
                        />

                        <v-divider :class="numberPag > 2 ? 'step-active' : ''" />

                        <v-stepper-step class="modal-register-step" step="3" />
                    </v-stepper-header>

                    <v-divider class="modal-register-subheader" />

                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-row>
                                <v-col cols="12" md="12">
                                    <span class="black--text body-2 text-uppercase">
                                        {{ $t("CORREO ELECTRÓNICO O NÚMERO DE TELÉFONO") }}
                                    </span>

                                    <div class="input-group">
                                        <CustomInput
                                            class="place-holder"
                                            placeholder="Ingresar correo electrónico o teléfono"
                                            type="email"
                                            v-model="form.email"
                                            :error-messages="emailErrors"
                                            @blur="$v.form.email.$touch()"
                                            required 
                                        />
                                    </div>

                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <span class="black--text body-2 text-uppercase">
                                        {{ $t("CONTRASEÑA") }}
                                    </span>

                                    
                                    <v-text-field
                                        
                                        v-model="form.password"
                                        placeholder="Ingresar contraseña"
                                        :error-messages="passwordErrors"
                                        @blur="$v.form.password.$touch()"
                                        :type="passwordShow ? 'text' : 'password'"
                                        :append-icon="passwordShow ? 'las la-eye' : 'las la-eye-slash'"
                                        class="input-group--focused place-holder"
                                        hide-details="auto"
                                        required
                                        dense
                                        outlined
                                        @click:append="passwordShow = !passwordShow"
                                        
                                    ></v-text-field>
                                    
                                </v-col>

                                
                                <v-col cols="12" md="12">
                                    <span class="black--text body-2 text-uppercase">
                                        {{ $t("REPETIR CONTRASEÑA") }}
                                    </span>
                                    
                                    <v-text-field
                                        v-model="form.confirmPassword"
                                        placeholder="Ingresar contraseña"
                                        :error-messages="confirmPasswordErrors"
                                        @blur="$v.form.confirmPassword.$touch()"
                                        :type="passwordShowConfirm ? 'text' : 'password'"
                                        :append-icon="passwordShowConfirm ? 'las la-eye' : 'las la-eye-slash'"
                                        class="input-group--focused place-holder"
                                        hide-details="auto"
                                        required
                                        dense 
                                        outlined
                                        @click:append="passwordShowConfirm = !passwordShowConfirm"
                                    ></v-text-field>
                                    
                                </v-col>

                                <v-col cols="12" sm="12">
                                    <CustomCheckbox
                                        inputValue="Natural"
                                        label="Registrar como persona natural"
                                        name="personType"
                                        type="radio"
                                        v-model="form.personType" style="width: 90%; display: inline-flex;"
                                    /> 
                                    <v-tooltip bottom color="black">
                                            <template v-slot:activator="{ on, attrs }" >
                                                
                                                <i class="las la-exclamation-circle icon-tooltip-dos" v-bind="attrs" v-on="on" style="font-size: 35px; transform: rotate(180deg);"></i> 
                                            </template>
                                            <span>Se aplicaran los impuestos al</span>
                                            <br>
                                            <span>facturar como persona juridica</span>
                                        </v-tooltip>
                                </v-col>
                                <v-col cols="12" sm="12" style="margin-bottom: 50px;">
                                    <CustomCheckbox
                                        inputValue="Juridical"
                                        label="Registrar como persona jurídica"
                                        name="personType"
                                        type="radio"
                                        v-model="form.personType" style="width: 90%; display: inline-flex;"
                                    /> 

                                    <v-tooltip bottom color="black">

                                        <template v-slot:activator="{ on, attrs }" >     
                                            <i class="las la-exclamation-circle icon-tooltip-dos" v-bind="attrs" v-on="on" style="font-size: 35px; transform: rotate(180deg);"></i> 
                                        </template>
                                        <span>Se aplicaran los impuestos al</span>
                                        <br>
                                        <span>facturar como persona juridica</span>
                                    </v-tooltip>
                                
                                </v-col>
                            </v-row>
                        </v-stepper-content>

                        <v-stepper-content step="2">
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <span class="black--text body-2 text-uppercase">Primer Nombre</span>
                                    <CustomInput
                                        class="place-holder"
                                        placeholder="Ingresar nombre"
                                        v-model="form.firstName"
                                        :error-messages="firstNameErrors"
                                        @blur="$v.form.firstName.$touch()"
                                        required
                                    />
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <span class="black--text body-2 text-uppercase"> Segundo Nombre (Opcional) </span>
                                    <CustomInput 
                                    class="place-holder"
                                    v-model="form.secondName"
                                    placeholder="Ingresar segundo nombre"
                                    />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <span class="black--text body-2 text-uppercase"> Primer Apellido </span>
                                    <CustomInput
                                        class="place-holder"
                                        placeholder="Ingresar primer apellido"
                                        v-model="form.firstLastname"
                                        :error-messages="firstLastnameErrors"
                                        @blur="$v.form.firstLastname.$touch()"
                                        required
                                    />
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <span class="black--text body-2 text-uppercase"> Segundo Apellido </span>
                                    <CustomInput
                                        class="place-holder"
                                        placeholder="Ingresar segundo apellido"
                                        v-model="form.secondLastname"
                                        :error-messages="secondLastnameErrors"
                                        @blur="$v.form.secondLastname.$touch()"
                                        required
                                    />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12">
                                    <span class="black--text body-2 text-uppercase"> Documento (Representante) </span>
                                    <SelectCustom
                                        placeholder="Seleccionar tipo de documento"
                                        :items="documentTypes"
                                        v-model="form.documentType"
                                        :error-messages="documentTypeErrors"
                                        @blur="$v.form.documentType.$touch()"
                                        required
                                    />
                                </v-col>


                            </v-row>
                            <v-row>
                                <v-col cols="12">
                                    <span class="black--text body-2 text-uppercase">Numero de Documento</span>
                                    <CustomInput
                                        class="place-holder"
                                        placeholder="Ingresar número de documento"
                                        v-model="form.documentNumber"
                                        :error-messages="documentNumberErrors"
                                        @blur="$v.form.documentNumber.$touch()"
                                        required
                                    />
                                </v-col>
                            </v-row>
                            <template v-if="form.personType == 'Juridical'">
                                <v-row>
                                    <v-col cols="12">
                                        <span class="black--text body-2 text-uppercase">Razón Social de la Empresa</span>
                                        <CustomInput
                                            placeholder="Ingrese razón social de la empresa"
                                            class="place-holder"
                                            v-model="form.companyRazon"
                                            :error-messages="companyRazonErrors"
                                            @blur="$v.form.companyRazon.$touch()"
                                            required
                                        />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12">
                                        <span class="black--text body-2 text-uppercase">Entidad Comercial</span>
                                        <SelectCustom
                                            placeholder="Seleccione entidad comercial"
                                            :items="companyTypes"
                                            v-model="form.companyType"
                                            :error-messages="companyTypeErrors"
                                            @blur="$v.form.companyType.$touch()"
                                            required
                                        />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12">
                                        <span class="black--text body-2 text-uppercase">Documento</span>
                                        <SelectCustom
                                            placeholder="Seleccione tipo de documento"
                                            :items="documentTypes"
                                            v-model="form.companyDocumentType"
                                            :error-messages="companyDocumentTypeErrors"
                                            @blur="$v.form.companyDocumentType.$touch()"
                                            required
                                        />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12">
                                        <span class="black--text body-2 text-uppercase">
                                            Numero de
                                            {{ form.companyDocumentType ? form.companyDocumentType : "Documento" }}
                                        </span>
                                        <CustomInput
                                            class="place-holder"
                                            placeholder="Indicar número de documento"
                                            v-model="form.companyDocumentNumber"
                                            :error-messages="companyDocumentNumberErrors"
                                            @blur="$v.form.companyDocumentNumber.$touch()"
                                            required
                                        />
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="12" md="12">
                                        <span class="black--text body-2 text-uppercase">
                                            {{ $t("CORREO ELECTRÓNICO O NÚMERO DE TELÉFONO") }}
                                        </span>

                                        <div class="input-group">
                                            <CustomInput
                                                class="place-holder"
                                                placeholder="Ingresar correo electrónico o teléfono"
                                                type="email"
                                                v-model="form.companyEmail"
                                                :error-messages="companyEmailErrors"
                                                @blur="$v.form.companyEmail.$touch()"
                                                required 
                                            />
                                        </div>

                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="12" md="12">
                                        <span class="black--text body-2 text-uppercase">Teléfono / Celular (Área Contable)</span>
                                        <v-row>
                                            <v-col cols="12">
                                                <vue-tel-input
                                                    placeholder="Ingresar teléfono / celular"
                                                    v-model="form.companyPhone"
                                                    v-bind="mobileInputProps"
                                                    :onlyCountries="availableCountries"
                                                    @blur="$v.form.companyPhone.$touch()"
                                                    :class="{
                                                        'error--text': $v.form.companyPhone.$error || form.showInvalidPhone
                                                    }"
                                                    class="place-holder"
                                                    >
                                                    <template slot="arrow-icon">
                                                        <span class="vti__dropdown-arrow">&nbsp;▼</span>
                                                    </template>
                                                </vue-tel-input>
                                                <div class="v-text-field__details mt-2 pl-3" v-if="$v.form.companyPhone.$error">
                                                    <div class="v-messages theme--light error--text" role="alert">
                                                        <div class="v-messages__wrapper">
                                                            <div class="v-messages__message">
                                                                {{ $t("this_field_is_required") }}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="v-text-field__details mt-2 pl-3"
                                                    v-if="!$v.form.companyPhone.$error && form.showInvalidPhone"
                                                >
                                                    <div class="v-messages theme--light error--text" role="alert">
                                                        <div class="v-messages__wrapper">
                                                            <div class="v-messages__message">
                                                                {{ $t("phone_number_must_be_valid") }}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>

                                 <v-row>
                                    <v-col cols="12" md="12">
                                        <span class="black--text body-2 text-uppercase">
                                            {{ $t("ACTIVIDAD ECONOMICA (CÓDIGO CIIU)") }}
                                        </span>

                                        <div class="input-group">
                                            <CustomInput
                                                class="place-holder"
                                                placeholder="Ingresar actividad economica"
                                                type="text"
                                                v-model="form.companyActividad"
                                                :error-messages="firstLastnameErrors"
                                                @blur="$v.form.companyActividad.$touch()"
                                                required 
                                            />
                                        </div>

                                    </v-col>
                                </v-row>


                                <v-row>
                                    <v-col cols="12" class="texto-upload">
                                        <span class="black--text body-2 text-uppercase"> DOCUMENTO (ARCHIVO) </span>
                                    </v-col>
                                    <v-col cols="10" class="area-upload">
                                        <v-file-input
                                            placeholder="SUBIR DOCUMENTO"
                                            class="form-control upload"
                                            v-model="form.filedocumento"
                                            accept="application/pdf"
                                        >
                                        <template v-slot:label>
                                            <ArrowUpload />
                                            <span>SUBIR DOCUMENTO</span>
                                        </template>

                                        </v-file-input>
                                    </v-col>
                                    <v-col cols="2" class="icono-documento">
                                        <v-tooltip bottom color="black">
                                            <template v-slot:activator="{ on, attrs }" >
                                                
                                                <i class="las la-exclamation-circle icon-tooltip-dos" v-bind="attrs" v-on="on" style="font-size: 35px; transform: rotate(180deg);"></i> 
                                            </template>
                                            <span>&bullet; Documentos en formato PDF</span>
                                            <br>
                                            <span>&bullet; Ambas caras de ID ampliadas al 150</span>
                                            <br>
                                            <span>&bullet; Documento legible y en color</span>
                                        </v-tooltip>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="12" class="texto-upload">
                                        <span class="black--text body-2 text-uppercase">
                                            Numero de CAMARA DE COMERCIO (ARCHIVO)
                                        </span>
                                    </v-col>
                                    <v-col cols="10" class="area-upload">

                                        <!-- REVISAR--------------------------------- -->
                                        <v-file-input
                                            
                                            class="form-control upload"
                                            v-model="form.filecamara"
                                            accept="application/pdf"
                                            single-line
                                        >
                                        
                                            <template v-slot:label>
                                                <ArrowUpload />
                                                <span>SUBIR DOCUMENTO</span>
                                            </template>

                                        </v-file-input>

                                        <!-- REVISAR--------------------------------- -->

                                    </v-col>
                                    <v-col cols="2" class="icono-documento">
                                        <!--<i class="las la-exclamation-circle icon-tooltip-dos" style="font-size: 35px; transform: rotate(180deg);" data-title=" - Documentos en formato PDF.\n- RUT actualizado"></i>-->
                                        <v-tooltip bottom color="black">
                                            <template v-slot:activator="{ on, attrs }" >
                                                
                                                <i class="las la-exclamation-circle icon-tooltip-dos" v-bind="attrs" v-on="on" style="font-size: 35px; transform: rotate(180deg);"></i> 
                                            </template>
                                            <span>&bullet; Documentos en formato PDF</span>
                                            <br>
                                            <span>&bullet; Cámara de comercio no mayor a 90 días</span>
                                        </v-tooltip>

                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="12" class="texto-upload">
                                        <span class="black--text body-2 text-uppercase">
                                            RUT (ARCHIVO)
                                        </span>
                                    </v-col>
                                    <v-col cols="10" class="area-upload">
                                        <v-file-input
                                            placeholder="SUBIR DOCUMENTO"
                                            class="form-control upload"
                                            v-model="form.filerut"
                                            accept="application/pdf"
                                        >
                                        <template v-slot:label>
                                                <ArrowUpload />
                                                <span>SUBIR DOCUMENTO</span>
                                            </template>

                                        </v-file-input>
                                    </v-col>
                                    <v-col cols="2" class="icono-documento">

                                        <v-tooltip bottom color="black">
                                            <template v-slot:activator="{ on, attrs }" >
                                                
                                                <i class="las la-exclamation-circle icon-tooltip-dos" v-bind="attrs" v-on="on" style="font-size: 35px; transform: rotate(180deg);"></i> 
                                            </template>
                                            <span>&bullet; Documentos en formato PDF</span>
                                            <br>
                                            <span>&bullet; RUT actualizado</span>
                                        </v-tooltip>
                                    </v-col>
                                </v-row>
                            </template>
                        </v-stepper-content>

                        <v-stepper-content step="3">
                            <v-row>
                                <v-col cols="12" md="12">
                                    <span class="black--text body-2 text-uppercase">Pais</span>
                                    <SelectCustom
                                        placeholder="Seleccionar país"
                                        :error-messages="countryErrors"
                                        :items="countries"
                                        @blur="$v.mainAddress.country.$touch()"
                                        @input="countryChanged"
                                        item-text="name"
                                        item-value="id"
                                        required
                                        v-model="mainAddress.country"
                                    />
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">
                                        Nombre De Dirección (Casa / Oficina)
                                    </span>
                                    <CustomInput
                                        class="place-holder"
                                        placeholder="Ingresar nombre de dirección"
                                        v-model="mainAddress.name"
                                        :error-messages="addressNameErrors"
                                        @blur="$v.mainAddress.name.$touch()"
                                        required
                                    />
                                </v-col>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase"> Dirección (Calle / Carrera) </span>
                                    <CustomInput
                                        class="place-holder"
                                        placeholder="Ingresar calle / carrera"
                                        v-model="mainAddress.address"
                                        :error-messages="addressErrors"
                                        @blur="$v.mainAddress.address.$touch()"
                                        required
                                    />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <span class="black--text body-2 text-uppercase">
                                        Dirección Adicional (Piso / Apartamento / Oficina)
                                    </span>
                                    <CustomInput
                                        class="place-holder"
                                        placeholder="Ingresar Piso / Apartamento / Oficina"
                                        v-model="mainAddress.details"
                                        :error-messages="addressDetailsErrors"
                                        @blur="$v.mainAddress.details.$touch()"
                                        required
                                    />
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" md="12">
                                    <span class="black--text body-2 text-uppercase">Codigo Postal</span>
                                    <CustomInput
                                        class="place-holder"
                                        placeholder="Ingresar código postal"
                                        v-model="mainAddress.postal_code"
                                        :error-messages="postalCodeErros"
                                        @blur="$v.mainAddress.postal_code.$touch()"
                                        required
                                    />
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" md="12">
                                    <span class="black--text body-2 text-uppercase">Departamento</span>
                                    <SelectCustom
                                        placeholder="Seleccionar departamento"
                                        :error-messages="stateErrors"
                                        :items="filteredStates"
                                        @blur="$v.mainAddress.state.$touch()"
                                        @input="stateChanged"
                                        item-text="name"
                                        item-value="id"
                                        required
                                        v-model="mainAddress.state"
                                    />
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" md="12">
                                    <span class="black--text body-2 text-uppercase">Municipio</span>
                                    <SelectCustom
                                        placeholder="Seleccionar municipio"
                                        :error-messages="cityErrors"
                                        :items="filteredCities"
                                        @blur="$v.mainAddress.city.$touch()"
                                        item-text="name"
                                        item-value="id"
                                        required
                                        v-model="mainAddress.city"
                                    />
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" md="12">
                                    <span class="black--text body-2 text-uppercase">Barrio ( Opcional )</span>
                                    <CustomInput 
                                        class="place-holder"  
                                        placeholder="Ingresar barrio" 
                                        v-model="mainAddress.neighborhood" />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <span class="black--text body-2 text-uppercase">Teléfono / Celular</span>
                                    <v-row>
                                        <v-col cols="12">
                                            <vue-tel-input
                                                placeholder="Ingresar teléfono / celular"
                                                v-model="form.phone"
                                                v-bind="mobileInputProps"
                                                :onlyCountries="availableCountries"
                                                @blur="$v.form.phone.$touch()"
                                                :class="{
                                                    'error--text': $v.form.phone.$error || form.showInvalidPhone
                                                }"
                                                class="place-holder"
                                                >
                                                <template slot="arrow-icon">
                                                    <span class="vti__dropdown-arrow">&nbsp;▼</span>
                                                </template>
                                            </vue-tel-input>
                                            <div class="v-text-field__details mt-2 pl-3" v-if="$v.form.phone.$error">
                                                <div class="v-messages theme--light error--text" role="alert">
                                                    <div class="v-messages__wrapper">
                                                        <div class="v-messages__message">
                                                            {{ $t("this_field_is_required") }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="v-text-field__details mt-2 pl-3"
                                                v-if="!$v.form.phone.$error && form.showInvalidPhone"
                                            >
                                                <div class="v-messages theme--light error--text" role="alert">
                                                    <div class="v-messages__wrapper">
                                                        <div class="v-messages__message">
                                                            {{ $t("phone_number_must_be_valid") }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>

                <div align="center" style="height: 300px; margin-top: 50px; margin-right: 20px; margin-left: 20px;" v-if="registerNotification">
                    <i class="las la-check" style="color: green;font-size: 80px;"></i>
                    <br><br>

                    <h5 align="center">¡Gracias por registrarse!</h5>
                    <br><br>
                    <p> Hemos enviado una notificación de confirmación a su dirección de correo electrónico registrado. </p>
                </div> 
            </v-form>

            <v-card-actions class="pa-5" v-if="registerNotification == false">
                <CustomButtonR
                    v-if="numberPag > 1"
                    icon="la-angle-left"
                    text="Volver"
                    color="nero"
                    type="button"
                    @click="before"
                    text-class="mr-6"
                />
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <CustomButtonR
                    v-if="numberPag == 3"
                    text="Omitir"
                    color="white2"
                    type="button"
                    @click="showRegister = false"
                    class="boton-redondo"
                />
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <CustomButtonR
                    v-if="numberPag < 3"
                    icon="la-angle-right"
                    iconPosition="right"
                    text="Continuar"
                    color="nero"
                    type="button"
                    class="boton-continuar" 
                    text-class="ml-6"
                    @click="after"

                />
                <CustomButtonR
                    v-if="numberPag == 3"
                    icon="la-angle-right"
                    iconPosition="right"
                    text="Registrame"
                    color="nero"
                    type="submit"
                    text-class="ml-6"
                    @click="register"
                    :disabled="loadingregister"
                    :loadingregister="loadingregister"
                />
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { VueTelInput } from "vue-tel-input";
import { mapActions, mapGetters, mapMutations } from "vuex";
import { required, requiredIf, email, minLength, sameAs } from "vuelidate/lib/validators";

import CustomButtonR from "../../components/global/CustomButtonRegister.vue";
import CustomCheckbox from "../../components/global/CustomCheckbox.vue";
import CustomInput from "../../components/global/CustomInput.vue";
import SelectCustom from "../../components/global/SelectCustom.vue";
import snackbar from "../../components/inc/SnackBar";
import ArrowUpload from "../../components/icons/ArrowUpload.vue";

// Custom validators
const isTrue = value => value === true;

export default {
    props: {
        value: Boolean
    },
    components: {
        ArrowUpload,
        CustomButtonR,
        CustomCheckbox,
        CustomInput,
        SelectCustom,
        VueTelInput,
        snackbar
    },
    data() {
        return {
            registerNotification: false,
            mobileInputProps: {
                inputOptions: {
                    type: "tel",
                    placeholder: "Ingresar teléfono / celular"
                },
                dropdownOptions: {
                    showDialCodeInSelection: false,
                    showFlags: true,
                    showDialCodeInList: true,
                    showSearchBox: true
                },
                autoDefaultCountry: false,
                validCharactersOnly: true,
                mode: "international"
            },
            countriesLoaded: false,
            countries: [],
            filteredStates: [],
            filteredCities: [],
            documentTypes: [
                { text: "(C.C) Cedula de ciudadanía", value: "C.C" },
                { text: "(R.C) Registro Civil", value: "R.C" },
                { text: "(C.E) Cédula de Extranjería", value: "C.E" },
                { text: "(NIP) Numero de Identificación Personal", value: "N.I.P" },
                { text: "(NUIP) Numero Ùnico de Identificación Personal", value: "N.U.I.P" },
                { text: "(NES) Numero de Secretaría", value: "N.E.S" }
            ],
            companyTypes: [{ text: "(S.A.S) Sociedad por acciones simplificadas", value: "S.A.S" }],
            form: {
                email: "",
                password: "",
                confirmPassword: "",
                personType: "Natural",
                firstName: "",
                secondName: "",
                firstLastname: "",
                secondLastname: "",
                documentType: "",
                documentNumber: "",
                companyRazon: "",
                companyType: "",
                companyDocumentType: "",
                companyDocumentNumber: "",
                companyActividad: "",
                companyPhone: "",
                companyEmail: "",
                phone: "",
                policiesAndCookiesConsent: false,
                offersConsent: false,
                invalidPhone: true,
                showInvalidPhone: false,
                filedocumento: [],
                filecamara: [],
                filerut: []
            },
            mainAddress: {
                customer_id: null,
                address: "",
                name: "",
                details: "",
                country: "",
                state: "",
                city: "",
                neighborhood: "",
                postal_code: "",
                phone: "",
                type: "shipping"
            },
            loadingregister: false,
            numberPag: 1,
            passwordShow: false,
            passwordShowConfirm: false
        };
    },
    validations: {
        form: {
            email: { required, email },
            password: { required, minLength: minLength(6) },
            confirmPassword: { required, sameAsPassword: sameAs("password") },
            personType: { required },
            firstName: { required },
            firstLastname: { required },
            secondLastname: { required },
            documentType: { required },
            documentNumber: { required },
            companyRazon: { requiredIf: requiredIf(item => item.personType === "Juridical") },
            companyType: { requiredIf: requiredIf(item => item.personType === "Juridical") },
            companyDocumentType: { requiredIf: requiredIf(item => item.personType === "Juridical") },
            companyDocumentNumber: { requiredIf: requiredIf(item => item.personType === "Juridical") },
            companyActividad: { requiredIf: requiredIf(item => item.personType === "Juridical") },
            companyPhone: { requiredIf: requiredIf(item => item.personType === "Juridical") },
            companyEmail: { requiredIf: requiredIf(item => item.personType === "Juridical") },
            phone: { required }
        },
        mainAddress: {
            address: { required },
            name: { required },
            details: { required },
            country: { required },
            state: { required },
            city: { required },
            postal_code: { required }
        }
    },
    computed: {
        ...mapGetters("app", ["generalSettings", "availableCountries"]),
        emailErrors() {
            const errors = [];
            if (!this.$v.form.email.$dirty) return errors;
            !this.$v.form.email.required && errors.push(this.$i18n.t("this_field_is_required"));
            !this.$v.form.email.email && errors.push(this.$i18n.t("this_field_is_required_a_valid_email"));
            return errors;
        },
        companyEmailErrors() {
            const errors = [];
            if (!this.$v.form.companyEmail.$dirty) return errors;
            !this.$v.form.companyEmail.required && errors.push(this.$i18n.t("this_field_is_required"));
            !this.$v.form.companyEmail.email && errors.push(this.$i18n.t("this_field_is_required_a_valid_email"));
            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.form.password.$dirty) return errors;
            !this.$v.form.password.required && errors.push(this.$i18n.t("this_field_is_required"));
            !this.$v.form.password.minLength && errors.push(this.$i18n.t("password_must_be_minimum_6_characters"));
            return errors;
        },
        confirmPasswordErrors() {
            const errors = [];
            if (!this.$v.form.confirmPassword.$dirty) return errors;
            !this.$v.form.confirmPassword.required && errors.push(this.$i18n.t("this_field_is_required"));
            !this.$v.form.confirmPassword.sameAsPassword &&
                errors.push(this.$i18n.t("password_and_confirm_password_should_match"));
            return errors;
        },
        personTypeErrors() {
            const errors = [];
            if (!this.$v.form.personType.$dirty) return errors;
            !this.$v.form.personType.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        firstNameErrors() {
            const errors = [];
            if (!this.$v.form.firstName.$dirty) return errors;
            !this.$v.form.firstName.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        secondNameErrors() {
            const errors = [];
            if (!this.$v.form.secondName.$dirty) return errors;
            !this.$v.form.secondName.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        firstLastnameErrors() {
            const errors = [];
            if (!this.$v.form.firstLastname.$dirty) return errors;
            !this.$v.form.firstLastname.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        secondLastnameErrors() {
            const errors = [];
            if (!this.$v.form.secondLastname.$dirty) return errors;
            !this.$v.form.secondLastname.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        documentTypeErrors() {
            const errors = [];
            if (!this.$v.form.documentType.$dirty) return errors;
            !this.$v.form.documentType.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        documentNumberErrors() {
            const errors = [];
            if (!this.$v.form.documentNumber.$dirty) return errors;
            !this.$v.form.documentNumber.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        companyRazonErrors() {
            const errors = [];
            if (!this.$v.form.companyRazon.$dirty) return errors;
            !this.$v.form.companyRazon.requiredIf && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        companyTypeErrors() {
            const errors = [];
            if (!this.$v.form.companyType.$dirty) return errors;
            !this.$v.form.companyType.requiredIf && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        companyDocumentTypeErrors() {
            const errors = [];
            if (!this.$v.form.companyDocumentType.$dirty) return errors;
            !this.$v.form.companyDocumentType.requiredIf && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        companyDocumentNumberErrors() {
            const errors = [];
            if (!this.$v.form.companyDocumentNumber.$dirty) return errors;
            !this.$v.form.companyDocumentNumber.requiredIf && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        actividadErrors() {
            const errors = [];
            if (!this.$v.form.companyActividad.$dirty) return errors;
            !this.$v.form.companyActividad.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        addressErrors() {
            const errors = [];
            if (!this.$v.mainAddress.address.$dirty) return errors;
            !this.$v.mainAddress.address.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        addressNameErrors() {
            const errors = [];
            if (!this.$v.mainAddress.name.$dirty) return errors;
            !this.$v.mainAddress.name.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        addressDetailsErrors() {
            const errors = [];
            if (!this.$v.mainAddress.details.$dirty) return errors;
            !this.$v.mainAddress.details.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        countryErrors() {
            const errors = [];
            if (!this.$v.mainAddress.country.$dirty) return errors;
            !this.$v.mainAddress.country.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        stateErrors() {
            const errors = [];
            if (!this.$v.mainAddress.state.$dirty) return errors;
            !this.$v.mainAddress.state.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        cityErrors() {
            const errors = [];
            if (!this.$v.mainAddress.city.$dirty) return errors;
            !this.$v.mainAddress.city.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        postalCodeErros() {
            const errors = [];
            if (!this.$v.mainAddress.postal_code.$dirty) return errors;
            !this.$v.mainAddress.postal_code.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        fileDocumentoErrors() {
            const errors = [];
            console.log(this.$v.form.filedocumento);
            if (!this.$v.form.filedocumento.$dirty) return errors;
            !this.$v.form.filedocumento.requiredIf && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        fileCamaraErrors() {
            const errors = [];
            if (!this.$v.form.filecamara.$dirty) return errors;
            !this.$v.form.filecamara.requiredIf && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        fileRutErrors() {
            const errors = [];
            if (!this.$v.form.filerut.$dirty) return errors;
            !this.$v.form.filerut.requiredIf && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        showRegister: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            }
        }
    },
    mounted(){
    },
    created() {
        this.resetData();
        this.registerNotification = false;
        this.numberPag = 1;
        this.fetchCountries();
    },
    methods: {
        ...mapActions("auth", ["login"]),
        ...mapMutations("auth", ["updateChatWindow", "showLoginDialog"]),
        phoneValidate(phone) {
            this.form.invalidPhone = phone.valid ? false : true;
            if (phone.valid) this.form.showInvalidPhone = false;
        },
        onFileChange(e) {
            console.log(e.target.files[0]);
            this.form.filedocumento = e.target.files[0];
        },
        onFileChangeCamara(e) {
            console.log(e.target.files[0]);
            this.form.filecamara = e.target.files[0];
        },
        onFileChangeRut(e) {
            console.log(e.target.files[0]);
            this.form.filerut = e.target.files[0];
        },
        async register() {
            this.$v.form.$touch();
            this.$v.mainAddress.$touch();

            /*if (this.form.invalidPhone) {
                this.form.showInvalidPhone = true;
                return;
            }*/

            if (this.$v.form.$anyError || this.$v.mainAddress.$anyError) {
                return;
            }

            if (this.form.personType == "Juridical") {
                if (
                    this.form.filecamara.length == 0 ||
                    this.form.filedocumento.length == 0 ||
                    this.form.filerut.length == 0
                ) {
                    this.snack({
                        message: "Por favor cargue los archivos!",
                        color: "red"
                    });
                    return;
                }
            }

            this.form.phone = this.form.phone.replace(/\s/g, "");
            this.mainAddress.phone = this.form.phone;

            this.loadingregister = true;
            let formData = new FormData();

            formData.append("filecamara", this.form.filecamara);
            formData.append("filedocumento", this.form.filedocumento);
            formData.append("filerut", this.form.filerut);
            formData.append("form", JSON.stringify(this.form));

            const res = await this.call_api("post", "auth/signup", formData, true);

            if (res.data.success) {
                this.mainAddress.customer_id = res.data.user.id;

                this.snack({
                    message: res.data.message,
                    color: "green"
                });

                await this.saveAddress().then(() => {
                    this.showLoginDialog(false);
                    this.updateChatWindow(false);
                });

                this.resetData();
                this.registerNotification = true;
                //this.showRegister = false;
            } else {
                this.snack({
                    message: res.data.message,
                    color: "red"
                });
            }

            this.loadingregister = false;
        },
        async fetchCountries() {
            if (!this.countriesLoaded) {
                const res = await this.call_api("get", "all-countries");
                if (res.data.success) {
                    this.countriesLoaded = true;
                    this.countries = res.data.data;
                }
            }
        },
        async countryChanged(countryid) {
            const res = await this.call_api("get", `states/${countryid}`);
            if (res.data.success) {
                this.filteredStates = res.data.data;
                this.form.state = "";
                this.form.city = "";
                this.filteredCities = [];
            } else {
                this.snack({
                    message: this.$i18n.t("something_went_wrong"),
                    color: "red"
                });
            }
        },
        async stateChanged(stateid) {
            const res = await this.call_api("get", `cities/${stateid}`);
            if (res.data.success) {
                this.filteredCities = res.data.data;
                this.form.city = "";
            } else {
                this.snack({
                    message: this.$i18n.t("something_went_wrong"),
                    color: "red"
                });
            }
        },
        async saveAddress() {
            this.mainAddress.phone = this.form.phone;

            try {
                const res = await this.call_api("post", "user/address/createRegister", this.mainAddress);

                if (res.data.success) {
                    return res.data;
                } else {
                    this.snack({
                        message: res.data.message,
                        color: "red"
                    });
                }
            } catch (error) {
                this.snack({
                    message: this.$i18n.t("something_went_wrong"),
                    color: "red"
                });
            }
        },
        async after() {
            if(this.numberPag == 1){
                if(this.form.email == '' || this.form.password == '' || this.form.confirmPassword == '' || (this.form.password != this.form.confirmPassword)){
                    this.$v.form.$touch();
                    return;
                }
            }

            if(this.numberPag == 2){
                if(this.form.firstName == '' || this.form.firstLastname == '' || this.form.secondLastname == '' || this.form.documentType == '' || this.form.documentNumber == ''){
                    this.$v.form.$touch();
                    return;
                }

                if(this.form.personType == 'Juridical' && (this.form.companyRazon == '' || this.form.companyType == '' || this.form.companyDocumentType == '' || this.form.companyDocumentNumber == '' || this.form.companyEmail == '' || this.form.companyActividad == '' || this.form.companyPhone == '')){
                    this.$v.form.$touch();
                    return;
                }

                 if ( this.form.personType == 'Juridical' && (
                    this.form.filecamara.length == 0 ||
                    this.form.filedocumento.length == 0 ||
                    this.form.filerut.length == 0
                )) {
                    this.snack({
                        message: "Por favor cargue los archivos!",
                        color: "red"
                    });
                    return;
                }
            }

            return (this.numberPag += 1);
        },
        async before() {
            return (this.numberPag -= 1);
        },
        resetData() {
            this.form.email = "";
            this.form.password = "";
            this.form.confirmPassword = "";
            this.form.personType = "Natural";
            this.form.firstName = "";
            this.form.secondName = "";
            this.form.firstLastname = "";
            this.form.secondLastname = "";
            this.form.documentType = "";
            this.form.documentNumber = "";
            this.form.companyRazon = "";
            this.form.companyType = "";
            this.form.companyDocumentType = "";
            this.form.companyDocumentNumber = "";
            this.form.companyActividad = "";
            this.form.companyPhone = "";
            this.form.companyEmail = "";
            this.form.filecamara = "";
            this.form.filedocumento = "";
            this.form.filerut = "";
            this.form.phone = "";
            this.form.policiesAndCookiesConsent = false;
            this.form.offersConsent = false;
            this.form.invalidPhone = true;
            this.form.showInvalidPhone = false;

            this.mainAddress.customer_id = null;
            this.mainAddress.address = "";
            this.mainAddress.name = "";
            this.mainAddress.details = "";
            this.mainAddress.country = "";
            this.mainAddress.state = "";
            this.mainAddress.city = "";
            this.mainAddress.neighborhood = "";
            this.mainAddress.postal_code = "";
            this.mainAddress.phone = "";
            this.mainAddress.type = "shipping";

            this.numberPag = 1;
            
            this.$v.form.$reset();
            this.$v.mainAddress.$reset();
        }
    }
};

</script>

<style lang="scss">
.modal-register {
    max-width: 550px;
}
.custom-checkbox {
    &-checkmark {
        margin-left: 5px;
    }
}

.icon-tooltip-uno[data-title]:hover::after {
        content: attr(data-title);
        position: absolute;
        /*top: 70%;*/
        bottom: 80%;
        left: 0;
        z-index: 999;
        color: white;
        background-color: grey;
        font-size: 15px;
        padding: 20px;
        width: 300px;
        border-radius: 10px;
        font-style: normal;
        transform: rotate(180deg);
        
      }

.icon-tooltip-dos[data-title]:hover::after {
        content: attr(data-title);
        position: absolute;
        /*top: 70%;*/
        bottom: 80%;
        left: 0;
        z-index: 500;
        color: white;
        background-color: grey;
        font-size: 15px;
        padding: 20px;
        width: 300px;
        border-radius: 10px;
        font-style: normal;
        transform: rotate(180deg);
        opacity: 1;
        
      }


</style>

<style lang="scss" scoped>
.modal-register {
    &-card {
        border-radius: 10px;
    }

    .v-stepper__header {
        box-shadow: none;

        .v-divider {
            border-color: rgba(#707070, 0.5) !important;
            border-width: 2px 0 0;

            &.step-active {
                border-color: #707070 !important;
            }
        }
    }

    &-subheader {
        width: 92%;
        margin: auto;
        border-width: 2px 0 0;
    }

    .v-stepper {
        box-shadow: none;

        &.theme--light {
            &::v-deep {
                .v-stepper__step {
                    &:not(.v-stepper__step--active) {
                        .v-stepper__step__step {
                            background: rgba(#000000, 0.25);
                        }
                    }

                    &.v-stepper__step--complete {
                        .v-stepper__step__step {
                            background: rgba(0, 0, 0, 0.87);
                        }
                    }
                }
            }
        }
    }

    &-step {
        &::v-deep {
            .v-stepper__step__step {
                font-size: 15px;
                line-height: 1;
                width: 27px;
                height: 27px;
                padding-top: 5px;
                margin-right: 0;
            }
        }
    }
}


.custom-checkbox {
    padding-left: 40px;
    border: 1px solid;
    border-radius: 5px;

    &-checkmark {
        margin-left: 5px;
    }
}
.v-divider {
    border-color: #e4e4e4 !important;
}

.vue-tel-input {
    background: #f5f5f5;
    border-color: #f5f5f5;
    height: 38px;
    border-radius: 5px;

    &:focus-within {
        box-shadow: none;
    }

    &.error--text {
        border-color: currentColor;
        border-width: 2px;
    }

    &:hover {
        background: #dfdfdf;
    }
}

.theme--light {
    .v-input {
        &::v-deep {
            .v-input__slot {
                background: #f5f5f5;

                &:hover {
                    background: #dfdfdf;
                }
            }
        }

        &.v-text-field--outlined {
            &::v-deep {
                &:not(.v-input--has-state) {
                    .v-input__slot {

                        &:hover,
                        fieldset {
                            border-color: #f5f5f5;
                        }
                    }
                }
            }
        }
    }
}

.place-holder {
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  letter-spacing: 0.5px;

    &::v-deep {
            .v-input__control,
            .v-input__slot {
                min-height: 38px;
            }

            ::placeholder {
            visibility: hidden;
            }

            :hover::placeholder {
                visibility: visible;
                font-style: italic;
            }
            &:not(.v-input--has-state) {
            .v-input__slot fieldset {
                color: #dfdfdf;
            }
        }
    }
}


.v-btn {
    &::v-deep {
        .v-btn__content {
            margin-top: 2px;
            
        }
    }
}


.boton-redondo{
    height: 100px;
    width: 150px;
    border: 1px solid #e2e2e2;
    border-radius: 100px;
}

.boton-redondo:hover{
    background: #dfdfdf;
    border: 1px solid #e2e2e2;
}

.upload {

    
    border-radius: 100px;
    width: 100%;

    &::v-deep {

        .v-label{

            right: 0% !important;
            text-align: center;

            }

        .v-input__slot{
            cursor: pointer;
        }

        .v-text-field__slot{
            .v-label--active{
                display: none;
            }
        }
    }
}

.theme--light{
    .v-text-field:not(.v-input--has-state){
        &::v-deep{
            &:hover{
                .v-input__control{
                    .v-input__slot{
                        &::before{
                            border-color: white;
                        }
                    }
                }
            }
        }
    }

    .v-text-field{

        &::v-deep{
            .v-input__control{
                .v-input__slot{
                    
                    // position: relative;

                    &::before{
                        border-color: white;
                    }
                    // .v-text-field__slot{
                    //     position: absolute;
                    //     top:20%;
                    //     left: 50%;
                    // }            
                }    
            }
        }    
    }
}


.upload{

    &::v-deep{
        .v-input__control{

            .v-input__slot{

                // .v-text-field__slot{
                //     position: absolute;
                //     top: 20%;
                //     left: 50%;
                // }
            }
        }
    }
}


.icono-documento{
    display: flex;
    align-items: center;
    margin-bottom: 7.5px;
}

.texto-upload{
    padding-top: 0px;
    padding-bottom: 0px;
}

.area-upload{
    padding-top: 0px;
    padding-bottom: 0px;
}

.upload{

    &::v-deep{
        .v-input__prepend-outer{
            
            display: none !important;
            
        }
    }
}

</style>
