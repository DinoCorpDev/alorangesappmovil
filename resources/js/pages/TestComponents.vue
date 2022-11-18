<template>
    <div class=fondo>
        <custom-button 
        text="Ir a tienda"   
        variant="#E2E6EA"
        icon="la-store-alt"
        class="black--text"
    ></custom-button>
    <custom-button 
        text="Comunicarse con ventas"
        variant="#F8F9FA"
        outlined="outlined"   
    ></custom-button>

    <carousel no-dots NoArrows=false
        class="ancho" 
    >   
    </carousel>

    <div class="prueba">
        <item-product
            title="Producto 1"
            descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
            idItem="1"
            textColor="white--text"
            colorCard="#23272B"
        ></item-product>

        <item-product
            title="Producto 1"
            descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
            idItem="1"
            textColor="white--text"
            colorCard="#23272B"
        ></item-product>

        <item-product
            title="Producto 1"
            descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
            idItem="1"
            textColor="white--text"
            colorCard="#23272B"
        ></item-product>
    </div>
    <banner-category-product
        title="Titulo"
        descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
        idItem="100"
    >
    </banner-category-product>
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
    .fondo{
        background-color: black;
        width: 100%;
        height: 100%;
    }
    .prueba
    {
        display: flex;
        padding: 20px;
    }
    .ancho
    {
        width: 500px;
    }
    

</style>