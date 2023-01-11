<template>
    <v-app-bar :color="$vuetify.theme.dark ? '#000000' : '#FAFCFC'" height="auto">
        <v-container class="pa-0 fill-height justify-space-between" fluid>
            <router-link :to="{ name: 'TempLanding' }" class="navbar-brand">
                <v-img src="/public/assets/img/logo-idovela-white.png" max-width="117" />
            </router-link>
            <div>
                <custom-button light class="mr-4" icon="la-store-alt" text="Ir a tienda" />
                <custom-button light class="mr-4" text="Iniciar Sesión" />
                <v-btn @click="toggleTheme()">🌛</v-btn>
            </div>
        </v-container>
    </v-app-bar>
</template>

<script>
import CustomButton from "./CustomButton.vue";

export default {
    components: {
        CustomButton
    },
    methods: {
        toggleTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        }
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
