<template>
    <div class="ps-lg-7 pt-4">
        <v-row>
            <v-col cols="6" class="text-start">
                <div class="avatar-upload">
                    <custom-button
                        light
                        text="CAMBIAR FOTO"
                        type="file"
                        id="avatar-input"
                        accept="image/png, image/jpg, image/jpeg"
                        @change="previewThumbnail"
                    />
                </div>
            </v-col>
            <v-col cols="6" class="text-end">
                <div>
                    <label class="date">Se unio en febrero de 2022 </label>
                </div>
            </v-col>
        </v-row>
        <v-divider class="my-6" />

        <v-row>
            <v-col cols="12" md="6">
                <v-card elevation="0" class="mb-6 form-border rounded-lg pa-5">
                    <h5 class="bold">Usuario principal</h5>
                    <v-divider class="my-4" />
                    <v-form
                        class="form-profile"
                        lazy-validation
                        v-on:submit.prevent="updateBasic()"
                        enctype="multipart/form-data"
                    >
                        <input type="email" name="hidden" style="width: 0; height: 0; border: 0; padding: 0" />
                        <input type="password" name="hidden" style="width: 0; height: 0; border: 0; padding: 0" />
                        <v-row>
                            <v-col class="text-start">
                                <label class="bold">CORREO ELECTRONICO</label>
                            </v-col>
                            <v-col class="text-end">
                                <label>{{ $t("email_address") }}</label>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col class="text-start">
                                <label class="bold">TIPO DE PERSONA</label>
                            </v-col>
                            <v-col class="text-end">
                                <label>Natural</label>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col class="text-start">
                                <label class="bold">NOMBRE</label>
                            </v-col>
                            <v-col class="text-end">
                                <label>{{ $t("full_name") }}</label>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col class="text-start">
                                <label class="bold">DOCUMENTO</label>
                            </v-col>
                            <v-col class="text-end">
                                <label>C.C 1010236398</label>
                            </v-col>
                        </v-row>

                        <v-divider class="my-4" />

                        <v-row>
                            <v-col class="text-start">
                                <label class="bold">NOMBRE DE DIRECCION</label>
                            </v-col>
                            <v-col class="text-end">
                                <label>Casa 1</label>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col class="text-start">
                                <label class="bold">DIRECCION</label>
                            </v-col>
                            <v-col class="text-end" v-for="(address, i) in getAddresses" :key="i">
                                <div>{{ address.address }}</div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col class="text-start">
                                <label class="bold">DESCRIPCION DE DIRECCION</label>
                            </v-col>
                            <v-col class="text-end">
                                <label>Casa de tejado verde y con patio cercado.</label>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col class="text-start">
                                <label class="bold">CODIGO POSTAL</label>
                            </v-col>
                            <v-col class="text-end" v-for="(address, i) in getAddresses" :key="i">
                                <div>{{ address.postal_code }}</div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col class="text-start">
                                <label class="bold">DEPARTAMENTO</label>
                            </v-col>
                            <v-col class="text-end" v-for="(address, i) in getAddresses" :key="i">
                                <div>{{ address.state }}</div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col class="text-start">
                                <label class="bold">MUNICIPIO</label>
                            </v-col>
                            <v-col class="text-end" v-for="(address, i) in getAddresses" :key="i">
                                <div>{{ address.city }}</div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col class="text-start">
                                <label class="bold">BARRIO</label>
                            </v-col>
                            <v-col class="text-end">
                                <div>Galerias</div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col class="text-start">
                                <label class="bold">NOMBRE DE QUIEN VA A RECIBIR</label>
                            </v-col>
                            <v-col class="text-end">
                                <div>Felipe Ramirez</div>
                            </v-col>
                        </v-row>
                        <v-row class="mb-3">
                            <v-col class="text-start">
                                <label class="bold">TELÉFONO / MOBIL</label>
                            </v-col>
                            <v-col class="text-end">
                                <div>{{ $t("phone_number") }}</div>
                            </v-col>
                        </v-row>

                        <custom-button light text="EDITAR" />
                    </v-form>
                </v-card>
                <v-card elevation="0" class="mb-6 form-border rounded-lg pa-5">
                    <h5 class="bold">Otras direcciones</h5>
                    <v-divider class="my-4" />
                    <div>
                        <custom-button class="my-4" block light @click.stop="addDialogShow = true"
                            >AÑADIR DIRECCION</custom-button
                        >
                        <div class="cards">
                            Puedes registrar otras direcciones para los envios de facturacion, entregas de productos y
                            solicitudes de servicio.
                        </div>
                    </div>
                </v-card>
                <!-- <v-btn
                    type="submit"
                    :loading="infoUpdateLoading"
                    :disabled="infoUpdateLoading"
                    color="primary"
                    elevation="0"
                    class="px-10"
                    @click="updateBasic"
                    >{{ $t("update") }}</v-btn
                > -->
            </v-col>
            <v-col cols="12" md="6">
                <v-card elevation="0" class="mb-6 form-border rounded-lg pa-5">
                    <h5 class="bold">Empresa</h5>
                    <v-divider class="my-4" />
                    <div>
                        <custom-button class="my-4" block light @click.stop="addDialogShow = true"
                            >AÑADIR MI EMPRESA</custom-button
                        >
                        <div class="cards">
                            Realiza las compras como persona juridica agregando los datos de facturación como empresa.
                        </div>
                    </div>
                </v-card>
                <v-card elevation="0" class="mb-6 form-border rounded-lg pa-5">
                    <h5 class="bold">Contraseña</h5>
                    <v-divider class="my-4" />
                    <address-dialog
                        :show="addDialogShow"
                        @close="addressDialogClosed"
                        :old-address="addressSelectedForEdit"
                    />
                    <div>
                        <!-- <v-btn light block elevation="0" class="ms-auto" @click.stop="addDialogShow = true"
                            >CAMBIAR CONTRASEÑA</v-btn
                        > -->
                        <custom-button class="my-4" block light @click.stop="addDialogShow = true"
                            >CAMBIAR CONTRASEÑA</custom-button
                        >
                    </div>
                </v-card>
                <v-card elevation="0" class="mb-6 form-border rounded-lg pa-5">
                    <h5 class="bold">Terminos y condiciones</h5>
                    <v-divider class="my-4" />
                    <div class="tyc">
                        <label class="label">
                            <input type="checkbox" />
                            <span class="body-1 black--text text cards">
                                Quiero recibir comunicaciones comerciales personalizadas de idovela a través de email.
                                <b>Conocer newsletter.</b>
                            </span>
                            <span class="checkmark"></span>
                        </label>
                        <label class="label">
                            <input type="checkbox" />
                            <span class="body-1 black--text text cards">
                                He podido leer y entiendo la <b>Política de privacidad y cookies.</b>
                            </span>
                            <span class="checkmark"></span>
                        </label>
                        <label class="label">
                            <input type="checkbox" />
                            <span class="body-1 black--text text cards">
                                Acepto los <b>Terminos y condiciones para la compra con idovela.</b>
                            </span>
                            <span class="checkmark"></span>
                        </label>
                        <label class="label">
                            <input type="checkbox" />
                            <span class="body-1 black--text text cards"> Acepto las <b>Polizas de garantia.</b> </span>
                            <span class="checkmark"></span>
                        </label>
                        <label class="label">
                            <input type="checkbox" />
                            <span class="body-1 black--text text cards">
                                Acepto los terminos de <b>La logistica de envió.</b>
                            </span>
                            <span class="checkmark"></span>
                        </label>
                        <custom-button light text="SABER MÁS" />
                    </div>
                </v-card>
                <!-- <v-card elevation="0">
                    <v-card-title class="pa-0 fs-16 fw-700 mb-4">
                        <span class="">Contraseña</span>
                    </v-card-title>
                    <v-row class="mb-4 row-cols-1 row-cols-sm-2 gutters-10">
                        <v-col>
                            <label>{{ $t("old_password") }}</label>
                            <v-text-field
                                placeholder="******"
                                type="password"
                                v-model="form.oldPassword"
                                :error-messages="oldPasswordErrors"
                                outlined
                                hide-details="auto"
                                class="mb-3"
                            ></v-text-field>

                            <label>{{ $t("new_password") }}</label>
                            <v-text-field
                                placeholder="******"
                                type="password"
                                v-model="form.password"
                                :error-messages="passwordErrors"
                                @blur="$v.form.password.$touch()"
                                outlined
                                hide-details="auto"
                                class="mb-3"
                            ></v-text-field>

                            <label>{{ $t("confirm_password") }}</label>
                            <v-text-field
                                placeholder="******"
                                type="password"
                                v-model="form.confirmPassword"
                                :error-messages="confirmPasswordErrors"
                                @blur="$v.form.confirmPassword.$touch()"
                                outlined
                                hide-details="auto"
                                class="mb-3"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-card> -->
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import { required, email, minLength, sameAs, requiredIf } from "vuelidate/lib/validators";
import CustomButton from "../../components/global/CustomButton.vue";
import { VueTelInput } from "vue-tel-input";
import AddressDialog from "../../components/address/AddressDialog.vue";
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
            confirmPassword: ""
        },
        passwordShow: false,
        addDialogShow: false,
        infoUpdateLoading: false,
        addressSelectedForEdit: {}
    }),
    components: {
        VueTelInput,
        AddressDialog,
        CustomButton
    },
    validations: {
        form: {
            name: { required },
            // email: {
            //     email,
            //     required
            // },
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
    created() {
        this.form.name = this.currentUser.name;
        this.form.email = this.currentUser.email;
        this.form.phone = this.currentUser.phone;
        this.form.previewAvatar = this.currentUser.avatar;

        this.fetchAddresses();
    },
    methods: {
        ...mapMutations("auth", ["setUser"]),
        ...mapMutations("address", ["setAddresses"]),
        ...mapActions("address", ["fetchAddresses"]),
        previewThumbnail(event) {
            this.form.avatar = event.target.files[0];
            if (event.target.files && event.target.files[0]) {
                const reader = new FileReader();
                reader.onload = e => {
                    this.form.previewAvatar = e.target.result;
                };
                reader.readAsDataURL(event.target.files[0]);
            }
        },
        phoneValidate(phone) {
            this.form.invalidPhone = phone.valid ? false : true;
        },
        async updateBasic() {
            // if(this.form.email == ""){
            //     this.snack({
            //         message: "Email is required.",
            //         color: "red"
            //     });
            //     return;
            // }
            // if(this.form.email != "" && !this.$v.form.email.email){
            //     this.snack({
            //         message: "Email must be valid.",
            //         color: "red"
            //     });
            //     return;
            // }
            // if(this.form.phone != ""  && this.form.invalidPhone){
            //     this.snack({
            //         message: "Phone number must be valid.",
            //         color: "red"
            //     });
            //     return;
            // }

            this.$v.form.$touch();
            if (this.$v.form.$anyError) {
                return;
            }

            // this.form.phone = this.form.phone.replace(/\s/g, '')
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
                this.setAddresses(res.data.data);
                this.snack({ message: res.data.message });
            }
        },
        editAddress(address) {
            this.addressSelectedForEdit = address;
            this.addDialogShow = true;
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
        addressDialogClosed() {
            this.addressSelectedForEdit = {};
            this.addDialogShow = false;
        }
    }
};
</script>

<style scoped lang="scss">
.form-profile {
    line-height: 13px;
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
    border: 1px solid #e4e4e4;
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
</style>
