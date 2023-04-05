<template>
    <div>
        <layout-navbar />
        <v-container>
            <v-row class="main mb-6" align="center" tag="main">
                <v-col cols="12" md="5">
                    <h1 class="home-main-title mb-6 mb-sm-8">
                        iDOVELA <br />
                        Para un mundo <br />
                        más habitable
                    </h1>
                    <p class="home-main-description mb-6 mb-sm-10">
                        Mejores espacios conducen a modelos más eficaces de vida. <br />
                        Las habitats eficientes conducen a una implementación más rápida. Genere valor en su vida con
                        mejores espacios habitables.
                    </p>
                    <v-row>
                        <v-col cols="8" sm="6" md="8">
                            <custom-button block outlined text="Comunicarse con ventas" />
                        </v-col>
                        <v-col cols="4" offset-sm="3" sm="3" offset-md="0" md="8">
                            <select-custom
                                :clearable="false"
                                :items="allLanguages"
                                @input="agree"
                                itemText="name"
                                itemValue="code"
                                placeholder="Seleccionar país"
                                v-model="selectedCode"
                            />
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="7">
                    <carousel class="home-main-carousel" :slides="sliderItems" />
                </v-col>
            </v-row>

            <v-row tag="section" class="preambulo mb-6">
                <v-col cols="12">
                    <div class="rounded-section px-5 py-8">
                        <div class="mb-3">
                            <span class="subtitle1 text-uppercase font-weight-bold"> Preámbulo </span>
                        </div>
                        <h2 class="text-uppercase mb-3 mb-md-0">Titulo</h2>
                        <v-divider class="mb-5" />
                        <p class="body1 mb-8">
                            Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the
                            industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been
                            the industry's • Incluye Lorem Ipsum is simply dummy text. Incluye Lorem Ipsum is simply
                            dummy text of the printing • Lorem Ipsum has beenthe industry's • Incluye Lorem Ipsum is
                            simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem
                            Ipsum is simply dummy text.
                        </p>
                        <v-row justify="center">
                            <v-col cols="12" lg="10">
                                <v-img
                                    src="/public/assets/img/home/curved-arrows-top-xs.svg"
                                    contain
                                    width="80%"
                                    class="mb-5 mx-auto d-sm-none"
                                />
                                <v-img
                                    src="/public/assets/img/home/curved-arrows-top-md.svg"
                                    contain
                                    width="80%"
                                    class="mb-5 mx-auto d-none d-sm-block"
                                />
                                <v-row
                                    :no-gutters="
                                        $vuetify.breakpoint.name == 'md' || $vuetify.breakpoint.name == 'lg'
                                            ? false
                                            : true
                                    "
                                >
                                    <v-col>
                                        <polygon-element
                                            text="Esta Allí"
                                            icon="/public/assets/img/home/icon-be-there.svg"
                                            href="#be-there"
                                        />
                                    </v-col>
                                    <v-col>
                                        <polygon-element
                                            text="Forma"
                                            icon="/public/assets/img/home/icon-shape.svg"
                                            href="#shape"
                                        />
                                    </v-col>
                                    <v-col>
                                        <polygon-element
                                            text="Comprobación"
                                            icon="/public/assets/img/home/icon-validation.svg"
                                            href="#validation"
                                        />
                                    </v-col>
                                    <v-col>
                                        <polygon-element
                                            text="Tiempo"
                                            icon="/public/assets/img/home/icon-time.svg"
                                            href="#time"
                                        />
                                    </v-col>
                                    <v-col>
                                        <polygon-element
                                            text="Listo Para Usar"
                                            icon="/public/assets/img/home/icon-ready-for-use.svg"
                                            href="#ready-for-use"
                                        />
                                    </v-col>
                                </v-row>
                                <v-img
                                    src="/public/assets/img/home/curved-arrows-bottom-xs.svg"
                                    contain
                                    width="80%"
                                    class="mt-5 mx-auto d-sm-none"
                                />
                                <v-img
                                    src="/public/assets/img/home/curved-arrows-bottom-md.svg"
                                    contain
                                    width="80%"
                                    class="mt-5 mx-auto d-none d-sm-block"
                                />
                            </v-col>
                        </v-row>
                    </div>
                </v-col>
            </v-row>

            <v-row class="mb-6">
                <v-col cols="12">
                    <presentation-banner
                        id="be-there"
                        icon="/public/assets/img/home/icon-be-there.svg"
                        preamble="Escuchar, Comprender y Percibir al Usuario"
                        title="Estar allí"
                        image="/public/assets/img/home/img-be-there.png"
                    >
                        <template v-slot:description>
                            Identificamos las necesidades de las personas para mejorar su experiencia del entorno.
                            Estableciendo la conexión entre el espacio vital y la persona que lo habita, teniendo en
                            cuenta: la representación antropométrica, la adaptación ergonómica, la evaluación de la
                            propiocepción y la estimulación espacial.
                        </template>
                    </presentation-banner>
                </v-col>
            </v-row>

            <v-row class="mb-6">
                <v-col cols="12">
                    <banner-category-product
                        title="Titulo"
                        descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
                        idItem="100"
                        variant="#e9e9e9"
                        variant-text="black--text"
                        img="/public/assets/img/home/opa.png"
                    ></banner-category-product>
                </v-col>
            </v-row>

            <v-row class="mb-6">
                <v-col cols="12">
                    <presentation-banner
                        id="shape"
                        icon="/public/assets/img/home/icon-shape.svg"
                        preamble="Planificar y diseñar"
                        title="Forma"
                        orientation="right"
                        image="/public/assets/img/home/img-shape.png"
                    >
                        <template v-slot:description>
                            El valor añadido se consigue comprendiendo los gustos subjetivos de las personas que
                            determinarán la función de la forma, lo que conducirá a la planificación de modelos más
                            eficientes que permitan el ser allí, resultando en una mejor experiencia.
                        </template>
                    </presentation-banner>
                </v-col>
            </v-row>

            <v-row class="mb-6">
                <v-col cols="12">
                    <carousel-products :products="productsSeeder" title="Integración" />
                </v-col>
            </v-row>

            <v-row class="mb-6">
                <v-col cols="12">
                    <presentation-banner
                        id="validation"
                        icon="/public/assets/img/home/icon-validation.svg"
                        preamble="Prueba, Validar y Depurar Productos"
                        title="Comprobación"
                        image="/public/assets/img/home/img-validation.png"
                    >
                        <template v-slot:description>
                            Al evaluar eficazmente los prototipos con respecto a los requisitos del usuario, se revelan
                            las deficiencias estructurales del diseño, lo que garantiza la corrección continua y, por
                            tanto, el cumplimiento de las normas de calidad, lo que a su vez asegura la entrega
                            satisfactoria de un espacio habitable.
                        </template>
                    </presentation-banner>
                </v-col>
            </v-row>

            <v-row class="mb-6">
                <v-col cols="12">
                    <presentation-banner
                        id="time"
                        icon="/public/assets/img/home/icon-time.svg"
                        preamble="Obsolescencia Programada, Material y Atemporalidad"
                        title="Tiempo"
                        orientation="right"
                        image="/public/assets/img/home/img-time.png"
                    >
                        <template v-slot:description>
                            Nos esforzamos por interiorizar una sólida comprensión y extracción de los materiales que
                            componen un espacio vital para garantizar su construcción, uso y mantenimiento a lo largo de
                            su vida. Nos comprometemos a que sea lo más fácil de usar y respetuoso con el medio ambiente
                            posible.
                        </template>
                    </presentation-banner>
                </v-col>
            </v-row>

            <v-row class="mb-6">
                <v-col cols="12">
                    <banner-category-product
                        title="Titulo"
                        descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
                        idItem="100"
                    ></banner-category-product>
                </v-col>
            </v-row>

            <v-row class="mb-6">
                <v-col cols="12">
                    <presentation-banner
                        id="ready-for-use"
                        icon="/public/assets/img/home/icon-ready-for-use.svg"
                        preamble="Ejecutar e Implementar la Función"
                        title="Listo para usar"
                        image="/public/assets/img/home/img-ready-for-use.png"
                    >
                        <template v-slot:description>
                            Un espacio habitable finalizado es el conjunto de objetos que acompañan al usuario en el
                            cumplimiento de una función determinada elaborada con cuidado al detalle el entorno es
                            transformando en una experiencia reconfortante.
                        </template>
                    </presentation-banner>
                </v-col>
            </v-row>

            <v-row class="mb-6">
                <v-col cols="12">
                    <banner-category-product
                        title="Titulo"
                        descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
                        idItem="100"
                    ></banner-category-product>
                </v-col>
            </v-row>

            <v-row class="mb-6">
                <v-col>
                    <cards-custom
                        title="Explora nuestros productos y servicios"
                        title-card1="Diseño de espacios"
                        title-card2="Servicios"
                        title-card3="ESP"
                    />
                </v-col>
            </v-row>

            <v-row class="mb-6">
                <v-col cols="12">
                    <v-banner color="#242526" class="rounded temp">
                        <div class="div-map">
                            <div class="map">
                                <v-img class="img-map" src="../../public/assets/img/mapa.png"></v-img>
                            </div>
                        </div>
                    </v-banner>
                </v-col>
            </v-row>
        </v-container>

        <footer-custom />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import BannerCategoryProduct from "../components/global/BannerCategoryProduct.vue";
import Carousel from "../components/global/Carousel.vue";
import CustomButton from "../components/global/CustomButton.vue";
import ProductItem from "../components/global/ProductItem.vue";
import SelectCustom from "../components/global/SelectCustom.vue";
import PresentationBanner from "../components/global/PresentationBanner.vue";
import CardsCustom from "../components/global/CardsCustom.vue";
import CarouselProducts from "../components/global/CarouselProducts.vue";
import FooterCustom from "../components/global/FooterCustom.vue";
import PolygonElement from "../components/global/PolygonElement.vue";
import LayoutNavbar from "../components/global/LayoutNavbar.vue";

import { productsSeeder, sliderSeeder } from "../seeders/products";

export default {
    components: {
        BannerCategoryProduct,
        Carousel,
        CustomButton,
        ProductItem,
        SelectCustom,
        PresentationBanner,
        CardsCustom,
        CarouselProducts,
        PolygonElement,
        LayoutNavbar,
        FooterCustom
    },
    data() {
        return {
            selectedCode: null,
            sliderSeeder,
            sliderItems: [{ src: "/public/assets/img/home/banner-home.png", type: "image" }],

            productsSeeder: [
                {
                    id: "1",
                    name: "'I'",
                    img: "/public/assets/img/home/i.png",
                    description: "Racionalización de procesos de fabricación"
                },
                {
                    id: "2",
                    name: "'DOVELA'",
                    description: "Cuidadosa selección de materiales",
                    img: "/public/assets/img/home/dovela1.png"
                },
                {
                    id: "3",
                    name: "'INTEGRACIÓN'",
                    description: "Ciclo de vida adaptable",
                    img: "/public/assets/img/home/dovela.png"
                }
            ]
        };
    },
    computed: {
        ...mapGetters("app", ["userLanguageObj", "allLanguages"])
    },
    mounted() {
        this.$vuetify.theme.dark = true;

        this.selectedCode = this.userLanguageObj.code;

        this.scrollToCenter();
    },
    methods: {
        ...mapActions("app", ["setLanguage"]),
        agree() {
            if (this.$i18n.locale !== this.selectedCode) {
                this.setLanguage(this.selectedCode);
                window.location.reload();
            }
        }
    }
};
</script>

<style lang="scss">
.v-list-item {
    text-transform: uppercase;
}
</style>

<style lang="scss" scoped>
.home {
    &-main {
        &-title {
            line-height: calc(43px + (122 - 43) * var(--screen-size));
            letter-spacing: -0.5px;

            @media (min-width: 960px) {
                letter-spacing: -1.5px;
            }
        }

        &-description {
            font-size: var(--font-size-h5);
        }

        &-carousel {
            height: 80vh !important;
            max-height: 786px;

            &::v-deep {
                .v-carousel__item {
                    height: 100%;
                }
            }
        }
    }
}

.temp {
    padding: 0 15%;
}
.theme--dark {
    .preambulo .rounded-section {
        background-color: #18191a;
    }
}

.v-select {
    text-transform: uppercase;
}

@media (min-width: 835px) {
    .container {
        max-width: 1920px;
    }
}

.div-map {
    width: 100%;
}

.map {
    border: 1px solid #59595a;
    border-radius: 400px;
    padding: 2% 15%;
}

.img-map {
    border-radius: 50%;
}

@media (max-width: 834px) {
    .div-map {
        width: 100%;
    }

    .map {
        border: 1px solid #59595a;
        border-radius: 50%;
        padding: 20% 0;
    }
}
</style>
