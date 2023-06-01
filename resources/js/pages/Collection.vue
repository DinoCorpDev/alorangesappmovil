<template>
    <div>
        <LayoutNavbarAuth />
        <v-container fluid class="product-details pa-4">
            <v-row tag="section" class="flex-column-reverse flex-lg-row mb-6">
                <v-col cols="12">
                    <AddToCart :is-loading="detailsLoading" :product-details="productDetails" :products = "products" />
                </v-col>
            </v-row>

            <v-row tag="section" class="mb-6">
                <v-col cols="12">
                    <h5>H5</h5>
                    <v-row class="mb-3">
                        <v-col
                            v-for="product in moreProducts"
                            :key="`product-col-${product.id}`"
                            cols="6"
                            sm="4"
                            md="3"
                            lg="2"
                        >
                            <ProductBox :productDetails="product" />
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="12" sm="8" md="4">
                            <CustomButton block color="grey" text="Ver más" />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-row tag="section" class="mb-6">
                <v-col cols="12">
                    <h5>H5</h5>
                    <v-row class="mb-3">
                        <v-col
                            v-for="product in footerProducts"
                            :key="`product-col-${product.id}`"
                            cols="12"
                            sm="6"
                            md="3"
                        >
                            <ProductBox boxStyle="two" :productDetails="product" />
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="12" sm="8" md="4">
                            <CustomButton block color="grey" text="Ver más" />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
        <FooterCustom />
    </div>
</template>

<script>
import ProductBox from "../components/product/ProductBox.vue";
import CustomButton from "../components/global/CustomButton.vue";
import FooterCustom from "../components/global/FooterCustom.vue";
import LayoutNavbarAuth from "../components/global/LayoutNavbarAuth.vue";
import AddToCart from "../components/product/AddToCart.vue";

export default {
    metaInfo() {
        return {
            title: this.metaTitle
        };
    },
    data: () => ({
        metaTitle: "",
        detailsLoading: true,
        productDetails: {},
        moreProducts: [],
        footerProducts: [],
        relatedProducts: [{}, {}, {}, {}, {}],
        products: []
    }),
    components: {
        ProductBox,
        CustomButton,
        LayoutNavbarAuth,
        FooterCustom,
        AddToCart
        // ChartView
    },
    methods: {
        async getDetails() {
            const res = await this.call_api("get", `collection/details/${this.$route.params.slug}`);
            console.log(res);
            if (res.data.success) {
                let collection = res.data.data.collection;
                this.productDetails = {
                    photos: res.data.data.images,
                    videos: res.data.data.videos,
                    data_sheet: res.data.data.diagrama,
                    reference: collection.referencia,
                    id: collection.id,
                    name: collection.coleccion,
                    brand: {
                        name: res.data.data.marca,
                    },
                    base_price: collection.precio,
                    base_discounted_price : collection.precio,
                    stock: collection.stock,
                    warranty_text: collection.descuento,
                    shipping: collection.envio,

                }

                this.products = res.data.data.products;

                this.getMoreProducts(this.products[0]?.id);
                this.getMoreProducts2(this.products[0]?.id);
                this.getRelatedProducts(this.products[0].id);
            } else {
                this.snack({
                    message: res.data.message,
                    color: "red"
                });

                this.$router.push({ name: "404" });
            }

            this.detailsLoading = false;
        },
        async getRelatedProducts(id) {
            const res = await this.call_api("get", `product/related/${id}`);
            if (res.data.success) {
                this.relatedProducts = res.data.data;
                this.relatedLoading = false;
            }
        },
        async getMoreProducts(id) {
            const res = await this.call_api("get", `product/random/6/${id}`);
            if (res.data.success) {
                res.data?.data?.map(product => {
                    this.moreProducts.push({
                        id: product?.id,
                        name: product?.name,
                        val: product?.base_price + " " + product?.currency,
                        img: product?.thumbnail_image,
                        description: product?.description,
                        brand: product?.brandName,
                        ref: product?.reference,
                        slug: product?.slug
                    });
                });
            }
        },
        async getMoreProducts2(id) {
            const res = await this.call_api("get", `product/random/4/${id}`);
            if (res.data.success) {
                res.data?.data?.map(product => {
                    this.footerProducts.push({
                        id: product?.id,
                        name: product?.name,
                        val: product?.base_price + " " + product?.currency,
                        img: product?.thumbnail_image,
                        description: product?.description,
                        brand: product?.brandName,
                        ref: product?.reference,
                        slug: product?.slug
                    });
                });
            }
        }
    },
    async created() {
        this.getDetails();
    }
};
</script>

<style lang="scss" scoped>
.product-details {
    background-color: #fafcfc;
}
</style>
