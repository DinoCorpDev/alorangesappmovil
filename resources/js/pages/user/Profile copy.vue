<template>
    <div class="px-5 py-3">
        <v-row align="center">
            <v-col cols="6" class="text-start">
                <h5 class="fw-600">Información</h5>
                <v-divider class="my-6" />
                <!-- <div class="avatar-upload">
                    <custom-button color="grey" text="Cambiar Foto" @click="changeAvatar" />
                    <input
                        hidden
                        type="file"
                        ref="avatar-input"
                        id="avatar-input"
                        accept="image/png, image/jpg, image/jpeg"
                        @change="previewThumbnail"
                    />
                </div> -->
            </v-col>
            <v-col cols="6" class="text-start"> 
                <h5 class="fw-600">Empresa</h5>
                <v-divider class="my-6" />
                <!-- Se unio en {{ formatDate(currentUser.registerSince) }}  -->
            
            </v-col>
        </v-row>
        <v-divider class="my-6" />
        <address-dialog
            :typeAddress="typeAddress"
            :show="addDialogShow"
            @close="addressDialogClosed"
            :old-address="addressSelectedForEdit"
        />
        <profile-dialog :show="profileDialogShow" @close="profileDialogClosed" :old-profile="profileSelectedForEdit" />
        <password-dialog
            :show="passwordDialogShow"
            @close="passwordDialogClosed"
            :old-password="passwordSelectedForEdit"
        />
        <factory-dialog :show="factoryDialogShow" @close="factoryDialogClosed" :old-factory="factorySelectedForEdit" />
        <v-row>
            <v-col cols="12" md="6">
                <v-card elevation="0" class="mb-6 form-border rounded-lg pa-5" style="background-color: #f5f5f5">
                    <h5 class="fw-600">Usuario principal</h5>
                    <v-divider class="my-4" />
                    <v-form
                        class="form-profile"
                        lazy-validation
                        v-on:submit.prevent="updateBasic()"
                        enctype="multipart/form-data"
                    >
                        <input type="email" name="hidden" style="width: 0; height: 0; border: 0; padding: 0" />
                        <input type="password" name="hidden" style="width: 0; height: 0; border: 0; padding: 0" />

                        <!-- ----------------------------------------------------------------------------------- -->

                        <v-row>
                            <v-col class="seccion-direccion-izquierda">
                                <div><label class="profile-label">{{ $t("Correo electrónico") }}</label></div>
                            </v-col>
                            <v-col class="seccion-direccion-derecha">
                                <div>{{ currentUser.email || "--" }}</div>
                            </v-col>
                        </v-row>
                        
                        <v-row>
                            <v-col class="seccion-direccion-izquierda">
                                <div><label class="profile-label">Tipo de Persona</label></div>
                            </v-col>
                            <v-col class="seccion-direccion-derecha"> 
                              <div>{{ currentUser.personType || "--" }}</div>
                            </v-col>
                        </v-row>
                        
                        <v-row>
                            <v-col class="seccion-direccion-izquierda">
                                <div><label class="profile-label">{{ $t("nombre completo") }}</label></div>
                            </v-col >
                            <v-col class="seccion-direccion-derecha">
                                <div>{{ currentUser.name || "--" }}</div>
                            </v-col>
                        </v-row>
                        
                        <v-row>
                            <v-col class="seccion-direccion-izquierda">
                                <div><label class="profile-label">Tipo de documento</label></div>
                            </v-col>
                            <v-col class="seccion-direccion-derecha">
                                <div>{{ currentUser.documentType || "--" }}</div>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col class="seccion-direccion-izquierda">
                                <div><label class="profile-label">Número de documento</label></div>
                            </v-col>
                            <v-col class="seccion-direccion-derecha">
                                <div>{{ currentUser.documentNumber || "--" }}</div>
                            </v-col>
                        </v-row>
                        
                        <v-row>
                            <v-col>
                                <custom-button class="boton-editar" color="grey" text="Editar" @click="editProfile()" />
                            </v-col>
                        </v-row>

                        <v-divider class="my-4" />
        



<!-- ---------------------------------------------------------------------------------------------------------------------------------------- -->
                        


                        <v-row>
                            <v-col class="seccion-direccion-izquierda">
                                <div><label class="profile-label">Nombre de Dirección</label></div>
                            </v-col>
                            <v-col class="seccion-direccion-derecha">
                                <div>{{ defaultAddress.name || "--" }}</div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4" class="seccion-direccion-izquierda">
                                <div><label class="profile-label">Dirección</label></div>
                            </v-col>
                            <v-col cols="8" class="seccion-direccion-derecha">
                                <div>{{ defaultAddress.address }}</div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="8" class="seccion-direccion-izquierda">
                                <div><label class="profile-label">Descripción de Dirección</label></div>
                            </v-col>
                            <v-col cols="4"  class="seccion-direccion-derecha">
                                <div>{{ defaultAddress.details || "--" }}</div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col class="seccion-direccion-izquierda">
                                <div><label class="profile-label">Código Postal</label></div>
                            </v-col>
                            <v-col class="seccion-direccion-derecha">
                                <div>{{ defaultAddress.postal_code || "--" }}</div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col class="seccion-direccion-izquierda">
                                <div><label class="profile-label">Departamento</label></div>
                            </v-col>
                            <v-col class="seccion-direccion-derecha">
                                <div>{{ defaultAddress.state || "--" }}</div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="5" class="seccion-direccion-izquierda">
                                <div><label class="profile-label">Municipio</label></div>
                            </v-col>
                            <v-col cols="7" class="seccion-direccion-derecha">
                                <div>{{ defaultAddress.city || "--" }}</div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="5" class="seccion-direccion-izquierda">
                                <div><label class="profile-label">Barrio</label></div>
                            </v-col>
                            <v-col cols="7" class="seccion-direccion-derecha">
                                <div>{{ defaultAddress.neighborhood || "--" }}</div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col class="seccion-direccion-izquierda">
                                <div><label class="profile-label">Nombre de Quién recibe</label></div>
                            </v-col>
                            <v-col class="seccion-direccion-derecha">
                                <div>{{ currentUser.name }}</div>
                            </v-col>
                        </v-row>
                        <v-row class="mb-3">
                            <v-col class="seccion-direccion-izquierda">
                                <div><label class="profile-label">Teléfono / Movil </label></div>
                            </v-col>
                            <v-col class="seccion-direccion-derecha">
                                <div>{{ defaultAddress.phone || "--" }}</div>
                            </v-col>
                        </v-row>



<!-- -------------------------------------------------------------------------------------------------------------------------------- -->
                        



                        <custom-button class="boton-editar" color="grey" text="Editar" @click="editAddress(defaultAddress, 'shipping')" />
                    </v-form>
                </v-card>
                <v-card elevation="0" class="mb-6 form-border rounded-lg pa-5" style="background-color: #f5f5f5">
                    <h5 class="fw-600">Otras direcciones</h5>
                    <v-divider class="my-4" />

                    <div class="form" v-for="(otherAdd, i) in otherAdress" :key="i">
                        <div class="d-flex justify-space-between mb-2">
                            <span class="subtitle1 text-uppercase fw-600">Dirección</span>
                            <span class="body1 text-right">{{ otherAdd?.address }}</span>
                        </div>
                        <div class="d-flex justify-space-between mb-2">
                            <span class="subtitle1 text-uppercase fw-600">Descripción de Dirección</span>
                            <span class="body1 text-right">{{ otherAdd?.address }}</span>
                        </div>
                        <div class="d-flex justify-space-between mb-2">
                            <span class="subtitle1 text-uppercase fw-600">Codigo Postal</span>
                            <span class="body1">{{ otherAdd?.postal_code }}</span>
                        </div>
                        <div class="d-flex justify-space-between mb-2">
                            <span class="subtitle1 text-uppercase fw-600">Departamento</span>
                            <span class="body1">{{ otherAdd?.state }}</span>
                        </div>
                        <div class="d-flex justify-space-between mb-2">
                            <span class="subtitle1 text-uppercase fw-600">Municipio</span>
                            <span class="body1">{{ otherAdd?.city }}</span>
                        </div>
                        <div class="d-flex justify-space-between mb-2">
                            <span class="subtitle1 text-uppercase fw-600">Barrio</span>
                            <span class="body1"> {{ (otherAdd?.neighborhood) ? otherAdd?.neighborhood : '--' }} </span>
                        </div>
                        <div class="d-flex justify-space-between mb-2">
                            <span class="subtitle1 text-uppercase fw-600">Telefono / Movil</span>
                            <span class="body1">{{ otherAdd?.phone }}</span>
                        </div>
                        <custom-button
                            class="mr-3"
                            color="grey"
                            text="Editar"
                            @click="editAddress(otherAdd, 'billing')"
                        />

                        <custom-button class="mr-3" color="red" text="Eliminar" @click="deleteAddress(otherAdd?.id)" />

                        <v-divider class="my-4" />
                    </div>

                    <v-row class="mb-4">

                        <v-col cols="3">
                            <ProfileAddress />
                        </v-col>
                        <v-col cols="9">
                            <div>
                                <p>
                                    Puedes registrar diferentes direcciones para las facturaciones, entregas de productos y
                                    solicitudes de servicios.
                                </p>
                            </div>
                        </v-col>

                    </v-row>
                    <CustomButton
                        class="mb-0"
                        block
                        color="grey"
                        text="Añadir Dirección"
                        @click="openAdress('billing')"
                    />
                </v-card>
            </v-col>
            <v-col cols="12" md="6">
                <v-card elevation="0" class="mb-6 form-border rounded-lg pa-5" style="background-color: #f5f5f5">
                    <h5 class="fw-600">Empresa</h5>
                    <v-divider class="my-4" />
                    
                    <v-row>
                        <v-col class="text-start">
                            <label class="profile-label">Razon Social Empresa</label>
                        </v-col>
                        <v-col class="text-end">{{ currentUser.company_razon || "--" }} </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="text-start">
                            <label class="profile-label">Tipo</label>
                        </v-col>
                        <v-col class="text-end"> {{ currentUser.company_type || "--" }} </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="text-start">
                            <label class="profile-label">Tipo de Documento Compañia</label>
                        </v-col>
                        <v-col class="text-end">{{ currentUser.company_document_type || "--" }}</v-col>
                    </v-row>
                    <v-row>
                        <v-col class="text-start">
                            <label class="profile-label">Documento</label>
                        </v-col>
                        <v-col class="text-end">
                            {{ currentUser.company_document_number || "--" }}
                        </v-col>
                    </v-row>

                    <CustomButton class="mb-4" block color="grey" v-if="currentUser.company_razon" text="Editar mi Empresa" @click="editFactory()" />
                    <CustomButton class="mb-4" block color="grey" v-else text="Añadir mi Empresa" @click="editFactory()" />

                    <p class="mb-0">
                        Realiza las compras como persona juridica agregando los datos de facturación como empresa.
                    </p>
                </v-card>
                <v-card elevation="0" class="mb-6 form-border rounded-lg pa-5" style="background-color: #f5f5f5">
                    <h5 class="fw-600">Contraseña</h5>
                    <v-divider class="my-4" />
                    <CustomButton block color="grey" text="Cambiar Contraseña" @click="editPassword()" />
                </v-card>
                <v-card elevation="0" class="mb-6 form-border rounded-lg pa-5" style="background-color: #f5f5f5">
                    <h5 class="fw-600">Terminos y condiciones</h5>
                    <v-divider class="my-4" />
                    <div class="tyc mb-3">
                        <CustomCheckbox v-model="form.offersConsent">
                            Quiero recibir comunicaciones comerciales personalizadas de Idovela a través de email.
                            <a href="#">Conocer newsletter.</a>
                        </CustomCheckbox>
                        <CustomCheckbox v-model="form.policiesAndCookiesConsent">
                            He podido leer y entiendo la <a href="#">Política de privacidad y cookies.</a>
                        </CustomCheckbox>
                        <CustomCheckbox>
                            Acepto los <a href="#">Términos y condiciones para la compra con Idovela.</a>
                        </CustomCheckbox>
                        <CustomCheckbox> Acepto las <a href="#">Pólizas de garantía.</a> </CustomCheckbox>
                        <CustomCheckbox> Acepto los términos de <a href="#">La logística de envió.</a> </CustomCheckbox>
                    </div>
                    <CustomButton color="grey" text="Saber Más" />
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import { required, minLength, sameAs } from "vuelidate/lib/validators";
import CustomButton from "../../components/global/CustomButton.vue";
import { VueTelInput } from "vue-tel-input";
import AddressDialog from "../../components/address/AddressDialog.vue";
import ProfileDialog from "../../components/user/ProfileDialog.vue";
import PasswordDialog from "../../components/user/PasswordDialog.vue";
import FactoryDialog from "../../components/user/FactoryDialog.vue";
import ProfileAddress from "../../components/icons/ProfileAddress.vue";
import CustomInput from "../../components/global/CustomInput.vue";
// import ProfileAddress from "../../components/global/LogoIdovelaLogin.vue";
import CustomCheckbox from "../../components/global/CustomCheckbox.vue";


export default {
    data: () => ({
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
        form: {
            name: "",
            email: "",
            phone: "",
            invalidPhone: false,
            avatar: "",
            previewAvatar: "",
            oldPassword: "",
            password: "",
            confirmPassword: "",
            policiesAndCookiesConsent: false,
            offersConsent: false
        },
        passwordShow: false,
        addDialogShow: false,
        profileDialogShow: false,
        passwordDialogShow: false,
        factoryDialogShow: false,
        infoUpdateLoading: false,
        addressSelectedForEdit: {},
        profileSelectedForEdit: {},
        passwordSelectedForEdit: {},
        factorySelectedForEdit: {},
        defaultAddress: {},
        otherAdress: [],
        typeAddress: "shipping"
    }),
    components: {
        VueTelInput,
        AddressDialog,
        ProfileDialog,
        PasswordDialog,
        FactoryDialog,
        CustomButton,
        CustomInput,
        CustomCheckbox,
        ProfileAddress
    },
    validations: {
        form: {
            name: { required },
            oldPassword: { required },
            password: { minLength: minLength(6) },
            confirmPassword: { sameAsPassword: sameAs("password") }
        }
    },
    computed: {
        ...mapGetters("auth", ["currentUser"]),
        ...mapGetters("app", ["availableCountries"]),
        ...mapGetters("address", [
            "getAddresses",
            "addressesLoaded",
            "getDefaultShippingAddress",
            "getDefaultBillingAddress"
        ]),
        nameErrors() {
            const errors = [];
            if (!this.$v.form.name.$dirty) return errors;
            !this.$v.form.name.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        emailErrors() {
            const errors = [];
            if (!this.$v.form.email.$dirty) return errors;
            !this.$v.form.email.required && errors.push(this.$i18n.t("this_field_is_required"));
            !this.$v.form.email.email && errors.push(this.$i18n.t("this_field_is_required_a_valid_email"));
            return errors;
        },
        oldPasswordErrors() {
            const errors = [];
            if (!this.$v.form.oldPassword.$dirty) return errors;
            !this.$v.form.oldPassword.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.form.password.$dirty) return errors;
            !this.$v.form.password.minLength && errors.push(this.$i18n.t("password_must_be_minimum_6_characters"));
            return errors;
        },
        confirmPasswordErrors() {
            const errors = [];
            if (!this.$v.form.confirmPassword.$dirty) return errors;
            !this.$v.form.confirmPassword.sameAsPassword &&
                errors.push(this.$i18n.t("password_and_confirm_password_should_match"));
            return errors;
        }
    },
    async created() {
        await this.getUser();
        this.getAddressUser();

        this.form.policiesAndCookiesConsent = Boolean(this.currentUser.policiesAndCookiesConsent);
        this.form.offersConsent = Boolean(this.currentUser.offersConsent);
    },
    methods: {
        ...mapActions("auth", ["getUser"]),
        ...mapMutations("app", ["setPreviewAvatar"]),
        ...mapMutations("auth", ["setUser"]),
        ...mapMutations("address", ["setAddresses"]),
        changeAvatar() {
            this.$refs["avatar-input"].click();
        },
        previewThumbnail(event) {
            this.form.avatar = event.target.files[0];
            if (event.target.files && event.target.files[0]) {
                const reader = new FileReader();
                reader.onload = e => {
                    this.form.previewAvatar = e.target.result;
                    this.setPreviewAvatar(e.target.result);
                };
                reader.readAsDataURL(event.target.files[0]);
            }
        },
        phoneValidate(phone) {
            this.form.invalidPhone = phone.valid ? false : true;
        },
        async getAddressUser() {
            const res = await this.call_api("get", `user/addresses`);
            if (res.data.success) {
                this.defaultAddress = res.data?.data?.find(address => address.default_shipping == 1);
                this.otherAdress = res.data?.data?.filter(address => address.default_shipping == 0);
            }
        },
        async updateBasic() {
            this.$v.form.$touch();
            if (this.$v.form.$anyError) {
                return;
            }

            this.infoUpdateLoading = true;

            let formData = new FormData();
            for (var key in this.form) {
                formData.append(key, this.form[key]);
            }

            const res = await this.call_api("post", "user/info/update", formData, true);
            if (res.data.success) {
                this.setUser(res.data.user);
                this.snack({ message: res.data.message });
            } else {
                this.snack({ message: res.data.message, color: "red" });
            }
            this.infoUpdateLoading = false;
        },
        async deleteAddress(id) {
            const res = await this.call_api("get", `user/address/delete/${id}`);
            if (res.data.success) {
                this.getAddressUser();
                this.snack({ message: res.data.message });
            }
        },
        async markDefaultShipping(id) {
            const res = await this.call_api("get", `user/address/default-shipping/${id}`);
            if (res.data.success) {
                this.setAddresses(res.data.data);
                this.snack({ message: res.data.message });
            } else {
                this.snack({
                    message: this.$i18n.t("something_went_wrong"),
                    color: "red"
                });
            }
        },
        async markDefaultBilling(id) {
            const res = await this.call_api("get", `user/address/default-billing/${id}`);
            if (res.data.success) {
                this.setAddresses(res.data.data);
                this.snack({ message: res.data.message });
            } else {
                this.snack({
                    message: this.$i18n.t("something_went_wrong"),
                    color: "red"
                });
            }
        },
        editAddress(address, type) {
            this.typeAddress = type;
            this.addressSelectedForEdit = address;
            this.addDialogShow = true;
        },
        editProfile() {
            this.profileSelectedForEdit = this.currentUser;
            this.profileDialogShow = true;
        },
        editPassword() {
            this.passwordSelectedForEdit = this.currentUser;
            this.passwordDialogShow = true;
        },
        editFactory() {
            this.factorySelectedForEdit = this.currentUser;
            this.factoryDialogShow = true;
        },
        addressDialogClosed() {
            this.addressSelectedForEdit = {};
            this.addDialogShow = false;
            this.getAddressUser();
        },
        profileDialogClosed() {
            this.profileSelectedForEdit = {};
            this.profileDialogShow = false;
            this.getUser();
        },
        passwordDialogClosed() {
            this.passwordSelectedForEdit = {};
            this.passwordDialogShow = false;
            this.getUser();
        },
        factoryDialogClosed() {
            this.factorySelectedForEdit = {};
            this.factoryDialogShow = false;
            this.getUser();
        },
        openAdress(type) {
            this.typeAddress = type;
            this.addDialogShow = true;
        },
        formatDate(date) {
            const d = new Date(date);
            const month = d.toLocaleString("default", { month: "long" }).toLocaleLowerCase();

            return `${this.$i18n.t(month)} de ${d.getFullYear()}`;
        }
    }
};
</script>

<style scoped lang="scss">
.form-profile {
    line-height: 20px;
}

@media (max-width: 600px) {
    .form-profile {
        line-height: 14px;
        font-size: 12px;
    }
    .tyc {
        line-height: 20px;
    }
    .date {
        font-size: 12px;
    }
    .cards {
        font-size: 12px !important;
    }
}

.form-border {
    border: 1px solid #f5f5f5;
    background-color: #f5f5f5;
}

.profile {
    &-label {
        text-transform: uppercase;
        font-size: 15px;
        font-weight: 900;
        line-height: 25.2px;
    }
}

//Estilos de input checkbox

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

.text{
    &-start{
        padding-top: 5px;
        padding-bottom: 5px;
    }
    &-end{
        padding-top: 5px;
        padding-bottom: 5px;
    }
}

.seccion-direccion-izquierda{
    display: flex; 
    justify-content: left;  
    align-items: center; 
    padding-top: 5px; 
    padding-bottom: 5px;
}

.seccion-direccion-derecha{
    display: flex; 
    justify-content: right;  
    align-items: center; 
    padding-top: 5px; 
    padding-bottom: 5px;
}

.boton-editar{
    width: 35%;
}

</style>
