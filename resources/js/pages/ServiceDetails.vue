<template>
    <div>
        <layout-navbar-auth />
        <v-container fluid class="service-details pa-4">
            <v-row>
                <v-col cols="4">
                    <v-tabs v-model="tab" grow height="38px" :hide-slider="true">
                        <v-tab :ripple="false">Especificación</v-tab>
                        <v-tab :ripple="false">Reseña</v-tab>
                        <v-tab :ripple="false">Sostenibilidad</v-tab>
                    </v-tabs>
                    <v-divider class="my-4" />
                    <v-tabs-items v-model="tab">
                        <v-tab-item>
                            <v-card v-scroll.self="onScroll" class="overflow-y-auto overflow-uw pa-2" max-height="645">
                                <div class="service-item-body pa-4 la-border">
                                    <v-row>
                                        <v-col cols="6">
                                            <v-row justify="center" dense>
                                                <span>Energía</span>
                                            </v-row>
                                            <v-row justify="center" dense>
                                                <h5 class="subtitle2 text-uppercase mt-1">
                                                    {{ serviceDetails?.intake || "--" }}
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
                                                    {{ serviceDetails?.material || "--" }}
                                                </h5>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div class="service-item-body pa-4 la-border mt-4">
                                    <v-row>
                                        <v-col cols="5">
                                            <v-row dense>
                                                <v-icon class="mr-2">la-cube</v-icon>
                                                <v-icon class="mr-2">la-cube</v-icon>
                                                <v-icon>la-cube</v-icon>
                                            </v-row>
                                            <v-row dense>
                                                <span class="subtitle2 text-uppercase mt-1">Medida de Servicio</span>
                                            </v-row>
                                            <v-row dense>
                                                <span class="subtitle2 text-uppercase">Medida de Embalaje</span>
                                            </v-row>
                                            <v-row dense>
                                                <span class="subtitle2 text-uppercase">Medida de Engaste</span>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="5">
                                            <v-row justify="center" dense>
                                                <span class="subtitles-gray">(Fuente x Profundidad x Altura)</span>
                                            </v-row>
                                            <v-row justify="center" dense>
                                                <span class="subtitle2 text-uppercase mt-3">
                                                    {{ serviceDetails?.medida_servicio || "--" }}
                                                </span>
                                            </v-row>
                                            <v-row justify="center" dense>
                                                <span class="subtitle2 text-uppercase">
                                                    {{ serviceDetails?.medidas_de_embalaje || "--" }}
                                                </span>
                                            </v-row>
                                            <v-row justify="center" dense>
                                                <span class="subtitle2 text-uppercase">
                                                    {{ serviceDetails?.engaste || "--" }}
                                                </span>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="2">
                                            <v-row justify="center" dense>
                                                <span class="subtitles-gray">(Unidades)</span>
                                            </v-row>
                                            <v-row justify="center" dense>
                                                <span class="subtitle2 mt-3">
                                                    {{ serviceDetails?.unit_metering || "--" }}
                                                </span>
                                            </v-row>
                                            <v-row justify="center" dense>
                                                <span class="subtitle2">
                                                    {{ serviceDetails?.unit_metering || "--" }}
                                                </span>
                                            </v-row>
                                            <v-row justify="center" dense>
                                                <span class="subtitle2">
                                                    {{ serviceDetails?.unit_metering || "--" }}
                                                </span>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div class="service-item-body pa-4 la-border mt-4">
                                    <v-row>
                                        <v-col cols="6">
                                            <v-row justify="center" dense>
                                                <span>{{ serviceDetails?.peso_de_servicio || "--" }}</span>
                                            </v-row>
                                            <v-row justify="center" dense>
                                                <h5 class="subtitle2 text-uppercase mt-1">Peso de servicio</h5>
                                            </v-row>
                                        </v-col>
                                        <v-divider inset vertical class="mb-2" />
                                        <v-col cols="6">
                                            <v-row justify="center" dense>
                                                <span>{{ serviceDetails?.peso_de_envio || "--" }}</span>
                                            </v-row>
                                            <v-row justify="center" dense>
                                                <h5 class="subtitle2 text-uppercase mt-1">Peso de Envío</h5>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div class="service-item-body pa-4 la-border mt-4">
                                    <v-row>
                                        <v-col cols="6">
                                            <v-row justify="center" dense>
                                                <span>{{ serviceDetails?.tipo_de_coneccion || "--" }}</span>
                                            </v-row>
                                            <v-row justify="center" dense>
                                                <h5 class="subtitle2 text-uppercase mt-1">Voltaje</h5>
                                            </v-row>
                                        </v-col>
                                        <v-divider inset vertical class="mb-2" />
                                        <v-col cols="6">
                                            <v-row justify="center" dense>
                                                <span>{{ serviceDetails?.eficiencia || "--" }} %</span>
                                            </v-row>
                                            <v-row justify="center" dense>
                                                <h5 class="subtitle2 text-uppercase mt-1">Eficiencia</h5>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </div>
                                <h5 class="subtitle2 text-uppercase mt-5">Características</h5>
                                <v-divider class="mt-2" />
                                <ul>
                                    <li class="subtitle2 mt-1">{{ serviceDetails?.caracteristica1 || "--" }}</li>
                                    <li class="subtitle2">{{ serviceDetails?.caracteristica2 || "--" }}</li>
                                    <li class="subtitle2">{{ serviceDetails?.caracteristica3 || "--" }}</li>
                                    <li class="subtitle2">{{ serviceDetails?.caracteristica4 || "--" }}</li>
                                    <li class="subtitle2">{{ serviceDetails?.caracteristica5 || "--" }}</li>
                                    <li class="subtitle2">{{ serviceDetails?.caracteristica6 || "--" }}</li>
                                    <li class="subtitle2">{{ serviceDetails?.caracteristica7 || "--" }}</li>
                                </ul>
                                <div class="d-flex justify-space-between">
                                    <h5 class="subtitle2 text-uppercase mt-5">Manuales y Guías</h5>
                                    <h5 class="subtitles-gray mt-5">(Para descargar)</h5>
                                </div>
                                <v-divider class="mt-2" />
                                <v-row class="mt-1 ml-1">
                                    <v-col cols="6">
                                        <v-row dense>
                                            <a
                                                class="subtitle2 text-white"
                                                :href="serviceDetails?.manual_de_servicio"
                                                target="_blank"
                                            >
                                                <u>Manual de servicio</u>
                                            </a>
                                        </v-row>
                                        <v-row dense class="mt-1">
                                            <a
                                                class="subtitle2 text-white"
                                                :href="serviceDetails?.ficha_tecnica_del_servicio"
                                                target="_blank"
                                            >
                                                <u>Ficha técnica del servicio</u>
                                            </a>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-row dense>
                                            <span class="subtitle2"><u>Hora de especificaciones</u></span>
                                        </v-row>
                                        <v-row dense class="mt-1">
                                            <a
                                                class="subtitle2 text-white"
                                                :href="serviceDetails?.manual_de_instalacion"
                                                target="_blank"
                                            >
                                                <u>Guía de instalación</u>
                                            </a>
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <h5 class="subtitle2 text-uppercase mt-5">Beneficios</h5>
                                <v-divider class="mt-2" />
                                <ul>
                                    <li class="subtitle2 mt-1">{{ serviceDetails?.beneficio1 || "--" }}</li>
                                    <li class="subtitle2">{{ serviceDetails?.beneficio2 || "--" }}</li>
                                    <li class="subtitle2">{{ serviceDetails?.beneficio3 || "--" }}</li>
                                    <li class="subtitle2">{{ serviceDetails?.beneficio4 || "--" }}</li>
                                    <li class="subtitle2">{{ serviceDetails?.beneficio5 || "--" }}</li>
                                </ul>
                                <h5 class="subtitle2 text-uppercase mt-5">Servicio Postventa</h5>
                                <v-divider class="mt-2" />
                                <p class="subtitle2">
                                    {{ serviceDetails?.postventa || "--" }}
                                </p>
                            </v-card>
                        </v-tab-item>

                        <v-tab-item>
                            <v-card
                                v-scroll.self="onScroll"
                                class="overflow-y-auto overflow-x-auto overflow-uw pa-2"
                                max-height="645"
                            >
                                <div class="service-item-body pa-4 la-border">
                                    <h5 class="subtitle2 text-uppercase">Calificación</h5>
                                    <v-row class="mt-2">
                                        <v-col cols="4" class="justify-end" style="line-height: 2.4">
                                            <h5 class="text-uppercase">5.0</h5>
                                            <v-rating
                                                empty-icon="las la-star"
                                                full-icon="las la-star active"
                                                half-icon="las la-star half half"
                                                background-color=""
                                                length="5"
                                                size="11"
                                                v-model="rating"
                                            ></v-rating>
                                            <span class="caption">Opiniones (22)</span>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-row>
                                                <v-col cols="1" style="line-height: 0.1">
                                                    <span class="caption mr-2">5</span>
                                                    <span class="caption mr-2">4</span>
                                                    <span class="caption mr-2">3</span>
                                                    <span class="caption mr-2">2</span>
                                                    <span class="caption mr-2">1</span>
                                                </v-col>
                                                <v-col cols="9" style="line-height: 2.1">
                                                    <v-progress-linear
                                                        v-model="ratings.rating5"
                                                        color="white"
                                                        class="mt-2"
                                                    ></v-progress-linear>
                                                    <v-progress-linear
                                                        v-model="ratings.rating4"
                                                        color="white"
                                                        class="mt-4"
                                                    ></v-progress-linear>
                                                    <v-progress-linear
                                                        v-model="ratings.rating3"
                                                        color="white"
                                                        class="mt-4"
                                                    ></v-progress-linear>
                                                    <v-progress-linear
                                                        v-model="ratings.rating2"
                                                        color="white"
                                                        class="mt-4"
                                                    ></v-progress-linear>
                                                    <v-progress-linear
                                                        v-model="ratings.rating1"
                                                        color="white"
                                                        class="mt-4"
                                                    ></v-progress-linear>
                                                </v-col>
                                                <v-col cols="2" style="line-height: 0.1">
                                                    <span class="caption">30</span><br />
                                                    <span class="caption">10</span><br />
                                                    <span class="caption">5</span><br />
                                                    <span class="caption">0</span><br />
                                                    <span class="caption">0</span>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div class="d-flex pa-2">
                                    <h5 class="subtitle2 text-uppercase mt-4">¿Deseas calificar este servicio?</h5>
                                    <custom-button text="Calificar" class="ml-4 mt-2" light />
                                </div>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card
                                v-scroll.self="onScroll"
                                class="overflow-y-auto overflow-x-auto pa-2 overflow-uw"
                                max-height="645"
                            >
                                <div class="service-item-body pa-4 la-border">
                                    <h5 class="subtitle2 text-uppercase">Vida Útil</h5>
                                    <v-row dense class="mt-2" justify="center">
                                        <v-progress-linear
                                            style="width: 78%"
                                            v-model="ratings.vidaUtil"
                                            color="white"
                                            class="mt-2"
                                        ></v-progress-linear>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="3">
                                            <v-row justify="center">
                                                <span>1-14</span>
                                            </v-row>
                                            <v-row justify="center">
                                                <span class="caption">Semanas</span>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="3">
                                            <v-row justify="center"> <span>1-24</span><br /> </v-row>
                                            <v-row justify="center">
                                                <span class="caption">Meses</span>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="3">
                                            <v-row justify="center"> <span>1-10</span><br /> </v-row>
                                            <v-row justify="center">
                                                <span class="caption">Años</span>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="3">
                                            <v-row justify="center"> <span>10-25</span><br /> </v-row>
                                            <v-row justify="center">
                                                <span class="caption">Años</span>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div class="service-item-body pa-4 la-border mt-4">
                                    <h5 class="subtitle2 text-uppercase">Composición de servicio</h5>
                                    <v-row class="mt-4">
                                        <v-col cols="6">
                                            <div class="piechart"></div>
                                        </v-col>
                                        <v-col cols="6">
                                            <tbody>
                                                <tr v-for="item in desserts" :key="item.name">
                                                    <td style="width: 20px">
                                                        <div
                                                            class="pa-2 bg-secondary rounded-circle d-inline-block"
                                                            :style="item.color"
                                                        />
                                                    </td>
                                                    <td style="width: 120px" class="text-size-comp ml-1">
                                                        {{ item.name }}
                                                    </td>
                                                    <td style="width: 50px" class="text-size-comp ml-2">
                                                        {{ item.percent }}
                                                    </td>
                                                    <td class="text-size-comp ml-2">{{ item.kg }}</td>
                                                </tr>
                                            </tbody>
                                        </v-col>
                                    </v-row>
                                    <v-divider class="mt-3 mb-4" />
                                    <h5 class="subtitle2 text-uppercase">Impacto Ambiental</h5>
                                    <v-row class="mt-4" justify="center">
                                        <div style="width: 78%; position: relative" class="d-flex">
                                            <v-icon large class="markerLoc" :style="{ left: impacto }"
                                                >la-map-pin</v-icon
                                            >
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
                                                <v-progress-linear
                                                    background-color="red"
                                                    class="mt-2"
                                                ></v-progress-linear>
                                            </v-col>
                                        </div>
                                    </v-row>
                                    <v-row class="mt-0 mb-1">
                                        <v-col cols="4">
                                            <v-row justify="start">
                                                <span class="caption ml-4">Sostenible</span>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-row justify="center">
                                                <span class="caption">Reversible</span>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-row justify="end">
                                                <span class="caption mr-4">Irreversible</span>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div class="service-item-body pa-4 la-border mt-4">
                                    <h5 class="subtitle2 text-uppercase">Consejos Ecológicos</h5>
                                    <ul>
                                        <li class="subtitle2 mt-1">
                                            Una vez el servicio cumpla su vida útil debes ser riguroso en reciclar sus
                                            materiales de forma correcta.
                                        </li>
                                        <li class="subtitle2 mt-2">
                                            Realizar el mantenimiento pertinente en las fechas adecuadas para extender
                                            la vida útil del servicio.
                                        </li>
                                    </ul>
                                </div>
                                <v-row>
                                    <v-col cols="6">
                                        <div class="service-item-body pa-2 la-border mt-4">
                                            <v-row dense justify="center" class="mt-3">
                                                <v-icon x-large>la-sync</v-icon>
                                            </v-row>
                                            <v-row dense justify="center" class="mt-5">
                                                <p class="subtitle2" style="text-align: center">
                                                    Deseo reciclar un viejo servicio y recibir un bono adicional de
                                                    descuento a cambio.
                                                </p>
                                            </v-row>
                                            <v-row dense justify="center">
                                                <custom-button plain text="Solicitar" />
                                            </v-row>
                                            <v-row dense justify="center" class="mt-4 mb-2">
                                                <custom-button light text="RENOVACIÓN UPGRADE" class="button-espe" />
                                            </v-row>
                                        </div>
                                    </v-col>
                                    <v-col cols="6">
                                        <div class="service-item-body pa-2 la-border mt-4">
                                            <v-row dense justify="center" class="mt-3">
                                                <v-icon x-large>la-tools</v-icon>
                                            </v-row>
                                            <v-row dense justify="center" class="mt-5">
                                                <p class="subtitle2" style="text-align: center">
                                                    Deseo programar un mantenimiento preventivo para mi servicio/s.
                                                </p>
                                            </v-row>
                                            <v-row dense justify="center">
                                                <custom-button plain text="Solicitar" />
                                            </v-row>
                                            <v-row dense justify="center" class="mt-4 mb-2">
                                                <custom-button light text="SOPORTE TÉCNICO" class="button-espe" />
                                            </v-row>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items>
                </v-col>

                <v-col cols="8">
                    <AddToCart class="mb-10" :is-loading="detailsLoading" :product-details="serviceDetails" />
                </v-col>
            </v-row>

            <v-row tag="section" class="mb-6">
                <v-col cols="12">
                    <h5>H5</h5>
                    <v-row class="mb-3">
                        <v-col v-for="service in moreServices" :key="`service-col-${service.id}`" cols="2">
                            <ServiceBox :productDetails="service" />
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
                            v-for="service in footerServices"
                            :key="`service-col-${service.id}`"
                            cols="12"
                            sm="6"
                            md="3"
                        >
                            <ServiceBox boxStyle="two" :serviceDetails="service" />
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
import ServiceBox from "../components/product/ProductBox.vue";
import CustomButton from "../components/global/CustomButton.vue";
import FooterCustom from "../components/global/FooterCustom.vue";
import Carousel from "../components/global/Carousel.vue";
import LayoutNavbarAuth from "../components/global/LayoutNavbarAuth.vue";
// import ChartView from "../components/global/ChartView.vue";
import AddToCart from "../components/product/AddToCart.vue";

export default {
    metaInfo() {
        return {
            title: this.metaTitle
        };
    },
    data: () => ({
        metaTitle: "",
        detailsLoading: true,
        serviceDetails: {},
        img: "/public/assets/img/item-placeholder.png",
        model: 0,
        tags: ["1", "2", "3"],
        ratings: { rating5: 67, rating4: 22, rating3: 11, rating2: 0, rating1: 0, vidaUtil: 0 },
        desserts: [],
        impacto: "28%",
        moreServices: [],
        footerServices: [],
        tab: null,
        relatedServices: [{}, {}, {}, {}, {}],
        actionLoading: false
    }),
    components: {
        ServiceBox,
        CustomButton,
        Carousel,
        LayoutNavbarAuth,
        FooterCustom,
        AddToCart
        // ChartView
    },
    methods: {
        async getDetails() {
            const res = await this.call_api("get", `service/details/${this.$route.params.slug}`);

            if (res.data.success) {
                this.serviceDetails = res.data.data;
                this.setVidaUtil(this.serviceDetails.vida_util);
                this.setComposition(this.serviceDetails);
                this.setImpacto(this.serviceDetails?.impacto_ambiental);
                this.getMoreServices(this.serviceDetails?.id);
                this.getMoreServices2(this.serviceDetails?.id);
                this.getRelatedServices(this.serviceDetails.id);
            } else {
                this.snack({
                    message: res.data.message,
                    color: "red"
                });

                this.$router.push({ name: "404" });
            }

            this.detailsLoading = false;
        },
        async getRelatedServices(id) {
            const res = await this.call_api("get", `service/related/${id}`);
            if (res.data.success) {
                this.relatedServices = res.data.data;
                this.relatedLoading = false;
            }
        },
        async getMoreServices(id) {
            const res = await this.call_api("get", `service/random/6/${id}`);
            if (res.data.success) {
                res.data?.data?.map(service => {
                    this.moreServices.push({
                        id: service?.id,
                        name: service?.name,
                        val: service?.base_price + " " + service?.currency,
                        img: service?.thumbnail_image,
                        description: service?.description,
                        brand: service?.brandName,
                        ref: service?.reference,
                        slug: service?.slug
                    });
                });
            }
        },
        async getMoreServices2(id) {
            const res = await this.call_api("get", `service/random/4/${id}`);
            if (res.data.success) {
                res.data?.data?.map(service => {
                    this.footerServices.push({
                        id: service?.id,
                        name: service?.name,
                        val: service?.base_price + " " + service?.currency,
                        img: service?.thumbnail_image,
                        description: service?.description,
                        brand: service?.brandName,
                        ref: service?.reference,
                        slug: service?.slug
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
.service-details {
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

        & + .service-details-price {
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
