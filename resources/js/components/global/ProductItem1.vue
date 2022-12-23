<template>
  <div class="product-item pa-10">
    <v-row align="center">
      <v-col cols="3">
        <div class="product-item-image">
          <v-img :src="data.img" :aspect-ratio="1" height="100%" />
        </div>
      </v-col>
      <v-col cols="9" class="pl-6">
        <h5 class="subtitle1 text-uppercase font-weight-bold mb-3">{{ data.name }}</h5>
        <p class="mb-4">{{ data.description }}</p>
        <custom-button text="Acción" plain class="px-0" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";

export default {
  name: "ProductItem1",
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
          "Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has"
      })
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
}
</style>
