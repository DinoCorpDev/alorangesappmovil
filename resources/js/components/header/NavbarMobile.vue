<template>
    <v-app-bar
        ref="layoutNavbar"
        class="layout-navbar"
        :color="$vuetify.theme.dark ? '#000000' : '#FAFCFC'"
        elevation="0"
        prominent
        dense
        shrink-on-scroll
        :fixed="headerFixed"
    >
        <v-container class="pa-0 fill-height justify-space-between" fluid>
            <router-link :to="{ name: 'MobileHome' }" class="layout-navbar-brand">
                <LogoAloranges :large="logoLarge" class="d-none d-sm-block" />
                <!-- <img src="./Logo Aloranges.png" alt="" class="d-block d-sm-none" /> -->
                <LogoAlorange class="d-block d-sm-none" style="max-width: 175px; height: auto" />
            </router-link>
            <div class="layout-navbar-nav">
                <!-- <SearchInput
                    :showInput="true"
                    :placeholder="'Escribe lo que buscas'"
                    style="max-width: 500px; width: 125px"
                /> -->
                <!-- <CustomButton color="orange2" icon="la-store-alt" text="Ir a tienda" :to="{ name: 'Shop' }" /> -->
                <!-- <CustomButton color="orange3" :to="{ name: 'Shop' }">
                    <span class="d-none d-sm-flex">Tienda</span>
                    <Cart class="cart-icon ml-sm-2" style="margin-bottom: 4px" />
                </CustomButton> -->
                <CustomButton
                    v-if="!userIsLoggedIn"
                    color="orange"
                    text="Iniciar Sesión"
                    :href="'user/login'"
                />
                <DoubleButton v-else />
                <div style="display: none">
                    <ToggleMenu />
                </div>
            </div>
        </v-container>
    </v-app-bar>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import DoubleButton from "./DoubleButton.vue";
import LogoAloranges from "../icons/LogoIconoAloranges.vue";
import LogoAlorange from "../icons/LogoIconoAloranges.vue";
import ToggleMenu from "./ToggleMenu.vue";
import Cart from "../icons/CartIcon.vue";
import SearchInput from "../global/SearchInput.vue";

export default {
    name: "LayoutNavbarMobile",
    components: {
        DoubleButton,
        LogoAlorange,
        LogoAloranges,
        Cart,
        ToggleMenu,
        SearchInput
    },
    data() {
        return {
            headerFixed: false,
            logoLarge: false,
            scrollThreshold: 10
        };
    },
    computed: {
        ...mapGetters("auth", ["userIsLoggedIn"])
    },
    mounted() {
        window.addEventListener("resize", this.handleScroll);
        window.addEventListener("scroll", this.handleScroll, { passive: true });
    },
    methods: {
        ...mapMutations("auth", ["showLoginDialog"]),
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

.layout-navbar {
    min-height: 60px;
    z-index: 10;
    background-color: #ffefde !important;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 6px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px !important;
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

    &-brand {
        text-decoration: none;

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

    &-nav {
        display: flex;
        gap: 0.5rem;

        @media (min-width: 600px) {
            gap: 1rem;
        }
    }
}
</style>
