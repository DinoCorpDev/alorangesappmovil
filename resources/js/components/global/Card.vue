<template>
  <v-col cols="12" md="3" sm="6" class="text-center">
    <span class="subtitle-1 text-uppercase">{{ title }}</span>
    <v-card :color="variant" :height="height">
      <div class="cols">
        <v-img :src="img"></v-img>
        <span class="body2" :class="variantText">{{ description }}</span>
      </div>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "Card",
  props: {
    height: String,
    description: String,
    img: {
      type: String,
      default: "/public/assets/img/carousel-item-placeholder.png"
    },
    variant: {
      type: String,
      default: "#DFDFDF"
    },
    variantText: {
      type: String,
      default: "black--text"
    }
  }
};
</script>

<style lang="scss" scoped>
.cols {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
