<template>
    <div>
        <v-app-bar :color="$vuetify.theme.dark ? '#000000' : '#FAFCFC'" height="60" elevation="0">
            <v-container class="pa-0 fill-height justify-space-between" fluid>
                <router-link :to="{ name: 'Home2' }" class="navbar-brand">
                    <span class="d-none d-sm-block">
                        <v-img
                            v-if="$vuetify.theme.dark"
                            src="/public/assets/img/idovela-large-logo-dark.png"
                            max-width="158"
                        />
                        <v-img v-else src="/public/assets/img/idovela-large-logo.png" max-width="158" />
                    </span>
                    <span class="d-sm-none">
                        <v-img
                            v-if="$vuetify.theme.dark"
                            src="/public/assets/img/idovela-logo-dark.png"
                            max-width="48"
                        />
                        <v-img v-else src="/public/assets/img/idovela-logo.png" max-width="48" />
                    </span>
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
                    <theme-toggle-switch />
                </div>
            </v-container>
        </v-app-bar>
        <nabvar-bottom-bar />
    </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
import ThemeToggleSwitch from "./ThemeToggleSwitch.vue";
import SearchInput from "./SearchInput.vue";
import NabvarBottomBar from "./NabvarBottomBar.vue";

import ShopCartIcon from "../icons/ShopCart.vue";

import { mapGetters, mapActions } from "vuex";

export default {
    components: {
        CustomButton,
        ThemeToggleSwitch,
        SearchInput,

        // Icons
        ShopCartIcon,

        NabvarBottomBar
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
.container {
    gap: 1rem;
}

.navbar-brand {
    text-decoration: none;

    .v-image {
        width: 48px;

        @media (min-width: 600px) {
            width: 158px;
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
</style>
