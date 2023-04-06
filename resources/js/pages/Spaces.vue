<template>
    <div>
        <layout-navbar-spaces />
        <v-tabs
            :background-color="$vuetify.theme.dark ? '#000000' : '#FAFCFC'"
            centered
            fixed-tabs
            slider-color="white"
        >
            <v-tab v-for="tab in tabs" class="text-none" :key="`tab-${tab.text}`">
                <v-icon left> {{ tab.icon }} </v-icon>
                {{ tab.text }}
            </v-tab>

            <v-tab-item>
                <v-container fluid>
                    <v-row class="mb-2">
                        <v-col cols="12">
                            <carousel-tabs :slides="sliderSeeder" />
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" md="6" lg="6" xl="6">
                            <product-item-1 />
                        </v-col>
                        <v-col cols="12" md="6" lg="6" xl="6">
                            <product-item-1 />
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
                                    <product-box
                                        title="Producto 1"
                                        descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
                                        idItem="1"
                                    />
                                </v-col>
                                <v-col cols="12" sm="6" md="3" lg="3" xl="3">
                                    <product-box
                                        title="Producto 1"
                                        descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
                                        idItem="1"
                                        img="/public/assets/img/landing/Pacto-Ambiental.jpg"
                                    />
                                </v-col>
                                <v-col cols="12" sm="6" md="3" lg="3" xl="3">
                                    <product-box
                                        title="Producto 1"
                                        descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
                                        idItem="1"
                                        img="/public/assets/img/landing/Pacto-Ambiental.jpg"
                                    />
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
            </v-tab-item>

            <v-tab-item>
                <v-container fluid>
                    <v-row>
                        <v-col cols="12">
                            <carousel-tabs :slides="sliderSeeder" />
                        </v-col>
                    </v-row>
                    <div class="mb-2">
                        <v-row>
                            <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                                <product-item-1 />
                            </v-col>
                            <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                                <product-item-1 />
                            </v-col>
                            <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                                <product-item-1 />
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
                                    <product-box
                                        title="Producto 1"
                                        descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
                                        idItem="1"
                                    />
                                </v-col>
                                <v-col cols="12" sm="6" md="3" lg="3" xl="3">
                                    <product-box
                                        title="Producto 1"
                                        descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
                                        idItem="1"
                                        img="/public/assets/img/landing/Pacto-Ambiental.jpg"
                                    />
                                </v-col>
                                <v-col cols="12" sm="6" md="3" lg="3" xl="3">
                                    <product-box
                                        title="Producto 1"
                                        descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
                                        idItem="1"
                                        img="/public/assets/img/landing/Pacto-Ambiental.jpg"
                                    />
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
            </v-tab-item>

            <v-tab-item>
                <v-container fluid>
                    <v-row>
                        <v-col cols="12">
                            <carousel-tabs :slides="sliderSeeder" :showbutton="false" />
                        </v-col>
                    </v-row>
                    <div class="mb-2">
                        <v-row>
                            <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                                <product-item-1 />
                            </v-col>
                            <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                                <product-item-1 />
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
                            <v-col cols="6" sm="4" md="2" lg="2" xl="2">
                                <product-item-4 />
                            </v-col>
                            <v-col cols="6" sm="4" md="2" lg="2" xl="2">
                                <product-item-4 />
                            </v-col>
                            <v-col cols="6" sm="4" md="2" lg="2" xl="2">
                                <product-item-4 img="/public/assets/img/landing/Pacto-Ambiental.jpg" />
                            </v-col>
                            <v-col cols="6" sm="4" md="2" lg="2" xl="2">
                                <product-item-4 img="/public/assets/img/landing/Pacto-Ambiental.jpg" />
                            </v-col>
                        </v-row>
                        <v-row justify="center">
                            <custom-button light text="Ver más" class="mt-6" style="width: 40%" />
                        </v-row>
                    </div>

                    <div class="mb-4 mt-16">
                        <h5>H5</h5>
                        <v-row>
                            <v-col cols="6" sm="6" md="4" lg="4" xl="4">
                                <product-item-2 />
                            </v-col>
                            <v-col cols="6" sm="6" md="4" lg="4" xl="4">
                                <product-item-2 />
                            </v-col>
                            <v-col cols="6" sm="6" md="4" lg="4" xl="4">
                                <product-item-2 img="/public/assets/img/landing/Pacto-Ambiental.jpg" />
                            </v-col>
                            <v-col cols="6" sm="6" md="4" lg="4" xl="4">
                                <product-item-2 img="/public/assets/img/landing/Pacto-Ambiental.jpg" />
                            </v-col>
                            <v-col cols="6" sm="6" md="4" lg="4" xl="4">
                                <product-item-2 />
                            </v-col>
                            <v-col cols="6" sm="6" md="4" lg="4" xl="4">
                                <product-item-2 img="/public/assets/img/landing/Pacto-Ambiental.jpg" />
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
                            <v-col cols="6" sm="4" md="2" lg="2" xl="2">
                                <product-item-2 headerPr="true" />
                            </v-col>
                            <v-col cols="6" sm="4" md="2" lg="2" xl="2">
                                <product-item-2 headerPr="true" />
                            </v-col>
                            <v-col cols="6" sm="4" md="2" lg="2" xl="2">
                                <product-item-2 headerPr="true" img="/public/assets/img/landing/Pacto-Ambiental.jpg" />
                            </v-col>
                            <v-col cols="6" sm="4" md="2" lg="2" xl="2">
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
                                <v-col cols="12" sm="6" md="4" lg="3" xl="3">
                                    <product-box />
                                </v-col>
                                <v-col cols="12" sm="6" md="4" lg="3" xl="3">
                                    <product-box
                                        title="Producto 1"
                                        descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
                                        idItem="1"
                                    />
                                </v-col>
                                <v-col cols="12" sm="6" md="4" lg="3" xl="3">
                                    <product-box
                                        title="Producto 1"
                                        descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
                                        idItem="1"
                                        img="/public/assets/img/landing/Pacto-Ambiental.jpg"
                                    />
                                </v-col>
                                <v-col cols="12" sm="6" md="4" lg="3" xl="3">
                                    <product-box
                                        title="Producto 1"
                                        descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
                                        idItem="1"
                                        img="/public/assets/img/landing/Pacto-Ambiental.jpg"
                                    />
                                </v-col>
                            </v-row>
                            <v-row justify="center">
                                <custom-button light text="Ver más" class="mt-6" style="width: 40%" />
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-tab-item>

            <v-tab-item>
                <v-container fluid>
                    <v-row>
                        <v-col cols="12">
                            <carousel-tabs :slides="sliderSeeder" :showbutton="false" />
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
            </v-tab-item>
        </v-tabs>

        <footer-custom />
    </div>
</template>

<script>
import BannerCategoryProduct from "../components/global/BannerCategoryProduct.vue";
import Carousel from "../components/global/Carousel.vue";
import CarouselTabs from "../components/global/CarouselTabs.vue";
import CustomButton from "../components/global/CustomButton.vue";
import ProductItem from "../components/global/ProductItem.vue";
import SelectCustom from "../components/global/SelectCustom.vue";
import PresentationBanner from "../components/global/PresentationBanner.vue";
import CarouselProducts from "../components/global/CarouselProducts.vue";
import CarouselSpaces from "../components/global/CarouselSpaces.vue";
import ProductItem1 from "../components/global/ProductItem1.vue";
import ProductItem2 from "../components/global/ProductItem2.vue";
import ProductBox from "../components/product/ProductBox.vue";
import ProductItem4 from "../components/global/ProductItem4.vue";
import LayoutNavbarSpaces from "../components/global/LayoutNavbarSpaces.vue";
import FooterCustom from "../components/global/FooterCustom.vue";

import { spacesSeeder } from "../seeders/spaces";
import { productsSeeder, sliderSeeder } from "../seeders/products";

export default {
    data: () => ({
        spacesSeeder,
        productsSeeder,
        sliderSeeder,
        tabs: [
            { icon: "la-chair", text: "Diseño de espacios" },
            { icon: "la-tools", text: "Servicios" },
            { icon: "la-tv", text: "Electrodomésticos" },
            { icon: "la-building", text: "Portal de empresas" }
        ]
    }),
    components: {
        BannerCategoryProduct,
        Carousel,
        CustomButton,
        ProductItem,
        SelectCustom,
        PresentationBanner,
        CarouselProducts,
        CarouselSpaces,
        ProductItem1,
        ProductBox,
        LayoutNavbarSpaces,
        ProductItem2,
        ProductItem4,
        CarouselTabs,
        FooterCustom
    },
    mounted() {
        this.$vuetify.theme.dark = true;
    }
};
</script>

<style lang="scss" scoped>
::v-deep {
    .theme--dark {
        &.v-tabs-items {
            background-color: #000000;
        }
    }
}

@media (min-width: 1264px) {
    .v-toolbar__content,
    .v-toolbar__extension {
        padding: 4px 24px;
    }
}
.v-tab--active {
    color: white;
}

.v-input__slot,
.v-text-field__slot {
    min-height: 38px;
}

.layout-navbar-spaces {
    position: sticky;
}
</style>
