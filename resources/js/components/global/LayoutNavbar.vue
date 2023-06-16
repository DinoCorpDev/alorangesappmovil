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
            <router-link :to="{ name: 'Home2' }" class="layout-navbar-brand">
                <LogoIdovela :large="logoLarge" />
            </router-link>
            <div class="layout-navbar-nav">
                <CustomButton color="grey" icon="la-store-alt" text="Ir a tienda" :to="{ name: 'Shop' }" />
                <CustomButton color="grey" text="Iniciar Sesión" :to="{ name: 'Login' }" />
                <ToggleMenu />
            </div>
        </v-container>
    </v-app-bar>
</template>

<script>
import CustomButton from "./CustomButton.vue";
import LogoIdovela from "../header/LogoIdovela.vue";
import ToggleMenu from "../header/ToggleMenu.vue";

export default {
    name: "LayoutNavbar",
    components: {
        CustomButton,
        LogoIdovela,
        ToggleMenu
    },
    data() {
        return {
            headerFixed: false,
            logoLarge: false,
            scrollThreshold: 50
        };
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

.layout-navbar {
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

        .v-image {
            width: 48px;

            @media (min-width: 600px) {
                width: 158px;
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
