<template>
  <div class="product-item">
    <div class="text-right mr-1">
      <v-icon right> la-bookmark </v-icon>
    </div>
    <v-container class="pa-4 text-center">
      <v-row class="fill-height flex-column" align="center" justify="center">
        <template>
          <v-col cols="12">
            <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
                <v-img :src="data.img" height="225px">
                  <v-card-title class="title white--text mt-16">
                    <v-row class="mt-16">
                      <div v-if="hover" class="align-self-center mt-10">
                        <custom-button text="Ver Detalles" block :class="{ 'show-btns': hover }" color="transparent" />
                      </div>
                    </v-row>
                  </v-card-title>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>
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
    data: {
      type: Object,
      default: () => ({
        id: "0",
        name: "Titulo",
        img: "/public/assets/img/item-placeholder.png",
        description:
          "Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text.",
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
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
