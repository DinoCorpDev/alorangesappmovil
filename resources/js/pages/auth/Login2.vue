<template>
    <div class="login d-flex flex-column h-100">
        <layout-navbar-auth />
        <v-container class="flex-grow-1 mb-5">
            <v-row class="wrap pa-5" no-gutters>
                <v-col cols="12" lg="6">
                    <div class="d-lg-none">
                        <h1 class="login-title">Inicio de sesión</h1>
                        <v-divider class="my-4" />
                    </div>
                    <carousel-description />
                </v-col>
                <v-col cols="12" lg="6" class="pt-5 pt-lg-0 pl-lg-5">
                    <div class="login-content pa-lg-5 pt-lg-8">
                        <div class="inputs mb-8">
                            <div class="d-none d-lg-block">
                                <h1 class="login-title">Inicio de sesión</h1>
                                <v-divider class="my-4" />
                            </div>
                            <v-form ref="loginForm" lazy-validation @submit.prevent="login()">
                                <div class="form-group">
                                    <label class="black--text">{{ $t("email_address") }}</label>
                                    <custom-input
                                        v-model="form.email"
                                        type="text"
                                        :error-messages="emailErrors"
                                        required
                                    />
                                </div>
                                <div class="form-group">
                                    <label class="black--text">{{ $t("password") }}</label>
                                    <custom-input
                                        v-model="form.password"
                                        type="password"
                                        :error-messages="passwordErrors"
                                        required
                                    />
                                </div>
                                <router-link :to="{ name: 'ForgotPassword2' }" class="black--text link-custom">
                                    {{ $t("forgot_password") }}?
                                </router-link>
                                <custom-button
                                    :disabled="loading"
                                    :loading="loading"
                                    :text="$t('login')"
                                    block
                                    class="mt-3 mb-3"
                                    color="#888989"
                                    type="submit"
                                    @click="login"
                                />
                            </v-form>
                            <router-link :to="{ name: 'Registration2' }" class="black--text link-custom">
                                ¿No tienes ninguna cuenta?
                            </router-link>
                            <custom-button
                                block
                                light
                                color="#DFDFDF"
                                class="mt-3"
                                text="Registrarse"
                                :to="{ name: 'Registration2' }"
                            />
                        </div>
                        <div class="login-footer">
                            <span class="footer-copyright">© Idovela 2022</span>
                            <ul class="footer-links">
                                <li class="footer-link" v-for="link in footerLinks">
                                    <a :href="link.link"> {{ link.label }} </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import CarouselDescription from "../../components/global/CarouselDescription.vue";
import CustomButton from "../../components/global/CustomButton.vue";
import CustomInput from "../../components/global/CustomInput.vue";
import LayoutNavbarAuth from "../../components/global/LayoutNavbarAuth.vue";

import { required, email } from "vuelidate/lib/validators";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
    components: {
        CarouselDescription,
        CustomButton,
        CustomInput,
        LayoutNavbarAuth
    },
    data: () => ({
        form: {
            email: "",
            password: ""
        },
        loading: false,
        footerLinks: [
            { label: "Información", link: "#" },
            { label: "Solicitudes", link: "#" },
            { label: "Contacto", link: "#" }
        ]
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
                    this.$router.push(this.$route.query.redirect || { name: "DashBoard" });
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
.login {
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

    &-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .footer-copyright,
        .footer-link a {
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0;
            line-height: 24px;
            color: #000000;
            text-transform: uppercase;

            @media (min-width: 600px) {
                font-size: 15px;
            }
        }

        .footer-links {
            display: flex;
            padding: 0;
            list-style: none;
            justify-content: flex-end;
            gap: 1rem;
        }
    }
}

.wrap {
    background-color: #fafcfc;
    border-radius: 10px;
}

.v-divider {
    border-color: #e4e4e4 !important;
}

.form-group {
    label {
        font-family: "Overpass", sans-serif;
        font-size: 12px;
        letter-spacing: 0.4px;
        text-transform: uppercase;
    }
}

.link-custom {
    font-family: "Overpass", sans-serif;
    font-size: 12px;
    letter-spacing: 0.4px;
    text-transform: uppercase;
}
</style>
