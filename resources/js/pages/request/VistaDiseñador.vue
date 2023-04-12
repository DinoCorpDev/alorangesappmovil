<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <div class="upgrade-header">
                    <div class="upgrade-header-icon mr-10">
                        <v-img width="64" aspect-ratio="1" src="/public/assets/img/upgrade-icon.png" />
                    </div>
                    <div class="upgrade-header-content">
                        <h1>Vista diseñador</h1>
                        <span>Actualización 02 de Julio de 2022</span>
                    </div>
                </div>
            </v-col>
        </v-row>
        <v-row class="text-upgrade">
            <v-col sm="12">
                <v-row>
                    <span>Subtitulo 2</span>
                    <span>
                        Si cuentas con un perfil y tienes un equipo en buenas condiciones comprado en Idovela, pero
                        deseas reemplazar a uno más actual, te brindamos la posibilidad de cámbialo y mejorar el confort
                        del espacio.
                    </span>
                </v-row>
            </v-col>
            <v-col sm="12">
                <v-row>
                    <span class="modaSpan"> SELECCIONA EL PRODUCTO QUE DESEA RENOVAR </span>
                    <transition name="selectorModal">
                        <div class="modal-overlay" v-if="showModalOld"></div>
                    </transition>
                    <transition name="selectorModal">
                        <div class="modal" v-if="showModalOld">
                            <h6>contenido</h6>
                            <p>cont</p>
                            <p>cont</p>
                            <p>cont</p>
                            <p>cont</p>
                            <!-- <custom-button text="Aceptar" @click="showModalOld = false"/> -->
                            <button class="modalButtonClose" @click="showModalOld = false">Cancelar</button>
                            <button class="modalButtonClose" @click="showModalOld = false">Seleccionar</button>
                        </div>
                    </transition>

                    <button class="box modalButton" @click="showModalOld = true">
                        <span style="font-size: xx-large; padding-right: 20px;">+</span>
                        <span style="font-weight: bold; font-weight: bold;">AÑADIR PRODUCTO</span>
                    </button>
                </v-row>
            </v-col>
            <v-col sm="12">
                <v-row>
                    <span class="modaSpan"> SELECCIONA EL PRODUCTO QUE DESEA ACTUALIZAR </span>
                    <transition name="selectorModal">
                        <div class="modal-overlay" v-if="showModalNew"></div>
                    </transition>
                    <transition name="selectorModal">
                        <div class="modal" v-if="showModalNew">
                            <h6>contenido</h6>
                            <p>cont</p>
                            <p>cont</p>
                            <p>cont</p>
                            <!-- <custom-button text="Aceptar" @click="showModalOld = false"/> -->
                            <button class="modalButtonClose" @click="showModalNew = false">Cancelar</button>
                            <button class="modalButtonClose" @click="showModalNew = false">Seleccionar</button>
                        </div>
                    </transition>
                    <button class="box modalButton" @click="showModalNew = true">
                        <span style="font-size: xx-large; padding-right: 20px;">+</span>
                        <span style="font-weight: bold; font-weight: bold;">AÑADIR PRODUCTO</span>
                    </button>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col sm="12">
                <v-row>
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
                                        <span class="subtitle1 text-uppercase bold">Descripcion de Dirección</span>
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
                                        <span class="subtitle1 text-uppercase bold"
                                            >Nombre de quien lo va a recibir</span
                                        >
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
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-row>
                            <v-col cols="12">
                                <div class="form">
                                    <h6 class="black--text bold">Dirección de servicio</h6>
                                    <v-divider class="my-3" />
                                    <label class="label">
                                        <input type="checkbox" />
                                        <span class="body-1 black--text text">
                                            Usar la misma Dirección de envió para que Idovela preste los servicio de
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
                                            Usar la misma Dirección de envió para que Idovela entreguela factura física.
                                        </span>
                                        <span class="checkmark"></span>
                                    </label>
                                    <v-divider class="my-3" />
                                    <custom-button block text="Añadir Dirección" />
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import SelectCustom from "../../components/global/SelectCustom.vue";
import CustomButton from "../../components/global/CustomButton.vue";

export default {
    components: {
        SelectCustom,
        CustomButton
    },
    data() {
        return {
            langSelectItems: ["COLOMBIA", "DEUTSCHLAND", "ENGLAND"],
            showModalOld: false,
            showModalNew: false
        };
    }
};
</script>

<style lang="scss" scoped>
.container {
    background-color: #fafcfc;
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

.label:hover input ~ .checkmark {
    background-color: #f5f5f5;
}

.label input:checked ~ .checkmark {
    background-color: #000000;
    border-radius: 5px;
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.label input:checked ~ .checkmark:after {
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

.modalButton {
    top: 415px;
    left: 518px;
    width: 1106px;
    height: 99px;
    border-radius: 10px;
    color: #040405;
    opacity: 1;
    font-weight: bold;
    align-items: center;
    display: flex;
    justify-content: center;
}

.box {
    background-image: repeating-linear-gradient(
            0deg,
            #d7d7d7,
            #d7d7d7 16px,
            transparent 16px,
            transparent 26px,
            #d7d7d7 26px
        ),
        repeating-linear-gradient(90deg, #d7d7d7, #d7d7d7 16px, transparent 16px, transparent 26px, #d7d7d7 26px),
        repeating-linear-gradient(180deg, #d7d7d7, #d7d7d7 16px, transparent 16px, transparent 26px, #d7d7d7 26px),
        repeating-linear-gradient(270deg, #d7d7d7, #d7d7d7 16px, transparent 16px, transparent 26px, #d7d7d7 26px);
    background-size: 2px 100%, 100% 2px, 2px 100%, 100% 2px;
    background-position: 0 0, 0 0, 100% 0, 0 100%;
    background-repeat: no-repeat;
    background-color: #eee;
}
.modaSpan {
    text-align: left;
    font: normal normal normal 12px/20px Roboto;
    letter-spacing: 0px;
    color: #000000;
    text-transform: uppercase;
    opacity: 0.5;
}

// selectorModal-enter {
// }

.modal {
    position: fixed;
    top: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    background: white;
    z-index: 101;
}
.modal-overlay {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.4);
}

.text-upgrade {
    padding: 0 12px;
}

.upgrade {
    &-header {
        display: flex;
        align-items: center;

        &-icon {
            background: #ffffff;
            border-radius: 50%;
            padding: 0.8rem;

            .v-image {
                max-width: 60px;

                @media (min-width: 600px) {
                    max-width: 64px;
                }
            }
        }

        &-content {
            h1 {
                font-weight: 600;
                font-size: 24px;
                letter-spacing: 0;
            }

            span {
                font-size: 15px;
                letter-spacing: 0;
            }
        }
    }
}
</style>
