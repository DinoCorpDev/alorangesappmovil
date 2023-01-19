<template>
    <div>
        <layout-navbar-auth />
        <nabvar-bottom-bar back-to="Login2" />
        <v-container class="container">
            <v-row justify="center">
                <v-col cols="6">
                    <div class="wrap pa-5">
                        <h6 class="black--text">¿Olvidó su contraseña?</h6>
                        <v-divider class="divider"></v-divider>
                        <span class="black--text body2">
                            Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the
                            industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been
                            the industry's • Incluye Lorem Ipsum is simply dummy text.
                        </span>
                        <div class="inputs">
                            <span class="black--text body-2 text-uppercase">Correo Electronico</span>
                            <custom-input></custom-input>
                        </div>
                        <custom-button block class="mt-5" text="Enviar" />
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import NabvarBottomBar from "../../components/global/NabvarBottomBar.vue";
import CarouselDescription from "../../components/global/CarouselDescription.vue";
import CustomButton from "../../components/global/CustomButton.vue";
import CustomInput from "../../components/global/CustomInput.vue";
import LayoutNavbarAuth from "../../components/global/LayoutNavbarAuth.vue";

export default {
    components: {
        NabvarBottomBar,
        CarouselDescription,
        CustomButton,
        CustomInput,
        LayoutNavbarAuth
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
.wrap {
    background-color: #fafcfc;
    border-radius: 10px;
}

@media (min-width: 960px) {
    .all {
        position: absolute;
        top: calc(50% - (150px));
        background-color: #fafcfc;
        border-radius: 10px;
        left: calc(50% - (589px / 2));
        padding: 10px;
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

@media (max-width: 959px) {
    .container {
        position: absolute;
        width: 90%;
        top: calc(50% - (150px));
        background-color: #fafcfc;
        left: calc(5%);
    }
}
</style>
