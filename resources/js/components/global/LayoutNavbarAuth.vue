<template>
    <div>
        <v-app-bar
            ref="layoutNavbar"
            class="layout-navbar-auth"
            :color="$vuetify.theme.dark ? '#000000' : '#FAFCFC'"
            elevation="0"
            prominent
            dense
            shrink-on-scroll
            :fixed="headerFixed"
        >
            <v-container class="pa-0 fill-height justify-space-between" fluid>
                <router-link :to="{ name: 'Home2' }" class="navbar-brand">
                    <LogoIdovela :large="logoLarge" />
                </router-link>
                <SearchInput class="d-none d-sm-flex" />
                <div class="d-flex">
                    <div class="double-button d-flex mr-4">
                        <CustomButton class="btn-login" dark :to="{ name: 'Cart' }">
                            <template v-if="currentUser.name"> {{ shortName }} </template>
                            <template v-else> Iniciar Sesión </template>
                        </CustomButton>
                        <CustomButton class="btn-cart" dark :to="{ name: 'Cart' }">
                            <shop-cart-icon class="mr-2 mr-sm-3" />
                            <span class="mr-2 mr-sm-3">{{ getCartCount }}</span>
                            <span class="status-indicator" :class="currentUser.name ? 'active' : ''"></span>
                        </CustomButton>
                    </div>
                    <div class="d-flex">
                        <div class="text-center">
                            <ToggleMenu />
                        </div>
                    </div>
                </div>
            </v-container>
        </v-app-bar>
        <NabvarBottomBar v-if="bottomBar" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import CustomButton from "./CustomButton.vue";
import LogoIdovela from "../header/LogoIdovela.vue";
import NabvarBottomBar from "./NabvarBottomBar.vue";
import SearchInput from "./SearchInput.vue";
import ToggleMenu from "../header/ToggleMenu.vue";

import ShopCartIcon from "../icons/ShopCart.vue";

export default {
    name: "LayoutNavbarAuth",
    props: {
        bottomBar: {
            type: Boolean,
            default: true
        }
    },
    components: {
        NabvarBottomBar,
        CustomButton,
        LogoIdovela,
        SearchInput,
        ToggleMenu,

        // Icons
        ShopCartIcon
    },
    data() {
        return {
            headerFixed: false,
            logoLarge: false,
            scrollThreshold: 50
        };
    },
    computed: {
        ...mapGetters("cart", ["getCartCount"]),
        ...mapGetters("auth", ["currentUser"]),
        shortName() {
            return this.currentUser.name.split(" ")[0];
        }
    },
    created() {
        this.fetchCartProducts();
    },
    mounted() {
        window.addEventListener("resize", this.handleScroll);
        window.addEventListener("scroll", this.handleScroll, { passive: true });
    },
    methods: {
        ...mapActions("cart", ["fetchCartProducts"]),
        handleScroll() {
            const currentScroll = this.$refs.layoutNavbar.currentScroll;
            const windowWidth = window.innerWidth;

            this.headerFixed = currentScroll >= this.scrollThreshold;
            this.logoLarge = windowWidth < 960 ? false : this.headerFixed;
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    gap: 1rem;
}

.layout-navbar-auth {
    min-height: 60px;
    z-index: 10;

    @media (max-width: 600px) {
        max-height: 60px;
    }

    &::v-deep {
        .v-toolbar__content {
            min-height: 60px;

            @media (max-width: 600px) {
                max-height: 60px;
            }
        }
    }
}

.navbar-brand {
    text-decoration: none;

    .v-image {
        width: 48px;

        @media (min-width: 600px) {
            width: 158px;
        }
    }

    &::v-deep {
        .logo-idovela {
            width: 60px;
            height: 38px;

            @media (min-width: 960px) {
                width: 90px;
                height: 55px;
            }

            @media (min-width: 1264px) {
                width: 117px;
                height: 72px;
            }
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
        // height: 40px !important;
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
