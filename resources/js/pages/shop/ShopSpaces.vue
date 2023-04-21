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

        <v-row>
            <v-col cols="12" md="6">
                <shop-action-card img="/public/assets/img/shop-spaces/icon-msg.png" />
            </v-col>
            <v-col cols="12" md="6">
                <shop-action-card img="/public/assets/img/shop-spaces/icon-house.png" />
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12">
                <carousel-spaces :spaces="spacesSeeder" />
            </v-col>
        </v-row>

        <v-row class="mb-6">
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

        <v-row class="mb-6">
            <v-col cols="12">
                <carousel-products :products="productsSeeder" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { spacesSeeder } from "../../seeders/spaces";
import { productsSeeder, sliderSeeder } from "../../seeders/products";

import Carousel from "../../components/global/Carousel";
import ShopActionCard from "../../components/shop/ShopActionCard.vue";
import CarouselSpaces from "../../components/global/CarouselSpaces.vue";
import CustomButton from "../../components/global/CustomButton.vue";
import CarouselProducts from "../../components/global/CarouselProducts.vue";

export default {
    name: "ShopSpaces",
    data: () => ({
        spacesSeeder,
        productsSeeder,
        sliderSeeder,
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
        CarouselSpaces,
        CustomButton,
        CarouselProducts
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
