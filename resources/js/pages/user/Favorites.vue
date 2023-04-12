<template>
    <v-container>
        <h6>Lista de Deseos</h6>
        <v-divider class="my-3"></v-divider>
        <v-row v-if="getWislistProducts.length > 0">
            <v-col cols="12" v-for="(product, i) in getWislistProducts" :key="i">
                <product-cart
                    :price="product?.price"
                    :name="product?.name"
                    quantity="1"
                    icon1="/public/assets/img/icons/back.svg"
                    icon3="/public/assets/img/icons/marker.svg"
                />
            </v-col>
        </v-row>
        <div v-else class="text-center">
            <div>{{ $t("no_product_wishlisted") }}</div>
        </div>
    </v-container>
</template>

<script>
import ProductCart from "../../components/global/ProductCart.vue";
import { mapGetters } from "vuex";

export default {
    components: {
        ProductCart
    },
    data: () => ({
        currentPage: 1,
        totalPages: 1,
    }),
    computed: {
        ...mapGetters("wishlist",[
            "wislistLoaded",
            "getWislistProducts"
        ]),
    }
};
</script>

<style lang="scss" scoped>
.container {
    background-color: #ffffff;
}
</style>
