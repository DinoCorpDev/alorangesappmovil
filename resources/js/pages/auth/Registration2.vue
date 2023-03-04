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
                                        <input type="radio" v-model="form.personType" value="natural" />
                                        <span class="body-1 black--text text">Registrar como persona natural</span>
                                        <span class="checkmark"></span>
                                    </label>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <label class="label">
                                        <input type="radio" v-model="form.personType" value="juridical" />
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
                                                v-model="form.firstName"
                                                :error-messages="firstNameErrors"
                                                @blur="$v.form.firstName.$touch()"
                                                hide-details="auto"
                                                required
                                            />
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <span class="black--text body-2 text-uppercase">
                                                Segundo Nombre (Opcional)
                                            </span>
                                            <custom-input v-model="form.secondName" hide-details="auto" />
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-row>
                                        <v-col cols="12" sm="6">
                                            <span class="black--text body-2 text-uppercase">Primer Apellido</span>
                                            <custom-input
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
                                    <select-custom
                                        :items="documentTypes"
                                        v-model="form.documentType"
                                        :error-messages="documentTypeErrors"
                                        @blur="$v.form.documentType.$touch()"
                                        hide-details="auto"
                                        required
                                    />
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
                            <v-row v-if="form.personType == 'juridical'">
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Nombre de la Empresa</span>
                                    <custom-input
                                        v-model="form.companyName"
                                        :error-messages="companyNameErrors"
                                        @blur="$v.form.companyName.$touch()"
                                        hide-details="auto"
                                        required
                                    />
                                </v-col>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Entidad Comercial</span>
                                    <select-custom
                                        :items="companyTypes"
                                        v-model="form.companyType"
                                        :error-messages="companyTypeErrors"
                                        @blur="$v.form.companyType.$touch()"
                                        hide-details="auto"
                                        required
                                    />
                                </v-col>
                            </v-row>
                            <v-row v-if="form.personType == 'juridical'">
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Documento</span>
                                    <select-custom
                                        :items="documentTypes"
                                        v-model="form.companyDocumentType"
                                        :error-messages="companyDocumentTypeErrors"
                                        @blur="$v.form.companyDocumentType.$touch()"
                                        hide-details="auto"
                                        required
                                    />
                                </v-col>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">
                                        Numero de
                                        {{ form.companyDocumentType ? form.companyDocumentType : "Documento" }}
                                    </span>
                                    <custom-input
                                        v-model="form.companyDocumentNumber"
                                        :error-messages="companyDocumentNumberErrors"
                                        @blur="$v.form.companyDocumentNumber.$touch()"
                                        hide-details="auto"
                                        required
                                    />
                                </v-col>
                            </v-row>
                            <v-row v-if="form.personType == 'juridical'">
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
                                                v-model="form.addressName"
                                                :error-messages="addressNameErrors"
                                                @blur="$v.form.addressName.$touch()"
                                                hide-details="auto"
                                                required
                                            />
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <span class="black--text body-2 text-uppercase">
                                                Dirección (Calle / Carrera)
                                            </span>
                                            <custom-input
                                                v-model="form.address"
                                                :error-messages="addressErrors"
                                                @blur="$v.form.address.$touch()"
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
                                        v-model="form.addressDetails"
                                        :error-messages="addressDetailsErrors"
                                        @blur="$v.form.addressDetails.$touch()"
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
                                    <select-custom
                                        :error-messages="stateErrors"
                                        :items="filteredStates"
                                        @blur="$v.form.state.$touch()"
                                        @input="stateChanged"
                                        hide-details="auto"
                                        item-text="name"
                                        item-value="id"
                                        required
                                        v-model="form.state"
                                    />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Municipio</span>
                                    <select-custom
                                        :error-messages="cityErrors"
                                        :items="filteredCities"
                                        @blur="$v.form.city.$touch()"
                                        hide-details="auto"
                                        item-text="name"
                                        item-value="id"
                                        required
                                        v-model="form.city"
                                    />
                                </v-col>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Barrio ( Opcional )</span>
                                    <custom-input v-model="form.town" hide-details="auto" />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Pais</span>
                                    <select-custom
                                        :error-messages="countryErrors"
                                        :items="countries"
                                        @blur="$v.form.country.$touch()"
                                        @input="countryChanged"
                                        hide-details="auto"
                                        item-text="name"
                                        item-value="id"
                                        required
                                        v-model="form.country"
                                    />
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
                                                @blur="$v.form.phone.$touch()"
                                                :class="{
                                                    'error--text': $v.form.phone.$error || form.showInvalidPhone
                                                }"
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
                                    <label
                                        class="label"
                                        :class="{ 'error--text': $v.form.policiesAndCookiesConsent.$error }"
                                    >
                                        <input
                                            @change="$v.form.policiesAndCookiesConsent.$touch()"
                                            type="checkbox"
                                            v-model="form.policiesAndCookiesConsent"
                                            required
                                        />
                                        <span class="body-1 text">
                                            He podido leer y entiendo la política de privacidad y cookies
                                        </span>
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="label">
                                        <input type="checkbox" v-model="form.offersConsent" />
                                        <span class="body-1 text">
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
import { required, requiredIf, email, minLength, sameAs } from "vuelidate/lib/validators";
import { mapActions, mapGetters, mapMutations } from "vuex";
import { VueTelInput } from "vue-tel-input";
import snackbar from "../../components/inc/SnackBar";

import CarouselDescription from "../../components/global/CarouselDescription.vue";
import CustomButton from "../../components/global/CustomButton.vue";
import CustomInput from "../../components/global/CustomInput.vue";
import LayoutNavbarAuth from "../../components/global/LayoutNavbarAuth.vue";
import AuthFooter from "./AuthFooter.vue";
import SelectCustom from "../../components/global/SelectCustom.vue";

// Custom validators
const isTrue = value => value === true;

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
                    placeholder: "--"
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
                { text: "(N.I.T) Numero de identificación tributario", value: "N.I.T" }
            ],
            companyTypes: [{ text: "(S.A.S) Sociedad por acciones simplificadas", value: "S.A.S" }],
            form: {
                email: "",
                password: "",
                confirmPassword: "",
                personType: "natural",
                firstName: "",
                secondName: "",
                firstLastname: "",
                secondLastname: "",
                documentType: "",
                documentNumber: "",
                companyName: "",
                companyType: "",
                companyDocumentType: "",
                companyDocumentNumber: "",
                address: "",
                addressName: "",
                addressDetails: "",
                country: "",
                state: "",
                city: "",
                town: "",
                postalCode: "",
                phone: "",
                policiesAndCookiesConsent: false,
                offersConsent: false,
                invalidPhone: true,
                showInvalidPhone: false
            },
            loading: false
        };
    },
    validations: {
        form: {
            email: { required, email },
            password: { required, minLength: minLength(6) },
            confirmPassword: { required, sameAsPassword: sameAs("password") },
            personType: { required },
            firstName: { required },
            secondName: { required },
            firstLastname: { required },
            secondLastname: { required },
            documentType: { required },
            documentNumber: { required },
            companyName: { requiredIf: requiredIf(item => item.personType === "juridical") },
            companyType: { requiredIf: requiredIf(item => item.personType === "juridical") },
            companyDocumentType: { requiredIf: requiredIf(item => item.personType === "juridical") },
            companyDocumentNumber: { requiredIf: requiredIf(item => item.personType === "juridical") },
            address: { required },
            addressName: { required },
            addressDetails: { required },
            country: { required },
            state: { required },
            city: { required },
            postalCode: { required },
            phone: { required },
            policiesAndCookiesConsent: { required, isTrue }
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
        companyNameErrors() {
            const errors = [];
            if (!this.$v.form.companyName.$dirty) return errors;
            !this.$v.form.companyName.requiredIf && errors.push(this.$i18n.t("this_field_is_required"));
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
        addressErrors() {
            const errors = [];
            if (!this.$v.form.address.$dirty) return errors;
            !this.$v.form.address.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        addressNameErrors() {
            const errors = [];
            if (!this.$v.form.addressName.$dirty) return errors;
            !this.$v.form.addressName.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        addressDetailsErrors() {
            const errors = [];
            if (!this.$v.form.addressDetails.$dirty) return errors;
            !this.$v.form.addressDetails.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        countryErrors() {
            const errors = [];
            if (!this.$v.form.country.$dirty) return errors;
            !this.$v.form.country.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        stateErrors() {
            const errors = [];
            if (!this.$v.form.state.$dirty) return errors;
            !this.$v.form.state.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        cityErrors() {
            const errors = [];
            if (!this.$v.form.city.$dirty) return errors;
            !this.$v.form.city.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        postalCodeErrors() {
            const errors = [];
            if (!this.$v.form.postalCode.$dirty) return errors;
            !this.$v.form.postalCode.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        }
    },
    created() {
        this.fetchCountries();
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
    border: 1px solid #000000;
    border-radius: 5px;
}

.label.error--text input ~ .checkmark {
    border-color: currentColor;
    border-width: 2px;
}

.label:hover input ~ .checkmark {
    background-color: #f5f5f5;
}

.label input:checked ~ .checkmark {
    background-color: #000000;
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
</style>
