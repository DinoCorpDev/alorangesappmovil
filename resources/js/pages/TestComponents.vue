<template>
  <v-container class="py-16">
    <v-row>
      <v-col cols="12">
        <div class="mb-4">
          <h2>Botones</h2>
          <custom-button text="Ir a tienda" icon="la-store-alt"></custom-button>
          <custom-button
            text="Comunicarse con ventas"
            variant="blue darken-4"
            outlined
            variant-text="white--text"
          ></custom-button>
          <custom-button
            text="Comprar"
            variant="blue darken-4"
            variant-text="white--text"
            disabled
          ></custom-button>
        </div>

        <div class="mb-4">
          <h2>Carousel</h2>
          <carousel />
        </div>

        <div class="mb-4">
          <h2>Selector</h2>
          <select-custom></select-custom>
        </div>

        <!-- <div class="mb-4">
                    <h2>Producto con Carousel</h2>
                    <carousel-product
                        no-dots
                        no-arrows="true"
                        category="Preambulo"
                        title="Producto 1"
                        descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
                        idItem="1"
                        orientation="order-1"
                    ></carousel-product>
                </div> -->

        <div class="mb-4">
          <h2>Item Producto</h2>
          <div class="d-flex justify-center flex-wrap">
            <item-product
              title="Producto 1"
              descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
              idItem="1"
              class="mt-5 mb-4 ms-3 me-3"
            ></item-product>
            <item-product
              title="Producto 1"
              descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
              idItem="1"
              img="/public/assets/img/landing/Pacto-Ambiental.jpg"
              class="mt-5 mb-4 ms-3 me-3"
            ></item-product>
          </div>
        </div>

        <div class="mb-4">
          <h2>Banner Categoria</h2>
          <banner-category-product
            title="Titulo"
            descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
            idItem="100"
          ></banner-category-product>
          <banner-category-product
            title="Titulo"
            descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
            idItem="100"
            img="/public/assets/img/idovela-banner.png"
          ></banner-category-product>
        </div>

        <!-- <div class="mb-4">
                    <h2>Carousel de Productos</h2>
                    <carousel-products
                    no-dots
                    no-arrows="true"
                    ></carousel-products>
                </div> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BannerCategoryProduct from "../components/global/BannerCategoryProduct.vue";
import Carousel from "../components/global/Carousel.vue";
import CarouselProduct from "../components/global/CarouselProduct.vue";
import CarouselProducts from "../components/global/CarouselProducts.vue";
import CustomButton from "../components/global/CustomButton.vue";
import ItemProduct from "../components/global/ItemProduct.vue";
import SelectCustom from "../components/global/SelectCustom.vue";
export default {
  components: {
    BannerCategoryProduct,
    Carousel,
    CarouselProduct,
    CarouselProducts,
    CustomButton,
    ItemProduct,
    SelectCustom,
  },
};
</script>

<style>
.v-main {
  background-color: #000000;
}
h2 {
  color: #ffffff;
}
</style>
