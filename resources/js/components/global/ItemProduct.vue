<template>
    <v-card class="dark" height="100%">
        <v-img
            :src="img"
            class="img-fluid"
            aspect-ratio="2.15"
        ></v-img>
        <v-card-title class="white--text text-uppercase">{{ title }}</v-card-title>
        <v-card-text class="white--text">{{ descripcion }}</v-card-text>
        <v-card-actions>
            <v-btn>{{ idItem }}</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "ItemProduct",
    props: {
        img: {
            type:String,
            default:"/public/assets/img/placeholder-rect.jpg"
        },
        title:String,
        descripcion:String,
        idItem:String,
    },
};
</script>
