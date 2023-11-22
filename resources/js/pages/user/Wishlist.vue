<template>
    <v-row class="wishlist">
        <v-col cols="12">
            <v-tabs v-model="tab" grow height="38px" :hide-slider="true">
                <v-tab :ripple="true">Productos</v-tab>
                <v-tab :ripple="true">Servicios</v-tab>
                <v-tab :ripple="true">Marcas</v-tab>
            </v-tabs>

            <!-- AQUI EMPIEZA -->

            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <template v-if="!productos">
                        <div class="emptycart">
                            <div class="cuadro-emptycart">
                                <v-img class="img-cartempty mb-6" src="/public/assets/img/iconoFavoritos.png" />
                                <p class="text-cartempty">AUN NO HAY PRODUCTOS EN LA LISTA DE DESEOS</p>
                                <CustomButton text="IR A PRODUCTOS" color="nero" class="mt-2" :to="{ name: 'Shop' }" />
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <v-row>
                            <v-col cols="6" sm="6" md="4" lg="2" v-for="(product, i) in getWislistProducts" :key="i">
                                <product-box :product-details="product" :is-loading="!wislistLoaded" />
                            </v-col>
                        </v-row>
                    </template>
                </v-tab-item>

                <v-tab-item>
                    <template v-if="!servicios">
                        <div class="emptycart">
                            <div class="cuadro-emptycart">
                                <v-img class="img-cartempty mb-6" src="/public/assets/img/iconoFavoritos.png" />
                                <p class="text-cartempty">AUN NO HAY SERVICIOS EN LA LISTA DE DESEOS</p>
                                <CustomButton text="IR A PRODUCTOS" color="nero" class="mt-2" :to="{ name: 'Shop' }" />
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <v-row>
                            <v-col cols="6" sm="6" md="4" lg="2" v-for="(service, i) in getWisListServices" :key="i">
                                <product-box :product-details="service" :is-loading="!wislistLoaded" />
                            </v-col>
                        </v-row>
                    </template>
                </v-tab-item>

                <v-tab-item>
                    <template v-if="!marcas">
                        <div class="emptycart">
                            <div class="cuadro-emptycart">
                                <v-img class="img-cartempty mb-6" src="/public/assets/img/iconoFavoritos.png" />
                                <p class="text-cartempty">AUN NO HAY MARCAS EN LA LISTA DE DESEOS</p>
                                <CustomButton text="IR A PRODUCTOS" color="nero" class="mt-2" :to="{ name: 'Shop' }" />
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <v-row>
                            <v-col cols="6" sm="6" md="4" lg="2" v-for="(brands, i) in getWisListBrands" :key="i">
                                <product-box :product-details="brands" :is-loading="!wislistLoaded" />
                            </v-col>
                        </v-row>
                    </template>
                </v-tab-item>
            </v-tabs-items>

            <!-- AQUÍ TERMINA -->
            <!-- <v-divider class="my-3" />
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
            </div> -->
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
        tab: null,
        productos: "j",
        servicios: "j",
        marcas: "j",
        totalPages: 1
    }),
    computed: {
        ...mapGetters("wishlist", ["wislistLoaded", "getWislistProducts", "getWisListServices", "getWisListBrands"])
    },
    mounted() {}
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
    border: 1px solid #f5f5f5;
    background-color: #f5f5f5;
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

.v-tabs {
    &::v-deep {
        .v-slide-group__prev,
        .v-slide-group__next {
            display: none !important;
        }

        .v-tabs-bar__content {
            gap: 0.75rem;

            @media (min-width: 600px) {
                gap: 1.5rem;
            }
        }
    }

    .v-tab {
        background-color: #fafcfc;
        border: 1px solid #dfdfdf;
        border-radius: 100px;
        color: #000000 !important;
        font-size: var(--font-size-btn);
        font-weight: 600;
        letter-spacing: 1.25px;
        line-height: 17px;
        // flex: 1; // All tabs same width

        &:not(.v-tab--active):hover {
            background-color: #dfdfdf;
            color: #000000 !important;
        }

        &--active {
            background-color: #000000;
            color: #ffffff !important;
        }
    }
}
// Fin estilos //
</style>
