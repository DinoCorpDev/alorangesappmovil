<template>
    <div>
        <layout-navbar-auth />
        <v-container fluid class="product-details pa-4">
            <v-row>
                <v-col cols="12">
                    <AddToCart class="mb-10" :is-loading="detailsLoading" :product-details="productDetails" />
                </v-col>
            </v-row>

            <v-row tag="section" class="mb-6">
                <v-col cols="12">
                    <h5>H5</h5>
                    <v-row class="mb-3">
                        <v-col v-for="product in moreProducts" :key="`product-col-${product.id}`" cols="2">
                            <ProductBox :productDetails="product" />
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="12" sm="8" md="4">
                            <CustomButton block color="grey" text="Ver más" />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-row tag="section" class="mb-6">
                <v-col cols="12">
                    <h5>H5</h5>
                    <v-row class="mb-3">
                        <v-col
                            v-for="product in footerProducts"
                            :key="`product-col-${product.id}`"
                            cols="12"
                            sm="6"
                            md="3"
                        >
                            <ProductBox boxStyle="two" :productDetails="product" />
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="12" sm="8" md="4">
                            <CustomButton block color="grey" text="Ver más" />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
        <footer-custom />
    </div>
</template>

<script>
import ProductBox from "../components/product/ProductBox.vue";
import CustomButton from "../components/global/CustomButton.vue";
import FooterCustom from "../components/global/FooterCustom.vue";
import Carousel from "../components/global/Carousel.vue";
import LayoutNavbarAuth from "../components/global/LayoutNavbarAuth.vue";
// import ChartView from "../components/global/ChartView.vue";
import AddToCart from "../components/product/AddToCart.vue";

export default {
    data: () => ({
        productDetails: {},
        img: "/public/assets/img/item-placeholder.png",
        model: 0,
        tags: ["1", "2", "3"],
        ratings: { rating5: 67, rating4: 22, rating3: 11, rating2: 0, rating1: 0, vidaUtil: 0 },
        desserts: [],
        impacto: "28%",
        moreProducts: [],
        footerProducts: [],
        tab: null,
        relatedProducts: [{}, {}, {}, {}, {}],
        actionLoading: false
    }),
    components: {
        ProductBox,
        CustomButton,
        Carousel,
        LayoutNavbarAuth,
        FooterCustom,
        AddToCart
        // ChartView
    },
    methods: {
        async getDetails() {
            const res = await this.call_api("get", `product/details/${this.$route.params.slug}`);

            if (res.data.success) {
                this.productDetails = res.data.data;
                this.setVidaUtil(this.productDetails.vida_util);
                this.setComposition(this.productDetails);
                this.setImpacto(this.productDetails?.impacto_ambiental);
                this.getMoreProducts(this.productDetails?.id);
                this.getMoreProducts2(this.productDetails?.id);
                this.getRelatedProducts(this.productDetails.id);
            } else {
                this.snack({
                    message: res.data.message,
                    color: "red"
                });

                this.$router.push({ name: "404" });
            }

            this.detailsLoading = false;
        },
        async getRelatedProducts(id) {
            const res = await this.call_api("get", `product/related/${id}`);
            if (res.data.success) {
                this.relatedProducts = res.data.data;
                this.relatedLoading = false;
            }
        },
        async getMoreProducts(id) {
            const res = await this.call_api("get", `product/random/6/${id}`);
            if (res.data.success) {
                res.data?.data?.map(product => {
                    this.moreProducts.push({
                        id: product?.id,
                        name: product?.name,
                        val: product?.base_price + " " + product?.currency,
                        img: product?.thumbnail_image,
                        description: product?.description,
                        brand: product?.brandName,
                        ref: product?.reference,
                        slug: product?.slug
                    });
                });
            }
        },
        async getMoreProducts2(id) {
            const res = await this.call_api("get", `product/random/4/${id}`);
            if (res.data.success) {
                res.data?.data?.map(product => {
                    this.footerProducts.push({
                        id: product?.id,
                        name: product?.name,
                        val: product?.base_price + " " + product?.currency,
                        img: product?.thumbnail_image,
                        description: product?.description,
                        brand: product?.brandName,
                        ref: product?.reference,
                        slug: product?.slug
                    });
                });
            }
        },
        setVidaUtil(value) {
            if (value) {
                switch (value) {
                    case "1-10 años":
                        this.ratings.vidaUtil = 67;
                        break;
                    case "10-25 años":
                        this.ratings.vidaUtil = 100;
                        break;
                    case "1-24 Meses":
                        this.ratings.vidaUtil = 34;
                        break;
                    case "1-14 Semanas":
                        this.ratings.vidaUtil = 0;
                        break;
                    default:
                        this.ratings.vidaUtil = 0;
                        break;
                }
            }
        },
        setComposition(data) {
            this.desserts = [
                {
                    color: "background-color:#114B99",
                    name: "Plástico",
                    percent: data?.plastico ?? "-",
                    kg: data?.peso_plastico ?? "-" + "Kg"
                },
                {
                    color: "background-color:#FEA60F",
                    name: "Cartón",
                    percent: data?.carton ?? "-",
                    kg: data?.peso_carton ?? "-" + "Kg"
                },
                {
                    color: "background-color:#FFFFFF",
                    name: "Papel",
                    percent: data?.papel ?? "-",
                    kg: data?.peso_papel ?? "-" + "Kg"
                },
                {
                    color: "background-color:#445056",
                    name: "Metal",
                    percent: data?.metal ?? "-",
                    kg: data?.peso_metal ?? "-" + "Kg"
                },
                {
                    color: "background-color:#61A959",
                    name: "Vidrio",
                    percent: data?.vidrio ?? "-",
                    kg: data?.peso_vidrio ?? "-" + "Kg"
                },
                {
                    color: "background-color:#B1771D",
                    name: "Madera",
                    percent: data?.madera ?? "-",
                    kg: data?.peso_madera ?? "-" + "Kg"
                },
                {
                    color: "background-color:#ED847B",
                    name: "Textil",
                    percent: data?.textil ?? "-",
                    kg: data?.peso_textil ?? "-" + "Kg"
                },
                {
                    color: "background-color:#ED847B",
                    name: "Baterías / Eléctrico",
                    percent: data?.bateria_electrico ?? "-",
                    kg: data?.peso_bateria_electrico ?? "-" + "Kg"
                }
            ];
        },
        setImpacto(value) {
            if (value) {
                switch (value) {
                    case "Reversible":
                        this.impacto = "35%";
                        break;
                    case "Sostenible":
                        this.impacto = "11%";
                        break;
                    case "No Reversible":
                        this.impacto = "75%";
                        break;
                    default:
                        this.impacto = "11%";
                        break;
                }
            }
        }
    },
    async created() {
        this.getDetails();
    }
};
</script>

<style lang="scss" scoped>
.product-details {
    background-color: #fafcfc;

    .v-tabs {
        &.assets-tabs {
            position: absolute;
            z-index: 2;
            width: 90%;
            margin: auto;
            left: 0;
            right: 0;
            top: 1.5rem;
        }

        &::v-deep {
            .v-tabs-bar__content {
                gap: 1.5rem;
            }
        }

        &-items {
            height: 100%;

            .v-window-item {
                flex: 1;
            }
        }

        .v-tab {
            background-color: #f5f5f5;
            border-radius: 5px;
            color: #000000 !important;
            font-size: var(--font-size-btn);
            font-weight: 600;
            letter-spacing: 1.25px;
            line-height: 17px;
            // flex: 1; // All tabs same width

            &:not(.v-tab--active):hover {
                background-color: rgba(#000000, 0.5);
                color: #ffffff !important;
            }

            &--active {
                background-color: #000000;
                color: #ffffff !important;
            }
        }
    }

    &-assets {
        position: relative;
    }

    &-list-box {
        border-radius: 10px;
        border: 1px solid #e4e4e4;

        &-item {
            display: flex;
            justify-content: space-between;
            align-items: center;

            h5 {
                font-weight: 600;
                line-height: 1;
            }
        }

        .v-btn-toggle {
            gap: 0.75rem;

            .v-btn {
                min-width: 28px;
                height: 28px !important;
                padding: 0;
                border-radius: 2px;

                &--active,
                &:hover:not(.v-btn--active) {
                    box-shadow: 0px 0px 0px 5px #dfdfdf;
                }
            }

            & > .v-btn:first-child,
            & > .v-btn:last-child {
                border-radius: 2px;
            }
        }
    }

    &-price {
        font-family: "Roboto", sans-serif;
        font-size: var(--font-size-h5);
        line-height: 24px;

        &.discounted {
            background-color: #e8ff00;
            margin-right: 0.5rem;
        }

        & + .product-details-price {
            font-size: var(--font-size-body1);
        }
    }
}

.button-espe {
    font-size: 10px;
}

.markerLoc {
    top: -37%;
    position: absolute;
}

.subtitles-gray {
    font-size: 12px;
    color: gray;
}

.justify-end {
    text-align: end;
}

.piechart {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background-image: conic-gradient(from 180deg, #b1771d 0 320deg, #445056 0 336deg, #114b99 0);
}

.text-size-comp {
    font-size: 0.6rem;
}
</style>
