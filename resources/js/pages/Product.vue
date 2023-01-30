<template>
    <div>
        <layout-navbar-auth />
        
        <v-row>
            <v-col cols="4">
                <v-row dense class="mt-2 ml-3">
                    <v-col cols="4">
                        <v-row justify="center">
                            <v-btn  light width="150px"  @click="showd = true; showd1 = false; showd2 = false">Especificación </v-btn>
                        </v-row>
                    </v-col>
                    <v-col cols="4">
                        <v-row justify="center">
                        <v-btn  width="150px" light  @click="showd = false; showd1 = true; showd2 = false">Reseña </v-btn></v-row>
                    </v-col>
                    <v-col cols="4">
                        <v-row justify="center">
                        <v-btn   light width="150px"  @click="showd = false; showd1 = false; showd2 = true"> Sostenibilidad </v-btn></v-row>
                    </v-col>
                </v-row>
                <v-divider class="mt-8 ml-3"/>                
                <div v-show="showd" class="product-item-body pa-4 la-border ml-3 mt-4">
                    <v-row>
                        <v-col cols="6">
                            <v-row justify="center" dense>
                                <span>Energía</span>
                            </v-row>
                            <v-row justify="center" dense>
                                <h5 class="subtitle2 text-uppercase mb-2">Consumo</h5>
                            </v-row>
                        </v-col>
                        <v-divider inset vertical class="mb-2"/>
                        <v-col cols="6">
                            <v-row justify="center" dense>
                                <span>Material</span>
                            </v-row>
                            <v-row justify="center" dense>
                                <h5 class="subtitle2 text-uppercase mb-2">Cuerpo</h5>
                            </v-row>
                        </v-col>
                    </v-row>
                </div>
            </v-col>

            <v-col cols="4" class="positionColbuttons">
                <v-row dense justify>
                    <v-col>
                        <carousel v-show="showp" style="height:700px;"/>
                        <carousel :slides="sliderSeeder" v-show="showp1" style="height:700px;"/>
                        <v-img src="https://picsum.photos/1920/1080?random=1" v-show="showp2" height="700px" width="100%"/>
                    </v-col>
                </v-row>
                <v-row class="buttonsAct px-4">
                    <v-col cols="4">
                        <v-btn   light block  @click="showp = true; showp1 = false; showp2 = false">Imágenes </v-btn>
                    </v-col>
                    <v-col cols="4">
                        <v-btn   light block  @click="showp = false; showp1 = true; showp2 = false">Videos </v-btn>
                    </v-col>
                    <v-col cols="4">
                        <v-btn   light block  @click="showp = false; showp1 = false; showp2 = true"> Ficha Técnica </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="4">
                <div class="product-item-body pa-4 la-border mr-5">
                    <div class="d-flex justify-space-between">
                        <h5 class="subtitle2 text-uppercase mb-2">{{ ref }}</h5>
                        <v-icon right> la-bookmark </v-icon>
                    </div>
                    <h5 class="subtitle1 text-uppercase font-weight-bold mb-2">{{ name }}</h5>
                    <h5 class="subtitle1 mb-2">{{ brand }}</h5>
                    <div class="d-flex">
                        <h5 class="subtitle1 mb-2 mr-2">{{ val }}</h5>
                        <h5 class="caption mb-2"><del>{{ val }}</del></h5>
                    </div>
                    <div class="d-flex justify-space-between">
                        <h5 class="caption mb-3">{{ iva }}</h5>
                        <div class="d-flex justify-space-around align-center">
                            <v-btn icon @click="model = Math.max(model - 1, 0)">
                                <v-icon small>
                                    la-minus
                                </v-icon>
                            </v-btn>
                            {{ model }}
                            <v-btn icon @click="model = Math.min(model + 1, 8)">
                                <v-icon small>
                                    la-plus
                                </v-icon>
                            </v-btn>
                        </div>
                    </div>
                    <custom-button text="Agregar a Compras" block />
                    <custom-button light text="Consultar a un Asesor" block class="mt-3" />
                </div>
                <div class="product-item-body pa-4 la-border mr-5 mt-3">
                    <div class="d-flex justify-space-between">
                        <h5 class="subtitle2 text-uppercase mb-1">{{ varia }}</h5>
                        <v-btn-toggle>
                            <v-btn class="blue toggle-btn"/>
                            <v-btn class="ml-2 white toggle-btn"/>
                            <v-btn class="ml-2 black toggle-btn"/>
                            <v-btn class="ml-2 red toggle-btn"/>
                        </v-btn-toggle>
                    </div>
                </div>
                <div class="product-item-body pa-4 la-border mr-5 mt-3">
                    <div class="d-flex justify-space-between">
                        <h5 class="subtitle2 text-uppercase mb-1">Disponibilidad</h5>
                        <h5 class="subtitle1 mb-2">Consultar</h5>
                    </div>
                    <div class="d-flex justify-space-between">
                        <h5 class="subtitle2 text-uppercase mb-1">Garantía</h5>
                        <h5 class="subtitle1 mb-2">12 Meses</h5>
                    </div>
                    <div class="d-flex justify-space-between">
                        <h5 class="subtitle2 text-uppercase mb-1">Pago</h5>
                        <h5 class="subtitle1 mb-2">Payu  Visa  PSE  MC</h5>
                    </div>
                    <div class="d-flex justify-space-between">
                        <h5 class="subtitle2 text-uppercase">Envío</h5>
                        <h5 class="subtitle1">A domicilio</h5>
                    </div>
                </div>
                <h5 class="subtitle2 text-uppercase mt-3 mb-2">Se incluye con la compra</h5>
                <div class="product-item-body mr-5 mt-3">
                    <v-divider />
                    <product-item-5 />
                </div>
            </v-col>
        </v-row>   

        <div class="mb-4 mt-16">
            <div class="d-flex justify-space-between mb-8">
                <h5 class="mt-1">H5</h5>
                <div style="width: 38%">
                <custom-button light text="Nuevo" style="width: 23%"/>
                <custom-button light text="Nuevo" class="ml-2" style="width: 23%"/>
                <custom-button light text="Nuevo" class="ml-2" style="width: 23%"/>
                <custom-button light text="Nuevo" class="ml-2" style="width: 23%"/>
                </div>
            </div>
            <v-row>
                <v-col cols="2">
                    <product-item-2 headerPr="true" />
                </v-col>
                <v-col cols="2">
                    <product-item-2 headerPr="true" />
                </v-col>
                <v-col cols="2">
                    <product-item-2 headerPr="true" img="/public/assets/img/landing/Pacto-Ambiental.jpg" />
                </v-col>
                <v-col cols="2">
                    <product-item-2 headerPr="true" img="/public/assets/img/landing/Pacto-Ambiental.jpg" />
                </v-col>
                <v-col cols="2">
                    <product-item-2 headerPr="true" />
                </v-col>
                <v-col cols="2">
                    <product-item-2 headerPr="true" img="/public/assets/img/landing/Pacto-Ambiental.jpg" />
                </v-col>
            </v-row>
            <v-row justify="center">
                <custom-button light text="Ver más" class="mt-6 mb-6" style="width: 40%" />
            </v-row>
        </div>

        <v-row class="mb-6">
            <v-col cols="12">
                <div class="d-flex justify-space-between mb-8">
                    <h5 class="mt-1">H5</h5>
                    <div style="width: 38%">
                    <custom-button light text="Nuevo" style="width: 23%"/>
                    <custom-button light text="Nuevo" class="ml-2" style="width: 23%"/>
                    <custom-button light text="Nuevo" class="ml-2" style="width: 23%"/>
                    <custom-button light text="Nuevo" class="ml-2" style="width: 23%"/>
                    </div>
                </div>
                <v-row>
                    <v-col cols="3">
                        <product-item-3 />
                    </v-col>
                    <v-col cols="3">
                        <product-item-3
                            title="Producto 1"
                            descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
                            idItem="1"
                        />
                    </v-col>
                    <v-col cols="3">
                        <product-item-3
                            title="Producto 1"
                            descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
                            idItem="1"
                            img="/public/assets/img/landing/Pacto-Ambiental.jpg"
                        />
                    </v-col>
                    <v-col cols="3">
                        <product-item-3
                            title="Producto 1"
                            descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
                            idItem="1"
                            img="/public/assets/img/landing/Pacto-Ambiental.jpg"
                        />
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <custom-button light text="Ver más" class="mt-6" style="width: 40%" />
                </v-row>
            </v-col>
        </v-row>

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
import ProductItem3 from "../components/global/ProductItem3.vue";
import ProductItem2 from "../components/global/ProductItem2.vue";
import ProductItem5 from "../components/global/ProductItem5.vue";
import CustomButton from "../components/global/CustomButton.vue";
import LayoutNavbarSpaces from "../components/global/LayoutNavbarSpaces.vue";
import Carousel from "../components/global/Carousel.vue";
import LayoutNavbarAuth from "../components/global/LayoutNavbarAuth.vue";

import { sliderSeeder } from "../seeders/products";

export default {
    data: () => ({
      showp: true,
      showp1: false,
      showp2: false,
      showd: true,
      showd1: false,
      showd2: false,
      sliderSeeder,
      id: "0",
      name: "Colección",
      ref: "REFERENCIA",
      brand: "Marcas",
      val: "000.000.000 COP",
      img: "/public/assets/img/item-placeholder.png",
      iva: "* Iva Incluido",
      varia: "Variación",
      model: 0,
      tags: [
        '1',
        '2',
        '3',
      ],
    }),
    components: {
        ProductItem3,
        ProductItem2,
        ProductItem5,
        CustomButton,
        LayoutNavbarSpaces,
        Carousel,
        LayoutNavbarAuth
    },
    mounted() {
        this.$vuetify.theme.dark = true;
    }
};
</script>

<style lang="scss" scoped>
.v-btn {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.25px;

  @media (min-width: 960px) {
    font-size: 14px;
  }

  border-radius: 5px;

  i {
    font-size: 20px;
  }

  &:hover:before,
  &:focus:before {
    opacity: 1;
  }

  &.v-size--default {
    height: 38px;
  }
}

.theme--light {
  &.v-btn {
    color: #000000;

    &.v-btn--has-bg {
      background-color: #dfdfdf;

      &:before {
        background-color: #ffffff;
      }

      &.v-btn--disabled {
        color: #000000 !important;

        &.v-btn--has-bg {
          background-color: #fafcfc !important;
        }
      }
    }

    &.v-btn--outlined {
      color: #ffffff;

      &:hover,
      &:focus {
        color: #000000;
      }

      &:before {
        background-color: rgba(255, 255, 255, 0.8);
      }

      &:focus {
        &:before {
          background-color: #ffffff;
        }
      }
    }
  }
}

.buttonsAct{
    top:20px;
    position:absolute;
    width: 96%;
}

.positionColbuttons{
    position: relative;
}

.la-border{
    border-radius: 0.5em;
}

.v-btn-toggle{
    border-radius: 0px;
    height:20px!important;
}

.toggle-btn{
    height:20px!important;
    min-width:20px!important;
}

.v-divider{
    border-width: thin 0 0;
}

.v-divider--vertical {
    border-width: 0 thin 0 0;
}

</style>
