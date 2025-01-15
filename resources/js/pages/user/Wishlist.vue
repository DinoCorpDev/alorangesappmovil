<template>
    <div>
        <UserLayoutTitle>Mi lista</UserLayoutTitle>
        <v-row class="wishlist">
            <v-col cols="12">
                <template v-if="getWislistProducts.length === 0">
                    <div class="emptycart d-flex justify-center" style="width: 100%">
                        <div class="cuadro-emptycart">
                            <v-img class="img-cartempty mb-6" src="/public/assets/img/iconoFavoritos.png" />
                            <p class="text-cartempty">
                                Aún no hay productos <br />
                                en tu lista de deseos
                            </p>
                            <CustomButton text="Ir a la Tienda" color="orange" class="mt-2" :to="{ name: 'Shop' }" />
                        </div>
                    </div>
                </template>
                <template v-else>
                    <h5 class="mb-5" style="font-size: 18px; font-weight: 600; text-align: left">Lista de deseos</h5>
                    <div class="cart-table-header mb-2" style="width: 100%">
                        <div style="padding-left: 4%">Productos</div>
                        <div>Precio</div>
                        <div class="d-none d-md-flex"><span class="pl-2">Cantidad</span></div>
                        <div class="d-flex d-md-none">Cant</div>
                        <div class="d-none d-sm-flex"><span class="pl-3">Opciones</span></div>
                        <div class="d-flex d-sm-none">Opc</div>
                    </div>
                    <v-row no-gutters class="car-items" style="overflow-y: auto; max-height: 450px">
                        <v-col cols="12" v-for="(product, i) in getWislistProducts" :key="i">
                            <ProductCart
                                :product-details="product"
                                :product-cart-type="'wishlist'"
                                :is-loading="!wislistLoaded"
                            />
                        </v-col>
                    </v-row>
                </template>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

import ProductCart from "../../components/global/ProductCart.vue";
import ProductBrand from "../../components/global/ProductBrand.vue";
import ProfileAddress from "../../components/icons/ProfileAddress.vue";
import ProductBoxShort from "../../components/product/ProductBoxShort.vue";
import UserLayoutTitle from '@components/user/UserLayoutTitle.vue';

export default {
    components: {
        ProductCart,
        ProductBrand,
        ProfileAddress,
        ProductBoxShort,
        UserLayoutTitle
    },
    data: () => ({
        currentPage: 1,
        tab: null,
        totalPages: 1
    }),
    computed: {
        ...mapGetters("wishlist", ["wislistLoaded", "getWislistProducts", "getWisListServices", "getWisListBrands"])
    }
};
</script>

<style lang="scss" scoped>
.car-items {
    gap: 0.5rem;
}

.cart {
    &-table {
        &-header {
            display: grid;
            align-items: stretch;
            grid-template-columns: 6fr 4fr 1fr 1fr;

            @media (min-width: 768px) {
                grid-template-columns: 5fr 2fr 2fr 3fr;
                padding: 0.75rem 0;
            }

            div {
                font-size: var(--font-size-body1);
                font-weight: 700;

                &:not(:first-child) {
                    padding-left: 1.5rem;
                }
            }
        }
    }
}
.wishlist {
    &-title {
        font-weight: 600;
    }

    &-items {
        gap: 0.5rem;
    }
}

.container {
    background-color: #fafcfc !important;
}

// Estilos carrito vacio //
.emptycart {
    display: flex;
    justify-content: center;
}
.cuadro-emptycart {
    padding: 40px 50px;
    text-align: center;
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
.theme--light.v-tabs > .v-tabs-bar {
    background-color: #fafcfc !important;
}
.theme--light.v-tabs-items {
    background-color: #fafcfc !important;
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

.form-border {
    border: 1px solid #e4e4e4;
    background-color: #f5f5f5;
}
// Fin estilos //
</style>
