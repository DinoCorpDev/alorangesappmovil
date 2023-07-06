<template>
    <v-container fluid>
        <v-row tag="main" class="main">
            <v-col cols="12">
                <Carousel
                    class="main-carousel"
                    :slides="sliderItems"
                    type="description"
                    title="Diseño de espacios"
                    description="Desde el diseño hasta la instalación, nos encargamos de todo para que te sientas confortable en ese espacio habitable ideal."
                />
            </v-col>
        </v-row>

        <v-row tag="section">
            <v-col cols="12" md="6">
                <ShopActionCard img="/public/assets/img/shop-spaces/icon-msg.png" href="#" />
            </v-col>
            <v-col cols="12" md="6">
                <ShopActionCard img="/public/assets/img/shop-spaces/icon-house.png" href="#" />
            </v-col>
        </v-row>

        <v-row tag="section" class="mb-6">
            <v-col cols="12">
                <h5>H5</h5>
                <v-row class="mb-3">
                    <v-col cols="6" sm="8" md="4">
                        <ShopActionCard boxStyle="vertical" href="#" />
                    </v-col>
                    <v-col
                        v-for="product in productsSeeder.slice(0, 4)"
                        :key="`product-col-${product.id}`"
                        cols="6"
                        sm="4"
                        md="2"
                    >
                        <CardBrand :brandDetails="product" />
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <CustomButton block color="grey2" text="Ver más" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row tag="section">
            <v-col cols="12">
                <CarouselProducts :items="productsSeeder" />
            </v-col>
        </v-row>

        <v-row tag="section" class="mb-6">
            <v-col cols="12">
                <h5>H5</h5>
                <v-row class="mb-3">
                    <v-col cols="6" sm="8" md="4">
                        <ShopActionCard boxStyle="vertical" href="#" />
                    </v-col>
                    <v-col
                        v-for="product in productsSeeder.slice(0, 4)"
                        :key="`product-col-${product.id}`"
                        cols="6"
                        sm="4"
                        md="2"
                    >
                        <ProductBox :productDetails="product" />
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <CustomButton block color="grey2" text="Ver más" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row tag="section" class="mb-6">
            <v-col cols="12">
                <h5>H5</h5>
                <v-row class="mb-3">
                    <v-col
                        v-for="product in productsSeeder.slice(0, 4)"
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
                        <CustomButton block color="grey2" text="Ver más" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { productsSeeder } from "../../seeders/products";

import CardBrand from "../../components/global/CardBrand.vue";
import Carousel from "../../components/global/Carousel.vue";
import CarouselProducts from "../../components/global/CarouselProducts.vue";
import CustomButton from "../../components/global/CustomButton.vue";
import ProductBox from "../../components/product/ProductBox.vue";
import ShopActionCard from "../../components/shop/ShopActionCard.vue";

export default {
    name: "ShopHomeAppliances",
    data: () => ({
        productsSeeder,
        sliderItems: [
            {
                src: "/public/assets/img/shop-spaces/banner-main.png",
                type: "image"
            }
        ]
    }),
    components: {
        CardBrand,
        Carousel,
        CarouselProducts,
        CustomButton,
        ProductBox,
        ShopActionCard
    }
};
</script>
