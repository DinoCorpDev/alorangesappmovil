<template>
    <v-card class="mx-auto" max-width="344">
        <v-img
            :src="img"
            height="200px"
        ></v-img>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text>{{ descripcion }}</v-card-text>
        <v-card-actions>
            <v-btn color="orange lighten-2" text> {{ idItem }} </v-btn>
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
        idItem:String
    },
};
</script>
