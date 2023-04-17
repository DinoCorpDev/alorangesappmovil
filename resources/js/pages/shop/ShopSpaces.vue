<template>
    <v-container fluid>
        <v-row class="mb-2">
            <v-col cols="12">
                <carousel-tabs
                    :slides="sliderSeeder"
                    title="Diseño de espacios"
                    description="Desde el diseño hasta la instalación, nos encargamos de todo para que tesientas confortable en ese espacio habitable ideal."
                />
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="6" lg="6" xl="6">
                <product-item-1 img="/public/assets/img/spacesicon1.png" />
            </v-col>
            <v-col cols="12" md="6" lg="6" xl="6">
                <product-item-1 img="/public/assets/img/spacesico2.png" />
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

import CarouselTabs from "../../components/global/CarouselTabs.vue";
import ProductItem1 from "../../components/global/ProductItem1.vue";
import CarouselSpaces from "../../components/global/CarouselSpaces.vue";
import CustomButton from "../../components/global/CustomButton.vue";
import CarouselProducts from "../../components/global/CarouselProducts.vue";

export default {
    name: "ShopSpaces",
    data: () => ({
        spacesSeeder,
        productsSeeder,
        sliderSeeder
    }),
    components: {
        CarouselTabs,
        ProductItem1,
        CarouselSpaces,
        CustomButton,
        CarouselProducts
    }
};
</script>
