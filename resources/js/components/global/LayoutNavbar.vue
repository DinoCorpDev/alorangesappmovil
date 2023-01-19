<template>
    <div>
        <v-app-bar :color="$vuetify.theme.dark ? '#000000' : '#FAFCFC'" height="100">
            <v-container class="pa-0 fill-height justify-space-between" fluid>
                <router-link :to="{ name: 'TempLanding' }" class="navbar-brand">
                    <v-img src="/public/assets/img/idovela-logo-dark.png" max-width="117" />
                </router-link>
                <div class="d-flex">
                    <custom-button light class="mr-4" icon="la-store-alt" text="Ir a tienda" />
                    <custom-button light class="mr-4" text="Iniciar Sesión" />
                    <theme-toggle-switch />
                </div>
            </v-container>
        </v-app-bar>
        <nabvar-bottom-bar share />
    </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
import ThemeToggleSwitch from "./ThemeToggleSwitch.vue";
import NabvarBottomBar from "./NabvarBottomBar.vue";

export default {
    components: {
        CustomButton,
        ThemeToggleSwitch,
        NabvarBottomBar
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
</style>
