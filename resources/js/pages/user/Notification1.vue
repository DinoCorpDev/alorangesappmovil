<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="notificationContainer">
                <v-row class="d-sm-none toolbarNot">
                    <v-toolbar>
                        <v-toolbar-title>NOTIFICACIONES</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <custom-button @click="drawer = !drawer" dark text="MENU" icon="la-ellipsis-v" />
                    </v-toolbar>
                    <v-navigation-drawer v-model="drawer" class="drawerNot" absolute temporary>
                        <v-tabs class="tabsCon2" bg-color="teal-darken-3" right vertical v-model="tab">
                            <v-tab>Novedades</v-tab>
                            <v-tab>Solicitudes</v-tab>
                            <v-tab>Reportes</v-tab>
                        </v-tabs>
                    </v-navigation-drawer>
                </v-row>
                <v-row class="d-none d-sm-block">
                    <v-tabs v-model="tab" class="tabsCon">
                        <v-tab class="tabButton">Novedades</v-tab>
                        <div class="divider"></div>
                        <v-tab class="tabButton">Solicitudes</v-tab>
                        <div class="divider"></div>
                        <v-tab class="tabButton">Reportes</v-tab>
                    </v-tabs>
                </v-row>
                <v-row class="row-container">
                    <v-tabs-items v-model="tab">
                        <v-tab-item>
                            <v-row>
                                <v-col cols="12">
                                    <notification-cart
                                        id="0"
                                        title="Titulo de mensaje"
                                        date="02 de Julio de 2022"
                                        remitent="correo@idovela.com"
                                    />
                                </v-col>
                                <v-col cols="12">
                                    <notification-cart
                                        id="1"
                                        title="Titulo de mensaje"
                                        date="02 de Julio de 2022"
                                        remitent="correo@idovela.com"
                                    />
                                </v-col>
                            </v-row>
                        </v-tab-item>
                        <v-tab-item>
                            <v-row>
                                <v-col cols="12">
                                    <notification-cart
                                        id="0"
                                        title="Titulo de mensaje"
                                        date="02 de Julio de 2022"
                                        remitent="correo@idovela.com"
                                    />
                                </v-col>
                                <v-col cols="12">
                                    <notification-cart
                                        id="1"
                                        title="Titulo de mensaje"
                                        date="02 de Julio de 2022"
                                        remitent="correo@idovela.com"
                                    />
                                </v-col>
                            </v-row>
                        </v-tab-item>
                        <v-tab-item>
                            <v-row>
                                <v-col cols="12">
                                    <notification-cart
                                        id="0"
                                        title="Titulo de mensaje"
                                        date="02 de Julio de 2022"
                                        remitent="correo@idovela.com"
                                    />
                                </v-col>
                                <v-col cols="12">
                                    <notification-cart
                                        id="1"
                                        title="Titulo de mensaje"
                                        date="02 de Julio de 2022"
                                        remitent="correo@idovela.com"
                                    />
                                </v-col>
                            </v-row>
                        </v-tab-item>
                    </v-tabs-items>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import SelectCustom from "../../components/global/SelectCustom.vue";
import CustomInput from "../../components/global/CustomInput.vue";
import NotificationCart from "../../components/global/NotificationCart.vue";

export default {
    components: {
        SelectCustom,
        CustomInput,
        NotificationCart
    },
    data() {
        return {
            drawer: null,
            tab: null
        };
    }
};
</script>

<style lang="scss" scoped>
.notificationContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.tabButton {
    display: flex;
    background-color: #dfdfdf;
    border-radius: 5px;
    font-weight: 600;
    color: #000;
    letter-spacing: 1.25px;
    max-width: 100%;
    width: 100%;
    height: 38px;
}

.container {
    padding: 10px 40px;
}

.row-container {
    padding: 25px 0 0 0;
}

.tabButton:hover {
    background-color: #000;
    color: #ffffff;
}

.tabButton:active {
    background-color: #000;
    color: #ffffff;
}

.tabsCon .v-item-group {
    display: flex;
    width: 100% !important;
}

.tabsCon2 {
    background-color: #dfdfdf;
}

.divider {
    width: 1vw;
}

.toolbarNot {
    padding-bottom: 2vh;
    width: 100%;
}

.drawerNot {
    background-color: #dfdfdf;
    // display: flex;
}
</style>
