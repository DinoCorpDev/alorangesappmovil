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
                                                type="email"
                                                v-model="form.email"
                                                :error-messages="emailErrors"
                                                hide-details="auto"
                                                required
                                            />
                                        </v-col>
                                        <v-col cols="12" md="6" class="inputs mb-5">
                                            <label class="black--text text-uppercase">PRIMER APELLIDO</label>
                                            <CustomInput
                                                type="email"
                                                v-model="form.email"
                                                :error-messages="emailErrors"
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
                <CustomButton
                    text="Cancelar"
                    color="white2"
                    type="button"
                    class="ml-0"
                    block
                    @click="showRecuperarPass = false"
                />
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
            }
        }
    },
    computed: {
        emailErrors() {
            const errors = [];
            if (!this.$v.form.email.$dirty) return errors;
            !this.$v.form.email.required && errors.push(this.$i18n.t("this_field_is_required"));
            !this.$v.form.email.email && errors.push(this.$i18n.t("this_field_is_required_a_valid_email"));
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
                this.$router.push({ name: "NewPassword", params: { email: this.form.email } });

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
        }
    }
};
</script>

<style lang="scss">
.modal-register {
    max-width: 550px;
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
