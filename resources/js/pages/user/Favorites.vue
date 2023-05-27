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
            <div class="emptycart">
                <div class="cuadro-emptycart">
                    <v-img class="img-cartempty mb-6" src="/public/assets/img/iconoFavoritos.png" />
                    <p class="text-cartempty">AUN NO HAY PRODUCTOS EN LA LISTA DE DESEOS</p>
                    <custom-button text="IR A PRODUCTOS" color="nero" class="mt-2" :to="{ name: 'Shop' }" />
                </div>
            </div>
            <!-- <div>{{ $t("no_product_wishlisted") }}</div> -->
        </div>
    </v-container>
</template>

<script>
import ProductCart from "../../components/global/ProductCart.vue";
import CustomButton from "../../components/global/CustomButton.vue";
import { mapGetters } from "vuex";

export default {
    components: {
        ProductCart,
        CustomButton
    },
    data: () => ({
        currentPage: 1,
        totalPages: 1
    }),
    computed: {
        ...mapGetters("wishlist", ["wislistLoaded", "getWislistProducts"])
    }
};
</script>

<style lang="scss" scoped>
.container {
    background-color: #ffffff;
}

// Estilos carrito vacio //
.emptycart {
    display: flex;
    justify-content: center;
}
.cuadro-emptycart {
    padding: 40px 50px;
    text-align: center;
    border: 1px solid #dfdfdf;
    margin-top: 7%;
    border-radius: 10px;
}
.text-cartempty {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 0;
}
.img-cartempty {
    width: 26%;
    margin: auto;
}
// Fin estilos //
</style>
