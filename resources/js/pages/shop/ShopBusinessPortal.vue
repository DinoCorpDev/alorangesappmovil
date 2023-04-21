<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <carousel
                    class="main-carousel"
                    :slides="sliderSeeder"
                    type="description"
                    title="Diseño de espacios"
                    description="Desde el diseño hasta la instalación, nos encargamos de todo para que te sientas confortable en ese espacio habitable ideal."
                />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-card flat>
                    <div class="mb-4">
                        <h5>Producto con Carousel</h5>
                        <v-row class="mb-6">
                            <v-col cols="12">
                                <presentation-banner orientation="right" :slidesCarousel="sliderSeeder" />
                            </v-col>
                        </v-row>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="mb-6">
            <v-col cols="12">
                <carousel-products :products="productsSeeder" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { productsSeeder, sliderSeeder } from "../../seeders/products";

import Carousel from "../../components/global/Carousel.vue";
import PresentationBanner from "../../components/global/PresentationBanner.vue";
import CarouselProducts from "../../components/global/CarouselProducts.vue";

export default {
    name: "ShopHomeAppliances",
    data: () => ({
        productsSeeder,
        sliderSeeder
    }),
    components: {
        Carousel,
        PresentationBanner,
        CarouselProducts
    }
};
</script>
