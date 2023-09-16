<template>
    <v-dialog content-class="modal-register" v-model="showRecuperarPass">
        <v-card class="modal-register-card">
            <v-card-title class="text-xs-center justify-center primary title white--text darken-2 font-weight-bold">
                ¿Olvidó su contraseña?
            </v-card-title>
            <div class="forgot-password d-flex flex-column h-100">
                <v-stepper v-model="numberPag">
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
                            <v-container class="d-flex flex-grow-1">
                                <div class="forgot-password-content pa-3 pa-sm-5 pt-5 pt-sm-8">
                                    <v-divider class="my-4" />
                                    <p>
                                        Introduce el correo electrónico o el número de teléfono asocuadios a tu cuenta para cambiar de contraseña
                                    </p>
                                    <div class="inputs mb-5">
                                        <label class="black--text text-uppercase">{{ $t("email_address") }}</label>
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
                </v-stepper>
            </div>

            <v-card-actions class="pa-5">

                <CustomButton
                    v-if="numberPag < 3"
                    icon="la-angle-right"
                    iconPosition="right"
                    text="Continuar"
                    color="nero"
                    type="button"
                    @click="after"
                />

                <CustomButton
                    v-if="numberPag == 3"
                    icon="la-angle-right"
                    iconPosition="right"
                    text="Cambiar Contraseña"
                    color="nero"
                    type="submit"
                    @click="resetPassword"
                    :disabled="loadingregister"
                    :loadingregister="loadingregister"
                />
               
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

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
        numberPag: 1,
    }),
    components: {
        CustomButton,
        CustomInput
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
