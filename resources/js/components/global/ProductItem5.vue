<template>
    <div class="product-item">
        <div class="product-item-image">
            <v-img :src="data.img" :aspect-ratio="aspectRatio" height="100%" :contain="data.id == 0" />
        </div>
        <div class="product-item-body pa-5">
            <h5 class="subtitle1 text-uppercase font-weight-bold mb-3">{{ data.name }}</h5>
            <p class="mb-5">{{ data.description }}</p>
            <custom-button color="#000000" text="Acción" plain class="px-0" />
        </div>
    </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
    name: "ProductItem4",
    components: {
        CustomButton
    },
    props: {
        data: {
            type: Object,
            default: () => ({
                id: "0",
                name: "Titulo",
                img: "/public/assets/img/item-placeholder.png",
                description:
                    "Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text."
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
    background-color: #f5f5f5;
    color: #000000;
    height: 100%;
    &-image {
        background-color: #dfdfdf;
    }
    &-image,
    &-image .v-image {
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }
}
</style>
