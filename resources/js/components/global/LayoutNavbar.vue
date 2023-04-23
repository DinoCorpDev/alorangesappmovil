<template>
    <div>
        <v-app-bar :color="$vuetify.theme.dark ? '#000000' : '#FAFCFC'" height="100">
            <v-container class="pa-0 fill-height justify-space-between" fluid>
                <router-link :to="{ name: 'Home2' }" class="navbar-brand">
                    <v-img v-if="$vuetify.theme.dark" src="/public/assets/img/idovela-logo-dark.png" max-width="117" />
                    <v-img v-else src="/public/assets/img/idovela-logo.png" max-width="117" />
                </router-link>
                <div class="d-flex">
                    <custom-button light class="mr-4" icon="la-store-alt" text="Ir a tienda" :to="{ name: 'Shop' }" />
                    <custom-button light class="mr-4" text="Iniciar Sesión" :to="{ name: 'Login' }" />
                    <div class="text-center">
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn dark v-bind="attrs" v-on="on" class="btn-home"> </v-btn>
                            </template>
                            <v-list class="menu-color">
                                <v-list-item>
                                    <v-list-item-title>MENU</v-list-item-title>
                                </v-list-item>
                                <div class="divider"></div>

                                <v-list-item>
                                    <theme-toggle-switch class="btn-menu-home" />
                                    <!-- <custom-button
                                        class="btn-menu-home"
                                        icon="la-store-alt"
                                        text="Aspecto: Noche"
                                        :to="{ name: 'Shop' }"
                                    /> -->
                                </v-list-item>
                                <div class="divider"></div>

                                <v-list-item>
                                    <custom-button
                                        class="btn-menu-home"
                                        icon="la-store-alt"
                                        text="Idioma: Español"
                                        :to="{ name: 'Shop' }"
                                    />
                                </v-list-item>
                                <div class="divider"></div>
                                <v-list-item>
                                    <custom-button
                                        class="btn-menu-home"
                                        icon="la-store-alt"
                                        text="Pais: Colombia"
                                        :to="{ name: 'Shop' }"
                                    />
                                </v-list-item>
                                <div class="divider"></div>
                                <v-list-item>
                                    <custom-button
                                        class="btn-menu-home"
                                        icon="la-store-alt"
                                        text="Divisa: COP"
                                        :to="{ name: 'Shop' }"
                                    />
                                </v-list-item>
                                <div class="divider"></div>
                                <v-list-item>
                                    <custom-button
                                        class="btn-menu-home"
                                        icon="la-store-alt"
                                        text="Mediciones: CGS"
                                        :to="{ name: 'Shop' }"
                                    />
                                </v-list-item>
                                <div class="divider"></div>
                                <v-list-item>
                                    <custom-button
                                        class="btn-menu-home2"
                                        text="Informacion"
                                        :to="{ name: 'PactoAmbiental' }"
                                    />
                                </v-list-item>
                                <v-list-item>
                                    <custom-button
                                        class="btn-menu-home2"
                                        text="Solicitudes"
                                        :to="{ name: 'Upgrade' }"
                                    />
                                </v-list-item>
                                <v-list-item>
                                    <custom-button
                                        class="btn-menu-home2"
                                        text="Contacto"
                                        :to="{ name: 'PactoAmbiental' }"
                                    />
                                </v-list-item>
                                <v-list-item>
                                    <span>© Idovela 2022</span>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </div>
            </v-container>
        </v-app-bar>
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

.divider {
    background-color: #707070;
    width: 100%;
    height: 1px;
}

.btn-menu-home {
    padding: 0 15px 0 0 !important;
    margin: 0 !important;
    background: #242526 !important;
    text-transform: capitalize !important;
    font-weight: 100;
}

.btn-menu-home2 {
    padding: 0 !important;
    margin: 0 !important;
    background: #242526 !important;
}

.menu-color {
    background: #242526;
    width: 283px;
    margin-top: 10px;
    border-radius: 10px;
}

.v-list-item {
    min-height: 40px;
}

.btn-home {
    background-image: url("/public/assets/img/icono-home.svg");
    height: 40px !important;
    min-width: 40px !important;
}
</style>
