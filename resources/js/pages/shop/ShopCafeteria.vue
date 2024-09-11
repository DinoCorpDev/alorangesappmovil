<template>
    <v-container fluid>
        <contact-dialog :show="contactDialogShow" @close="contactDialogClosed" />

        <v-row tag="main" class="main">
            <v-col cols="12">
                <SelectCustom
                    :items="documentTypes"
                    v-model="documentType"
                />
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
import SelectCustom from "../../components/global/SelectCustom.vue";
import Mixin from "../../utils/mixin";

export default {
    name: "ShopCafeteria",
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
        documentTypes: [
            { text: "(C.C) Cedula de ciudadanía", value: "C.C" },
            { text: "(N.I.T) Numero de identificación tributario", value: "N.I.T" }
        ],
        documentType:{}
    }),
    components: {
        SelectCustom,
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
        async getProducts(){
            const res = await Mixin.methods.call_api("get", `product/search?category_slug=CAFETERIA`);
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
