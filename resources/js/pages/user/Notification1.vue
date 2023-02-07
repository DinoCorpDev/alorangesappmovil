<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-tabs v-model="tab" grow class="mb-6">
                    <v-tab>Novedades</v-tab>
                    <v-tab>Solicitudes</v-tab>
                    <v-tab>Reportes</v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab">
                    <v-tab-item>
                        <v-row>
                            <v-col cols="12">
                                <notification-cart
                                    title="Titulo de mensaje"
                                    date="02 de Julio de 2022"
                                    remitent="correo@idovela.com"
                                />
                            </v-col>
                            <v-col cols="12">
                                <notification-cart
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
                                    title="Titulo de mensaje"
                                    date="02 de Julio de 2022"
                                    remitent="correo@idovela.com"
                                />
                            </v-col>
                            <v-col cols="12">
                                <notification-cart
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
                                    title="Titulo de mensaje"
                                    date="02 de Julio de 2022"
                                    remitent="correo@idovela.com"
                                />
                            </v-col>
                            <v-col cols="12">
                                <notification-cart
                                    title="Titulo de mensaje"
                                    date="02 de Julio de 2022"
                                    remitent="correo@idovela.com"
                                />
                            </v-col>
                        </v-row>
                    </v-tab-item>
                </v-tabs-items>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import SelectCustom from "../../components/global/SelectCustom.vue";
import CustomButton from "../../components/global/CustomButton.vue";
import CustomInput from "../../components/global/CustomInput.vue";
import NotificationCart from "../../components/global/NotificationCart.vue";

export default {
    components: {
        SelectCustom,
        CustomButton,
        CustomInput,
        NotificationCart
    },
    data() {
        return {
            tab: null
        };
    }
};
</script>

<style lang="scss" scoped>
.v-tab {
    background-color: #e4e5e5;
    font-weight: 600;
    color: #000;
    letter-spacing: 1.25px;
}
</style>
