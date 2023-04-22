<template>
    <CarouselSwiper class="carousel-actions" :title="title" :options="swiperOptions">
        <swiper-slide v-for="item in items" :key="`slide-${item.title}`">
            <ShopActionCard
                :title="item.title"
                :img="item.img"
                :description="item.description"
                :to="item.to"
                :href="item.href"
                boxStyle="vertical"
            />
        </swiper-slide>
    </CarouselSwiper>
</template>

<script>
import CarouselSwiper from "./CarouselSwiper.vue";
import ShopActionCard from "../shop/ShopActionCard.vue";

export default {
    name: "CarouselProducts",
    components: {
        CarouselSwiper,
        ShopActionCard
    },
    props: {
        title: String,
        items: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            swiperOptions: {
                slidesPerView: 2,
                spaceBetween: 12,
                breakpoints: {
                    600: {
                        slidesPerView: 2,
                        centeredSlides: true
                    },
                    960: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                        centeredSlides: false
                    }
                }
            }
        };
    }
};
</script>

<style lang="scss" scoped>
::v-deep {
    @media (min-width: 960px) {
        .swiper-container {
            padding-bottom: 0;
        }

        .swiper-pagination,
        .swiper-button-prev,
        .swiper-button-next {
            display: none !important;
        }
    }
}
</style>
