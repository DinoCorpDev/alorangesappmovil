<template>
    <div style="width: 100%; height: 100%">
        <v-card class="black">
            <v-toolbar class="black mt-2" style="border-radius: 0; height: 82px;" elevation="0" outlined>
                <a href="#"><v-img src="../../public/assets/img/Logo-idovela-sin-fondo.png" max-width="90px" height="auto"/></a>
                <v-spacer></v-spacer>
                <custom-button 
                    text="Ir a tienda"   
                    variant="#E2E6EA"
                    icon="la-store-alt"
                    class="black--text tamaño-boton-desktop"
                    small="small"
                ></custom-button> 
                <custom-button 
                    text="Iniciar Sesión"   
                    variant="#E2E6EA"
                    class="black--text ml-4 tamaño-boton-desktop"
                    small="small"
                ></custom-button>            
            </v-toolbar>
        </v-card>
        <v-container  style="width: 100%; height: 800px; " class="px-6 pt-6 pb-0">
            <div style="height: 786px; width: 680px; ">
                <div style="height: 384px; width: 643px;  margin-top: 38px">
                    <p style="font-family: Overpass; font-weight: 300; font-size: 96px; color: white;  line-height: 1;">iDOVELA </p>
                    <p style="font-family: Overpass; font-size: 96px; font-weight: 300; color: white;  line-height: 1;">
                        Para un mundo más habitable
                    </p>
                </div>
                <div style="height: 96px; width: 680px;  margin-top: 66px; margin-bottom: 60px">
                    <p style="font-family: Overpass; font-size: 24px; font-weight: 400; color: white;  line-height: 1;">
                        Mejores espacios conducen a modelos más eficaces de vida.
                        Las habitats eficientes conducen a una implementación más 
                        rápida. Genere valor en su vida con mejores espacios habitables.
                    </p>
                </div>

               <custom-button style="width: 422px"
                    text="Comunicarse con ventas"
                    variant="light"
                    outlined
                ></custom-button>
            </div>
            <carousel style="width: 1139px; height: 786px" class="ml-13" no-dots :NoArrows="true"></carousel>
        </v-container>
        <v-container  style="width: 100%; height: 786px; " >
            
        </v-container>
    </div>
    
</template>

<script>
import BannerCategoryProduct from "../components/global/BannerCategoryProduct.vue";
import Carousel from "../components/global/Carousel.vue";
import CustomButton from "../components/global/CustomButton.vue";
import ItemProduct from "../components/global/ItemProduct.vue";
export default {
    components: {
    BannerCategoryProduct,
    Carousel,
    CustomButton,
    ItemProduct,
  },
}
</script>

<style>
.v-main {
  background-color: #242526;
}


  
@media (min-width: 1264px) {
  .v-main {
    background-color: #000000;
  }
  .tamaño-boton-desktop{
    width: 221px;
    height: 38px; 
  }
  .container{
    max-width: 100%;
    display: flex;
    justify-content: space-between;
  }  
  .v-image.v-responsive.v-carousel__item.theme--light{
    height: 786px !important;
  }
  .v-application--is-ltr .v-window__next {
    margin-top: 24.5em;
    margin-right: 2.5em;
  }
  .v-application--is-ltr .v-window__prev {
    margin-top: 24.5em;
    margin-left: 2.5em;
  }
  .v-toolbar__content, .v-toolbar__extension {
    padding: 4px 24px;
  }
}
</style>