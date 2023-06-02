<template>
    <v-row tag="section" class="products-grid">
        <v-col cols="12">
            <div class="products-grid-bar mb-5">
                <h5>{{ title || "H5" }}</h5>
                <div class="d-none d-md-flex products-grid-bar-actions">
                    <CustomButton color="grey2" text="Nuevo" />
                    <CustomButton color="grey2" text="Nuevo" />
                    <CustomButton color="grey2" text="Nuevo" />
                    <CustomButton color="grey2" text="Nuevo" />
                </div>
            </div>
            <v-row class="mb-3">
                <v-col v-if="shopCard" cols="6" sm="8" md="4">
                    <ShopActionCard boxStyle="vertical" :href="shopCardLink" :to="shopCardTo" />
                </v-col>
                <v-col
                    v-for="product in products"
                    :key="`product-col-${product.slug}`"
                    :cols="cols"
                    :sm="sm"
                    :md="md"
                    :lg="lg"
                    :xl="xl"
                >
                    <ProductBox :productDetails="product" :boxStyle="productStyle" />
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12" sm="8" md="4">
                    <CustomButton block color="grey" text="Ver más" :href="href" :to="to" />
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
import CustomButton from "../global/CustomButton.vue";
import ProductBox from "../product/ProductBox.vue";
import ShopActionCard from "../../components/shop/ShopActionCard.vue";

export default {
    props: {
        productStyle: { type: String, default: "one" },
        fitrable: { type: Boolean, default: false },
        shopCard: { type: Boolean, default: false },
        shopCardLink: { type: String, default: "#" },
        shopCardTo: { type: [String, Object] },
        products: { type: Array, default: () => [] },
        title: { type: String },
        cols: { type: String },
        sm: { type: String },
        md: { type: String },
        lg: { type: String },
        xl: { type: String },
        href: { type: String, default: "#" },
        to: { type: [String, Object] }
    },
    components: {
        CustomButton,
        ProductBox,
        ShopActionCard
    }
};
</script>

<style lang="scss" scoped>
.products-grid {
    &-bar {
        display: flex;
        justify-content: space-between;

        &-actions {
            display: flex;
            gap: 1rem;

            @media (min-width: 600px) {
                .v-btn {
                    min-width: 164px;
                }
            }
        }
    }
}
</style>
