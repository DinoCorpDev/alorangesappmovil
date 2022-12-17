<template>
  <v-col cols="12" md="3" sm="6" class="text-center">
    <span class="subtitle-2 text-uppercase">{{ title }}</span>
    <div class="card">
      <div class="cols">
        <v-img :src="img" class="img"></v-img>
        <span class="body2" :class="variantText">{{ description }}</span>
      </div>
    </div>
  </v-col>
</template>

<script>
export default {
  name: "Card",
  props: {
    height: String,
    description: String,
    title: {
      type: String,
      default: "Espacios"
    },
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
.img {
  padding-bottom: 40%;
}
.cols {
  height: 100%;
  display: flex;
  align-items: center;
}
.card {
  background: #dfdfdf;
  height: 722px;
  border-end-end-radius: 10px;
  border-end-start-radius: 10px;
  width: 100%;
}

@media (max-width: 600px) {
  .card {
    height: 560px;
  }
}
@media (max-width: 960px) {
  .card {
    height: 600px;
  }
}

@media (max-width: 1904px) {
  .card {
    height: 650px;
  }
  .img {
    padding-bottom: 30%;
  }
}
</style>
