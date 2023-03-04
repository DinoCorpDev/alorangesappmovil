<template>
    <v-container>
        <h6>Lista de Deseos</h6>
        <v-divider class="my-3"></v-divider>
        <v-row>
            <v-col cols="12">
                <product-cart
                    price="000.000.000 COP"
                    quantity="3"
                    icon1="/public/assets/img/icons/back.svg"
                    icon3="/public/assets/img/icons/marker.svg"
                />
            </v-col>
            <v-col cols="12">
                <product-cart
                    price="000.000.000 COP"
                    quantity="3"
                    icon1="/public/assets/img/icons/back.svg"
                    icon3="/public/assets/img/icons/marker.svg"
                />
            </v-col>
            <v-col cols="12">
                <product-cart
                    price="000.000.000 COP"
                    quantity="3"
                    icon1="/public/assets/img/icons/back.svg"
                    icon3="/public/assets/img/icons/marker.svg"
                />
            </v-col>
            <v-col cols="12">
                <product-cart
                    price="000.000.000 COP"
                    quantity="3"
                    icon1="/public/assets/img/icons/back.svg"
                    icon3="/public/assets/img/icons/marker.svg"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ProductCart from "../../components/global/ProductCart.vue";

export default {
    components: {
        ProductCart
    }
};
</script>

<style lang="scss" scoped>
.container {
    background-color: #ffffff;
}
</style>
