<template>
    <v-carousel style="border-radius: 5px; width: 100%"
        :show-arrows="NoArrows"
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
            v-for="(imagen, i) in imagenes"
            :key="i"
            :src="imagen.src"
            cycle
        >
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

<style>
.v-application--is-ltr .v-window__next {
    margin-top: 14.5em;
}
.v-application--is-ltr .v-window__prev {
    margin-top: 14.5em;
}
</style>
