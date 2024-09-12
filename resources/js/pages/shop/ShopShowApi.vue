<template>
    <v-container fluid>
        <contact-dialog :show="contactDialogShow" @close="contactDialogClosed" />

        <v-container class="bg-surface-variant mb-6">
            <v-row align="start" style="height: 150px;" no-gutters>
                <v-col v-for="filtro in resultadoFiltroBotones" :key="`button-${filtro.id}`">
                    <v-sheet class="pa-2 ma-2">
                        <CustomButton
                            :text="filtro.text"
                            color="orange"
                            type="button"
                            class="mt-4"
                            block
                            @click="filter(filtro.text)"
                        />
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
        
        <v-row tag="section" class="mb-6">
            <v-col cols="12">
                <v-row class="mb-3">
                    <v-col
                        v-for="product in productsSeeder"
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
import Carousel from "../../components/global/Carousel";
import CarouselActions from "../../components/global/CarouselActions.vue";
import CarouselPortfolio from "../../components/global/CarouselPortfolio.vue";
import CustomButton from "../../components/global/CustomButton.vue";
import ProductBox from "../../components/product/ProductBox.vue";
import ShopActionCard from "../../components/shop/ShopActionCard.vue";
import ContactDialog from "../../pages/shop/ContactDialog.vue";
import CustomInput from "../../components/global/CustomInput.vue";
import Mixin from "../../utils/mixin";

export default {
    name: "ShopShowApi",
    data: () => ({
        productsSeeder: [],
        resultadoFiltroBotones: [],
    }),
    props: {
        category: { type: String, default: "one" },
    },
    components: {
        CustomInput,
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
            const res = await Mixin.methods.call_api("get", `product/search?category_slug=${this.category}`);
                if(res.data.success){
                    // category_slug;
                    // keyword;
                    // sort_by;
                    // brand_ids;
                    // min_price;
                    // max_price;
                    this.productsSeeder = res.data.products.data.slice(0, 4);

                    const primerasLetras = this.productsSeeder.map(item => item.name.charAt(0));

                    let letrasFiltro = [...new Set(primerasLetras)];

                    this.resultadoFiltroBotones = letrasFiltro.map((letra, index) => ({
                        id: index + 1,
                        text: letra
                    }));

                }
        },

        async filter(value){
            const res = await Mixin.methods.call_api("get", `product/search?category_slug=${this.category}&&keyword=${value}`);
            if(res.data.success){
                this.productsSeeder = res.data.products.data;
            }
        }
    }
};
</script>
