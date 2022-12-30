<template>
    <v-app-bar :color="$vuetify.theme.dark ? '#000000' : '#FAFCFC'" height="auto">
        <v-container class="pa-0 fill-height justify-space-between" fluid>
            <router-link :to="{ name: 'TempLanding' }" class="navbar-brand">
                <div class="d-flex">
                    <h5 class="black--text bold text-uppercase logo">Idovela</h5>
                    <v-img src="/public/assets/img/carousel-item-placeholder.png" max-width="117" />
                </div>
            </router-link>
            <div class="search">
                <input type="search" class="input" placeholder="Escribe para buscar"><custom-button icon="la-search" he color="#DFDFDF" text="Buscar" />
            </div>
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
    line-height: 110px;
}

.search {
    display: flex;
    justify-content: center;
    width: 60%;
}

.input {
    border: 1px solid #DFDFDF;
    border-radius: 5px;
    padding: 7px;
    width: 80%;
}
</style>
