<template>
    <div>
        <layout-navbar-auth />
        <bar />
        <div class="all">
            <v-container class="container">
                <h6 class="black--text"><span class="success"><i class="las la-check"></i></span> Gracias por registrarse</h6>
                <v-divider class="divider"></v-divider>
                <span class="black--text body2">Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum
                    has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has
                    been the industry's • Incluye Lorem Ipsum is simply dummy text.</span>
            </v-container>
        </div>
    </div>
</template>

<script>
import Bar from "../../components/global/Bar.vue";
import CarouselDescription from "../../components/global/CarouselDescription.vue";
import CustomButton from "../../components/global/CustomButton.vue";
import CustomInput from "../../components/global/CustomInput.vue";
import LayoutNavbarAuth from "../../components/global/LayoutNavbarAuth.vue";

export default {
    components: {
        Bar,
        CarouselDescription,
        CustomButton,
        CustomInput,
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
        top: calc(50% - (60px));
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

.success {
    background-color: #06C167;
    color: #FFFFFF;
    border-radius: 50%;
    padding: 5px 5px 0px 5px;
}

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
        top: calc(50% - (70px));
        background-color: #fafcfc;
        left: calc(5%);
    }
}
</style>
