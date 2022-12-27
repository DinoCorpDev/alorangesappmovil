<template>
  <div>
    <layout-navbar />
    <v-container>
      <v-row class="mb-6" align="center">
        <v-col cols="12" md="5">
          <h1 class="mb-8">
            iDOVELA <br />
            Para un mundo más habitable
          </h1>
          <h5 class="mb-8">
            Mejores espacios conducen a modelos más eficaces de vida. Las habitats eficientes conducen a una
            implementación más rápida. Genere valor en su vida con mejores espacios habitables.
          </h5>
          <v-row>
            <v-col cols="8">
              <custom-button light text="Comunicarse con ventas" outlined class="mb-10" block />
              <select-custom dark label="Seleccionar país" :items="langSelectItems" />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="7">
          <carousel :slides="sliderSeeder" />
        </v-col>
      </v-row>

      <v-row tag="section" class="mb-6">
        <v-col cols="12">
          <div class="primary rounded-section px-5 py-8">
            <div class="mb-3">
              <span class="subtitle1 text-uppercase font-weight-bold"> Preámbulo </span>
            </div>
            <h2 class="text-uppercase mb-3 mb-md-0">Titulo</h2>
            <v-divider class="mb-5" />
            <p class="body1 mb-8">
              Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye
              Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem
              Ipsum is simply dummy text. Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has
              beenthe industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the
              industry's • Incluye Lorem Ipsum is simply dummy text.
            </p>
            <v-row justify="center">
              <v-col cols="12" lg="10">
                <v-img
                  src="/public/assets/img/home/curved-arrows-top-xs.svg"
                  contain
                  width="80%"
                  class="mb-5 mx-auto d-sm-none"
                />
                <v-img
                  src="/public/assets/img/home/curved-arrows-top-md.svg"
                  contain
                  width="80%"
                  class="mb-5 mx-auto d-none d-sm-block"
                />
                <v-row
                  :no-gutters="$vuetify.breakpoint.name == 'md' || $vuetify.breakpoint.name == 'lg' ? false : true"
                >
                  <v-col>
                    <polygon-element text="Usuario" icon="/public/assets/img/home/icon-usuario.svg" />
                  </v-col>
                  <v-col>
                    <polygon-element text="Organizar" icon="/public/assets/img/home/icon-organizar.svg" />
                  </v-col>
                  <v-col>
                    <polygon-element text="Evaluar" icon="/public/assets/img/home/icon-evaluar.svg" />
                  </v-col>
                  <v-col>
                    <polygon-element text="Guardar" icon="/public/assets/img/home/icon-guardar.svg" />
                  </v-col>
                  <v-col>
                    <polygon-element text="Crear" icon="/public/assets/img/home/icon-crear.svg" />
                  </v-col>
                </v-row>
                <v-img
                  src="/public/assets/img/home/curved-arrows-bottom-xs.svg"
                  contain
                  width="80%"
                  class="mt-5 mx-auto d-sm-none"
                />
                <v-img
                  src="/public/assets/img/home/curved-arrows-bottom-md.svg"
                  contain
                  width="80%"
                  class="mt-5 mx-auto d-none d-sm-block"
                />
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>

      <v-row class="mb-6">
        <v-col cols="12">
          <presentation-banner :slidesCarousel="sliderSeeder" />
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
          <presentation-banner orientation="right" :slidesCarousel="sliderSeeder" />
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
          <presentation-banner orientation="right" :slidesCarousel="sliderSeeder" />
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

      <v-row>
        <v-col>
          <cards-custom title="Titulo" title-card1="Cocina" />
        </v-col>
      </v-row>

      <v-row class="mb-6">
        <v-col cols="12">
          <v-banner color="#242526" class="rounded">
            <div class="div-map">
              <div class="map">
                <v-img class="img-map" src="../../public/assets/img/mapa.png"></v-img>
              </div>
            </div>
          </v-banner>
        </v-col>
      </v-row>
    </v-container>

    <footer-custom />
  </div>
</template>

<script>
import BannerCategoryProduct from "../components/global/BannerCategoryProduct.vue";
import Carousel from "../components/global/Carousel.vue";
import CustomButton from "../components/global/CustomButton.vue";
import ProductItem from "../components/global/ProductItem.vue";
import SelectCustom from "../components/global/SelectCustom.vue";
import PresentationBanner from "../components/global/PresentationBanner.vue";
import CardsCustom from "../components/global/CardsCustom.vue";
import CarouselProducts from "../components/global/CarouselProducts.vue";
import FooterCustom from "../components/global/FooterCustom.vue";
import PolygonElement from "../components/global/PolygonElement.vue";
import LayoutNavbar from "../components/global/LayoutNavbar.vue";

import { productsSeeder, sliderSeeder } from "../seeders/products";

export default {
  components: {
    BannerCategoryProduct,
    Carousel,
    CustomButton,
    ProductItem,
    SelectCustom,
    PresentationBanner,
    CardsCustom,
    CarouselProducts,
    PolygonElement,
    LayoutNavbar,
    FooterCustom
  },
  data() {
    return {
      productsSeeder,
      sliderSeeder,
      langSelectItems: ["COLOMBIA", "DEUTSCHLAND", "ENGLAND"]
    };
  },
  mounted() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style lang="scss" scoped>
@media (min-width: 835px) {
  .container {
    max-width: 1920px;
  }
}

.div-map {
  width: 100%;
}
.map {
  border: 1px solid #59595a;
  border-radius: 400px;
  padding: 2% 15%;
}

.img-map {
  border-radius: 50%;
}

@media (max-width: 834px) {
  .div-map {
    width: 100%;
  }
  .map {
    border: 1px solid #59595a;
    border-radius: 50%;
    padding: 20% 0;
  }
}
</style>
