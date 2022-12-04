<template>
  <div>
    <v-card class="black">
      <v-toolbar
        class="black mt-2"
        style="border-radius: 0; height: 82px"
        elevation="0"
        outlined
      >
        <a href="#"
          ><v-img
            src="../../public/assets/img/Logo-idovela-sin-fondo.png"
            max-width="90px"
            height="auto"
        /></a>
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
    <v-container fluid>
      <v-row align="center">
        <v-col cols="12" md="5">
          <h1 class="mb-8">
            iDOVELA <br />
            Para un mundo más habitable
          </h1>
          <h5 class="mb-8">
            Mejores espacios conducen a modelos más eficaces de vida. <br />
            Las habitats eficientes conducen a una implementación más rápida.
            Genere valor en su vida con mejores espacios habitables.
          </h5>
          <custom-button
            style="width: 422px"
            text="Comunicarse con ventas"
            variant="white"
            outlined
          />
          <!-- <select-custom></select-custom> -->
        </v-col>
        <v-col cols="12" md="7">
          <carousel />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <presentation-banner :slidesCarousel="slides2" />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <banner-category-product
            title="Titulo"
            descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
            idItem="100"
          ></banner-category-product>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <presentation-banner :slidesCarousel="slides" />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <carousel-products no-dots no-arrows="true"></carousel-products>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <presentation-banner />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <presentation-banner />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <carousel-multiple-items :slides="slidesMultiple"/>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <banner-category-product
            title="Titulo"
            descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
            idItem="100"
          ></banner-category-product>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BannerCategoryProduct from "../components/global/BannerCategoryProduct.vue";
import Carousel from "../components/global/Carousel.vue";
import CustomButton from "../components/global/CustomButton.vue";
import ItemProduct from "../components/global/ItemProduct.vue";
import SelectCustom from "../components/global/SelectCustom.vue";
import PresentationBanner from "../components/global/PresentationBanner.vue";
import CarouselProducts from "../components/global/CarouselProducts.vue";
import CarouselMultipleItems from "../components/global/CarouselMultipleItems.vue";

export default {
  components: {
    BannerCategoryProduct,
    Carousel,
    CustomButton,
    ItemProduct,
    SelectCustom,
    PresentationBanner,
    CarouselProducts,
    CarouselMultipleItems,
  },
  data: () => ({
    slides: [
        {
          name: "test1",
          src: "/public/assets/img/placeholder.jpg",

        },
        {
          name: "test2",
          src: "/public/assets/img/play_store.png",

        },
        {
          name: "test3",
          src: "/public/assets/img/verified.png",

        }
        
      ],
      slides2: [
        {
          name: "test1",
          src: "/public/assets/img/placeholder.jpg",

        },
        {
          name: "test2",
          src: "/public/assets/img/play_store.png",

        },
        {
          name: "test3",
          src: "/public/assets/img/verified.png",

        }
      ],
      slidesMultiple: [
        {
                    component: ItemProduct,
                    title: 'Titulo',
                    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.',
                    img: 'https://picsum.photos/500/300?random=1',
                    idItem: "1"
                },
                {
                    component: ItemProduct,
                    title: 'Titulo 2',
                    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.',
                    img: 'https://picsum.photos/500/300?random=2',
                    idItem: "2"
                },
                {
                    component: ItemProduct,
                    title: 'Titulo 3',
                    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.',
                    img: 'https://picsum.photos/500/300?random=3',
                    idItem: "3"
                    
                },
                {
                    component: ItemProduct,
                    title: 'Titulo 4',
                    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.',
                    img: 'https://picsum.photos/500/300?random=4',
                    idItem: "4"
                },
                {
                    component: ItemProduct,
                    title: 'Titulo 5',
                    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.',
                    img: 'https://picsum.photos/500/300?random=5',
                    idItem: "5"
                },
                {
                    component: ItemProduct,
                    title: 'Titulo 6',
                    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.',
                    img: 'https://picsum.photos/500/300?random=6',
                    idItem: "6"
                },
                {
                    component: ItemProduct,
                    title: 'Titulo 7',
                    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.',
                    img: 'https://picsum.photos/500/300?random=7',
                    idItem: "7"
                },
                {
                    component: ItemProduct,
                    title: 'Titulo 8',
                    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.',
                    img: 'https://picsum.photos/500/300?random=8',
                    idItem: "8"
                },
                {
                    component: ItemProduct,
                    title: 'Titulo 9',
                    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.',
                    img: 'https://picsum.photos/500/300?random=9',
                    idItem: "9"
                },
      ]
  })
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
    padding: 4px 24px;
  }
}
</style>