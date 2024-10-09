<template>
  <div class="space-item">
    <div class="center-items space-item-heading text-center pa-3">
      <h5 class="subtitle2 text-uppercase font-weight-bold">
        {{ data.name }}
      </h5>
    </div>
    <v-hover v-slot:default="{ hover }">
      <div class="center-items space-item-image">
            <v-row class="fill-height flex-column" justify="space-between">
              <div class="space-item-body pa-0 pa-md-13 center-items" :class="{ 'show-btns': hover }" color="transparent">
                <v-img
                  :src="data.img"
                  :aspect-ratio="aspectRatio"
                  max-width="100%"
                  :class="{ 'show-btns': hover }"
                  color="transparent"
                  class="mb-5 img-size"
                />
                <h4 class="mb-11 d-flex d-sm-none" style="font-size: 17px;" color="transparent"><strong>{{ data.description }}</strong></h4>
                <h4 class="mb-11 d-none d-sm-flex" color="transparent"><strong>{{ data.description }}</strong></h4>
              </div>
            </v-row>
      </div>
    </v-hover>
  </div>
</template>


<script>
import CustomButton from "./CustomButton.vue";

export default {
  name: "ProductItem",
  props: {
    data: {
      type: Object,
      default: () => ({
        id: "0",
        name: "ESPACIO",
        img: "/public/assets/img/item-placeholder.png",
        img1: "/public/assets/img/play_store.png",
        description:
          "Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text.",
        transparent: "green"
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
          return "0.8";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.center-items{
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
}
.img-size {
    width: 240px;
    height: 240px !important;


    @media (max-width: 550px) {
      width: 100px;
      height: 100px !important;
    }
}
.space-item {
  border-radius: 10px;
  background-color: #18191a;

  &-heading {
    background-color: transparent;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  &-image {
    background-color: transparent;
  }

  &-image,
  &-image > .v-image {
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;

  }
}

// .v-card {
//   transition: opacity 0.4s ease-in-out;
// }

// .v-card:not(.on-hover) {
//   opacity: 0%;
// }

// .show-btns {
//   color: rgba(255, 255, 255, 1) !important;
// }
</style>
