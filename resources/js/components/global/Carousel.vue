<template>
    <v-carousel
            class="rounded"
            :style="`height: ${height}`"
            style="width: 100%"
            :show-arrows="NoArrows"
            :hide-delimiters="NoDots"
            hide-delimiter-background
        >
        <template v-slot:prev="{ on, attrs }">
            <v-btn
                small
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
            v-for="(imagen, i) in imagenes"
            :key="i"
        >
            <v-img
                style="height: 100%; width: 100%;"
                :src="imagenes"
            ></v-img>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    name: "Carousel",
    props: {
        NoArrows: {
            type:Boolean,
        },
        NoDots:String,
        height: {
            type:String,
            default: "100%",
        },
        imagenes: {
            type: Array,
            default: "/public/assets/img/placeholder-rect.jpg",
        }
    },
    // data (){
    //     return{
    //         imagenes: [
    //             {
    //                 src:"/public/assets/img/placeholder-rect.jpg"
    //             },
    //             {
    //                 src:"/public/assets/img/shop-confirmation.jpg"
    //             }
    //         ]
    //     }
    // }
};
</script>

<style>
/* .v-application--is-ltr .v-window__next {
    margin-top: 13.5em;
}
.v-application--is-ltr .v-window__prev {
    margin-top: 13.5em;
} */
</style>
