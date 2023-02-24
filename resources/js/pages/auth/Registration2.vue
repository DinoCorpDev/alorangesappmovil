<template>
    <div class="register d-flex flex-column h-100">
        <layout-navbar-auth />
        <v-container class="flex-grow-1 mb-5">
            <v-row class="wrap pa-5" no-gutters>
                <v-col cols="12">
                    <div class="register-content pa-lg-5 pt-lg-8">
                        <h1 class="register-title">Registro</h1>
                        <v-divider class="my-4" />
                        <div class="inputs mb-8">
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
                                        <input type="radio" v-model="typePerson" value="natural" />
                                        <span class="body-1 black--text text">Registrar como persona natural</span>
                                        <span class="checkmark"></span>
                                    </label>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <label class="label">
                                        <input type="radio" v-model="typePerson" value="juridical" />
                                        <span class="body-1 black--text text">Registrar como persona jurídica</span>
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
                                            <span class="black--text body-2 text-uppercase">
                                                Segundo Nombre (Opcional)
                                            </span>
                                            <custom-input></custom-input>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-row>
                                        <v-col cols="12" sm="6">
                                            <span class="black--text body-2 text-uppercase">Primer Apellido</span>
                                            <custom-input></custom-input>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <span class="black--text body-2 text-uppercase"> Segundo Apellido </span>
                                            <custom-input></custom-input>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Documento (Representante)</span>
                                    <select-custom light label="--" :items="DocumentType" />
                                </v-col>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Numero de Documento</span>
                                    <custom-input></custom-input>
                                </v-col>
                            </v-row>
                            <v-row v-if="typePerson == 'juridical'">
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Nombre de la Empresa</span>
                                    <custom-input></custom-input>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Entidad Comercial</span>
                                    <select-custom light label="--" :items="DocumentType" />
                                </v-col>
                            </v-row>
                            <v-row v-if="typePerson == 'juridical'">
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Documento (Representante)</span>
                                    <custom-button block class="mt-3" text="Añadir Mi Empresa" />
                                </v-col>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Documento (Representante)</span>
                                    <custom-button block class="mt-3" text="Añadir Mi Empresa" />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-row>
                                        <v-col cols="12" md="6">
                                            <span class="black--text body-2 text-uppercase">
                                                Nombre De Dirección (Casa / Oficina)
                                            </span>
                                            <custom-input></custom-input>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <span class="black--text body-2 text-uppercase">
                                                Dirección (Calle / Carrera)
                                            </span>
                                            <custom-input></custom-input>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">
                                        Dirección Adicional (Piso / Apartamento / Oficina)
                                    </span>
                                    <custom-input></custom-input>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Codigo Postal</span>
                                    <custom-input></custom-input>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Departamento</span>
                                    <select-custom light label="--" :items="DocumentType" />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Municipio</span>
                                    <select-custom light label="--" />
                                </v-col>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Barrio ( Opcional )</span>
                                    <custom-input></custom-input>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Pais</span>
                                    <select-custom light label="--" />
                                </v-col>
                                <v-col cols="12" md="6">
                                    <span class="black--text body-2 text-uppercase">Teléfono / Mobil</span>
                                    <v-row>
                                        <v-col cols="2" md="4">
                                            <select-custom light label="--" :items="DocumentType" />
                                        </v-col>
                                        <v-col cols="10" md="8">
                                            <custom-input></custom-input>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <label class="label">
                                        <input type="checkbox" />
                                        <span class="body-1 black--text text">
                                            He podido leer y entiendo la política de privacidad y cookies
                                        </span>
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="label">
                                        <input type="checkbox" />
                                        <span class="body-1 black--text text">
                                            Quiero recibir comunicaciones comerciales personalizadas de idovela a través
                                            de email.
                                        </span>
                                        <span class="checkmark"></span>
                                    </label>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <custom-button
                                        block
                                        color="black"
                                        class="mt-3"
                                        text="Guardar"
                                        :to="{ name: 'RegistrationSuccess' }"
                                    />
                                </v-col>
                            </v-row>
                        </div>
                        <auth-footer />
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import CarouselDescription from "../../components/global/CarouselDescription.vue";
import CustomButton from "../../components/global/CustomButton.vue";
import CustomInput from "../../components/global/CustomInput.vue";
import LayoutNavbarAuth from "../../components/global/LayoutNavbarAuth.vue";
import AuthFooter from "./AuthFooter.vue";
import SelectCustom from "../../components/global/SelectCustom.vue";

export default {
    components: {
        CarouselDescription,
        CustomButton,
        CustomInput,
        LayoutNavbarAuth,
        AuthFooter,
        SelectCustom
    },
    data() {
        return {
            typePerson: "natural",
            DocumentType: ["(C.C) Cedula de ciudadanía", "NIT"]
        };
    }
};
</script>

<style lang="scss">
.v-application {
    &.theme--light {
        background: #dee0e0;
    }
}
</style>

<style lang="scss" scoped>
.register {
    height: 100%;

    &-title {
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 0;
        line-height: 30px;
    }

    &-content {
        @media (min-width: 1264px) {
            border: 1px solid #e4e4e4;
            border-radius: 10px;
        }

        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}

.wrap {
    background-color: #fafcfc;
    border-radius: 10px;
}

.v-divider {
    border-color: #e4e4e4 !important;
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
</style>
