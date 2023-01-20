<template>
    <v-hover v-slot:default="{ hover }">
        <v-card :class="{ 'on-hover': hover }">
            <div class="product-item pa-10">
                <v-row align="center">
                    <v-col cols="3">
                        <div class="product-item-image">
                            <v-img :src="data.img" :aspect-ratio="1" height="100%" />
                        </div>
                    </v-col>
                    <v-col cols="4" class="pl-6">
                        <div style="border-left:1px">
                        <h5 class="subtitle2 text-uppercase mb-2">{{ data.ref }}</h5>
                        <h5 class="subtitle1 text-uppercase font-weight-bold mb-2">{{ data.obj }}</h5>
                        <h5 class="subtitle1 mb-2">{{ data.brand }}</h5>
                        </div>
                    </v-col>
                    <v-col cols="5" class="pl-6" style="border-left:1px">
                        

                        <h5 class="subtitle2 mb-2">{{ data.val }}</h5>
                    </v-col>
                </v-row>
            </div>
        </v-card>
    </v-hover>
</template>

<script>
import CustomButton from "./CustomButton.vue";

export default {
    name: "ProductItem1",
    components: {
        CustomButton
    },
    props: {
        data: {
            type: Object,
            default: () => ({
                id: "0",
                ref: "Referencia",
                img: "/public/assets/img/item-placeholder.png",
                brand: "Marca",
                obj: "Objeto",
                val: "000.000.000 COP"
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.product-item {
    border-radius: 10px;
    background-color: #18191a;

    &-image {
        background-color: #242526;
    }
}

.v-card {
    opacity: 0.4;
    transition: opacity 0.2s ease-in-out;
}

.v-card:not(.on-hover) {
    opacity: 1;
}
</style>
