<template>
    <div class="login d-flex flex-column h-100">
        <v-container class="flex-grow-1 mb-5" fluid>
            <v-row justify="center">
                <v-col cols="12" sm="11" md="10" lg="8">
                    <v-row class="wrap pa-5" no-gutters>
                        <v-col cols="12" lg="6">
                            <div class="d-lg-none">
                                <h1 class="login-title">Inicio de sesión</h1>
                                <v-divider class="my-4" />
                            </div>
                            <CarouselDescription />
                        </v-col>
                        <v-col cols="12" lg="6" class="pt-5 pt-lg-0 pl-lg-5">
                            <div class="login-content h-100 pa-lg-5 pt-lg-8">
                                <div class="inputs mb-8">
                                    <div class="d-none d-lg-block">
                                        <h1 class="login-title">Inicio de sesión</h1>
                                        <v-divider class="my-4" />
                                    </div>
                                    <v-form ref="loginForm" lazy-validation @submit.prevent="login()">
                                        <div class="form-group">
                                            <label class="black--text">{{ $t("email_address") }}</label>
                                            <CustomInput
                                                v-model="form.email"
                                                type="text"
                                                :error-messages="emailErrors"
                                                required
                                            />
                                        </div>
                                        <div class="form-group mb-4">
                                            <label class="black--text">{{ $t("password") }}</label>
                                            <CustomInput
                                                v-model="form.password"
                                                type="password"
                                                :error-messages="passwordErrors"
                                                required
                                            />
                                        </div>
                                        <router-link :to="{ name: 'ForgotPassword' }" class="black--text link-custom">
                                            {{ $t("forgot_password") }}?
                                        </router-link>
                                        <CustomButton
                                            :disabled="loading"
                                            :loading="loading"
                                            :text="$t('login')"
                                            block
                                            class="mt-3 mb-3"
                                            color="nero"
                                            type="submit"
                                            @click="login"
                                        />
                                    </v-form>
                                    <a @click="showModalRegister" class="black--text link-custom">
                                        ¿No tienes ninguna cuenta?
                                    </a>
                                    <CustomButton
                                        block
                                        light
                                        color="grey"
                                        class="mt-3"
                                        text="Registrarse"
                                        @click="showModalRegister"
                                    />
                                </div>
                                <AuthFooter />
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <ModalRegister v-model="showRegister"/>
        </v-container>
    </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import { mapActions, mapGetters, mapMutations } from "vuex";

import AuthFooter from "./AuthFooter.vue";
import CarouselDescription from "../../components/global/CarouselDescription.vue";
import CustomButton from "../../components/global/CustomButton.vue";
import CustomInput from "../../components/global/CustomInput.vue";
import ModalRegister from "../../components/user/ModalRegister.vue";


export default {
    components: {
        AuthFooter,
        CarouselDescription,
        CustomButton,
        CustomInput,
        ModalRegister
    },
    data: () => ({
        form: {
            email: "",
            password: ""
        },
        loading: false,
        showRegister: false
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
    mounted() {
        this.$vuetify.theme.dark = false;
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
                    this.$router.push(this.$route.query.redirect || { name: "Cart" });
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
        } ,
        async showModalRegister() {
            return this.showRegister = true;
        }
    }
};
</script>

<style lang="scss" scoped>
.login {
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

.form-group {
    label {
        font-family: "Overpass", sans-serif;
        font-size: 12px;
        letter-spacing: 0.4px;
        text-transform: uppercase;
    }
}

.link-custom {
    font-size: var(--font-size-caption);
    letter-spacing: 0.4px;
    text-transform: uppercase;
}
</style>
