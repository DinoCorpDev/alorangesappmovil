<template>
    <v-app-bar :color="$vuetify.theme.dark ? '#000000' : '#FAFCFC'" height="60">
        <v-container class="pa-0 fill-height justify-space-between" fluid>
            <router-link :to="{ name: 'TempLanding' }" class="navbar-brand">
                <span class="d-none d-sm-block">
                    <v-img
                        v-if="$vuetify.theme.dark"
                        src="/public/assets/img/idovela-large-logo-dark.png"
                        max-width="158"
                    />
                    <v-img v-else src="/public/assets/img/idovela-large-logo.png" max-width="158" />
                </span>
                <span class="d-sm-none">
                    <v-img v-if="$vuetify.theme.dark" src="/public/assets/img/idovela-logo-dark.png" max-width="48" />
                    <v-img v-else src="/public/assets/img/idovela-logo.png" max-width="48" />
                </span>
            </router-link>
            <form class="form">
                <input type="search" class="input" placeholder="Escribe para buscar" />
                <div class="input-button">
                    <input type="button" value="Buscar" class="search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-search icon-search"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="#2c3e50"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                </div>
            </form>
            <div class="d-flex">
                <div class="double-button d-flex mr-4">
                    <custom-button class="btn-login" dark :to="{ name: 'Login' }">
                        <template v-if="currentUser.name"> {{ shortName }} </template>
                        <template v-else> Iniciar Sesión </template>
                    </custom-button>
                    <custom-button class="btn-cart" dark>
                        <shop-cart-icon class="mr-2 mr-sm-3" />
                        <span class="mr-2 mr-sm-3">{{ getCartCount }}</span>
                        <span class="status-indicator" :class="currentUser.name ? 'active' : ''"></span>
                    </custom-button>
                </div>
                <theme-toggle-switch />
            </div>
        </v-container>
    </v-app-bar>
</template>

<script>
import CustomButton from "./CustomButton.vue";
import ThemeToggleSwitch from "./ThemeToggleSwitch.vue";

import ShopCartIcon from "../icons/ShopCart.vue";

import { mapGetters } from "vuex";

export default {
    components: {
        CustomButton,
        ThemeToggleSwitch,

        // Icons
        ShopCartIcon
    },
    computed: {
        ...mapGetters("cart", ["getCartCount"]),
        ...mapGetters("auth", ["currentUser"]),
        shortName() {
            return this.currentUser.name.split(" ")[0];
        }
    }
};
</script>

<style lang="scss" scoped>
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

.form {
    display: flex;
    justify-content: center;
    width: 60%;
}

.search {
    color: #000000;
    font-weight: 700;
    height: 100%;
    font-size: 18px;
}

.input {
    border: 1px solid #dfdfdf;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 7px;
    width: 80%;
    outline: none;
}

.input-button {
    position: relative;
    padding: 0px 30px 0px 60px;
    background-color: #dfdfdf;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
}

.icon-search {
    color: #191919;
    position: absolute;
    width: 20px;
    height: 20px;
    left: 25px;
    top: 45%;
    transform: translateY(-50%);
}
</style>
