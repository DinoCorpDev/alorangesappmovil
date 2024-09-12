<template>
    <v-container style="background-color: white;">
        <v-row class="main ma-6 bg-orange-ligth border-style-banner" align="center" tag="main">
            <v-col class="pa-6" cols="12" sm="7" md="7">
                <h1 class="home-main-title mb-6 mb-sm-8">Compra multi servicios de formal fácil, segura y rápida</h1>
                <p class="home-main-description mb-6 mb-sm-10">
                    Ofrecemos múltiples alternativas de compra y pago para que nuestros clientes obtenga todo lo que
                    desee de una forma fácil
                </p>
                <v-row>
                    <v-col cols="12" sm="8" md="8">
                        <CustomInput block placeholder="Escribe lo que buscas" />
                    </v-col>
                    <v-col cols="12" sm="4" md="4">
                        <CustomButton class="bg-orange" color="orange" block text="Buscar" />
                    </v-col>
                </v-row>
            </v-col>
            <v-col class="pa-0" cols="12" sm="5" md="5">
                <img src="/public/assets/img/bannerhomeimg-removebg-preview.png" style="width: 100%; height: auto;" />
            </v-col>
        </v-row>

        <v-row tag="section" class="preambulo mb-6">
            <v-col cols="12">
                <div class="rounded-section px-5 py-8">
                    <v-row justify="center">
                        <v-col cols="12" lg="10">
                            <v-row
                                :no-gutters="
                                    $vuetify.breakpoint.name == 'md' || $vuetify.breakpoint.name == 'lg' ? false : true
                                "
                            >
                                <v-col class="center-flex" cols="12" sm="6" md="3">
                                    <v-img src="/public/assets/img/Group13.png" contain class="mb-5" />
                                    <h3>Domicilios gratis</h3>
                                    <p>En compras mininmas</p>
                                </v-col>
                                <v-col class="center-flex" cols="12" sm="6" md="3">
                                    <v-img src="/public/assets/img/Group13.png" contain class="mb-5" />
                                    <h3>Apoyo 24/7</h3>
                                    <p>Servicio técnico</p>
                                </v-col>
                                <v-col class="center-flex" cols="12" sm="6" md="3">
                                    <v-img src="/public/assets/img/Group12.png" contain class="mb-5" />
                                    <h3>Pago seguro</h3>
                                    <p>Múltiples bancos</p>
                                </v-col>
                                <v-col class="center-flex" cols="12" sm="6" md="3">
                                    <v-img src="/public/assets/img/Refresh.png" contain class="mb-5" />
                                    <h3>Devoluciones</h3>
                                    <p>Cambios de productos</p>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
        </v-row>
        <v-row class="center-items ma-6">
            <v-col col="12" sm="12" md="12" class="bg-green-ligth border-style-banner">
                <CarouselSpaces
                    title="Categorias"
                    img="/public/assets/img/home/icon-be-there.svg"
                    :spaces="itemsArray"
                />
            </v-col>
        </v-row>

        <v-row class="mb-6">
            <v-col cols="12">
                <PresentationBanner
                    id="be-there"
                    icon="/public/assets/img/home/icon-be-there.svg"
                    preamble="Escuchar, Comprender y Percibir al Usuario"
                    title="Estar allí"
                    image="/public/assets/img/banner2home.png"
                >
                    <template v-slot:description>
                        Identificamos las necesidades de las personas para mejorar su experiencia del entorno.
                        Estableciendo la conexión entre el espacio vital y la persona que lo habita, teniendo en cuenta:
                        la representación antropométrica, la adaptación ergonómica, la evaluación de la propiocepción y
                        la estimulación espacial.
                    </template>
                </PresentationBanner>
            </v-col>
        </v-row>

        <v-row class="wrapper-app-banner mb-6 center-items hola">
                <v-col cols="12" lg="4" class="d-none d-lg-flex">
                    <img class="imgsize-cel" src="public/assets/img/Grupo12203.png" />
                </v-col>
                <v-col cols="12" lg="4">
                    <div class="wrapper-dwn-app">
                        <h3 class="title-banner-dwn">Descarga Nuesta App Movil</h3>
                        <CustomButton color="orange" :width="250" :elevation="7" text="Descargar App" />
                    </div>
                </v-col>
                <v-col cols="12" lg="4" class="d-flex justify-center align-center">
                    <div class="Wrapper-AppStore">
                        <a href="#"><img class="imgsize-btn-dwn" src="public/assets/img/Grupo12233.png" /></a>
                        <a href="#"><img class="imgsize-btn-dwn" src="public/assets/img/Grupo12234.png" /></a>
                    </div>
                </v-col>
        </v-row>
        <v-row>
            <v-col col="12" sm="12" md="12">
                <CarouselBrands></CarouselBrands>
            </v-col>
        </v-row>
        <RecuperarPassCodigo v-model="showRecuperarPass" :email="this.$route.query.email"/>
        <VerifyAccount v-model="showVerifyAccount"/>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { sliderSeeder } from "../seeders/products";

import BannerCategoryProduct from "../components/global/BannerCategoryProduct.vue";
import Carousel from "../components/global/Carousel.vue";
import CarouselActions from "../components/global/CarouselActions.vue";
import CustomButton from "../components/global/CustomButton.vue";
import LayoutNavbar from "../components/header/Navbar.vue";
import PolygonElement from "../components/global/PolygonElement.vue";
import PortfolioCard from "../components/global/PortfolioCard.vue";
import PresentationBanner from "../components/global/PresentationBanner.vue";
import SelectCustom from "../components/global/SelectCustom.vue";
import CustomInput from "../components/global/CustomInput.vue";
import CarouselSpaces from "../components/global/CarouselSpaces.vue";
import CarouselBrands from "../components/global/CarouselBrands.vue";
import RecuperarPassCodigo from "../components/auth/RecuperarPassCodigo.vue"; 
import VerifyAccount from "../components/auth/VerifyAccount.vue"; 

export default {
    components: {
        BannerCategoryProduct,
        Carousel,
        CarouselActions,
        CustomButton,
        LayoutNavbar,
        PolygonElement,
        PortfolioCard,
        PresentationBanner,
        SelectCustom,
        CustomInput,
        CarouselSpaces,
        CarouselBrands,
        RecuperarPassCodigo,
        VerifyAccount
    },
    data() {
        return {
            showRecuperarPass: false,
            showVerifyAccount: false,
            itemsArray: [
                {
                    title: "Papeleria",
                    img: "/public/assets/img/Grupo12238.png",
                    description: "Papeleria"
                },
                {
                    title: "Aseo",
                    img: "/public/assets/img/Grupo12239.png",
                    description: "Aseo"
                },
                {
                    title: "Cafeteria",
                    img: "/public/assets/img/Grupo12240.png",
                    description: "Cafeteria"
                },
                {
                    title: "Botiqueria",
                    img: "/public/assets/img/Grupo12241.png",
                    description: "Botiqueria"
                }
            ],
            selectedCode: null,
            sliderSeeder,
            sliderItems: [
                {
                    src: "/public/assets/img/home/banner-home.png",
                    type: "image"
                }
            ],
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
        ...mapGetters("app", ["userLanguageObj", "allLanguages"]),
    },
    mounted() {
        this.$vuetify.theme.dark = true;

        this.selectedCode = this.userLanguageObj.code;

        this.scrollToCenter();
        if(this.$route.query.modal == 'Password'){
            this.showRecuperarPass = true;
        }

        if(this.$route.query.modal == 'VerifyAccount' || this.$route.query.modal == 'verifyaccount'){
            this.showVerifyAccount = true;
        }
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
.center-items {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
}
.wrapper-app-banner {
    background-image: url("/public/assets/img/bg10400.png");
    background-position: center;
    background-size: contain;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.imgsize-cel {
    width: 150%;
    height: auto;
}
.imgsize-btn-dwn {
    width: 200px;
    height: auto;
}
.title-banner-dwn {
    font-size: 25px;
    font-weight: 700;
}
</style>

<style lang="scss" scoped>
.home {
    &-main {
        &-description {
            font-size: var(--font-size-h5);
            color: black;
            font-weight: 100;
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

    &-portfolio {
        &-wrap {
            border: 1px solid #fff;
            border-radius: 10px;
            padding: 1rem;
            height: 100%;
            min-height: 560px;
            display: flex;
            align-items: center;
        }

        &-title {
            @media (max-width: 600px) {
                width: 60%;
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

.border-style-banner {
    border-radius: 20px;
}

.bg-orange {
    background: #f58634;
}
.bg-orange-ligth {
    background: #f5cea6;
}
.bg-green-ligth {
    background: #f3f9ec;
}
.center-flex {
    display: flex;
    flex-direction: column;
    align-items: center;
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
.Wrapper-AppStore{
    display: flex;
    flex-direction: column;
}
.wrapper-dwn-app{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
}
</style>
