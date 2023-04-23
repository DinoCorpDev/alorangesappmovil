<template>
    <carousel-swiper :title="title" :options="swiperOptions">
        <swiper-slide v-for="item in items" :key="`slide-${item.title}`">
            <portfolio-card
                :title="item.title"
                :img="item.img"
                :icon="item.icon"
                :description="item.description"
                :to="item.to"
            />
        </swiper-slide>
    </carousel-swiper>
</template>

<script>
import CarouselSwiper from "./CarouselSwiper.vue";
import PortfolioCard from "./PortfolioCard.vue";

export default {
    name: "CarouselPortfolio",
    components: {
        CarouselSwiper,
        PortfolioCard
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
                slidesPerView: 1,
                spaceBetween: 12,
                breakpoints: {
                    960: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 20
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
