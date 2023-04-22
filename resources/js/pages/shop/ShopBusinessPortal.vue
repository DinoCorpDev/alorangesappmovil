<template>
    <v-container fluid>
        <v-row tag="main" class="main mb-6">
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

        <v-row tag="section" class="mb-6">
            <v-col cols="12">
                <PresentationBanner orientation="right" title="TITULO" :slidesCarousel="sliderSeeder" actions>
                    <template v-slot:description>
                        Nos esforzamos por interiorizar una sólida comprensión y extracción de los materiales que
                        componen un espacio vital para garantizar su construcción, uso y mantenimiento a lo largo de su
                        vida. Nos comprometemos a que sea lo más fácil de usar y respetuoso con el medio ambiente
                        posible.
                    </template>
                </PresentationBanner>
            </v-col>
        </v-row>

        <v-row tag="section" class="mb-6">
            <v-col cols="12">
                <CarouselActions :items="itemsActions" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { sliderSeeder } from "../../seeders/products";

import Carousel from "../../components/global/Carousel.vue";
import CarouselActions from "../../components/global/CarouselActions.vue";
import PresentationBanner from "../../components/global/PresentationBanner.vue";

export default {
    name: "ShopHomeAppliances",
    data: () => ({
        sliderSeeder,
        sliderItems: [
            {
                src: "/public/assets/img/shop-spaces/banner-main.png",
                type: "image"
            }
        ],
        itemsActions: [
            { img: "/public/assets/img/shop-spaces/action-a.png" },
            { img: "/public/assets/img/shop-spaces/action-b.png" },
            { img: "/public/assets/img/shop-spaces/action-c.png" }
        ]
    }),
    components: {
        Carousel,
        CarouselActions,
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
