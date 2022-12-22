<template>
  <div class="product-item pa-5">
    <v-row>
      <v-col cols="2" class="product-item-image py-3">  
          <v-img :src="data.img" :aspect-ratio="aspectRatio" height="100%" :contain="data.id == 0" />
      </v-col>
      <v-col cols="10">
          <h5 class="subtitle1 text-uppercase font-weight-bold mb-3">{{ data.name }}</h5>
          <p class="mb-4">{{ data.description }}</p>
          <custom-button text="Acción" plain class="px-0" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CustomButton from './CustomButton.vue';

export default {
  name: 'ProductItem',
  components: {
    CustomButton
  },
  props: {
    data: {
      type: Object,
      default: () => ({
        id: '0',
        name: 'Titulo',
        img: '/public/assets/img/item-placeholder.png',
        description:
          "Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text."
      })
    }
  },
  computed: {
    aspectRatio() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '1.2';
        case 'sm':
          return '1.9';
        case 'md':
          return '2.2';
        case 'lg':
          return '2.2';
        case 'xl':
          return '2.2';
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

.product-item-image{
  width: 98px;
  height: 98px;
}

.col9,
.col3 {
    width: 100%;
  }
</style>
