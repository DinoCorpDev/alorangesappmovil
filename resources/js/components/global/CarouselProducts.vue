<template>
    <v-carousel style="border-radius: 5px; width: 100%"
        :hide-delimiters="NoDots"
        >
        <template v-slot:prev="{ on, attrs }">
            <v-btn small
                style="font-size: 20px; height: 35px; min-width: 35px; padding: 0px"
                color="#26272B"
                v-bind="attrs"
                v-on="on"
            ><i class="las la-angle-left"></i></v-btn>
        </template>
        <template v-slot:next="{ on, attrs }">
            <v-btn small
                style="font-size: 20px; height: 35px; min-width: 35px; padding: 0px"
                color="#26272B"
                v-bind="attrs"
                v-on="on"
            ><i class="las la-angle-right"></i></v-btn>
        </template>
        <v-carousel-item
        >
            <v-card class="mx-auto" max-width="33.33%" :color="colorCard" height="auto" >
                <v-img
                    :src="img"
                    height="200px"
                ></v-img>
                <v-card-title class="pt-6" :class="textColor">{{ title }}</v-card-title>
                <v-card-text class="pr-16" :class="textColor" >{{ descripcion }}</v-card-text>
                <v-card-actions>
                    <v-btn color="orange lighten-2" text> {{ idItem }} </v-btn>
                </v-card-actions>
            </v-card>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    name: "CarouselProducts",
    props: {
        NoDots:String,
        title:String,
        descripcion:String,
        idItem:String,
        textColor:String,
        colorCard:String,
        img: {
            type:String,
            default:"/public/assets/img/placeholder-rect.jpg"
        },
    },
    data (){
        return{
            imagenes: [
                {
                    src:"/public/assets/img/placeholder-rect.jpg"
                },
                {
                    src:"/public/assets/img/placeholder-rect.jpg"
                }
            ]
        }
    }
};
</script>

