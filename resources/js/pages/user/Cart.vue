<template>
    <div class="container">
        <v-container>
            <div>
                <v-stepper elevation="0">
                    <v-stepper-header>
                        <v-stepper-step step="1" editable>
                            <span class="text-uppercase bold">Pedido</span>
                        </v-stepper-step>

                        <v-stepper-step step="2" editable>
                            <span class="text-uppercase bold">Datos</span>
                        </v-stepper-step>

                        <v-stepper-step step="3" editable>
                            <span class="text-uppercase bold">Pago</span>
                        </v-stepper-step>

                        <v-stepper-step step="4" editable>
                            <span class="text-uppercase bold">Resumen</span>
                        </v-stepper-step>
                    </v-stepper-header>
                    <v-divider></v-divider>
                    <v-stepper-content step="1">
                        <h6>Productos</h6>
                        <v-row>
                            <v-col cols="12">
                                <product-cart price="000.000.000 COP" quantity="03" />
                            </v-col>
                            <v-col cols="12">
                                <product-cart />
                            </v-col>
                            <v-col cols="12">
                                <product-cart />
                            </v-col>
                            <v-col cols="12">
                                <product-cart />
                            </v-col>
                            <v-col cols="12">
                                <product-cart />
                            </v-col>
                            <v-col cols="12">
                                <product-cart />
                            </v-col>
                            <v-col cols="12">
                                <product-cart />
                            </v-col>
                        </v-row>

                    </v-stepper-content>
                    <v-stepper-content step="2">
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-row>
                                    <v-col cols="12">
                                        <div class="form">
                                            <h6 class="black--text bold">Facturar a</h6>
                                            <v-divider class="my-3" />
                                            <select-custom dark label="Usuario Principal" :items="langSelectItems" />
                                            <div class="d-flex justify-space-between mb-2">
                                                <span class="subtitle1 text-uppercase bold">Correo electronico</span>
                                                <span class="body1">user@gmail.com</span>
                                            </div>
                                            <div class="d-flex justify-space-between mb-2">
                                                <span class="subtitle1 text-uppercase bold">Tipo de Persona</span>
                                                <span class="body1">Natural</span>
                                            </div>
                                            <div class="d-flex justify-space-between mb-2">
                                                <span class="subtitle1 text-uppercase bold">Nombre</span>
                                                <span class="body1">Alejando Ramirez</span>
                                            </div>
                                            <div class="d-flex justify-space-between mb-3">
                                                <span class="subtitle1 text-uppercase bold">Documento</span>
                                                <span class="body1">C.C. 1010101011</span>
                                            </div>
                                            <custom-button class="mr-3" text="Editar" />
                                            <custom-button text="Añadir" />
                                        </div>
                                    </v-col>
                                    <v-col cols="12">
                                        <div class="form">
                                            <h6 class="black--text bold">Dirección de servicio</h6>
                                            <v-divider class="my-3" />
                                            <label class="label">
                                                <input type="checkbox" />
                                                <span class="body-1 black--text text">
                                                    Usar la misma Dirección de envió para que Idovela preste los
                                                    servicio de
                                                    instalación, mantenimiento y más.
                                                </span>
                                                <span class="checkmark"></span>
                                            </label>
                                            <v-divider class="my-3" />
                                            <custom-button block text="Añadir Dirección" />
                                        </div>
                                    </v-col>
                                    <v-col cols="12">
                                        <div class="form">
                                            <h6 class="black--text bold">Dirección de facturacion</h6>
                                            <v-divider class="my-3" />
                                            <label class="label">
                                                <input type="checkbox" />
                                                <span class="body-1 black--text text">
                                                    Usar la misma Dirección de envió para que Idovela entreguela factura
                                                    física.
                                                </span>
                                                <span class="checkmark"></span>
                                            </label>
                                            <v-divider class="my-3" />
                                            <custom-button block text="Añadir Dirección" />
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-row>
                                    <v-col cols="12">
                                        <div class="form">
                                            <h6 class="black--text bold">Dirección de envio</h6>
                                            <v-divider class="my-3" />
                                            <select-custom dark label="Usuario Principal" :items="langSelectItems" />
                                            <div class="d-flex justify-space-between mb-2">
                                                <span class="subtitle1 text-uppercase bold">Nombre de Dirección</span>
                                                <span class="body1">Casa 1</span>
                                            </div>
                                            <div class="d-flex justify-space-between mb-2">
                                                <span class="subtitle1 text-uppercase bold">Dirección</span>
                                                <span class="body1">Avenida siempre viva 123</span>
                                            </div>
                                            <div class="d-flex justify-space-between mb-2">
                                                <span class="subtitle1 text-uppercase bold">Descripcion de
                                                    Dirección</span>
                                                <span class="body1">Casa de tejado con color café y patio verde</span>
                                            </div>
                                            <div class="d-flex justify-space-between mb-2">
                                                <span class="subtitle1 text-uppercase bold">Codigo Postal</span>
                                                <span class="body1">110611</span>
                                            </div>
                                            <div class="d-flex justify-space-between mb-2">
                                                <span class="subtitle1 text-uppercase bold">Departamento</span>
                                                <span class="body1">Cundinamarca</span>
                                            </div>
                                            <div class="d-flex justify-space-between mb-2">
                                                <span class="subtitle1 text-uppercase bold">Municipio</span>
                                                <span class="body1">Bogota d.c</span>
                                            </div>
                                            <div class="d-flex justify-space-between mb-2">
                                                <span class="subtitle1 text-uppercase bold">Barrio</span>
                                                <span class="body1"> -- </span>
                                            </div>
                                            <div class="d-flex justify-space-between mb-2">
                                                <span class="subtitle1 text-uppercase bold">Nombre de quien lo va a
                                                    recibir</span>
                                                <span class="body1">Alejandro Ramirez</span>
                                            </div>
                                            <div class="d-flex justify-space-between mb-2">
                                                <span class="subtitle1 text-uppercase bold">Telefono / Movil</span>
                                                <span class="body1">+57 300 544 3300</span>
                                            </div>
                                            <custom-button class="mr-3" text="Editar" />
                                            <custom-button text="Añadir" />
                                        </div>
                                    </v-col>
                                    <v-col cols="12">
                                        <div class="form">
                                            <h6 class="black--text bold">Costo logístico</h6>
                                            <v-divider class="my-3" />
                                            <div class="d-flex justify-space-between mb-2">
                                                <span class="subtitle1 text-uppercase bold">
                                                    Fleta adicional de envio a todo el país
                                                </span>
                                                <span class="body1">+000.000.000 COP</span>
                                            </div>
                                            <div class="d-flex justify-end mb-2">
                                                <span class="body2 text-uppercase grey--text">
                                                    ( Envió sin costos desde 500.000 COP )
                                                </span>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col sm="12" class="d-none d-sm-block">
                                <v-row>
                                    <v-col cols="12" class="d-flex justify-space-between">
                                        <custom-button text="Volver" />
                                        <div class="d-flex justify-space-between mb-2">
                                            <h6 class="text-uppercase bold">Total 000.000.000 COP</h6>
                                        </div>
                                        <custom-button text="Continuar" />
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-stepper-content>
                    <v-stepper-content step="3">
                        3
                    </v-stepper-content>
                    <v-stepper-content step="4">
                        4
                    </v-stepper-content>
                </v-stepper>
            </div>
        </v-container>
    </div>
</template>

<script>
import SelectCustom from "../../components/global/SelectCustom.vue";
import CustomButton from "../../components/global/CustomButton.vue";
import ProductCart from "../../components/global/ProductCart.vue";

export default {
    components: {
        SelectCustom,
        CustomButton,
        ProductCart
    },
    data() {
        return {
            langSelectItems: ["COLOMBIA", "DEUTSCHLAND", "ENGLAND"],
        };
    },
};
</script>

<style lang="scss" scoped>
::v-deep {

    .v-stepper__header {
        box-shadow: none;
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

.container {
    background-color: #ffffff;
}

.form {
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    padding: 10px;
}

.label {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
}

.label:hover input~.checkmark {
    background-color: #f5f5f5;
}

.label input:checked~.checkmark {
    background-color: #000000;
    border-radius: 5px;
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.label input:checked~.checkmark:after {
    display: block;
}

.label .checkmark:after {
    left: 9px;
    top: 5px;
    width: 7px;
    height: 12px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
</style>
