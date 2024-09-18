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
            <v-container class="pa-0 fill-height justify-space-sm-between" fluid>
                <router-link :to="{ name: 'Home2' }" class="layout-navbar-auth-brand">
                    <LogoAloranges class="d-none d-md-flex" :large="small" />
                    <LogoAlorange class="d-flex d-md-none"/>
                </router-link>
                <SearchInput />
                <CustomButton color="orange3" :to="{ name: 'Shop' }">
                    <span class="d-none d-sm-flex">Ir a la tienda</span><Cart class="cart-icon ml-sm-2" style="margin-bottom: 4px"/> 
                </CustomButton>
                <div class="layout-navbar-auth-nav">
                    <DoubleButton />
                    <div style="display: none;">
                        <ToggleMenu />
                    </div>
                </div>
            </v-container>
        </v-app-bar>
        <NabvarBottomBar v-if="$route.meta.hasBottomBar" />
    </div>
</template>

<script>
import { mapGetters } from "vuex";

import CustomButton from "../global/CustomButton.vue";
import DoubleButton from "./DoubleButton.vue";
import Cart from "../icons/CartIcon.vue";
import LogoAloranges from "./LogoAloranges.vue";
import LogoAlorange from "./LogoAlorange.vue";
import NabvarBottomBar from "./NabvarBottomBar.vue";
import SearchInput from "../global/SearchInput.vue";
import ToggleMenu from "./ToggleMenu.vue";

export default {
    name: "LayoutNavbarAuth",
    components: {
        CustomButton,
        DoubleButton,
        LogoAloranges,
        LogoAlorange,
        NabvarBottomBar,
        SearchInput,
        Cart,
        ToggleMenu
    },
    data() {
        return {
            headerFixed: false,
            logoLarge: false,
            scrollThreshold: 70
        };
    },
    computed: {
        ...mapGetters("auth", ["userShortName"])
    },
    mounted() {
        window.addEventListener("resize", this.handleScroll);
        window.addEventListener("scroll", this.handleScroll, { passive: true });
    },
    methods: {
        handleScroll() {
            const currentScroll = this.$refs.layoutNavbar.currentScroll;
            const windowWidth = window.innerWidth;

            this.headerFixed = currentScroll >= this.scrollThreshold;
            this.logoLarge = windowWidth < 960 ? false : currentScroll >= this.scrollThreshold / 2;
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    gap: 0.65rem;

    @media (min-width: 960px) {
        gap: 1rem;
    }

    @media (max-width: 600px) {
        flex-wrap: nowrap;
    }
}

.layout-navbar-auth {
    min-height: 60px;
    z-index: 10;

    @media (max-width: 960px) {
        max-height: 60px;
    }

    &::v-deep {
        .v-toolbar__content {
            min-height: 60px;
            padding: 0 12px;

            @media (max-width: 960px) {
                max-height: 60px;
            }
        }
    }

    &-brand {
        text-decoration: none;

        @media (min-width: 960px) {
            min-width: 160px;
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

    &-nav {
        display: flex;
        gap: 0.65rem;

        @media (min-width: 960px) {
            gap: 1rem;
        }
    }
}

</style>
