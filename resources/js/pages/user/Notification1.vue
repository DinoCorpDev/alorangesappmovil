<template>
    <v-container>
        <div>
            <v-stepper elevation="0">
                <v-stepper-header>
                    <v-stepper-step step="1" editable>
                        <span class="text-uppercase bold">Novedades</span>
                    </v-stepper-step>

                    <v-stepper-step step="2" editable>
                        <span class="text-uppercase bold">Solicitudes</span>
                    </v-stepper-step>

                    <v-stepper-step step="3" editable>
                        <span class="text-uppercase bold">Reportes</span>
                    </v-stepper-step>
                </v-stepper-header>
                <v-divider></v-divider>
                <v-stepper-content step="1">
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
                </v-stepper-content>
                <v-stepper-content step="2">
                    <v-row> </v-row>
                </v-stepper-content>
                <v-stepper-content step="3">
                    <v-row> </v-row>
                </v-stepper-content>
            </v-stepper>
        </div>
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
            langSelectItems: ["COLOMBIA", "DEUTSCHLAND", "ENGLAND"]
        };
    }
};
</script>

<style lang="scss" scoped>
::v-deep {
    .v-stepper__header {
        box-shadow: none;
    }

    .v-stepper__content {
        padding: 24px 0px;
    }

    .v-stepper__step--editable {
        background-color: #dfdfdf;
        height: 50%;
        box-shadow: none;
        border-radius: 10px;
    }

    .v-stepper__step .v-stepper__label {
        color: #000000 !important;
    }

    .v-stepper__step .v-stepper__label:hover {
        color: #ffffff !important;
    }

    .theme--light.v-stepper .v-stepper__step--editable:hover {
        background-color: #000000;
    }
}

@media (max-width: 600px) {
}

</style>
