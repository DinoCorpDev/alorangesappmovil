<template>
    <v-carousel
        :show-arrows="NoArrows"
        v-bind:hide-delimiters="NoDots"
        >
        <v-carousel-item
        :src="image"
        >
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    name: "Carousel",
    props: {
        //Analizar bien este caso del NoArrrows
        // el tipo puede ser String o Boolean
        NoArrows: {
            type:String,
        },
        NoDots:String,
        image: {
            type:String,
            default:"/public/assets/img/placeholder-rect.jpg",
        }
    },
};
</script>
