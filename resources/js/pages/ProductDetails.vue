<template>
    <v-container fluid class="product-details">
        <v-row tag="main" class="flex-column-reverse flex-lg-row mb-6">
            <v-col cols="12" lg="4">
                <v-tabs v-model="tab" grow height="38px" :hide-slider="true">
                    <v-tab :ripple="false">Especificación</v-tab>
                    <v-tab :ripple="false">Reseña</v-tab>
                    <v-tab :ripple="false">Sostenibilidad</v-tab>
                </v-tabs>
                <v-divider class="my-3" />
                <v-tabs-items v-model="tab">
                    <v-tab-item>
                        <div class="product-details-specs overflow-y-auto overflow-uw">
                            <div class="product-details-list-box pa-4 mb-3">
                                <v-row>
                                    <v-col cols="6">
                                        <v-row justify="center" dense>
                                            <span>Energía</span>
                                        </v-row>
                                        <v-row justify="center" dense>
                                            <h5 class="subtitle2 text-uppercase mt-1">
                                                {{ productDetails?.intake || "--" }}
                                            </h5>
                                        </v-row>
                                    </v-col>
                                    <v-divider inset vertical class="mb-2" />
                                    <v-col cols="6">
                                        <v-row justify="center" dense>
                                            <span>Material</span>
                                        </v-row>
                                        <v-row justify="center" dense>
                                            <h5 class="subtitle2 text-uppercase mt-1">
                                                {{ productDetails?.material || "--" }}
                                            </h5>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </div>

                            <div class="product-details-list-box pa-2 mb-3">
                                <v-row dense align="center">
                                    <v-col cols="5">
                                        <CubesIcon />
                                    </v-col>
                                    <v-col cols="5">
                                        <h6 class="product-details-list-box-sub-label text-center">
                                            (Fuente x Profundidad x Altura)
                                        </h6>
                                    </v-col>
                                    <v-col cols="2">
                                        <h6 class="product-details-list-box-sub-label text-center">(Unidades)</h6>
                                    </v-col>
                                </v-row>

                                <v-row dense align="center" class="product-details-list-box-item">
                                    <v-col cols="5">
                                        <h5 class="product-details-list-box-label">Medida de Producto</h5>
                                    </v-col>
                                    <v-col cols="5">
                                        <div class="text-center">
                                            <span class="product-details-list-box-value">
                                                {{ productDetails?.medida_producto || "000 x 000 x 000" }}
                                            </span>
                                        </div>
                                    </v-col>
                                    <v-col cols="2">
                                        <div class="text-center">
                                            <span class="product-details-list-box-value">
                                                {{ productDetails?.unit_metering || "0" }} cm
                                            </span>
                                        </div>
                                    </v-col>
                                </v-row>

                                <v-row dense align="center" class="product-details-list-box-item">
                                    <v-col cols="5">
                                        <h5 class="product-details-list-box-label">Medida de Embalaje</h5>
                                    </v-col>
                                    <v-col cols="5">
                                        <div class="text-center">
                                            <span class="product-details-list-box-value">
                                                {{ productDetails?.medidas_de_embalaje || "000 x 000 x 000" }}
                                            </span>
                                        </div>
                                    </v-col>
                                    <v-col cols="2">
                                        <div class="text-center">
                                            <span class="product-details-list-box-value">
                                                {{ productDetails?.unit_metering || "0" }} cm
                                            </span>
                                        </div>
                                    </v-col>
                                </v-row>

                                <v-row dense align="center" class="product-details-list-box-item">
                                    <v-col cols="5">
                                        <h5 class="product-details-list-box-label">Medida de Engaste</h5>
                                    </v-col>
                                    <v-col cols="5">
                                        <div class="text-center">
                                            <span class="product-details-list-box-value">
                                                {{ productDetails?.engaste || "000 x 000 x 000" }}
                                            </span>
                                        </div>
                                    </v-col>
                                    <v-col cols="2">
                                        <div class="text-center">
                                            <span class="product-details-list-box-value">
                                                {{ productDetails?.unit_metering || "0" }} cm
                                            </span>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>

                            <div class="product-details-list-box pa-4 mb-3">
                                <v-row>
                                    <v-col cols="6">
                                        <v-row justify="center" dense>
                                            <span class="product-details-list-box-value mb-1">
                                                {{ productDetails?.peso_de_producto || "0.00" }} Kg
                                            </span>
                                        </v-row>
                                        <v-row justify="center" dense>
                                            <h5 class="product-details-list-box-label">Peso de Producto</h5>
                                        </v-row>
                                    </v-col>
                                    <v-divider inset vertical class="mb-2" />
                                    <v-col cols="6">
                                        <v-row justify="center" dense>
                                            <span class="product-details-list-box-value mb-1">
                                                {{ productDetails?.peso_de_envio || "0.00" }} Kg
                                            </span>
                                        </v-row>
                                        <v-row justify="center" dense>
                                            <h5 class="product-details-list-box-label">Peso de Envío</h5>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </div>

                            <div class="product-details-list-box pa-4 mb-5">
                                <v-row>
                                    <v-col cols="6">
                                        <v-row justify="center" dense>
                                            <span class="product-details-list-box-value mb-1">
                                                {{ productDetails?.tipo_de_coneccion || "0.0 V / 0.0 Hz / 0.0 A" }}
                                            </span>
                                        </v-row>
                                        <v-row justify="center" dense>
                                            <h5 class="product-details-list-box-label">Voltaje</h5>
                                        </v-row>
                                    </v-col>
                                    <v-divider inset vertical class="mb-2" />
                                    <v-col cols="6">
                                        <v-row justify="center" dense>
                                            <span class="product-details-list-box-value mb-1">
                                                {{ productDetails?.eficiencia || "0.0" }} %
                                            </span>
                                        </v-row>
                                        <v-row justify="center" dense>
                                            <h5 class="product-details-list-box-label">Eficiencia</h5>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </div>

                            <h5 class="product-details-list-box-label mb-2">Características</h5>
                            <v-divider class="mb-1" />
                            <ul class="product-details-list-box-list mb-5">
                                <li>{{ productDetails?.caracteristica1 || "--" }}</li>
                                <li>{{ productDetails?.caracteristica2 || "--" }}</li>
                                <li>{{ productDetails?.caracteristica3 || "--" }}</li>
                                <li>{{ productDetails?.caracteristica4 || "--" }}</li>
                                <li>{{ productDetails?.caracteristica5 || "--" }}</li>
                                <li>{{ productDetails?.caracteristica6 || "--" }}</li>
                                <li>{{ productDetails?.caracteristica7 || "--" }}</li>
                            </ul>

                            <div class="d-flex align-center justify-space-between mb-2">
                                <h5 class="product-details-list-box-label">Manuales y Guías</h5>
                                <h5 class="product-details-list-box-sub-label">(Para descargar)</h5>
                            </div>
                            <v-divider class="mb-2" />
                            <v-row class="mb-2">
                                <v-col cols="6">
                                    <a
                                        class="product-details-list-box-link mb-2"
                                        :href="productDetails?.manual_de_producto"
                                        target="_blank"
                                    >
                                        Manual de producto
                                    </a>
                                    <a
                                        class="product-details-list-box-link"
                                        :href="productDetails?.ficha_tecnica_del_producto"
                                        target="_blank"
                                    >
                                        Ficha técnica del producto
                                    </a>
                                </v-col>
                                <v-col cols="6">
                                    <a
                                        class="product-details-list-box-link mb-2"
                                        :href="productDetails?.ficha_tecnica_del_producto"
                                        target="_blank"
                                    >
                                        Hoja de especificaciones
                                    </a>
                                    <a
                                        class="product-details-list-box-link mb-2"
                                        :href="productDetails?.manual_de_instalacion"
                                        target="_blank"
                                    >
                                        Guía de instalación
                                    </a>
                                </v-col>
                            </v-row>

                            <h5 class="product-details-list-box-label mb-2">Beneficios</h5>
                            <v-divider class="mb-1" />
                            <ul class="product-details-list-box-list mb-5">
                                <li>{{ productDetails?.beneficio1 || "--" }}</li>
                                <li>{{ productDetails?.beneficio2 || "--" }}</li>
                                <li>{{ productDetails?.beneficio3 || "--" }}</li>
                                <li>{{ productDetails?.beneficio4 || "--" }}</li>
                                <li>{{ productDetails?.beneficio5 || "--" }}</li>
                            </ul>

                            <h5 class="product-details-list-box-label mb-2">Servicio Postventa</h5>
                            <v-divider />
                            <p class="product-details-list-box-value">
                                {{ productDetails?.postventa || "--" }}
                            </p>
                        </div>
                    </v-tab-item>

                    <v-tab-item>
                        <div class="product-details-specs overflow-y-auto overflow-uw">
                            <div class="product-details-list-box pa-4 mb-3">
                                <h5 class="product-details-list-box-label mb-2">Calificación</h5>
                                <v-row>
                                    <v-col cols="4" class="d-flex flex-column justify-space-between text-right">
                                        <h4 class="text-uppercase">5.0</h4>
                                        <v-rating
                                            empty-icon="las la-star"
                                            full-icon="las la-star active"
                                            half-icon="las la-star half half"
                                            background-color=""
                                            length="5"
                                            size="20"
                                            v-model="rating"
                                            readonly
                                        ></v-rating>
                                        <span class="list-box-value">Opiniones (22)</span>
                                    </v-col>
                                    <v-col cols="8">
                                        <v-row dense>
                                            <v-col cols="1">
                                                <span class="list-box-value mr-2">5</span>
                                                <span class="list-box-value mr-2">4</span>
                                                <span class="list-box-value mr-2">3</span>
                                                <span class="list-box-value mr-2">2</span>
                                                <span class="list-box-value mr-2">1</span>
                                            </v-col>
                                            <v-col cols="10">
                                                <v-progress-linear
                                                    v-model="ratings.rating5"
                                                    color="black"
                                                    class="mt-2"
                                                ></v-progress-linear>
                                                <v-progress-linear
                                                    v-model="ratings.rating4"
                                                    color="black"
                                                    class="mt-4"
                                                ></v-progress-linear>
                                                <v-progress-linear
                                                    v-model="ratings.rating3"
                                                    color="black"
                                                    class="mt-4"
                                                ></v-progress-linear>
                                                <v-progress-linear
                                                    v-model="ratings.rating2"
                                                    color="black"
                                                    class="mt-4"
                                                ></v-progress-linear>
                                                <v-progress-linear
                                                    v-model="ratings.rating1"
                                                    color="black"
                                                    class="mt-4"
                                                ></v-progress-linear>
                                            </v-col>
                                            <v-col cols="1">
                                                <span class="list-box-value">30</span>
                                                <span class="list-box-value">10</span>
                                                <span class="list-box-value">5</span>
                                                <span class="list-box-value">0</span>
                                                <span class="list-box-value">0</span>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </div>
                            <div class="d-flex align-center pa-2">
                                <h5 class="product-details-list-box-label mr-4">¿Deseas calificar este producto?</h5>
                                <CustomButton color="grey" text="Calificar" />
                            </div>
                        </div>
                    </v-tab-item>

                    <v-tab-item>
                        <div class="product-details-specs overflow-y-auto overflow-uw">
                            <div class="product-details-list-box pa-4 mb-3">
                                <h5 class="product-details-list-box-label">Vida Útil</h5>
                                <v-row dense class="mt-2" justify="center">
                                    <v-progress-linear
                                        style="width: 78%"
                                        v-model="ratings.vidaUtil"
                                        color="black"
                                        class="mt-2"
                                    ></v-progress-linear>
                                </v-row>
                                <v-row>
                                    <v-col cols="3" class="text-center">
                                        <span class="list-box-value-big">1-14</span>
                                        <span class="list-box-value">Semanas</span>
                                    </v-col>
                                    <v-col cols="3" class="text-center">
                                        <span class="list-box-value-big">1-24</span>
                                        <span class="list-box-value">Meses</span>
                                    </v-col>
                                    <v-col cols="3" class="text-center">
                                        <span class="list-box-value-big">1-10</span>
                                        <span class="list-box-value">Años</span>
                                    </v-col>
                                    <v-col cols="3" class="text-center">
                                        <span class="list-box-value-big">10-25</span>
                                        <span class="list-box-value">Años</span>
                                    </v-col>
                                </v-row>
                            </div>

                            <div class="product-details-list-box pa-4 mb-3">
                                <h5 class="product-details-list-box-label">Composición de producto</h5>
                                <v-row class="mt-4">
                                    <v-col cols="5">
                                        <div class="piechart"></div>
                                    </v-col>
                                    <v-col cols="7">
                                        <tbody>
                                            <tr v-for="item in desserts" :key="item.name">
                                                <td style="width: 20px">
                                                    <div
                                                        class="pa-2 bg-secondary rounded-circle d-inline-block"
                                                        :style="item.color"
                                                    />
                                                </td>
                                                <td style="width: 130px">
                                                    <span class="list-box-chart-label small ml-1">
                                                        {{ item.name }}
                                                    </span>
                                                </td>
                                                <td class="text-center" style="width: 40px">
                                                    <span class="list-box-chart-value">
                                                        {{ item.percent || "0" }} %
                                                    </span>
                                                </td>
                                                <td class="text-right" style="width: 40px">
                                                    <span class="list-box-chart-value">
                                                        {{ item.kg || "0.0" }} Kg
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </v-col>
                                </v-row>

                                <v-divider class="mt-3 mb-4" />
                                <h5 class="product-details-list-box-label">Impacto Ambiental</h5>
                                <v-row class="mt-4" justify="center">
                                    <div style="width: 78%; position: relative" class="d-flex">
                                        <MapPinIcon class="map-pin-icon" />
                                        <v-col cols="3" style="padding: 20px 0px">
                                            <v-progress-linear
                                                background-color="green"
                                                class="mt-2"
                                            ></v-progress-linear>
                                        </v-col>
                                        <v-col cols="3" style="padding: 15px 0px">
                                            <v-progress-linear
                                                background-color="yellow"
                                                class="mt-2"
                                            ></v-progress-linear>
                                        </v-col>
                                        <v-col cols="3" style="padding: 10px 0px">
                                            <v-progress-linear
                                                background-color="orange"
                                                class="mt-2"
                                            ></v-progress-linear>
                                        </v-col>
                                        <v-col cols="3" style="padding: 5px 0px">
                                            <v-progress-linear background-color="red" class="mt-2"></v-progress-linear>
                                        </v-col>
                                    </div>
                                </v-row>
                                <v-row dense class="mt-0 mb-1">
                                    <v-col cols="4">
                                        <span class="list-box-chart-label">Sostenible</span>
                                    </v-col>
                                    <v-col cols="4" class="text-center">
                                        <span class="list-box-chart-label">Reversible</span>
                                    </v-col>
                                    <v-col cols="4" class="text-right">
                                        <span class="list-box-chart-label">Irreversible</span>
                                    </v-col>
                                </v-row>
                            </div>

                            <div class="product-details-list-box pa-4 mb-3">
                                <h5 class="product-details-list-box-label mb-2">Consejos Ecológicos</h5>
                                <ul class="product-details-list-box-list">
                                    <li class="mb-1">
                                        Una vez el producto cumpla su vida útil debes ser riguroso en reciclar sus
                                        materiales de forma correcta.
                                    </li>
                                    <li>
                                        Realizar el mantenimiento pertinente en las fechas adecuadas para extender la
                                        vida útil del producto.
                                    </li>
                                </ul>
                            </div>

                            <v-row dense>
                                <v-col cols="6">
                                    <div class="product-details-list-box text-center pa-3">
                                        <SyncIcon width="45" height="45" class="mb-3" />
                                        <p class="list-box-value medium">
                                            Deseo reciclar un viejo producto y recibir un bono adicional de descuento a
                                            cambio.
                                        </p>
                                        <span class="list-box-caption mb-4">Solicitar</span>
                                        <CustomButton color="grey" text="Renovación UpGrade" />
                                    </div>
                                </v-col>
                                <v-col cols="6">
                                    <div class="product-details-list-box text-center pa-3">
                                        <ToolsIcon width="40" height="40" class="mb-4" />
                                        <p class="list-box-value medium">
                                            Deseo programar un mantenimiento preventivo para mi producto/s.
                                        </p>
                                        <span class="list-box-caption mb-4">Solicitar</span>
                                        <CustomButton color="grey" text="Soporte Ténico" />
                                    </div>
                                </v-col>
                            </v-row>
                        </div>
                    </v-tab-item>
                </v-tabs-items>
            </v-col>
            <v-col cols="12" lg="8">
                <AddToCart :is-loading="detailsLoading" :product-details="productDetails" :products="moreProducts" />
            </v-col>
        </v-row>

        <ProductsGrid class="mb-6" :products="moreProducts" filtrable cols="6" sm="4" md="3" lg="2" />

        <ProductsGrid class="mb-6" :products="footerProducts" productStyle="two" filtrable cols="12" sm="6" md="3" />
    </v-container>
</template>

<script>
import AddToCart from "../components/product/AddToCart.vue";
import CustomButton from "../components/global/CustomButton.vue";
import ProductsGrid from "../components/global/ProductsGrid.vue";

import CubesIcon from "../components/icons/Cubes.vue";
import MapPinIcon from "../components/icons/MapPin.vue";
import SyncIcon from "../components/icons/Sync.vue";
import ToolsIcon from "../components/icons/Tools.vue";

export default {
    metaInfo() {
        return {
            title: this.metaTitle
        };
    },
    data: () => ({
        metaTitle: "",
        detailsLoading: true,
        productDetails: {},
        ratings: { rating5: 67, rating4: 22, rating3: 11, rating2: 0, rating1: 0, vidaUtil: 0 },
        desserts: [],
        impacto: "28%",
        moreProducts: [],
        footerProducts: [],
        tab: null,
        relatedProducts: [{}, {}, {}, {}, {}],
        rating: 0
    }),
    components: {
        AddToCart,
        CustomButton,
        ProductsGrid,

        CubesIcon,
        MapPinIcon,
        SyncIcon,
        ToolsIcon
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
                    percent: data?.plastico,
                    kg: data?.peso_plastico
                },
                {
                    color: "background-color:#FEA60F",
                    name: "Cartón",
                    percent: data?.carton,
                    kg: data?.peso_carton
                },
                {
                    color: "background-color:#FFFFFF",
                    name: "Papel",
                    percent: data?.papel,
                    kg: data?.peso_papel
                },
                {
                    color: "background-color:#445056",
                    name: "Metal",
                    percent: data?.metal,
                    kg: data?.peso_metal
                },
                {
                    color: "background-color:#61A959",
                    name: "Vidrio",
                    percent: data?.vidrio,
                    kg: data?.peso_vidrio
                },
                {
                    color: "background-color:#B1771D",
                    name: "Madera",
                    percent: data?.madera,
                    kg: data?.peso_madera
                },
                {
                    color: "background-color:#ED847B",
                    name: "Textil",
                    percent: data?.textil,
                    kg: data?.peso_textil
                },
                {
                    color: "background-color:#ED847B",
                    name: "Baterías / Eléctrico",
                    percent: data?.bateria_electrico,
                    kg: data?.peso_bateria_electrico
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

    @media (min-width: 1264px) {
        main {
            height: 85vh;
            overflow: hidden;
        }
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

    &-specs {
        height: 65vh;
        overflow-x: hidden;
        padding-right: 8px;

        @media (min-width: 600px) {
            height: 75vh;
        }
    }

    &-list-box {
        border-radius: 10px;
        border: 1px solid #e4e4e4;

        &-label {
            font-size: var(--font-size-body2);
            font-weight: 600;
            line-height: 1;
            text-transform: uppercase;
        }

        &-sub-label {
            font-size: var(--font-size-body2);
            opacity: 0.5;
            font-style: italic;
        }

        &-value {
            display: block;
            font-family: "Roboto";
            font-size: var(--font-size-body1);
            letter-spacing: 0.5px;
        }

        &-list {
            li {
                font-family: "Roboto";
                font-size: var(--font-size-body1);
                letter-spacing: 0.1px;
            }
        }

        &-link {
            font-family: "Roboto";
            font-size: var(--font-size-body2);
            letter-spacing: 0.5px;
            display: block;
            text-decoration: underline;
        }

        &::v-deep {
            .v-rating {
                .v-icon {
                    color: #000000;
                    padding: 0.25rem;
                }
            }
        }
    }
}

.list-box {
    &-value {
        font-family: "Roboto", sans-serif;
        display: block;
        font-size: var(--font-size-body2);

        &.medium {
            font-size: var(--font-size-body1);
            letter-spacing: 0.1px;
        }

        &-big {
            display: block;
            font-family: "Roboto", sans-serif;
            font-size: 17px;
        }
    }

    &-caption {
        display: block;
        font-weight: 700;
        font-size: var(--font-size-caption);
        text-transform: uppercase;
        opacity: 0.5;
    }

    &-chart-label {
        font-size: var(--font-size-body1);
        font-weight: 700;

        &.small {
            font-size: var(--font-size-caption);
        }
    }

    &-chart-value {
        font-family: "Roboto", sans-serif;
        font-size: var(--font-size-caption);
    }
}

.map-pin-icon {
    top: -10%;
    position: absolute;
    left: 23%;
}

.piechart {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background-image: conic-gradient(from 180deg, #b1771d 0 320deg, #445056 0 336deg, #114b99 0);
}
</style>
