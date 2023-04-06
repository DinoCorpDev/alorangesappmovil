<template>
    <div>
        <layout-navbar-auth />
        <v-container class="container mt-10">
            <v-row justify="center">
                <v-col cols="12 cont">
                    <div class="wrap pa-5">
                        <div class="wrap pa-5 border-div">
                            <h6 class="black--text">
                                <span class="success"><i class="las la-check"></i></span> Gracias por registrarse
                            </h6>
                            <v-divider class="divider"></v-divider>
                            <span class="black--text body2">
                                Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the
                                industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has
                                been the industry's • Incluye Lorem Ipsum is simply dummy text.
                            </span>
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
.cont {
    padding: 7% 30% 0 30%;
}

.wrap {
    background-color: #fafcfc;
    border-radius: 10px;
}

.border-div {
    border: 1px solid #dfdfdf !important;
}

@media (max-width: 1024px) {
    .cont {
        padding: 20% 15% 0 15%;
    }
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

.success {
    background-color: #06c167;
    color: #ffffff;
    border-radius: 50%;
    padding: 5px 5px 0px 5px;
}

.divider {
    margin: 15px 0;
}

.inputs {
    margin-top: 20px;
}
</style>
