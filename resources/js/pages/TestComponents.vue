<template>
    <v-container class="py-16">
        <v-row>
            <v-col cols="12">
                <div class="mb-4">
                    <h5>Modo Oscuro</h5>
                    <v-btn @click="toggleTheme()">🌛</v-btn>
                </div>

                <div class="mb-4">
                    <h5>Botones</h5>
                    <custom-button text="Ir a tienda" icon="la-store-alt"></custom-button>
                    <custom-button
                        text="Comunicarse con ventas"
                        variant="blue darken-4"
                        outlined
                        variant-text="white--text"
                    ></custom-button>
                    <custom-button
                        text="Comprar"
                        variant="blue darken-4"
                        variant-text="white--text"
                        disabled
                    ></custom-button>
                </div>

                <div class="mb-4">
                    <h5>Carousel</h5>
                    <carousel />
                </div>

                <div class="mb-4">
                    <h5>Selector</h5>
                    <select-custom></select-custom>
                </div>

                <div class="mb-4">
                    <h5>Polygon Element</h5>
                    <v-row>
                        <v-col v-for="i in 5" :key="i">
                            <polygon-element />
                        </v-col>
                    </v-row>
                </div>

                <div class="mb-4">
                    <h5>Producto con Carousel</h5>
                    <presentation-banner
                        no-dots
                        no-arrows="true"
                        category="Preambulo"
                        title="Producto 1"
                        descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
                        idItem="1"
                        orientation="order-1"
                    ></presentation-banner>
                </div>

                <div class="mb-4">
                    <h5>Item Producto</h5>
                    <v-row>
                        <v-col cols="4">
                            <shop-action-card />
                        </v-col>
                        <v-col cols="4">
                            <shop-action-card />
                        </v-col>
                        <v-col cols="4">
                            <shop-action-card />
                        </v-col>
                    </v-row>
                </div>

                <div class="mb-4">
                    <h5>Banner Categoria</h5>
                    <banner-category-product
                        title="Titulo"
                        descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
                        idItem="100"
                    ></banner-category-product>
                </div>

                <div class="mb-4">
                    <h5>Carousel de Productos</h5>
                    <carousel-actions no-dots no-arrows="true"></carousel-actions>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import BannerCategoryProduct from "../components/global/BannerCategoryProduct.vue";
import Carousel from "../components/global/Carousel.vue";
import PresentationBanner from "../components/global/PresentationBanner.vue";
import CarouselActions from "../components/global/CarouselActions.vue";
import CustomButton from "../components/global/CustomButton.vue";
import SelectCustom from "../components/global/SelectCustom.vue";
import PolygonElement from "../components/global/PolygonElement.vue";
import ShopActionCard from "../components/shop/ShopActionCard.vue";

export default {
    components: {
        BannerCategoryProduct,
        Carousel,
        PresentationBanner,
        CarouselActions,
        CustomButton,
        SelectCustom,
        PolygonElement,
        ShopActionCard
    },
    mounted() {
        this.$vuetify.theme.dark = true;
    },
    methods: {
        toggleTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        }
    }
};
</script>
