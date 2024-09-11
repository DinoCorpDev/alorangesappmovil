<template>
    <v-container fluid>
        <contact-dialog :show="contactDialogShow" @close="contactDialogClosed" />

        <v-row tag="main" class="main">
            <v-col cols="12">
                
            </v-col>
        </v-row>

        <v-row tag="section" class="mb-6">
            <v-col cols="12">
                <h5>Items</h5>
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
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { spacesSeeder } from "../../seeders/spaces";
import { sliderSeeder } from "../../seeders/products";

import Carousel from "../../components/global/Carousel";
import CarouselActions from "../../components/global/CarouselActions.vue";
import CarouselPortfolio from "../../components/global/CarouselPortfolio.vue";
import CustomButton from "../../components/global/CustomButton.vue";
import ProductBox from "../../components/product/ProductBox.vue";
import ShopActionCard from "../../components/shop/ShopActionCard.vue";
import ContactDialog from "../../pages/shop/ContactDialog.vue";
import Mixin from "../../utils/mixin";

export default {
    name: "ShopCartoneria",
    data: () => ({
        spacesSeeder,
        productsSeeder: [],
        sliderSeeder,
        sliderItems: [
            {
                src: "/public/assets/img/shop-spaces/banner-main.png",
                type: "image"
            }
        ],
        itemsPortfolio: [
            {
                title: "Cocina en Linea",
                img: "/public/assets/img/shop-spaces/cocinalinea.png",
                icon: "/public/assets/img/home/portfolio-design-icon.svg",
                description: "Proyecta tus espacias a la mediada que deseas."
            },
            {
                title: "Cocina en U",
                img: "/public/assets/img/shop-spaces/cocinau.png",
                icon: "/public/assets/img/home/portfolio-services-icon.svg",
                description: "Contrata a profesionales para la instalación y recalibración de tus espacios habitables."
            },
            {
                title: "ESP",
                icon: "/public/assets/img/home/portfolio-esp-icon.svg",
                description:
                    "Explora un catalogo de marcas aliadas y descubre el electrodoméstico que buscas para dar funcionalidad a tu hogar."
            }
        ],
        itemsActions: [
            { img: "/public/assets/img/shop-spaces/action-a.png" },
            { img: "/public/assets/img/shop-spaces/action-b.png" },
            { img: "/public/assets/img/shop-spaces/action-c.png" }
        ],
        contactDialogShow: false
    }),
    components: {
        Carousel,
        CarouselActions,
        CarouselPortfolio,
        CustomButton,
        ProductBox,
        ShopActionCard,
        ContactDialog
    },
    mounted(){
        this.getProducts();
    },
    methods: {
        contactDialogOpen() {
            this.contactDialogShow = true;
        },
        contactDialogClosed() {
            this.contactDialogShow = false;
        },
        async getProducts(){
            const res = await Mixin.methods.call_api("get", `product/search?category_slug=CARTONERIA`);
                if(res.data.success){
                    // category_slug;
                    // keyword;
                    // sort_by;
                    // brand_ids;
                    // min_price;
                    // max_price;
                    this.productsSeeder = res.data.products.data
                }
        }
    }
};
</script>
