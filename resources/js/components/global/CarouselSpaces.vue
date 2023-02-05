<template>
  <div>
    <h5 class="mb-3">{{ title }}</h5>
    <swiper :options="swiperOptions">
      <swiper-slide v-for="space in spaces" :key="`slide-space-${space.id}`">
        <space-item :data="space" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import SpaceItem from "./SpaceItem.vue";

export default {
  name: "CarouselSpaces",
  components: {
    SpaceItem
  },
  props: {
    img: {
      type: String,
      default: "/public/assets/img/placeholder-rect.jpg"
    },
    title: {
      type: String,
      default: "H5"
    },
    spaces: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 2,
        spaceBetween: 12,
        // loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          960: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  @media (max-width: 960px) {
    padding-bottom: 5rem;
  }

  .swiper-button-prev,
  .swiper-button-next {
    top: calc(100% - 25px);

    &::after {
      font-size: 16px;
    }
  }

  @media (min-width: 600px) {
    .swiper-button-prev {
      left: 20%;
    }

    .swiper-button-next {
      right: 20%;
    }
  }

  &::v-deep {
    .swiper-pagination-bullet {
      background: #18191a;
      opacity: 0.6;

      &-active {
        opacity: 1;
      }
    }
  }

  .swiper-pagination-bullets {
    width: 75%;
    left: 12.5%;
    display: flex;
    justify-content: space-around;
    bottom: 4%;

    @media (min-width: 600px) {
      width: 40%;
      left: 30%;
    }
  }

  @media (min-width: 960px) {
    .swiper-pagination,
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }
}
</style>

