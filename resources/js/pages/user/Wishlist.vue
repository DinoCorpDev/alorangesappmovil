<template>
    <v-row class="wishlist">
        <v-col cols="12">
            <h5 class="wishlist-title">Lista de deseos</h5>
            <v-divider class="my-3" />
            <v-row v-if="getWislistProducts.length > 0" no-gutters class="wishlist-items">
                <v-col cols="12" v-for="(product, i) in getWislistProducts" :key="i">
                    <ProductCart :productDetails="product" productCartType="wishlist" />
                </v-col>
            </v-row>
            <div v-else class="text-center">
                <div class="emptycart">
                    <div class="cuadro-emptycart">
                        <v-img class="img-cartempty mb-6" src="/public/assets/img/iconoFavoritos.png" />
                        <p class="text-cartempty">AUN NO HAY PRODUCTOS EN LA LISTA DE DESEOS</p>
                        <CustomButton text="IR A PRODUCTOS" color="nero" class="mt-2" :to="{ name: 'Shop' }" />
                    </div>
                </div>
            </div>
        </v-col>
    </v-row>
</template>

<script>
import { mapGetters } from "vuex";

import CustomButton from "../../components/global/CustomButton.vue";
import ProductCart from "../../components/global/ProductCart.vue";

export default {
    components: {
        CustomButton,
        ProductCart
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
.wishlist {
    &-title {
        font-weight: 600;
    }

    &-items {
        gap: 0.5rem;
    }
}

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
    width: 35%;
    margin: auto;
}
// Fin estilos //
</style>
