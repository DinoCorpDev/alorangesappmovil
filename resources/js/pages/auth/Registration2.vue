<template>
    <div>
        <layout-navbar-auth />
        <bar />
        <div class="all">
            <v-container class="mt-5 mb-5 container">
                <v-row>
                    <v-col cols="12">
                        <div class="form">
                            <div class="div-title">
                                <h6 class="black--text title">Registro</h6>
                                <v-divider class="divider"></v-divider>
                            </div>
                            <div class="inputs">
                                <v-row>
                                    <v-col cols="12" md="6">
                                        <span class="black--text body-2 text-uppercase">Correo Electrónico</span>
                                        <custom-input></custom-input>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" md="6">
                                        <span class="black--text body-2 text-uppercase">Contraseña</span>
                                        <custom-input></custom-input>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <span class="black--text body-2 text-uppercase">Repetir Contraseña</span>
                                        <custom-input></custom-input>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" md="6">
                                        <label class="label">
                                            <input type="checkbox"> <span class="body-1 black--text text">Registrar como persona natural</span>
                                            <span class="checkmark"></span>
                                        </label>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <label class="label">
                                            <input type="checkbox"> <span class="body-1 black--text text">Registrar como persona jurídica</span>
                                            <span class="checkmark"></span>
                                        </label>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" md="6">
                                        <v-row>
                                            <v-col cols="12" sm="6">
                                                <span class="black--text body-2 text-uppercase">Primer Nombre</span>
                                                <custom-input></custom-input>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <span class="black--text body-2 text-uppercase">Segundo Nombre
                                                    (Opcional)</span>
                                                <custom-input></custom-input>
                                            </v-col>
                                        </v-row>
                                        <span class="black--text body-2 text-uppercase">Documento (Representante)</span>
                                        <select-custom light label="--" :items="DocumentType" />
                                        <v-row>
                                            <v-col cols="12" md="6">
                                                <span class="black--text body-2 text-uppercase">Nombre De Direccion
                                                    (Casa / Oficina)</span>
                                                <custom-input></custom-input>
                                            </v-col>
                                            <v-col cols="12" md="6">
                                                <span class="black--text body-2 text-uppercase">Direccion (Calle /
                                                    Carrera)</span>
                                                <custom-input></custom-input>
                                            </v-col>
                                        </v-row>
                                        <span class="black--text body-2 text-uppercase">Codigo Postal</span>
                                        <custom-input></custom-input>
                                        <span class="black--text body-2 text-uppercase">Municipio</span>
                                        <select-custom light label="--" :items="Municipio" />
                                        <span class="black--text body-2 text-uppercase">Pais</span>
                                        <custom-input></custom-input>
                                        <label class="label">
                                            <input type="checkbox"> <span class="body-1 black--text text">He podido leer y entiendo la política de privacidad y cookies</span>
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="label">
                                            <input type="checkbox"> <span class="body-1 black--text text">Quiero recibir comunicaciones comerciales personalizadas de idovela a través de email.</span>
                                            <span class="checkmark"></span>
                                        </label>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-row>
                                            <v-col cols="12" md="6">
                                                <span class="black--text body-2 text-uppercase">Primer Apellido</span>
                                                <custom-input></custom-input>
                                            </v-col>
                                            <v-col cols="12" md="6">
                                                <span class="black--text body-2 text-uppercase">Segundo Apellido</span>
                                                <custom-input></custom-input>
                                            </v-col>
                                        </v-row>
                                        <span class="black--text body-2 text-uppercase">Numero de Documento</span>
                                        <custom-input></custom-input>
                                        <span class="black--text body-2 text-uppercase">Direccion Adicional (Piso /
                                            Apartamento / Oficina)</span>
                                        <custom-input></custom-input>
                                        <span class="black--text body-2 text-uppercase">Departamento</span>
                                        <select-custom light label="--" :items="DocumentType" />
                                        <span class="black--text body-2 text-uppercase">Barrio ( Opcional )</span>
                                        <custom-input></custom-input>
                                        <span class="black--text body-2 text-uppercase">Teléfono / Movil</span>
                                        <v-row>
                                            <v-col cols="2" md="4">
                                                <select-custom light label="--" :items="DocumentType" />
                                            </v-col>
                                            <v-col cols="10" md="8">
                                                <custom-input></custom-input>
                                            </v-col>
                                        </v-row>
                                        <custom-button block color="#000000" class="mt-3" text="Guardar" />
                                    </v-col>
                                </v-row>

                            </div>
                            <div class="footer">
                                <v-row>
                                    <v-col cols="6">
                                        <span class="subtitle1 bold text-uppercase black--text">© Idovela 2022</span>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-row class="d-flex justify-space-between">
                                            <v-col cols="4">
                                                <span
                                                    class="subtitle1 bold text-uppercase black--text">Información</span>
                                            </v-col>
                                            <v-col cols="4">
                                                <span
                                                    class="subtitle1 bold text-uppercase black--text">Solicitudes</span>
                                            </v-col>
                                            <v-col cols="4">
                                                <p class="subtitle1 bold text-uppercase black--text">Contacto</p>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
import Bar from "../../components/global/Bar.vue";
import CarouselDescription from "../../components/global/CarouselDescription.vue";
import CustomButton from "../../components/global/CustomButton.vue"
import CustomInput from "../../components/global/CustomInput.vue";
import LayoutNavbarAuth from "../../components/global/LayoutNavbarAuth.vue";
import SelectCustom from "../../components/global/SelectCustom.vue";

export default {
    components: {
        Bar,
        CarouselDescription,
        CustomButton,
        CustomInput,
        LayoutNavbarAuth,
        SelectCustom
    },
    data() {
        return {
            DocumentType: ["(C.C) Cedula de ciudadanía", "NIT"]
        };
    },
    mounted() {
        this.$vuetify.theme.dark = true;
    }
};
</script>

<style lang="scss" scoped>
.title {
    margin-top: 5px;
}

.container {
    background-color: #fafcfc;
    -webkit-box-shadow: -1px 1px 26px -11px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 1px 26px -11px rgba(0, 0, 0, 0.75);
    box-shadow: -1px 1px 26px -11px rgba(0, 0, 0, 0.75);
    border-radius: 10px;
}

@media (min-width: 960px) {
    .form {
        border: 1px solid #e4e4e4;
        border-radius: 10px;
        padding: 10px;
    }

    .footer {
        margin-top: 20px;
    }

    .all {
        margin: 0 12%;
    }
}

@media (max-width: 959px) {
    .all {
        margin: 0 20px;
    }

    .footer {
        margin-top: 30px;
    }
}

.divider {
    margin: 15px 0;
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
    background-color: #F5F5F5;
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
