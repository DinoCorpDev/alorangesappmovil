<template>
    <div class="div-card">
        <div class="col">
            <div class="header">
                <div class="figure"></div>
            </div>
            <div class="body">
                <div>
                    <v-img :src="productDetails ? productDetails.thumbnail_image : img" width="200px"></v-img>
                </div>
            </div>
            <div class="div-body2">
                <div class="space">
                    <span class="black--text body3 text-uppercase">{{ reference }}</span>
                </div>
                <div class="space">
                    <h6 class="black--text">
                        {{ productDetails ? productDetails.name : "Objeto" }}
                    </h6>
                </div>
                <div class="space">
                    <span class="black--text body1">{{ brand }}</span>
                </div>
                <div class="space">
                    <span class="black--text subtitle1">
                        {{ productDetails ? format_price(productDetails?.base_price) : "000.000.000" }} COP
                    </span>
                </div>
                <custom-button block light text="Agregar a compras" @click="addCart()" />
            </div>
        </div>
    </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
import { mapActions } from "vuex";
export default {
    name: "Products",
    components: {
        CustomButton
    },
    props: {
        productDetails: {
            type: [Object, null],
            default: null
        },
        img: {
            default: "/public/assets/img/carousel-item-placeholder.png"
        },
        reference: {
            type: String,
            default: "Sin Asignar"
        },
        brand: {
            type: String,
            default: "Sin Asignar"
        }
    },
    computed: {
        aspectRatio() {
            switch (this.$vuetify.breakpoint.name) {
                case "xs":
                    return "1.2";
                case "sm":
                    return "1.9";
                case "md":
                    return "2.2";
                case "lg":
                    return "2.2";
                case "xl":
                    return "2.2";
            }
        }
    },
    methods: {
        ...mapActions("cart", ["addToCart", "updateQuantity"]),
        async addCart() {
            this.addToCart({
                variation_id: this.productDetails?.id,
                qty: 1
            });
            this.snack({
                message: this.$i18n.t("product_added_to_cart"),
                color: "green"
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.div-card {
    height: 100%;
}

.col {
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 0;
}

.header {
    display: flex;
    justify-content: flex-end;
    padding: 10px 15px;
}

.figure {
    clip-path: polygon(100% 0, 100% 100%, 48% 55%, 0 100%, 0 49%, 0% 0%);
    background-color: #7c7c7d;
    width: 20px;
    height: 20px;
}

.body {
    height: 200px;
    background-color: #dfdfdf;
    display: flex;
    justify-content: center;
    align-items: center;
}

.div-body2 {
    padding: 15px;
}

.body3 {
    font-size: 10px;
}

.space {
    margin-bottom: 10px;
}
</style>
