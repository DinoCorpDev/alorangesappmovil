<template>
    <div>
        <div class="login" v-if="!showRecuperarPass">
            <div class="auth-title">
                <h1>Bienvenido</h1>
            </div>
            <v-form ref="loginForm" lazy-validation @submit.prevent="login()">
                <div class="form-group mb-6">
                    <label>Usuario registrado</label>
                    <CustomInput
                        placeholder="Correo electrónico o número de teléfono"
                        v-model="form.email"
                        type="text"
                        :error-messages="emailErrors"
                        required
                    />
                </div>
                <div class="form-group mb-6">
                    <label>Escribir contraseña</label>
                    <v-text-field
                        v-model="form.password"
                        placeholder="Contraseña"
                        :error-messages="passwordErrors"
                        :type="passwordShow ? 'text' : 'password'"
                        :append-icon="passwordShow ? 'las la-eye-slash' : 'las la-eye'"
                        hide-details="auto"
                        required
                        dense
                        outlined
                        @click:append="passwordShow = !passwordShow"
                    />
                </div>
                <div class="d-flex justify-space-between mb-4">
                    <span>¿Has olvidado tu contraseña?</span>
                    <a @click="showModalRecuperarPass" class="auth-link"> Ir a recuperar contraseña </a>
                </div>
                <div class="d-flex mb-8">
                    <CustomButton
                        :disabled="loading"
                        :loading="loading"
                        text="Iniciar Sesión"
                        block
                        color="orange"
                        type="submit"
                        @click="login"
                    />
                </div>
            </v-form>
            <div class="text-center mb-2">¿No tienes una cuenta?</div>
            <div class="d-flex">
                <CustomButton :href="'/user/registration'" type="button" text="Registrarse" block color="white" />
            </div>
        </div>

        <RecuperarPass v-if="showRecuperarPass" :showForm="hideModalRecuperarPass" />
    </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import { mapActions, mapGetters, mapMutations } from "vuex";

import CustomInput from "@components/global/CustomInput.vue";
import RecuperarPass from "@components/auth/RecuperarPass.vue";

export default {
    components: {
        CustomInput,
        RecuperarPass
    },
    data: () => ({
        form: {
            email: "",
            password: ""
        },
        loading: false,
        showRegister: false,
        passwordShow: false,
        showRecuperarPass: false
    }),
    validations: {
        form: {
            email: {
                required,
                email
            },
            password: {
                required
            }
        }
    },
    computed: {
        ...mapGetters("app", ["generalSettings"]),
        ...mapGetters("cart", ["getTempUserId"]),
        ...mapGetters("auth", ["authSettings"]),
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
            return errors;
        }
    },
    methods: {
        ...mapActions("auth", { actionLogin: "login" }),
        ...mapActions("app", ["fetchProductQuerries"]),
        ...mapActions("wishlist", ["fetchWislistProducts"]),
        ...mapActions("cart", ["fetchCartProducts"]),
        ...mapMutations("cart", ["removeTempUserId"]),
        ...mapMutations("auth", ["updateChatWindow", "showLoginDialog"]),
        async login() {
            this.$v.form.$touch();
            if (this.$v.form.$anyError) {
                return;
            }
            if (this.getTempUserId) {
                this.form.temp_user_id = this.getTempUserId;
            }
            this.loading = true;
            const res = await this.call_api("post", "auth/login", this.form);
            if (res.data.success) {
                if (res.data.verified == true || this.authSettings.customer_otp_with == "disabled") {
                    if (this.getTempUserId) {
                        this.removeTempUserId();
                    }
                    this.actionLogin(res.data);
                    this.showLoginDialog(false);
                    this.updateChatWindow(false);
                    this.fetchWislistProducts();
                    this.fetchProductQuerries();
                    this.fetchCartProducts();
                    this.$router.push(this.$route.query.redirect || { name: "LoginSuccess" });
                } else {
                    if (this.authSettings.customer_login_with == "email") {
                        this.$router.push({
                            name: "VerifyAccount",
                            params: { email: this.form.email }
                        });
                    }
                }

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
        async showModalRecuperarPass() {
            this.showLoginDialog(false);
            return (this.showRecuperarPass = true);
        },
        async hideModalRecuperarPass() {
            return (this.showRecuperarPass = false);
        }
    }
};
</script>
