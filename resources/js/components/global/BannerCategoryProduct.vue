<template>
  <v-banner :color="variant" class="rounded" :class="variantText">
    <div class="cols">
      <div class="col1">
        <div class="mb-3">
          <template v-for="category in categories">
            <span class="subtitle1 text-uppercase font-weight-bold" :key="`category-${category}`">
              {{ category }}
            </span>
          </template>
        </div>
        <h2 class="text-uppercase">{{ title }}</h2>
        <v-divider />
      </div>
      <div class="col2">
        <v-img class="rounded" :src="img"> </v-img>
      </div>
      <div class="col3">
        <p class="body1">{{ descripcion }}</p>
        <div class="customB">
          <custom-button width="100%" variant="#DFDFDF" text="Compartir" />
        </div>
      </div>
    </div>
  </v-banner>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
  name: "BannerCategoryProduct",
  props: {
    title: String,
    descripcion: String,
    img: {
      type: String,
      default: "/public/assets/img/carousel-item-placeholder.png"
    },
    idItem: String,
    variant: {
      type: String,
      default: "#242526"
    },
    variantText: {
      type: String,
      default: "white--text"
    },
    categories: {
      type: Array,
      default: () => ["Preámbulo"]
    }
  },
  components: {
    CustomButton
  }
};
</script>

<style lang="scss" scoped>

@media (max-width: 834px) {
  .customB {
    width: 291px;
  }
}

@media (max-width: 428px) {
  .customB {
    width: 243px;
  }
}
.v-banner {
  &::v-deep {
    * {
      padding: 0px;
    }
    .v-application--is-ltr,
    .v-banner--is-mobile,
    .v-banner__wrapper,
    .v-banner__content {
      padding: 0px;
    }
  }
}

.v-divider {
  border-color: #919191 !important;
}
.cols {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 15px;
}
.col1,
.col2,
.col3 {
  width: calc(100% / 3);
  padding: 5px 10px 5px 10px;
}
@media (max-width: 834px) {
  .cols {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .col2 {
    order: 3;
  }
  .col1,
  .col2,
  .col3 {
    width: 100%;
  }
}
</style>
