<template>
    <v-dialog content-class="modal-register" v-model="showRecuperarPass">
        <v-card class="modal-register-card">
            <v-card-title v-if="numberPag == 1" class="text-xs-left justify-left title mb-2">
                ¿Olvidó su contraseña?
            </v-card-title>
            <v-card-title v-if="numberPag == 3" class="text-xs-left justify-left title mb-2">
                ¿A dónde debemos enviar el código de confirmación?
            </v-card-title>
            <v-card-title v-if="numberPag == 2" class="text-xs-left justify-left title mb-2">
                Confirma tu nombre de usuario
            </v-card-title>
            <div class="forgot-password d-flex flex-column h-100">
                <v-stepper v-model="numberPag">
                    <v-stepper-header class="d-none">
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
                            <v-container class="d-flex flex-grow-1 pa-0">
                                <div class="">
                                    <p>
                                        Introduce el correo electrónico o el número de teléfono asocuadios a tu cuenta
                                        para cambiar de contraseña
                                    </p>
                                    <div class="inputs mb-5">
                                        <label class="black--text text-uppercase">CORREO ELECTRÓNICO</label>
                                        <CustomInput
                                            type="email"
                                            v-model="form.email"
                                            :error-messages="emailErrors"
                                            hide-details="auto"
                                            required
                                        />
                                    </div>
                                </div>
                            </v-container>
                        </v-stepper-content>
                    </v-stepper-items>
                    <v-stepper-items>
                        <v-stepper-content step="2">
                            <v-container class="d-flex flex-grow-1 pa-0">
                                <div class="">
                                    <p>
                                        Confirma tu identida introduciendo el nombre de usuario asociado a tu cuenta de
                                        Idovela.
                                    </p>
                                    <v-row>
                                        <v-col cols="12" md="6" class="inputs mb-5">
                                            <label class="black--text text-uppercase">PRIMER NOMBRE</label>
                                            <CustomInput
                                                type="text"
                                                v-model="form.first_name"
                                                :error-messages="firstNameErrors"
                                                hide-details="auto"
                                                required
                                            />
                                        </v-col>
                                        <v-col cols="12" md="6" class="inputs mb-5">
                                            <label class="black--text text-uppercase">PRIMER APELLIDO</label>
                                            <CustomInput
                                                type="text"
                                                v-model="form.first_lastname"
                                                :error-messages="firstLastNameErrors"
                                                hide-details="auto"
                                                required
                                            />
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-container>
                        </v-stepper-content>
                    </v-stepper-items>
                    <v-stepper-items>
                        <v-stepper-content step="3">
                            <v-container class="d-flex flex-grow-1 pa-0">
                                <div class="">
                                    <p>
                                        Antes de permitirte cambiar tu contraseña, tenemos que asegurarnos de que
                                        realmente eres tú.
                                    </p>
                                    <p>
                                        Empieza por seleccionar adónde enviaremos un código de confirmación.
                                    </p>
                                    <v-row class="mb-2">
                                        <v-col cols="12" sm="12">
                                            <CustomCheckbox
                                                inputValue="Natural"
                                                label="Enviar un correo electrónico a ******@***.***"
                                                name="personType"
                                                type="radio"
                                            />
                                        </v-col>
                                        <v-col cols="12" sm="12">
                                            <CustomCheckbox
                                                inputValue="Juridical"
                                                label="Enviar un mensaje de texto al *******"
                                                name="personType"
                                                type="radio"
                                                disabled
                                            />
                                        </v-col>
                                    </v-row>
                                    <p>Comunícate con el <b>Soporte de Idovela</b> si no tienes acceso.</p>
                                </div>
                            </v-container>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </div>

            <v-card-actions class="pa-5 d-block">
                <CustomButton
                    v-if="numberPag < 3"
                    text="Siguiente"
                    color="nero"
                    type="button"
                    class="mb-2"
                    block
                    @click="after"
                />
                <CustomButton
                    v-if="numberPag == 3"
                    text="Enviar código"
                    color="nero"
                    type="submit"
                    class="mb-2"
                    block
                    @click="resetPassword"
                    :disabled="loadingregister"
                    :loadingregister="loadingregister"
                />
                <CustomButton text="Cancelar" color="white2" type="button" class="ml-0" block @click="cerrarModal" />
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import CustomCheckbox from "../../components/global/CustomCheckbox.vue";
import CustomButton from "../../components/global/CustomButton.vue";
import CustomInput from "../../components/global/CustomInput.vue";

// Custom validators
const isTrue = value => value === true;

export default {
    props: {
        value: Boolean
    },

    data: () => ({
        form: { email: "" },
        loading: false,
        loadingregister: false,
        numberPag: 1
    }),
    components: {
        CustomButton,
        CustomInput,
        CustomCheckbox
    },
    validations: {
        form: {
            email: {
                required,
                email
            },
            first_name: {
                required
            },
            first_lastname: {
                required
            }
        }
    },
    created() {
        this.numberPag = 1;
    },
    mounted() {
        this.numberPag = 1;
    },
    computed: {
        emailErrors() {
            const errors = [];
            if (!this.$v.form.email.$dirty) return errors;
            !this.$v.form.email.required && errors.push(this.$i18n.t("this_field_is_required"));
            !this.$v.form.email.email && errors.push(this.$i18n.t("this_field_is_required_a_valid_email"));
            return errors;
        },
        firstNameErrors() {
            const errors = [];
            if (!this.$v.form.first_name.$dirty) return errors;
            !this.$v.form.first_name.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        firstLastNameErrors() {
            const errors = [];
            if (!this.$v.form.first_lastname.$dirty) return errors;
            !this.$v.form.first_lastname.required && errors.push(this.$i18n.t("this_field_is_required"));
            return errors;
        },
        showRecuperarPass: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            }
        }
    },
    methods: {
        async after() {
            if (this.numberPag == 1 && this.form.email == "") {
                this.snack({
                    message: "Por favor ingresa el correo",
                    color: "red"
                });
                return;
            }

            if (this.numberPag == 2) {
                let formData = new FormData();

                formData.append("email", this.form.email);
                formData.append("first_name", this.form.first_name);
                formData.append("first_lastname", this.form.first_lastname);

                const res = await this.call_api("post", "auth/verify-data", formData);

                if (res.data.result) {
                    return (this.numberPag += 1);
                } else {
                    this.snack({
                        message: res.data.message,
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
        async resetPassword() {
            this.$v.form.$touch();
            if (this.$v.form.$anyError) {
                return;
            }

            this.loading = true;

            const res = await this.call_api("post", "auth/password/create", this.form);

            if (res.data.success) {
                this.showRecuperarPass = false;
                window.location.href = "/home2?modal=Password&email=" + this.form.email;
                // this.$router.replace({ name: 'Home2', query: { modal: "Password", email: this.form.email }});

                this.snack({
                    message: res.data.message
                });
            } else {
                this.snack({
                    message: res.data.message,
                    color: "red"
                });
            }
            this.loading = false;
        },
        resetData() {
            this.form.email = "";
            this.form.first_name = "";
            this.form.first_lastname = "";
        },
        cerrarModal() {
            this.showRecuperarPass = false;
            this.numberPag = 1;
            this.resetData();
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
</style>
