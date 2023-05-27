<template>
    <v-app-bar class="layout-navbar" :color="$vuetify.theme.dark ? '#000000' : '#FAFCFC'" height="60" elevation="0">
        <v-container class="pa-0 fill-height justify-space-between" fluid>
            <router-link :to="{ name: 'Home2' }" class="layout-navbar-brand">
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
import ToggleMenu from "../header/ToggleMenu.vue";

export default {
    components: {
        CustomButton,
        ToggleMenu
    }
};
</script>

<style lang="scss" scoped>
.layout-navbar {
    &::v-deep {
        .v-toolbar__content {
            padding: 12px;
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
