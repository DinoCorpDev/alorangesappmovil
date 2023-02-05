<template>
    <v-app-bar :color="$vuetify.theme.dark ? '#000000' : '#FAFCFC'" height="100" app elevation="0">
        <v-container class="pa-0 fill-height justify-space-between" fluid>
            <router-link :to="{ name: 'TempLanding' }" class="navbar-brand">
                <v-img src="/public/assets/img/idovela-logo-dark.png" max-width="117" />
            </router-link>
            <search-input />
            <div>
                <custom-button light text="Iniciar Sesión" />
                <custom-button light text="00" icon="la-cart-arrow-down" />
                <theme-toggle-switch />
            </div>
        </v-container>
    </v-app-bar>
</template>

<script>
import CustomButton from "./CustomButton.vue";
import ThemeToggleSwitch from "./ThemeToggleSwitch.vue";
import SearchInput from "./SearchInput.vue";

export default {
    components: {
        CustomButton,
        ThemeToggleSwitch,
        SearchInput
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
