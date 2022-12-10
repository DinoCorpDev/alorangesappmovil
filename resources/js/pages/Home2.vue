<template>
  <div>
    <v-card>
      <v-toolbar color="#000000" style="height: 100px">
        <a href="#">
          <v-img src="../../public/assets/img/Logo-idovela-sin-fondo.png" max-width="72px" height="auto" />
        </a>
        <v-spacer></v-spacer>
        <custom-button
          text="Ir a tienda"
          variant="#E2E6EA"
          icon="la-store-alt"
          class="black--text tamaño-boton-desktop"
          small
        ></custom-button>
        <custom-button
          text="Iniciar Sesión"
          variant="#E2E6EA"
          class="black--text ml-4 tamaño-boton-desktop"
          small
        ></custom-button>
      </v-toolbar>
    </v-card>
    <v-container>
      <v-row class="mb-6" align="center">
        <v-col cols="12" md="5">
          <h1 class="mb-8">
            iDOVELA <br />
            Para un mundo más habitable
          </h1>
          <h5 class="mb-8">
            Mejores espacios conducen a modelos más eficaces de vida. <br />
            Las habitats eficientes conducen a una implementación más rápida. Genere valor en su vida con mejores
            espacios habitables.
          </h5>
          <div class="customB_select">
            <div class="customButton">
              <custom-button width="100%" text="Comunicarse con ventas" variant="white" outlined />
            </div>
            <div class="selectCustom">
              <select-custom></select-custom>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="7">
          <carousel />
        </v-col>
      </v-row>

      <v-row class="mb-6">
        <v-col cols="12">
          <presentation-banner />
        </v-col>
      </v-row>

      <v-row class="mb-6">
        <v-col cols="12">
          <banner-category-product
            title="Titulo"
            descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
            idItem="100"
            variant="#e9e9e9"
            variant-text="black--text"
          ></banner-category-product>
        </v-col>
      </v-row>

      <v-row class="mb-6">
        <v-col cols="12">
          <presentation-banner orientation="right" />
        </v-col>
      </v-row>

      <v-row class="mb-6">
        <v-col cols="12">
          <carousel-products :products="productsSeeder" />
        </v-col>
      </v-row>

      <v-row class="mb-6">
        <v-col cols="12">
          <presentation-banner />
        </v-col>
      </v-row>

      <v-row class="mb-6">
        <v-col cols="12">
          <presentation-banner orientation="right" />
        </v-col>
      </v-row>

      <v-row class="mb-6">
        <v-col cols="12">
          <banner-category-product
            title="Titulo"
            descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
            idItem="100"
          ></banner-category-product>
        </v-col>
      </v-row>

      <v-row class="mb-6">
        <v-col cols="12">
          <presentation-banner />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BannerCategoryProduct from "../components/global/BannerCategoryProduct.vue";
import Carousel from "../components/global/Carousel.vue";
import CustomButton from "../components/global/CustomButton.vue";
import ProductItem from "../components/global/ProductItem.vue";
import SelectCustom from "../components/global/SelectCustom.vue";
import PresentationBanner from "../components/global/PresentationBanner.vue";
import CarouselProducts from "../components/global/CarouselProducts.vue";

import productsSeeder from "../seeders/products";

export default {
  components: {
    BannerCategoryProduct,
    Carousel,
    CustomButton,
    ProductItem,
    SelectCustom,
    PresentationBanner,
    CarouselProducts
  },
  data() {
    return {
      productsSeeder
    };
  }
};
</script>

<style>
.v-main {
  background-color: #000000;
}

@media (min-width: 1264px) {
  .tamaño-boton-desktop {
    width: 221px;
    height: 38px;
  }
  .v-toolbar__content,
  .v-toolbar__extension {
    padding: 14px 24px;
  }
}

@media (min-width: 835px) {
  .customB_select {
    width: 422px;
  }
  .selectCustom {
    margin-top: 30px;
  }
  .container {
    max-width: 1920px;
  }
}
@media (max-width: 834px) {
  .customB_select {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .customButton,
  .selectCustom {
    width: 186px;
    margin-top: 0px;
  }
}
</style>
