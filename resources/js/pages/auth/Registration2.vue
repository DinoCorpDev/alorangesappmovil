<template>
    <div class="register d-flex flex-column h-100">
        <layout-navbar-auth />
        <v-container class="flex-grow-1 mb-5">
            <v-row class="wrap pa-5" no-gutters>
                <v-col cols="12">
                    <div class="register-content pa-lg-5 pt-lg-8">
                        <h1 class="register-title">Registro</h1>
                        <v-divider class="my-4" />
                        <v-form class="inputs mb-8" ref="loginForm" lazy-validation @submit.prevent="register()">
                            <v-row>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">
                                        {{ $t("email_address") }}
                                    </span>
                                    <custom-input
                                        type="email"
                                        v-model="form.email"
                                        :error-messages="emailErrors"
                                        @blur="$v.form.email.$touch()"
                                        hide-details="auto"
                                        required
                                    />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">
                                        {{ $t("password") }}
                                    </span>
                                    <custom-input
                                        v-model="form.password"
                                        :error-messages="passwordErrors"
                                        @blur="$v.form.password.$touch()"
                                        type="password"
                                        hide-details="auto"
                                        required
                                    />
                                </v-col>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">
                                        {{ $t("confirm_password") }}
                                    </span>
                                    <custom-input
                                        v-model="form.confirmPassword"
                                        :error-messages="confirmPasswordErrors"
                                        @blur="$v.form.confirmPassword.$touch()"
                                        type="password"
                                        hide-details="auto"
                                        required
                                    />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <label class="label">
                                        <input type="radio" v-model="typePerson" value="natural" />
                                        <span class="body-1 black--text text">Registrar como persona natural</span>
                                        <span class="checkmark"></span>
                                    </label>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <label class="label">
                                        <input type="radio" v-model="typePerson" value="juridical" />
                                        <span class="body-1 black--text text">Registrar como persona jurídica</span>
                                        <span class="checkmark"></span>
                                    </label>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-row>
                                        <v-col cols="12" sm="6">
                                            <span class="black--text body-2 text-uppercase">Primer Nombre</span>
                                            <custom-input
                                                type="text"
                                                v-model="form.name"
                                                :error-messages="nameErrors"
                                                @blur="$v.form.name.$touch()"
                                                hide-details="auto"
                                                required
                                            />
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <span class="black--text body-2 text-uppercase">
                                                Segundo Nombre (Opcional)
                                            </span>
                                            <custom-input
                                                type="text"
                                                v-model="form.secondName"
                                                :error-messages="secondNameErrors"
                                                @blur="$v.form.secondName.$touch()"
                                                hide-details="auto"
                                                required
                                            />
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-row>
                                        <v-col cols="12" sm="6">
                                            <span class="black--text body-2 text-uppercase">Primer Apellido</span>
                                            <custom-input
                                                type="text"
                                                v-model="form.firstLastname"
                                                :error-messages="firstLastnameErrors"
                                                @blur="$v.form.firstLastname.$touch()"
                                                hide-details="auto"
                                                required
                                            />
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <span class="black--text body-2 text-uppercase">Segundo Apellido</span>
                                            <custom-input
                                                type="text"
                                                v-model="form.secondLastname"
                                                :error-messages="secondLastnameErrors"
                                                @blur="$v.form.secondLastname.$touch()"
                                                hide-details="auto"
                                                required
                                            />
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Documento (Representante)</span>
                                    <select-custom light label="--" :items="DocumentType" />
                                </v-col>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Numero de Documento</span>
                                    <custom-input
                                        v-model="form.documentNumber"
                                        :error-messages="documentNumberErrors"
                                        @blur="$v.form.documentNumber.$touch()"
                                        hide-details="auto"
                                        required
                                    />
                                </v-col>
                            </v-row>
                            <v-row v-if="typePerson == 'juridical'">
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Nombre de la Empresa</span>
                                    <custom-input
                                        type="text"
                                        v-model="form.factoryName"
                                        :error-messages="factoryNameErrors"
                                        @blur="$v.form.factoryName.$touch()"
                                        hide-details="auto"
                                        required
                                    />
                                </v-col>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Entidad Comercial</span>
                                    <select-custom light label="--" :items="DocumentType" />
                                </v-col>
                            </v-row>
                            <v-row v-if="typePerson == 'juridical'">
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Documento (Representante)</span>
                                    <custom-button block class="mt-3" text="Añadir Mi Empresa" />
                                </v-col>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Documento (Representante)</span>
                                    <custom-button block class="mt-3" text="Añadir Mi Empresa" />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-row>
                                        <v-col cols="12" md="6">
                                            <span class="black--text body-2 text-uppercase">
                                                Nombre De Dirección (Casa / Oficina)
                                            </span>
                                            <custom-input
                                                type="text"
                                                v-model="form.nameAdress"
                                                :error-messages="nameAdressErrors"
                                                @blur="$v.form.nameAdress.$touch()"
                                                hide-details="auto"
                                                required
                                            />
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <span class="black--text body-2 text-uppercase">
                                                Dirección (Calle / Carrera)
                                            </span>
                                            <custom-input
                                                type="text"
                                                v-model="form.adress"
                                                :error-messages="adressErrors"
                                                @blur="$v.form.adress.$touch()"
                                                hide-details="auto"
                                                required
                                            />
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">
                                        Dirección Adicional (Piso / Apartamento / Oficina)
                                    </span>
                                    <custom-input
                                        type="text"
                                        v-model="form.aditionalAdress"
                                        :error-messages="aditionalAdressErrors"
                                        @blur="$v.form.aditionalAdress.$touch()"
                                        hide-details="auto"
                                        required
                                    />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Codigo Postal</span>
                                    <custom-input
                                        v-model="form.postalCode"
                                        :error-messages="postalCodeErrors"
                                        @blur="$v.form.postalCode.$touch()"
                                        hide-details="auto"
                                        required
                                    />
                                </v-col>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Departamento</span>
                                    <select-custom light label="--" :items="DocumentType" />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Municipio</span>
                                    <select-custom light label="--" />
                                </v-col>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Barrio ( Opcional )</span>
                                    <custom-input
                                        type="text"
                                        v-model="form.barrio"
                                        :error-messages="barrioErrors"
                                        @blur="$v.form.barrio.$touch()"
                                        hide-details="auto"
                                        required
                                    />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Pais</span>
                                    <select-custom light label="--" />
                                </v-col>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Teléfono / Mobil</span>
                                    <v-row>
                                        <v-col cols="12">
                                            <vue-tel-input
                                                v-model="form.phone"
                                                v-bind="mobileInputProps"
                                                :onlyCountries="availableCountries"
                                                @validate="phoneValidate"
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
                            <v-row>
                                <v-col cols="12" md="6">
                                    <label class="label">
                                        <input type="checkbox" v-model="polities" />
                                        <span class="body-1 black--text text">
                                            He podido leer y entiendo la política de privacidad y cookies
                                        </span>
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="label">
                                        <input type="checkbox" v-model="comunication" />
                                        <span class="body-1 black--text text">
                                            Quiero recibir comunicaciones comerciales personalizadas de idovela a través
                                            de email.
                                        </span>
                                        <span class="checkmark"></span>
                                    </label>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <custom-button
                                        block
                                        class="mt-3"
                                        text="Guardar"
                                        type="submit"
                                        color="black"
                                        @click="register"
                                        :disabled="loading"
                                        :loading="loading"
                                    />
                                </v-col>
                            </v-row>
                        </v-form>
                        <auth-footer />
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { mapActions, mapGetters, mapMutations } from "vuex";
import { VueTelInput } from "vue-tel-input";
import snackbar from "../../components/inc/SnackBar";

import CarouselDescription from "../../components/global/CarouselDescription.vue";
import CustomButton from "../../components/global/CustomButton.vue";
import CustomInput from "../../components/global/CustomInput.vue";
import LayoutNavbarAuth from "../../components/global/LayoutNavbarAuth.vue";
import AuthFooter from "./AuthFooter.vue";
import SelectCustom from "../../components/global/SelectCustom.vue";

export default {
    components: {
        VueTelInput,
        snackbar,
        CarouselDescription,
        CustomButton,
        CustomInput,
        LayoutNavbarAuth,
        AuthFooter,
        SelectCustom
    },
    data() {
        return {
            mobileInputProps: {
                inputOptions: {
                    type: "tel",
                    placeholder: "phone number"
                },
                dropdownOptions: {
                    showDialCodeInSelection: false,
                    showFlags: true,
                    showDialCodeInList: true
                },
                autoDefaultCountry: false,
                validCharactersOnly: true,
                mode: "international"
            },
            typePerson: "natural",
            polities: "",
            comunication: "",
            DocumentType: ["(C.C) Cedula de ciudadanía", "NIT"],
            form: {
                name: "",
                secondName: "",
                firstLastname: "",
                secondLastname: "",
                phone: "",
                documentNumber: "",
                nameAdress: "",
                adress: "",
                aditionalAdress: "",
                postalCode: "",
                barrio: "",
                email: "",
                factoryName: "",
                password: "",
                confirmPassword: "",
                invalidPhone: true,
                showInvalidPhone: false
            },
            loading: false
        };
    },
    validations: {
        form: {
            name: { required },
            secondName: { required },
            firstLastname: { required },
            secondLastname: { required },
            email: { required, email },
            phone: { required },
            documentNumber: { required },
            nameAdress: { required },
            adress: { required },
            aditionalAdress: { required },
            postalCode: { required },
            barrio: { required },
            password: { required, minLength: minLength(6) },
            confirmPassword: { required, sameAsPassword: sameAs("password") }
        }
    },
    computed: {
        ...mapGetters("app", ["generalSettings", "availableCountries"]),
        nameErrors() {
            const errors = [];
            if (!this.$v.form.name.$dirty) return errors;
            !this.$v.form.name.required && errors.push(this.$i18n.t("this_field_is_required"));
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
        documentNumberErrors() {
            const errors = [];
            if (!this.$v.form.documentNumber.$dirty) return errors;
            !this.$v.form.documentNumber.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        nameAdressErrors() {
            const errors = [];
            if (!this.$v.form.nameAdress.$dirty) return errors;
            !this.$v.form.nameAdress.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        adressErrors() {
            const errors = [];
            if (!this.$v.form.adress.$dirty) return errors;
            !this.$v.form.adress.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        aditionalAdressErrors() {
            const errors = [];
            if (!this.$v.form.aditionalAdress.$dirty) return errors;
            !this.$v.form.aditionalAdress.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        postalCodeErrors() {
            const errors = [];
            if (!this.$v.form.postalCode.$dirty) return errors;
            !this.$v.form.postalCode.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        barrioErrors() {
            const errors = [];
            if (!this.$v.form.barrio.$dirty) return errors;
            !this.$v.form.barrio.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        factoryNameErrors() {
            const errors = [];
            if (!this.$v.form.factoryName.$dirty) return errors;
            !this.$v.form.factoryName.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        emailErrors() {
            const errors = [];
            if (!this.$v.form.email.$dirty) return errors;
            !this.$v.form.email.required && errors.push(this.$i18n.t("this_field_is_required"));
            !this.$v.form.email.email && errors.push(this.$i18n.t("this_field_is_required_a_valid_email"));
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
        }
    },
    methods: {
        ...mapActions("auth", ["login"]),
        ...mapMutations("auth", ["updateChatWindow", "showLoginDialog"]),
        phoneValidate(phone) {
            this.form.invalidPhone = phone.valid ? false : true;
            if (phone.valid) this.form.showInvalidPhone = false;
        },
        async register() {
            this.$v.form.$touch();

            if (this.form.invalidPhone) {
                this.form.showInvalidPhone = true;
                return;
            }

            if (this.$v.form.$anyError) {
                return;
            }

            this.form.phone = this.form.phone.replace(/\s/g, "");

            this.loading = true;

            const res = await this.call_api("post", "auth/signup", this.form);

            if (res.data.success) {
                this.login(res.data);
                this.showLoginDialog(false);
                this.updateChatWindow(false);
                this.$router.push(this.$route.query.redirect || { name: "RegistrationSuccess" });
            } else {
                this.snack({
                    message: res.data.message,
                    color: "red"
                });
            }

            this.loading = false;
        }
    }
};
</script>

<style lang="scss">
.v-application {
    &.theme--light {
        background: #dee0e0;
    }
}
</style>

<style lang="scss" scoped>
.register {
    height: 100%;

    &-title {
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 0;
        line-height: 30px;
    }

    &-content {
        @media (min-width: 1264px) {
            border: 1px solid #e4e4e4;
            border-radius: 10px;
        }

        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}

.wrap {
    background-color: #fafcfc;
    border-radius: 10px;
}

.v-divider {
    border-color: #e4e4e4 !important;
}

.label {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
}

.label:hover input ~ .checkmark {
    background-color: #f5f5f5;
}

.label input:checked ~ .checkmark {
    background-color: #000000;
    border-radius: 5px;
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.label input:checked ~ .checkmark:after {
    display: block;
}

.label .checkmark:after {
    left: 9px;
    top: 5px;
    width: 7px;
    height: 12px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
</style>
