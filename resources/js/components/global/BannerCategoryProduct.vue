<template>
    <v-carousel
        :show-arrows="false"
        hide-delimiters
        >
        <v-carousel-item
        :src="img"
        >
        <h1>{{ title }}</h1>
        <p>{{ descripcion }}</p>
        <p>{{ idItem }}</p>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    name: "BannerCategoryProduct",
    props: {
        title:String,
        descripcion:String,
        img: {
            type:String,
            default:"/public/assets/img/placeholder-rect.jpg",
        },
        idItem:String,
        variant: {
            type:String,
            default: "black"
        },
    },
};
</script>
