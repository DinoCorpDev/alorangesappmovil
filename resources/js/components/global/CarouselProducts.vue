<template>
    <CarouselSwiper class="carousel-products" :title="title" :options="swiperOptions">
        <swiper-slide v-for="item in items" :key="`carousel-products-slide-${item.id}`">
            <ProductBox :productDetails="item" />
        </swiper-slide>
    </CarouselSwiper>
</template>

<script>
import CarouselSwiper from "./CarouselSwiper.vue";
import ProductBox from "../product/ProductBox.vue";

export default {
    name: "CarouselProducts",
    components: {
        CarouselSwiper,
        ProductBox
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
                        slidesPerView: 3
                    },
                    960: {
                        slidesPerView: 6,
                        spaceBetween: 20
                    }
                }
            }
        };
    }
};
</script>
