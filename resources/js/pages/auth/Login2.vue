<template>
    <div>
        <layout-navbar-auth />
        <nabvar-bottom-bar />
        <v-container>
            <v-row class="wrap pa-5" no-gutters>
                <v-col cols="12" md="6">
                    <div class="d-md-none">
                        <h5>Inicio de Sesión</h5>
                        <v-divider class="my-4" />
                    </div>
                    <carousel-description
                        title="h4"
                        description="Lorem ipsum dolor atum adipisci, suscipit iusto molestiae voluptates!"
                    />
                </v-col>
                <v-col cols="12" md="6" class="pt-5 pt-md-0 pl-md-5">
                    <div class="form">
                        <div class="d-none d-md-block">
                            <h5 class="black--text">Inicio de Sesión</h5>
                            <v-divider class="my-4" />
                        </div>
                        <div class="inputs">
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
                        <div class="footer">
                            <v-row>
                                <v-col cols="4">
                                    <span class="subtitle1 bold text-uppercase black--text">© Idovela 2022</span>
                                </v-col>
                                <v-col cols="8">
                                    <v-row>
                                        <v-col cols="4">
                                            <a href="#" class="subtitle1 bold text-uppercase black--text">
                                                Información
                                            </a>
                                        </v-col>
                                        <v-col cols="4">
                                            <a href="#" class="subtitle1 bold text-uppercase black--text">
                                                Solicitudes
                                            </a>
                                        </v-col>
                                        <v-col cols="4">
                                            <a href="#" class="subtitle1 bold text-uppercase black--text"> Contacto </a>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import NabvarBottomBar from "../../components/global/NabvarBottomBar.vue";
import CarouselDescription from "../../components/global/CarouselDescription.vue";
import CustomButton from "../../components/global/CustomButton.vue";
import CustomInput from "../../components/global/CustomInput.vue";
import LayoutNavbarAuth from "../../components/global/LayoutNavbarAuth.vue";

import { required, email } from "vuelidate/lib/validators";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
    components: {
        NabvarBottomBar,
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
        loading: false
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
.wrap {
    background-color: #fafcfc;
    border-radius: 10px;
}

h5 {
    font-size: 17px;
    font-weight: 600;

    @media (min-width: 600px) {
        font-size: 24px;
    }
}

.v-divider {
    border-width: 2px 0 0;
    border-color: #e4e4e4 !important;
}

@media (min-width: 960px) {
    .form {
        border: 1px solid #e4e4e4;
        border-radius: 10px;
        padding: 10px;
    }

    .footer {
        margin-top: 150px;
    }
}

@media (max-width: 959px) {
    .footer {
        margin-top: 30px;
    }
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
