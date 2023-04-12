<template>
    <v-row class="primary rounded-section" no-gutters>
        <v-col>
            <v-carousel
                :hide-delimiters="hideDelimiters"
                :show-arrows="showArrows"
                style="height: 100%;"
                height="600px"
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
                        <v-img
                            v-if="slide.type === 'image'"
                            :src="slide.src"
                            :aspect-ratio="aspectRatio"
                            height="600px"
                        >
                            <v-col cols="12" md="5" style="padding-top: 320px;">
                                <div class="pa-4">
                                    <div>
                                        <h3 class="title-baner">{{ title }}</h3>
                                        <p class="body1">{{ description }}</p>
                                        <h7 class="text-uppercase">{{ tags }}</h7>
                                    </div>
                                    <div class="mt-4">
                                        <custom-button :text="namebutton" />
                                        <custom-button v-if="showbutton" light text="VER MÁS" class="ml-5" />
                                    </div>
                                </div>
                            </v-col>
                        </v-img>
                        <v-responsive v-if="slide.type === 'video'" :aspect-ratio="aspectRatio">
                            <video autoplay>
                                <source :src="slide.src" type="video/mp4" />
                            </video>
                        </v-responsive>
                        <v-responsive v-if="slide.type === 'iframe'" :aspect-ratio="aspectRatio">
                            <iframe
                                :src="`${slide.src}?controls=0&autoplay=1&fs=0&modestbranding&rel=0&showinfo=0&disablekb=0`"
                                frameborder="0"
                                allowfullscreen
                            ></iframe>
                        </v-responsive>
                    </v-carousel-item>
                </template>
                <v-carousel-item v-else>
                    <v-img :src="itemPlaceholderUrl" :aspect-ratio="aspectRatio" contain />
                </v-carousel-item>
            </v-carousel>
        </v-col>
    </v-row>
</template>

<script>
import Carousel from "./Carousel";
import CustomButton from "./CustomButton.vue";

export default {
    name: "CarouselTabs",
    props: {
        title: {
            type: String,
            default: "H4"
        },
        description: {
            type: String,
            default:
                "Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has"
        },
        tags: {
            type: String,
            default: "# INSTALACIONES • # MANTENIMIENTO • # PLANES"
        },
        showArrows: {
            type: Boolean,
            default: true
        },
        hideDelimiters: {
            type: Boolean,
            default: false
        },
        slides: {
            type: Array,
            default: () => []
        },
        type: {
            type: String,
            default: "single"
        },
        namebutton: {
            type: String,
            default: "IR A PLANES"
        },
        showbutton: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            presetationBannerLogoUrl: "/public/assets/img/presentation-banner-logo.png",
            itemPlaceholderUrl: "/public/assets/img/carousel-item-placeholder.png"
        };
    },
    components: {
        Carousel,
        CustomButton
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
        }
    }
};
</script>

<style lang="scss" scoped>
.title-baner {
    font-size: 35px;
}
.v-carousel {
    @media (max-width: 960px) {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

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
        .v-window__prev {
            left: 60%;
        }
        .v-window__container {
            height: 100% !important;
        }
        .v-carousel__controls {
            background: transparent;
            padding-right: 6%;
            justify-content: end;
            padding-bottom: 1%;

            .v-item-group {
                width: 30%;
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
