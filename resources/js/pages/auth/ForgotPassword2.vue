<template>
    <div>
        <layout-navbar-auth />
        <v-container class="container mt-10">
            <v-row justify="center">
                <v-col cols="12 cont">
                    <div class="wrap pa-5">
                        <div class="wrap pa-5 border-div">
                            <h6 class="black--text">¿Olvidó su contraseña?</h6>
                            <v-divider class="divider"></v-divider>
                            <span class="black--text body2">
                                Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the
                                industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has
                                been the industry's • Incluye Lorem Ipsum is simply dummy text.
                            </span>
                            <div class="inputs">
                                <span class="black--text body-2 text-uppercase">Correo Electronico</span>
                                <custom-input></custom-input>
                            </div>
                            <custom-button block color="black" class="mt-5" text="Enviar" :to="{ name: 'Login2' }" />
                        </div>
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

export default {
    components: {
        CarouselDescription,
        CustomButton,
        CustomInput,
        LayoutNavbarAuth
    }
};
</script>

<style lang="scss" scoped>
.v-application {
    &.theme--light {
        background: #dee0e0;
    }
}
</style>

<style lang="scss" scoped>
.wrap {
    background-color: #fafcfc;
    border-radius: 10px;
}

.cont {
    padding: 5% 25%;
}

.border-div {
    border: 1px solid #dfdfdf !important;
}

@media (max-width: 768px) {
    .cont {
        padding: 20% 15% 0 15%;
    }
}
@media (max-width: 475px) {
    .cont {
        padding: 20% 5% 0 5%;
    }
}

// .container {
//     border: 1px solid #e4e4e4;
//     border-radius: 10px;
//     // width: 589px;
// }

.divider {
    margin: 15px 0;
}

.inputs {
    margin-top: 20px;
}
</style>
