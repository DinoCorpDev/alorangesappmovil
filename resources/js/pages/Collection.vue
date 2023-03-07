<template>
    <div>
        <layout-navbar-auth />

        <v-row class="pa-2 mt-2">
            <v-col cols="12" xs="12" sm="12" md="12" lg="8" xl="8" class="positionColbuttons">
                <v-row dense justify>
                    <v-col>
                        <v-img
                            :src="productDetails?.ficha_tecnica_del_producto"
                            v-show="overlay"
                            height="700px"
                            width="100%"
                        />
                        <carousel :slides="productDetails?.imagenes" v-show="overlay1" height="700px" width="100%" />
                        <carousel :slides="productDetails?.videos" v-show="overlay2" height="700px" width="100%" />
                    </v-col>
                </v-row>
                <v-row class="buttonsAct px-4">
                    <v-col cols="4">
                        <v-btn
                            light
                            block
                            @click="
                                overlay = true;
                                overlay1 = false;
                                overlay2 = false;
                            "
                            >Especificación
                        </v-btn>
                    </v-col>
                    <v-col cols="4">
                        <v-btn
                            light
                            block
                            @click="
                                overlay = false;
                                overlay1 = true;
                                overlay2 = false;
                            "
                            >Imágenes
                        </v-btn>
                    </v-col>
                    <v-col cols="4">
                        <v-btn
                            light
                            block
                            @click="
                                overlay = false;
                                overlay1 = false;
                                overlay2 = true;
                            "
                            >Videos
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col>
                <div class="product-item-body pa-4 la-border">
                    <div class="d-flex justify-space-between">
                        <h5 class="subtitle2 text-uppercase mb-2">REFERENCIA: {{ productDetails?.reference }}</h5>
                        <v-icon right> la-bookmark </v-icon>
                    </div>
                    <h5 class="subtitle1 text-uppercase font-weight-bold mb-2">{{ productDetails?.name ?? "" }}</h5>
                    <h5 class="subtitle1 mb-2">{{ productDetails?.brand?.name ?? "" }}</h5>
                    <div class="d-flex">
                        <h5 class="subtitle1 mb-2 mr-2">
                            {{ productDetails?.lowest_price ?? "000" }} {{ productDetails?.currency ?? "" }}
                        </h5>
                        <h5 class="caption mb-2">
                            <del>{{ productDetails?.highest_price ?? "000" }} {{ productDetails?.currency ?? "" }}</del>
                        </h5>
                    </div>
                    <div class="d-flex justify-space-between">
                        <h5 class="caption mb-3">{{ iva }}</h5>
                        <div class="d-flex justify-space-around align-center">
                            <v-btn icon @click="model = Math.max(model - 1, 0)">
                                <v-icon small> la-minus </v-icon>
                            </v-btn>
                            {{ model }}
                            <v-btn icon @click="model = Math.min(model + 1, 8)">
                                <v-icon small> la-plus </v-icon>
                            </v-btn>
                        </div>
                    </div>
                    <custom-button text="Agregar a Compras" block />
                    <custom-button light text="Consultar a un Asesor" block class="mt-3" />
                </div>
                <div class="product-item-body pa-4 la-border mt-3">
                    <div class="d-flex justify-space-between">
                        <h5 class="subtitle2 text-uppercase mb-1">{{ varia }}</h5>
                        <v-btn-toggle>
                            <v-btn class="blue toggle-btn" />
                            <v-btn class="ml-2 white toggle-btn" />
                            <v-btn class="ml-2 black toggle-btn" />
                            <v-btn class="ml-2 red toggle-btn" />
                        </v-btn-toggle>
                    </div>
                </div>
                <div class="product-item-body pa-4 la-border mt-3">
                    <div class="d-flex justify-space-between">
                        <h5 class="subtitle2 text-uppercase mb-1">Disponibilidad</h5>
                        <h5 class="subtitle1 mb-2">{{ productDetails?.stock ?? "000" }} en stock</h5>
                    </div>
                    <div class="d-flex justify-space-between">
                        <h5 class="subtitle2 text-uppercase mb-1">Garantía</h5>
                        <h5 class="subtitle1 mb-2">{{ productDetails?.warranty_text ?? "--" }}</h5>
                    </div>
                    <div class="d-flex justify-space-between">
                        <h5 class="subtitle2 text-uppercase mb-1">Pago</h5>
                        <h5 class="subtitle1 mb-2">--</h5>
                    </div>
                    <div class="d-flex justify-space-between">
                        <h5 class="subtitle2 text-uppercase">Envío</h5>
                        <h5 class="subtitle1">{{ productDetails?.shipping ?? "--" }}</h5>
                    </div>
                </div>
                <h5 class="subtitle2 text-uppercase mt-3 mb-2">Se incluye con la compra</h5>
                <v-divider />
                <product-item-6 />
            </v-col>
        </v-row>

        <v-row class="mb-6 pa-2">
            <v-col cols="12">
                <div class="d-flex justify-space-between mb-8">
                    <h5 class="mt-1">H5</h5>
                    <div class="d-none d-lg-block" style="width: 38%">
                        <custom-button light text="Nuevo" style="width: 23%" />
                        <custom-button light text="Nuevo" class="ml-2" style="width: 23%" />
                        <custom-button light text="Nuevo" class="ml-2" style="width: 23%" />
                        <custom-button light text="Nuevo" class="ml-2" style="width: 23%" />
                    </div>
                    <div class="d-lg-none" style="width: 40%; text-align: end">
                        <custom-button light text="Filtro" style="width: 40%" />
                    </div>
                </div>
                <v-row>
                    <v-col
                        cols="12"
                        md="6"
                        sm="6"
                        xs="12"
                        lg="3"
                        xl="3"
                        v-for="(product, i) in footerProducts"
                        :key="i"
                    >
                        <product-item-3 :data="product" />
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <custom-button light text="Ver más" class="mt-6" style="width: 40%" />
                </v-row>
            </v-col>
        </v-row>

        <div class="mb-4 mt-16 pa-2">
            <div class="d-flex justify-space-between mb-8">
                <h5 class="mt-1">H5</h5>
                <div class="d-none d-lg-block" style="width: 38%">
                    <custom-button light text="Nuevo" style="width: 23%" />
                    <custom-button light text="Nuevo" class="ml-2" style="width: 23%" />
                    <custom-button light text="Nuevo" class="ml-2" style="width: 23%" />
                    <custom-button light text="Nuevo" class="ml-2" style="width: 23%" />
                </div>
                <div class="d-lg-none" style="width: 40%; text-align: end">
                    <custom-button light text="Filtro" style="width: 40%" />
                </div>
            </div>
            <v-row>
                <v-col cols="6" md="4" sm="4" xs="6" lg="2" xl="2" v-for="(product, i) in moreProducts" :key="i">
                    <product-item-2 headerPr="true" :data="product" />
                </v-col>
            </v-row>
            <v-row justify="center">
                <custom-button light text="Ver más" class="mt-6 mb-6" style="width: 40%" />
            </v-row>
        </div>
        <v-card>
            <v-footer color="#18191A" class="px-5 py-5">
                <v-row class="d-flex justify-space-between flex-wrap">
                    <v-col cols="2" sm="3">
                        <span class="subtitle1 bold text-uppercase">© Idovela 2022</span>
                    </v-col>
                    <v-col cols="4" sm="3">
                        <span class="subtitle1 bold text-uppercase"><i class="las la-globe"></i> Bogota, Colombia</span>
                    </v-col>
                    <v-col cols="6" sm="6">
                        <v-row>
                            <v-col cols="4">
                                <span class="subtitle1 bold text-uppercase">Información</span>
                            </v-col>
                            <v-col cols="4">
                                <span class="subtitle1 bold text-uppercase">Solicitudes</span>
                            </v-col>
                            <v-col cols="4">
                                <span class="subtitle1 bold text-uppercase">Contacto</span>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-footer>
        </v-card>
    </div>
</template>

<script>
import ProductItem3 from "../components/global/ProductItem3.vue";
import ProductItem2 from "../components/global/ProductItem2.vue";
import ProductItem6 from "../components/global/ProductItem6.vue";
import CustomButton from "../components/global/CustomButton.vue";
import LayoutNavbarSpaces from "../components/global/LayoutNavbarSpaces.vue";
import Carousel from "../components/global/Carousel.vue";
import LayoutNavbarAuth from "../components/global/LayoutNavbarAuth.vue";

import { sliderSeeder } from "../seeders/products";

export default {
    data: () => ({
        productDetails: {},
        overlay: false,
        overlay1: true,
        overlay2: false,
        sliderSeeder,
        id: "0",
        name: "Colección",
        ref: "REFERENCIA",
        brand: "Marcas",
        val: "000.000.000 COP",
        img: "/public/assets/img/item-placeholder.png",
        iva: "* Iva Incluido",
        varia: "Variación",
        model: 0,
        tags: ["1", "2", "3"],
        moreProducts: [],
        footerProducts: []
    }),
    components: {
        ProductItem3,
        ProductItem2,
        ProductItem6,
        CustomButton,
        LayoutNavbarSpaces,
        Carousel,
        LayoutNavbarAuth
    },
    methods: {
        async getDetails() {
            const res = await this.call_api("get", `product/details/${this.$route.params.slug}`);
            if (res.data.success) {
                this.productDetails = res.data.data;
                this.getMoreProducts(this.productDetails?.id);
                this.getMoreProducts2(this.productDetails?.id);
            }
        },
        async getMoreProducts(id) {
            const res = await this.call_api("get", `product/random/6/${id}`);
            if (res.data.success) {
                this.setMoreProducts("moreProducts", res.data?.data);
            }
        },
        async getMoreProducts2(id) {
            const res = await this.call_api("get", `product/random/4/${id}`);
            if (res.data.success) {
                this.setMoreProducts("footerProducts", res.data?.data);
            }
        },
        setMoreProducts(value, data) {
            data?.map(product => {
                this[value].push({
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
    mounted() {
        this.$vuetify.theme.dark = true;
    },
    async created() {
        this.getDetails();
    }
};
</script>

<style lang="scss" scoped>
.v-btn {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1.25px;

    @media (min-width: 960px) {
        font-size: 14px;
    }

    border-radius: 5px;

    i {
        font-size: 20px;
    }

    &:hover:before,
    &:focus:before {
        opacity: 1;
    }

    &.v-size--default {
        height: 38px;
    }
}

.theme--light {
    &.v-btn {
        color: #000000;

        &.v-btn--has-bg {
            background-color: #dfdfdf;

            &:before {
                background-color: #ffffff;
            }

            &.v-btn--disabled {
                color: #000000 !important;

                &.v-btn--has-bg {
                    background-color: #fafcfc !important;
                }
            }
        }

        &.v-btn--outlined {
            color: #ffffff;

            &:hover,
            &:focus {
                color: #000000;
            }

            &:before {
                background-color: rgba(255, 255, 255, 0.8);
            }

            &:focus {
                &:before {
                    background-color: #ffffff;
                }
            }
        }
    }
}

.buttonsAct {
    top: 30px;
    position: absolute;
    width: 100%;
}

.positionColbuttons {
    position: relative;
}

.la-border {
    border-radius: 0.5em;
}

.v-btn-toggle {
    border-radius: 0px;
    height: 20px !important;
}

.toggle-btn {
    height: 20px !important;
    min-width: 20px !important;
}

.v-divider {
    border-width: thin 0 0;
    max-width: 94%;
}
</style>
