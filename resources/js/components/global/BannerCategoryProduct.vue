<template>
    <v-carousel
        :show-arrows="false"
        hide-delimiters
        >
        <v-carousel-item
        :src="img"
        >
        <v-row
            class="justify-content-between"
            style="margin: 64px 0px 10px 10px;"
        >
            <v-col cols="6">
                <h1 class="text-uppercase">{{ title }}</h1>
            </v-col>
            <v-col cols="6">
                <p>{{ descripcion }}</p>
                <p>{{ idItem }}</p>
            </v-col>
        </v-row>
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
