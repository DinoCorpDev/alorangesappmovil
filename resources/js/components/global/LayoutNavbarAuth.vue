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
                <router-link :to="{ name: 'Home2' }" class="layout-navbar-auth-brand">
                    <LogoIdovela :large="logoLarge" />
                </router-link>
                <SearchInput class="d-none d-sm-flex" />
                <div class="layout-navbar-auth-nav">
                    <DoubleButton />
                    <ToggleMenu />
                </div>
            </v-container>
        </v-app-bar>
        <NabvarBottomBar v-if="bottomBar" />
    </div>
</template>

<script>
import { mapGetters } from "vuex";

import CustomButton from "./CustomButton.vue";
import DoubleButton from "../header/DoubleButton.vue";
import LogoIdovela from "../header/LogoIdovela.vue";
import NabvarBottomBar from "./NabvarBottomBar.vue";
import SearchInput from "./SearchInput.vue";
import ToggleMenu from "../header/ToggleMenu.vue";

export default {
    name: "LayoutNavbarAuth",
    props: {
        bottomBar: {
            type: Boolean,
            default: true
        }
    },
    components: {
        CustomButton,
        DoubleButton,
        LogoIdovela,
        NabvarBottomBar,
        SearchInput,
        ToggleMenu
    },
    data() {
        return {
            headerFixed: false,
            logoLarge: false,
            scrollThreshold: 50
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
