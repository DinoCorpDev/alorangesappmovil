<template>
    <v-container fluid>
        <v-row tag="main" class="main">
            <v-col cols="12">
                <carousel
                    class="main-carousel"
                    :slides="sliderItems"
                    type="description"
                    title="Diseño de espacios"
                    description="Desde el diseño hasta la instalación, nos encargamos de todo para que te sientas confortable en ese espacio habitable ideal."
                />
            </v-col>
        </v-row>

        <v-row tag="section">
            <v-col cols="12" md="4">
                <shop-action-card img="/public/assets/img/shop-spaces/icon-msg.png" href="#" />
            </v-col>
            <v-col cols="12" md="4">
                <shop-action-card img="/public/assets/img/shop-spaces/icon-house.png" href="#" />
            </v-col>
            <v-col cols="12" md="4">
                <shop-action-card img="/public/assets/img/shop-spaces/icon-house.png" href="#" />
            </v-col>
        </v-row>

        <v-row tag="section" class="mb-6">
            <v-col cols="12">
                <h5>H5</h5>
                <v-row class="mb-3">
                    <v-col cols="6" sm="8" md="4">
                        <shop-action-card boxStyle="vertical" href="#" />
                    </v-col>
                    <v-col
                        v-for="product in productsSeeder.slice(0, 4)"
                        :key="`product-col-${product.id}`"
                        cols="6"
                        sm="4"
                        md="2"
                    >
                        <product-box :productDetails="product" />
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <custom-button block color="grey2" text="Ver más" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row tag="section" class="mb-6">
            <v-col cols="12">
                <h5>H5</h5>
                <v-row class="mb-3">
                    <v-col cols="6" sm="8" md="4">
                        <shop-action-card boxStyle="vertical" href="#" />
                    </v-col>
                    <v-col
                        v-for="product in productsSeeder.slice(0, 4)"
                        :key="`product-col-${product.id}`"
                        cols="6"
                        sm="4"
                        md="2"
                    >
                        <product-box :productDetails="product" />
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <custom-button block color="grey2" text="Ver más" />
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
                        <product-box boxStyle="two" :productDetails="product" />
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <custom-button block color="grey2" text="Ver más" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { sliderSeeder, productsSeeder } from "../../seeders/products";

import Carousel from "../../components/global/Carousel.vue";
import ShopActionCard from "../../components/shop/ShopActionCard.vue";
import CustomButton from "../../components/global/CustomButton.vue";
import PresentationBanner from "../../components/global/PresentationBanner.vue";

export default {
    name: "ShopServices",
    data: () => ({
        sliderSeeder,
        productsSeeder,
        sliderItems: [
            {
                src: "/public/assets/img/shop-spaces/banner-main.png",
                type: "image"
            }
        ]
    }),
    components: {
        Carousel,
        ShopActionCard,
        CustomButton,
        PresentationBanner
    }
};
</script>

<style lang="scss" scoped>
.main {
    &-carousel {
        height: 77vh !important;
        max-height: 786px;

        &::v-deep {
            .v-carousel__item {
                height: 100%;
            }
        }
    }
}
</style>
