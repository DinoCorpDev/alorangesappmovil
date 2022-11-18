<template>
    <!--Hay que revisar cómo pasar el tamaño como propiedad, por ahora se deja una clase en TestComponents para trabajar ese estilo-->
    <v-carousel style="border-radius: 5px;"
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
        //Analizar bien este caso del NoArrrows
        // el tipo puede ser String o Boolean
        NoArrows: {
            type:String,
        },
        NoDots:String,
    },
    data (){
        return{
            imagenes: [
            {src:"/public/assets/img/placeholder-rect.jpg"},
            {src:"/public/assets/img/placeholder-rect.jpg"}
        ]
        }
    }
};
</script>

<style>
.v-application--is-ltr .v-window__next {
    margin-top: 200px;
}
.v-application--is-ltr .v-window__prev {
    margin-top: 200px;
}
</style>