<template>
    <div>
        <layout-navbar-auth />
        <v-container fluid>
            <v-row class="mr-1 ms-1 mb-5 border-div">
                <v-col cols="12" md="5" class="brand">
                    <div class="div-container">
                        <div class="col1">
                            <div class="div-img">
                                <div>
                                    <v-img
                                        max-width="100px"
                                        src="../../public/assets/img/carousel-item-placeholder.png"
                                    ></v-img>
                                </div>
                            </div>
                        </div>
                        <div class="col2">
                            <h5 class="black--text bold">{{ brand?.name }}</h5>
                            <span class="black--text body-2 text-uppercase"># Marcas</span>
                        </div>
                        <div class="divider"></div>
                        <div class="col3">
                            <p class="black--text">
                                {{ brand?.description }}
                            </p>
                        </div>
                    </div>
                    <v-row class="d-flex justify-center">
                        <v-col cols="12" md="6" lg="6" xl="6">
                            <custom-button block light text="Ir a colección" />
                        </v-col>
                        <v-col cols="12" md="6" lg="6" xl="6">
                            <custom-button block light text="Descargar catalogo" />
                        </v-col>
                        <v-col cols="12">
                            <custom-button block light text="Conocer historia de marca" />
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="7" class="banner">
                    <v-img class="img-banner" src="../../public/assets/img/carousel-item-placeholder.png"></v-img>
                </v-col>
            </v-row>
            <div class="bar">
                <custom-button class="mr-2 ms-2" light text="Nuevo" />
                <custom-button class="mr-2 ms-2" light text="Nuevo" />
                <custom-button class="mr-2 ms-2" light text="Nuevo" />
                <custom-button class="mr-2 ms-2" light text="Nuevo" />
                <custom-button class="mr-2 ms-2" light text="Nuevo" />
                <custom-button class="mr-2 ms-2" light text="Nuevo" />
                <custom-button class="mr-2 ms-2" light text="Nuevo" />
                <custom-button class="mr-2 ms-2" light text="Nuevo" />
                <custom-button class="mr-2 ms-2" light text="Nuevo" />
                <custom-button class="mr-2 ms-2" light text="Nuevo" />
                <custom-button class="mr-2 ms-2" light text="Nuevo" />
                <custom-button class="mr-2 ms-2" light text="Nuevo" />
            </div>
            <v-divider />
            <v-row>
                <v-col class="bar3">
                    <h5 class="black--text">H5</h5>
                </v-col>
                <v-col class="bar2">
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                </v-col>
            </v-row>
            <div class="cards">
                <v-row class="d-flex justify-space-around flex-wrap">
                    <v-col cols="6" sm="4" md="4" lg="2" xl="2"  v-for="(product1, i) in panel1" :key="i">
                        <products :productDetails="product1" :reference="product1?.reference" :name="product1?.name" :brand="product1?.brandName" />
                    </v-col>
                </v-row>
            </div>
            <v-row class="d-flex justify-center">
                <v-col cols="10" md="6" lg="5">
                    <custom-button block class="mb-5" light text="Ver más" />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="bar3">
                    <h5 class="black--text">H5</h5>
                </v-col>
                <v-col class="bar2">
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                </v-col>
            </v-row>
            <div class="cards">
                <v-row class="d-flex justify-space-around flex-wrap">
                    <v-col cols="6" sm="4" md="4" lg="2" xl="2" v-for="(product2, i) in panel2" :key="i">
                        <products :productDetails="product2" :reference="product2?.reference" :name="product2?.name" :brand="product2?.brandName"  />
                    </v-col>
                </v-row>
            </div>
            <v-row class="d-flex justify-center">
                <v-col cols="10" md="6" lg="5">
                    <custom-button block class="mb-5" light text="Ver más" />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="bar3">
                    <h5 class="black--text">H5</h5>
                </v-col>
                <v-col class="bar2">
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                </v-col>
            </v-row>
            <div class="cards">
                <v-row class="d-flex justify-space-around flex-wrap">
                    <v-col cols="12" sm="8" md="8" lg="4" xl="4" v-for="(product3, i) in panel3" :key="i">
                        <product-item5 />
                    </v-col>
                    <v-col cols="6" sm="4" md="4" lg="2" xl="2" v-for="(product4, i) in panel4" :key="i">
                        <products :productDetails="product4" :reference="product4?.reference" :name="product4?.name" :brand="product4?.brandName" />
                    </v-col>
                </v-row>
            </div>
            <v-row>
                <v-col class="bar3">
                    <h5 class="black--text">H5</h5>
                </v-col>
                <v-col class="bar2">
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                </v-col>
            </v-row>
            <div class="cards">
                <v-row class="d-flex justify-space-around flex-wrap">
                    <v-col cols="12" sm="8" md="8" lg="4" xl="4" v-for="(product, i) in panel5" :key="i">
                        <product-item5 />
                    </v-col>
                    <v-col cols="6" sm="4" md="4" lg="2" xl="2" v-for="(product6, i) in panel6" :key="i">
                        <products :productDetails="product6" :reference="product6?.reference" :name="product6?.name" :brand="product6?.brandName" />
                    </v-col>
                </v-row>
            </div>
            <v-row class="d-flex justify-center">
                <v-col cols="10" md="6" lg="5">
                    <custom-button block class="mb-5" light text="Ver más" />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="bar3">
                    <h5 class="black--text">H5</h5>
                </v-col>
                <v-col class="bar2">
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                </v-col>
            </v-row>
            <div class="cards">
                <v-row class="d-flex justify-space-around flex-wrap">
                    <v-col cols="12" sm="6" md="6" lg="3" xl="3" v-for="(product7, i) in panel7" :key="i">
                        <products2 :productDetails="product7" :reference="product7?.reference" :name="product7?.name" :brand="product7?.brandName" />
                    </v-col>
                </v-row>
            </div>
            <v-row class="d-flex justify-center">
                <v-col cols="10" md="6" lg="5">
                    <custom-button block class="mb-5" light text="Ver más" />
                </v-col>
            </v-row>
        </v-container>
        <footer-custom />
    </div>
</template>

<script>
import NabvarBottomBar from "../components/global/NabvarBottomBar.vue";
import FooterCustom from "../components/global/FooterCustom.vue";
import CustomButton from "../components/global/CustomButton.vue";
import Products from "../components/global/Products.vue";
import Products2 from "../components/global/Products2.vue";
import LayoutNavbarAuth from "../components/global/LayoutNavbarAuth.vue";
import PresentationBanner from "../components/global/PresentationBanner.vue";
import ProductItem5 from "../components/global/ProductItem5.vue";

export default {
    components: {
        NabvarBottomBar,
        CustomButton,
        Products,
        Products2,
        LayoutNavbarAuth,
        PresentationBanner,
        ProductItem5,
        FooterCustom
    },
    data: () => ({
        brand: {},
        products: [],
        panel1: [],
        panel2: [],
        panel3: [],
        panel4: [],
        panel5: [],
        panel6: [],
        panel7: [],
        queryParam:{
            page: 1,
            categorySlug: null,
            brandIds: [],
            attributeValues: [],
            keyword: null,
            sortBy: 'popular',
            minPrice: null,
            maxPrice: null,
        }
    }),
    mounted() {
        this.$vuetify.theme.dark = true;
    },
    created() {
        this.queryParam.brandIds = [this.$route.params.brandId];
        this.getList({
            page: this.queryParam.page,
            categorySlug: this.queryParam.categorySlug,
            brandIds: this.queryParam.brandIds,
            attributeValues: this.queryParam.attributeValues,
            keyword: this.queryParam.keyword,
            sortBy: this.queryParam.sortBy,
            minPrice: this.queryParam.minPrice,
            maxPrice: this.queryParam.maxPrice,
        })
    },
    methods: {
        replaceByDefault(e){
            console.log(e);
            e.target.src='../../public/assets/img/carousel-item-placeholder.png';
        },
        async getList(obj){
            
            let params = { ...this.queryParam, ...obj}
            
            let url = 'product/search?'
            url += `&page=${this.queryParam.page}`
            url += params.categorySlug ? `&category_slug=${params.categorySlug}` : ''
            url += params.brandIds ? `&brand_ids=${params.brandIds}` : ''
            url += params.attributeValues ? `&attribute_values=${params.attributeValues}` : ''
            url += params.keyword ? `&keyword=${params.keyword}` : ''
            url += params.sortBy ? `&sort_by=${params.sortBy}` : ''
            url += params.minPrice ? `&min_price=${params.minPrice}` : ''
            url += params.maxPrice ? `&max_price=${params.maxPrice}` : ''
            
            const res = await this.call_api("get", url);
            if (res.data.success) {
                this.products = res.data.products?.data;
                this.panel1 = this.getMultipleRandom(6);
                this.panel2 = this.getMultipleRandom(6);
                this.panel3 = this.getMultipleRandom(1);
                this.panel4 = this.getMultipleRandom(4);
                this.panel5 = this.getMultipleRandom(1);
                this.panel6 = this.getMultipleRandom(4);
                this.panel7 = this.getMultipleRandom(4);

                this.brand = res.data.allBrands?.data?.find(a=> a?.id==parseInt(this.$route.params.brandId));
            }
        },
        getMultipleRandom(num) {
            const shuffled = this.products?.sort(() => 0.5 - Math.random());
            return shuffled?.slice(0, num);
        }
    }
};
</script>

<style lang="scss" scoped>
.div-img {
    background-color: #dfdfdf;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.img-banner {
    height: 100%;
}

.cards {
    margin: 20px 0px;
    padding: 10px 0;
}

.bar2 {
    margin: 20px 0px;
    display: flex;
    justify-content: flex-end;
    overflow: auto;
}
.bar3 {
    margin: 20px 0px;
    display: flex;
    justify-content: flex-start;
    overflow: auto;
}

.brand {
    background-color: #fff;
    border-end-start-radius: 10px;
    border-top-left-radius: 10px;
    height: 413px;
}

.border-div {
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    height: 413px;
}
@media (max-width: 768px) {
    .border-div {
        border: 1px solid #e4e4e4;
        border-radius: 10px;
        height: 664px;
    }
}
.div-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.col1,
.col2 {
    max-width: 300px;
    padding: 5px 10px 5px 10px;
}

.col3 {
    width: 100%;
    padding: 5px 10px 5px 10px;
}

.divider {
    background-color: #dfdfdf;
    width: 100%;
    height: 2px;
    margin: 10px 10px 10px 10px;
}

.banner {
    background-color: #e4e4e4;
    border-end-end-radius: 10px;
    border-top-right-radius: 10px;
    height: 413px;
}

@media (max-width: 959px) {
    .brand {
        order: 2;
        border-end-start-radius: 10px;
        border-start-start-radius: 0px;
        border-end-end-radius: 10px;
    }

    .banner {
        order: 1;
        border-end-end-radius: 0px;
        border-start-start-radius: 10px;
        border-start-end-radius: 10px;
        height: 250px;
        width: 100%;
    }
}
</style>
