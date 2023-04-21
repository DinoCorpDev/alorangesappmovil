<template>
    <div class="carousel-portfolio">
        <h5 class="mb-3">{{ title || "H5" }}</h5>
        <swiper :options="swiperOptions">
            <swiper-slide v-for="item in items" :key="`slide-${item.title}`">
                <portfolio-card
                    :title="item.title"
                    :img="item.img"
                    :icon="item.icon"
                    :description="item.description"
                    :to="item.to"
                />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
import PortfolioCard from "./PortfolioCard.vue";

export default {
    name: "CarouselPortfolio",
    components: {
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
.swiper-container {
    padding-bottom: 5rem;

    .swiper-button-prev,
    .swiper-button-next {
        top: calc(100% - 38px);
        background: rgba(#000000, 0.5);
        width: 38px;
        height: 38px;
        border-radius: 5px;
        transition: all 0.1s ease-in-out;

        &:hover {
            background: rgba(#000000, 0.8);
        }

        &::after {
            color: #fff;
        }
    }

    .swiper-button-prev {
        left: 0;

        @media (min-width: 600px) {
            left: 20%;
        }

        @media (min-width: 960px) {
            left: 37%;
        }
    }

    .swiper-button-next {
        right: 0;

        @media (min-width: 600px) {
            right: 20%;
        }

        @media (min-width: 960px) {
            right: 37%;
        }
    }

    .swiper-slide {
        height: auto;
    }

    .swiper-pagination-bullets {
        bottom: 22px;
        width: 70%;
        right: 0;
        margin: auto;
        display: flex;
        justify-content: space-around;

        @media (min-width: 600px) {
            width: 30%;
        }

        @media (min-width: 960px) {
            width: 15%;
        }

        &::v-deep {
            .swiper-pagination-bullet {
                background: #18191a;
            }
        }
    }
}
</style>
