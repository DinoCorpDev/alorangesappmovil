<template>
    <v-app-bar :color="$vuetify.theme.dark ? '#FAFCFC' : '#FAFCFC'" height="100" app elevation="0">
        <v-container class="pa-0 fill-height justify-space-between" fluid>
            <router-link :to="{ name: 'Home2' }" class="navbar-brand">
                <v-img src="/public/assets/img/idovela-logo.png" max-width="117" />
            </router-link>
            <search-input />
            <div class="d-flex">
                <div class="double-button d-flex mr-4">
                    <custom-button class="btn-login" dark :to="{ name: 'Login' }">
                        <template v-if="currentUser.name"> {{ shortName }} </template>
                        <template v-else> Iniciar Sesión </template>
                    </custom-button>
                    <custom-button class="btn-cart" dark :to="{ name: 'Cart' }">
                        <shop-cart-icon class="mr-2 mr-sm-3" />
                        <span class="mr-2 mr-sm-3">{{ getCartCount }}</span>
                        <span class="status-indicator" :class="currentUser.name ? 'active' : ''"></span>
                    </custom-button>
                </div>
                <div class="d-flex">
                    <div class="text-center">
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn dark v-bind="attrs" v-on="on" class="btn-home"> </v-btn>
                            </template>
                            <v-list class="menu-color">
                                <v-list-item>
                                    <v-list-item-title>MENU</v-list-item-title>
                                </v-list-item>
                                <div class="divider"></div>

                                <v-list-item>
                                    <theme-toggle-switch class="btn-menu-home" />
                                    <!-- <custom-button
                                        class="btn-menu-home"
                                        icon="la-store-alt"
                                        text="Aspecto: Noche"
                                        :to="{ name: 'Spaces' }"
                                    /> -->
                                </v-list-item>
                                <div class="divider"></div>

                                <v-list-item>
                                    <custom-button
                                        class="btn-menu-home"
                                        icon="la-store-alt"
                                        text="Idioma: Español"
                                        :to="{ name: 'Spaces' }"
                                    />
                                </v-list-item>
                                <div class="divider"></div>
                                <v-list-item>
                                    <custom-button
                                        class="btn-menu-home"
                                        icon="la-store-alt"
                                        text="Pais: Colombia"
                                        :to="{ name: 'Spaces' }"
                                    />
                                </v-list-item>
                                <div class="divider"></div>
                                <v-list-item>
                                    <custom-button
                                        class="btn-menu-home"
                                        icon="la-store-alt"
                                        text="Divisa: COP"
                                        :to="{ name: 'Spaces' }"
                                    />
                                </v-list-item>
                                <div class="divider"></div>
                                <v-list-item>
                                    <custom-button
                                        class="btn-menu-home"
                                        icon="la-store-alt"
                                        text="Mediciones: CGS"
                                        :to="{ name: 'Spaces' }"
                                    />
                                </v-list-item>
                                <div class="divider"></div>
                                <v-list-item>
                                    <custom-button
                                        class="btn-menu-home2"
                                        text="Informacion"
                                        :to="{ name: 'PactoAmbiental' }"
                                    />
                                </v-list-item>
                                <v-list-item>
                                    <custom-button
                                        class="btn-menu-home2"
                                        text="Solicitudes"
                                        :to="{ name: 'Upgrade' }"
                                    />
                                </v-list-item>
                                <v-list-item>
                                    <custom-button
                                        class="btn-menu-home2"
                                        text="Contacto"
                                        :to="{ name: 'PactoAmbiental' }"
                                    />
                                </v-list-item>
                                <v-list-item>
                                    <span>© Idovela 2022</span>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </div>
                <!-- <theme-toggle-switch /> -->
            </div>
        </v-container>
    </v-app-bar>
</template>

<script>
import CustomButton from "./CustomButton.vue";
import ThemeToggleSwitch from "./ThemeToggleSwitch.vue";
import SearchInput from "./SearchInput.vue";
import { mapGetters, mapActions } from "vuex";

export default {
    components: {
        CustomButton,
        ThemeToggleSwitch,
        SearchInput
    },
    computed: {
        ...mapGetters("cart", ["getCartCount"]),
        ...mapGetters("auth", ["currentUser"]),
        shortName() {
            return this.currentUser.name.split(" ")[0];
        }
    },
    methods: {
        ...mapActions("cart", ["fetchCartProducts"])
    },
    created() {
        this.fetchCartProducts();
    }
};
</script>

<style lang="scss" scoped>
.navbar-brand {
    .v-image {
        width: 60px;

        @media (min-width: 600px) {
            width: 90px;
        }

        @media (min-width: 960px) {
            width: 117px;
        }
    }
}
.btn-login {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    &::after {
        content: "";
        display: block;
        width: 1px;
        height: 55%;
        background-color: #ffffff;
        position: absolute;
        right: -1px;
        z-index: 2;
    }
}

.btn-cart {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0;

    @media (min-width: 960px) {
        font-size: 15px;
    }

    svg {
        width: 20px;

        @media (min-width: 600px) {
            width: 24px;
        }
    }
}

.double-button {
    .v-btn {
        background-color: rgba(#161616, 0.5);
        height: 40px !important;
    }

    &:hover {
        .v-btn {
            background-color: rgba(#161616, 0.8);
        }
    }
}

.status-indicator {
    width: 5px;
    height: 5px;
    background-color: rgba(#000000, 0.35);
    display: block;
    border-radius: 50%;

    &.active {
        background-color: #00ff3a;
    }
}
.divider {
    background-color: #ffffff;
    width: 100%;
    height: 1px;
}
.btn-menu-home {
    padding: 0 15px 0 0 !important;
    margin: 0 !important;
    background: #f5f5f5 !important;
    text-transform: capitalize !important;
    color: #000000 !important;
    font-weight: 100;
}
.btn-menu-home2 {
    color: #000000 !important;
    padding: 0 !important;
    margin: 0 !important;
    background: #f5f5f5 !important;
}
.menu-color {
    background: #f5f5f5;
    color: #000000;
    width: 283px;
    margin-top: 10px;
    border-radius: 10px;
}
.v-list-item {
    min-height: 40px;
}
.btn-home {
    background-image: url("/public/assets/img/icono-home.svg");
    height: 40px !important;
    min-width: 40px !important;
}
</style>
