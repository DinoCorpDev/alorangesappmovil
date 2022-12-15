<template>
  <div>
    <v-card>
      <v-toolbar class="black mt-2" style="border-radius: 0; height: 82px" elevation="0" outlined>
        <a href="#">
          <v-img src="../../public/assets/img/Logo-idovela-sin-fondo.png" max-width="90px" height="auto" />
        </a>
        <v-spacer />
        <v-text-field style="min-height: 38px" label="Escribe para buscar" outlined></v-text-field>
        <custom-button light text="Buscar" icon="la-search" />
        <v-spacer />
        <custom-button light text="Iniciar Sesión" />
        <custom-button light text="00" icon="la-cart-arrow-down" />
      </v-toolbar>
    </v-card>

    <v-tabs background-color="black" centered fixed-tabs slider-color="white">
      <v-tab style="">
        <v-icon left> la-home </v-icon>
        Diseño de espacios
      </v-tab>
      <v-tab>
        <v-icon left> la-tools </v-icon>
        Servicios
      </v-tab>
      <v-tab>
        <v-icon left> la-tv </v-icon>
        Electrodomésticos
      </v-tab>
      <v-tab>
        <v-icon left> la-building </v-icon>
        Portal de empresas
      </v-tab>

      <v-tab-item>
        <v-container fluid>
          <v-row>
            <v-col cols="12">
              <carousel />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-card flat>
                <div class="mb-4">
                  <h5>H5</h5>
                  <v-row>
                    <v-col cols="4">
                      <product-item />
                    </v-col>
                    <v-col cols="4">
                      <product-item
                        title="Producto 1"
                        descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
                        idItem="1"
                      ></product-item>
                    </v-col>
                    <v-col cols="4">
                      <product-item
                        title="Producto 1"
                        descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
                        idItem="1"
                        img="/public/assets/img/landing/Pacto-Ambiental.jpg"
                      ></product-item>
                    </v-col>
                  </v-row>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>

      <v-tab-item>
        <v-container fluid>
          <v-row>
            <v-col cols="12">
              <carousel />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-card flat>
                <div class="mb-4">
                  <h5>Producto con Carousel</h5>
                  <presentation-banner
                    no-dots
                    no-arrows="true"
                    category="Preambulo"
                    title="Producto 1"
                    descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
                    idItem="1"
                    orientation="order-1"
                  ></presentation-banner>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>

      <v-tab-item>
        <v-container fluid>
          <v-row>
            <v-col cols="12">
              <carousel />
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>

      <v-tab-item>
        <v-container fluid>
          <v-row>
            <v-col cols="12">
              <carousel />
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
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

export default {
  data: () => ({
    tab: null,
    text: Carousel
  }),
  components: {
    BannerCategoryProduct,
    Carousel,
    CustomButton,
    ProductItem,
    SelectCustom,
    PresentationBanner,
    CarouselProducts
  },
  mounted() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style lang="scss" scoped>
@media (min-width: 1264px) {
  .v-toolbar__content,
  .v-toolbar__extension {
    padding: 4px 24px;
  }
}

.v-input__slot {
  margin-bottom: -24px;
}
</style>