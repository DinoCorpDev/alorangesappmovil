<template>
    <v-app-bar :color="$vuetify.theme.dark ? '#FAFCFC' : '#FAFCFC'" height="60">
        <v-container class="pa-0 fill-height justify-space-between" fluid>
            <router-link :to="{ name: 'TempLanding' }" class="navbar-brand">
                <div class="d-flex">
                    <h6 class="text-uppercase logo">Idovela</h6>
                    <v-img src="/public/assets/img/carousel-item-placeholder.png" max-width="60" />
                </div>
            </router-link>
            <div>
                <custom-button dark color="#888989" class="mr-4" text="Iniciar Sesión | " />
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
    text-decoration: none;

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

.logo {
    line-height: 60px;
}
</style>
