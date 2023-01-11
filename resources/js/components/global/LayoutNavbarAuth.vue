<template>
    <v-app-bar :color="$vuetify.theme.dark ? '#000000' : '#FAFCFC'" height="auto">
        <v-container class="pa-0 fill-height justify-space-between" fluid>
            <router-link :to="{ name: 'TempLanding' }" class="navbar-brand">
                <div class="d-flex">
                    <h5 class="black--text bold text-uppercase logo">Idovela</h5>
                    <v-img src="/public/assets/img/carousel-item-placeholder.png" max-width="117" />
                </div>
            </router-link>
            <form class="form">
                <input type="search" class="input" placeholder="Escribe para buscar" />
                <div class="input-button">
                    <input type="button" value="Buscar" class="search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-search icon-search"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="#2c3e50"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                </div>
            </form>
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

.form {
    display: flex;
    justify-content: center;
    width: 60%;
}

.search {
    color: #000000;
    font-weight: 700;
    height: 100%;
    font-size: 18px;
}

.input {
    border: 1px solid #dfdfdf;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 7px;
    width: 80%;
    outline: none;
}

.input-button {
    position: relative;
    padding: 0px 30px 0px 60px;
    background-color: #dfdfdf;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
}

.icon-search {
    color: #191919;
    position: absolute;
    width: 20px;
    height: 20px;
    left: 25px;
    top: 45%;
    transform: translateY(-50%);
}
</style>
