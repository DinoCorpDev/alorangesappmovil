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
        <div class="mb-2">
            <v-row>
                <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                    <shop-action-card />
                </v-col>
                <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                    <shop-action-card />
                </v-col>
                <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                    <shop-action-card />
                </v-col>
            </v-row>
        </div>

        <div class="mb-4 mt-16">
            <h5>H5</h5>
            <v-row>
                <v-col cols="12" sm="8" md="4" lg="4" xl="4">
                    <product-item
                        title="Producto 1"
                        descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
                        idItem="1"
                    ></product-item>
                </v-col>
                <v-col cols="12" sm="4" md="2" lg="2" xl="2">
                    <product-item-2 headerPr="true" />
                </v-col>
                <v-col cols="12" sm="4" md="2" lg="2" xl="2">
                    <product-item-2 headerPr="true" />
                </v-col>
                <v-col cols="12" sm="4" md="2" lg="2" xl="2">
                    <product-item-2 headerPr="true" img="/public/assets/img/landing/Pacto-Ambiental.jpg" />
                </v-col>
                <v-col cols="12" sm="4" md="2" lg="2" xl="2">
                    <product-item-2 headerPr="true" img="/public/assets/img/landing/Pacto-Ambiental.jpg" />
                </v-col>
            </v-row>
            <v-row justify="center">
                <custom-button light text="Ver más" class="mt-6" style="width: 40%" />
            </v-row>
        </div>
        <div class="mb-4 mt-16">
            <h5>H5</h5>
            <v-row>
                <v-col cols="12" sm="8" md="4" lg="4" xl="4">
                    <product-item
                        title="Producto 1"
                        descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
                        idItem="1"
                    ></product-item>
                </v-col>
                <v-col cols="12" sm="4" md="2" lg="2" xl="2">
                    <product-item-2 headerPr="true" />
                </v-col>
                <v-col cols="12" sm="4" md="2" lg="2" xl="2">
                    <product-item-2 headerPr="true" />
                </v-col>
                <v-col cols="12" sm="4" md="2" lg="2" xl="2">
                    <product-item-2 headerPr="true" img="/public/assets/img/landing/Pacto-Ambiental.jpg" />
                </v-col>
                <v-col cols="12" sm="4" md="2" lg="2" xl="2">
                    <product-item-2 headerPr="true" img="/public/assets/img/landing/Pacto-Ambiental.jpg" />
                </v-col>
            </v-row>
            <v-row justify="center">
                <custom-button light text="Ver más" class="mt-6" style="width: 40%" />
            </v-row>
        </div>

        <v-row class="mb-6 mt-16">
            <v-col cols="12">
                <h5>H5</h5>
                <v-row>
                    <v-col cols="12" sm="6" md="3" lg="3" xl="3">
                        <product-box />
                    </v-col>
                    <v-col cols="12" sm="6" md="3" lg="3" xl="3">
                        <product-box />
                    </v-col>
                    <v-col cols="12" sm="6" md="3" lg="3" xl="3">
                        <product-box />
                    </v-col>
                    <v-col cols="12" sm="6" md="3" lg="3" xl="3">
                        <product-box />
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <custom-button light text="Ver más" class="mt-6" style="width: 40%" />
                </v-row>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12">
                <v-card flat>
                    <div class="mb-4 mt-16">
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
    </v-container>
</template>

<script>
import { sliderSeeder } from "../../seeders/products";

import Carousel from "../../components/global/Carousel.vue";
import ProductItem from "../../components/global/ProductItem.vue";
import ShopActionCard from "../../components/shop/ShopActionCard.vue";
import ProductItem2 from "../../components/global/ProductItem2.vue";
import CustomButton from "../../components/global/CustomButton.vue";
import PresentationBanner from "../../components/global/PresentationBanner.vue";

export default {
    name: "ShopServices",
    data: () => ({
        sliderSeeder
    }),
    components: {
        Carousel,
        ProductItem,
        ShopActionCard,
        ProductItem2,
        CustomButton,
        PresentationBanner
    }
};
</script>
