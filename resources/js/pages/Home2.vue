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
          <v-banner color="#18191A" class="rounded white--text">
            <div>
              <div class="mb-3">
                <template>
                  <span class="subtitle1 text-uppercase font-weight-bold"> Preambulo </span>
                </template>
              </div>
              <h2 class="text-uppercase">Titulo</h2>
              <v-divider />
            </div>
            <div>
              <p class="body1 mt-4">
                Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor
                consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do
                occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet
                aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa.
              </p>
            </div>
            <v-row class="d-flex justify-center">
              <v-col cols="2">
                <div class="poligon d-flex justify-center">
                  <span class="body1 mt-4">Usuario</span>
                </div>
              </v-col>
              <v-col cols="2">
                <div class="poligon d-flex justify-center">
                  <span class="body1 mt-4">Organizar</span>
                </div>
              </v-col>
              <v-col cols="2">
                <div class="poligon d-flex justify-center">
                  <span class="body1 mt-4">Evaluar</span>
                </div>
              </v-col>
              <v-col cols="2">
                <div class="poligon d-flex justify-center">
                  <span class="body1 mt-4">Guardar</span>
                </div>
              </v-col>
              <v-col cols="2">
                <div class="poligon d-flex justify-center">
                  <span class="body1 mt-4">Crear</span>
                </div>
              </v-col>
            </v-row>
          </v-banner>
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

    <v-card>
      <v-footer color="#18191A" class="px-5 py-5">
        <v-row class="d-flex justify-space-between flex-wrap">
          <v-col cols="2" sm="3">
            <span class="subtitle1 bold text-uppercase">© Idovela 2022</span>
          </v-col>
          <v-col cols="4" sm="3">
            <span class="subtitle1 bold text-uppercase"><i class="las la-globe"></i> Bogota, Colombia</span>
          </v-col>
          <v-col cols="6" sm="6">
            <v-row>
              <v-col cols="4">
                <span class="subtitle1 bold text-uppercase">Información</span>
              </v-col>
              <v-col cols="4">
                <span class="subtitle1 bold text-uppercase">Solicitudes</span>
              </v-col>
              <v-col cols="4">
                <span class="subtitle1 bold text-uppercase">Contacto</span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-footer>
    </v-card>
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
@media (min-width: 834px) {
  .poligon {
    width: 100%;
    height: 208px;
    background: #242526 0% 0% no-repeat padding-box;
    clip-path: polygon(75% 0%, 100% 48%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
    border-radius: 15px;
  }
}

@media (max-width: 834px) {
  .poligon {
    height: 196px;
    background: #242526 0% 0% no-repeat padding-box;
    clip-path: polygon(75% 0%, 100% 48%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
    border-radius: 8px;
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
