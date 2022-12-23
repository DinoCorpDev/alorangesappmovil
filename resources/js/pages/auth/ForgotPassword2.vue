<template>
    <div>
        <layout-navbar-auth />
        <div class="all">
            <v-container class="container">
                <h6 class="black--text">¿Olvidó su contraseña?</h6>
                <v-divider class="divider"></v-divider>
                <span class="black--text body2">Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum
                    has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has
                    been the industry's • Incluye Lorem Ipsum is simply dummy text.</span>
                <div class="inputs">
                    <span class="black--text body-2 text-uppercase">Correo Electronico</span>
                    <v-text-field class="input"></v-text-field>
                </div>
                <custom-button block class="mt-5" text="Enviar" />
            </v-container>
        </div>
    </div>
</template>

<script>
import CarouselDescription from "../../components/global/CarouselDescription.vue";
import CustomButton from "../../components/global/CustomButton.vue";
import LayoutNavbarAuth from "../../components/global/LayoutNavbarAuth.vue";

export default {
    components: {
        CarouselDescription,
        CustomButton,
        LayoutNavbarAuth
    },
    mounted() {
        this.$vuetify.theme.dark = true;
    }
};
</script>

<style lang="scss" scoped>
@media (min-width: 960px) {
    .all {
        position: absolute;
        top: calc(50% - (150px));
        background-color: #fafcfc;
        border-radius: 10px;
        left: calc(50% - (589px/2));
        padding: 10px;
    }
}

.container {
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    width: 589px;
}

.divider {
    margin: 15px 0;
}

.inputs {
    margin-top: 20px;
}

.input {
    background-color: #f5f5f5;
    height: 38px;
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 0 10px;
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
