<template>
  <v-row class="primary rounded-section" :class="orientation === 'left' ? 'panel-left' : 'panel-rigth'" no-gutters>
    <v-col cols="12" md="4">
      <div class="panel pa-4">
        <div>
          <v-img :src="presetationBannerLogoUrl" class="mt-md-6 mb-5" width="48" />
          <div class="mb-3">
            <template v-for="category in categories">
              <span class="subtitle1 text-uppercase font-weight-bold" :key="`category-${category}`">
                {{ category }}
              </span>
            </template>
          </div>
          <h2 class="text-uppercase">{{ title }}</h2>
          <v-divider class="mb-5" />
          <p class="body1">{{ description }}</p>
        </div>
        <div>
          <custom-button light text="Agregar a Compras" block class="mb-4" />
          <custom-button light text="Compartir" block />
        </div>
      </div>
    </v-col>
    <v-col cols="12" md="8" height="100px">
      <carousel type="banner" :slides="slidesCarousel" />
    </v-col>
  </v-row>
</template>

<script>
import Carousel from "./Carousel";
import CustomButton from "./CustomButton.vue";

export default {
  name: "PresentationBanner",
  props: {
    title: {
      type: String,
      default: "Titulo"
    },
    description: {
      type: String,
      default:
        "Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text. Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text."
    },
    idItem: String,
    categories: {
      type: Array,
      default: () => ["Preámbulo"]
    },
    orientation: {
      type: String,
      default: "left"
    },
    slidesCarousel: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      presetationBannerLogoUrl: "/public/assets/img/presentation-banner-logo.png"
    };
  },
  components: {
    Carousel,
    CustomButton
  }
};
</script>

<style lang="scss" scoped>
.panel {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 960px) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}

.v-carousel {
  @media (max-width: 960px) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  &::v-deep {
    .v-window__next {
      @media (min-width: 960px) {
        right: 25%;
      }
    }

    .v-window__prev {
      @media (min-width: 960px) {
        left: 25%;
      }
    }

    .v-carousel__controls {
      .v-item-group {
        @media (min-width: 960px) {
          width: 35%;
        }
      }
    }
  }
}

.panel-left {
  .panel {
    @media (min-width: 960px) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  .v-carousel {
    @media (min-width: 960px) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
}

.panel-rigth {
  @media (min-width: 960px) {
    flex-direction: row-reverse;

    .panel {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    .v-carousel {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
}
</style>