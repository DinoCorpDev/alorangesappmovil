<template>
    <v-container fluid>
        <contact-dialog :show="contactDialogShow" @close="contactDialogClosed" />

        <v-container class="bg-surface-variant ma-0">
            <v-row align="start" class="container-buttons" no-gutters>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <CustomButton
                            text="<"
                            color="orange-cart"
                            type="button"
                            class="mt-4 mr-2"
                            width="10"
                            @click="getProducts"
                            v-bind="attrs"
                            v-on="on"
                        />
                    </template>
                    <span>Refrescar</span>
                </v-tooltip>
                
                <div v-for="filtro in resultadoFiltroBotones" :key="`button-${filtro.id}`">
                    <CustomButton
                            :text="filtro.text"
                            :color="activeButton === filtro.id ? 'orange-cart' : 'nero3'"
                            type="button"
                            class="mt-4 mr-1"
                            width="10"
                            @click="setActiveButton(filtro.id, filtro.text)"
                        />
                </div>
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
        activeButton: null,
    }),
    props: {
        category: { type: String, default: '' },
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
                    this.productsSeeder = res.data.products.data;

                    const primerasLetras = this.productsSeeder.map(item => item.name.charAt(0));
                    primerasLetras.sort();
                    let letrasFiltro = [...new Set(primerasLetras)];

                    this.resultadoFiltroBotones = letrasFiltro.map((letra, index) => ({
                        id: index + 1,
                        text: letra
                    }));

                    
                    this.productsSeeder = res.data.products.data.slice(0, 4);
                    this.activeButton = null;
                }
        },

        async filter(value){
            const res = await Mixin.methods.call_api("get", `product/search?category_slug=${this.category}&&keyword=${value}`);
            if(res.data.success){
                this.productsSeeder = res.data.products.data;
            }
        },
        setActiveButton(id, value) {
            this.activeButton = id;  
            this.filter(value);      
        },
    }
};
</script>
<style scoped lang="scss">
.container-buttons{
    height: 100px; 
    overflow-x: auto;  
    white-space: nowrap;
    &::-webkit-scrollbar {
        width: 3px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: #b5b5b5;
        border-radius: 1px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: rgba(#5a5a5a, 0.8);
        border-radius: 1px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: #5a5a5a;
    }
}
</style>
