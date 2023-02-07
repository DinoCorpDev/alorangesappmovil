<template>
    <v-carousel :hide-delimiters="hideDelimiters" :show-arrows="showArrows" style="height: 100%" height="auto">
        <template v-slot:prev="{ on, attrs }">
            <v-btn small color="#000000" v-bind="attrs" v-on="on">
                <i class="las la-angle-left"></i>
            </v-btn>
        </template>
        <template>
            <div class="texts">
                <h4 class="white--text text-uppercase">{{ title }}</h4>
                <span class="body1 white--text">{{ description }}</span>
                <br />
                <span class="body2 white--text text-uppercase">{{ description2 }}</span>
            </div>
        </template>
        <template v-slot:next="{ on, attrs }">
            <v-btn small color="#000000" v-bind="attrs" v-on="on">
                <i class="las la-angle-right"></i>
            </v-btn>
        </template>
        <template v-if="slides.length > 0">
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                <v-img v-if="slide.type === 'image'" :src="slide.src" :aspect-ratio="aspectRatio" />
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
</template>

<script>
import { title } from "process";

export default {
    name: "CarouselDescription",
    props: {
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
        title: String,
        description: String,
        description2: String
    },
    data() {
        return {
            itemPlaceholderUrl: "/public/assets/img/carousel-item-placeholder.png"
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
        }
    }
};
</script>

<style lang="scss" scoped>
.v-carousel {
    .v-window-item {
        display: flex;
        align-items: center;

        video,
        iframe {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
        }
    }
}

.v-carousel {
    border-radius: 10px;
    background: rgb(0, 0, 0);
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.05) 100%);

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

        .v-window__container {
            height: 100% !important;
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

.texts {
    position: absolute;
    top: calc(80% - 52px);
    padding: 0px 20px;
}
</style>
