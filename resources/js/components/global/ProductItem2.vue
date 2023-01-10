<template>
  <div class="product-item">
    <div class="text-right pa-2" v-if="headerPr">
      <v-icon right > la-bookmark </v-icon>
    </div>
    <div class="text-right pa-2 d-flex justify-space-between" v-else>
      <h5 class="subtitle1"> 01 </h5>
      <v-icon right > la-wine-glass </v-icon>
    </div>
      <v-row>
        <template>
          <v-col cols="12">
            <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
                <v-img :src="data.img" height="150px"/>
                <div class="pb-5">
                        <custom-button text="Ver Detalles" block :class="{ 'show-btns': hover }" color="transparent" />
                      </div>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    <div class="product-item-body pa-5">
      <h5 class="subtitle2 text-uppercase mb-3">{{ data.ref }}</h5>
      <h5 class="subtitle1 text-uppercase font-weight-bold mb-3">{{ data.name }}</h5>
      <h5 class="subtitle1 mb-3">{{ data.brand }}</h5>
      <h5 class="subtitle1 mb-3">{{ data.val }}</h5>
      <custom-button text="Agregar a Compras" block class="px-0" />
    </div>
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";

export default {
  data: () => ({
    icons: ["mdi-rewind", "mdi-play", "mdi-fast-forward"],
    transparent: "rgba(255, 255, 255, 0)"
  }),
  name: "ProductItem",
  components: {
    CustomButton
  },
  props: {
    headerPr:{
      type:Boolean
    },
    data: {
      type: Object,
      default: () => ({
        id: "0",
        name: "Objeto",
        ref: "REFERENCIA",
        brand: "Marca",
        val: "000.000.000 COP",
        img: "/public/assets/img/item-placeholder.png",
        transparent: "rgba(255, 255, 255, 0)"
      })
    }
  },
  computed: {
    aspectRatio() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "1.2";
        case "sm":
          return "1.9";
        case "md":
          return "2.2";
        case "lg":
          return "2.2";
        case "xl":
          return "2.2";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.product-item {
  border-radius: 10px;
  background-color: #18191a;

  &-image {
    background-color: #242526;
  }

  &-image,
  &-image .v-image {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
}

.v-card {
  opacity: 0.3;
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 1;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}

.subtitle2{
  font-size: 10px;
}
</style>
