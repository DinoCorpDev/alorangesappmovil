<template>
    <div class="product-item">
        <div class="text-right pa-1 mb-2">
            <v-icon right> la-bookmark </v-icon>
        </div>
        <v-row>
            <template>
                <v-col cols="12">
                    <v-hover v-slot:default="{ hover }">
                        <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
                            <v-card style="background: gray" height="250px">
                                <v-row>
                                    <v-img :src="data.img" height="120px" class="mt-16" />
                                </v-row>
                            </v-card>
                            <v-row justify="center">
                                <v-card
                                    class="rounded-circle"
                                    height="70%"
                                    width="70%"
                                    style="background: white; margin-top: -30%"
                                >
                                    <v-img :src="data.img" height="150px" justify="center" />
                                </v-card>
                            </v-row>
                            <div class="product-item-body pa-4 mt-8">
                                <custom-button
                                    text="Ver Detalles"
                                    block
                                    :class="{ 'show-btns': hover }"
                                    color="transparent"
                                />
                            </div>
                        </v-card>
                    </v-hover>
                </v-col>
            </template>
        </v-row>
    </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";

export default {
    data: () => ({
        icons: ["mdi-rewind", "mdi-play", "mdi-fast-forward"],
        transparent: "rgba(255, 255, 255, 0)"
    }),
    name: "ProductItem4",
    components: {
        CustomButton
    },
    props: {
        headerPr: {
            type: Boolean
        },
        data: {
            type: Object,
            default: () => ({
                id: "0",
                name: "Objeto",
                ref: "REFERENCIA",
                brand: "Marca",
                val: "000.000.000 COP",
                img: "/public/assets/img/item-placeholder.png",
                transparent: "rgba(255, 255, 255, 0)"
            })
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
    }
};
</script>

<style lang="scss" scoped>
.product-item {
    border-radius: 10px;
    background-color: #18191a;
}

.v-card {
    opacity: 0.3;
    transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
    opacity: 1;
}

.show-btns {
    color: rgba(255, 255, 255, 1) !important;
}

.subtitle2 {
    font-size: 10px;
}
</style>
