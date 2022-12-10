<template>
  <v-carousel
    :hide-delimiters="hideDelimiters"
    :show-arrows="showArrows"
    height="auto"
  >
    <template v-slot:prev="{ on, attrs }">
      <v-btn small color="#000000" v-bind="attrs" v-on="on">
        <i class="las la-angle-left"></i>
      </v-btn>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn small color="#000000" v-bind="attrs" v-on="on">
        <i class="las la-angle-right"></i>
      </v-btn>
    </template>
    <template v-if="slides.length > 0">
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-img :src="slide.src" :aspect-ratio="aspectRatio" />
      </v-carousel-item>
    </template>
    <v-carousel-item v-else>
      <v-img :src="itemPlaceholderUrl" :aspect-ratio="aspectRatio" contain/>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    showArrows: {
      type: Boolean,
      default: true,
    },
    hideDelimiters: {
      type: Boolean,
      default: false,
    },
    slides: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: "single",
    },
  },
  data() {
    return {
      itemPlaceholderUrl: "/public/assets/img/carousel-item-placeholder.png",
    };
  },
  computed: {
    aspectRatio() {
      if (this.type === "single") {
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
            return "0.8";
          case "sm":
            return "1.6";
          case "md":
            return "1.4";
          case "lg":
            return "1.4";
          case "xl":
            return "1.4";
        }
      }

      if (this.type === "banner") {
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
            return "1";
          case "sm":
            return "1.6";
          case "md":
            return "2.1";
          case "lg":
            return "2.1";
          case "xl":
            return "2.1";
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>

.v-carousel {
  border-radius: 10px;
  background-color: #242526;

  &::v-deep {
    .v-window__next,
    .v-window__prev {
      top: calc(100% - 52px);
      z-index: 2;
      background: transparent;
      border-radius: 0;

      .v-btn {
        font-size: 20px;
        height: 38px;
        min-width: 38px;
        padding: 0px;
        border-radius: 5px;
        opacity: 0.5;
      }
    }

    .v-carousel__controls {
      background: transparent;

      .v-item-group {
        width: 50%;
        display: flex;
        justify-content: space-around;
      }

      .v-carousel__controls__item {
        height: 8px;
        width: 8px;
        color: #000000;

        &.v-item--active {
          color: #18191a;

          &:before {
            opacity: 1;
          }
        }

        &:before {
          opacity: 0.1;
        }
      }
    }
  }
}
</style>
