<template>
    <div class="product-gallery" v-show="!isLoading">
        <v-tabs :hide-slider="true" background-color="transparent" grow height="38px" v-model="currentTab">
            <v-tab :ripple="false">Imagenes</v-tab>
            <v-tab :ripple="false">Videos</v-tab>
            <v-tab :ripple="false">Ficha Técnica</v-tab>
        </v-tabs>
        <v-tabs-items v-model="currentTab">
            <v-tab-item>
                <Carousel
                    :slides="galleryImages"
                    :showArrows="galleryImages.length > 1"
                    :hideDelimiters="galleryImages.length <= 1"
                />
            </v-tab-item>
            <v-tab-item>
                <Carousel
                    :slides="galleryVideos"
                    :showArrows="galleryVideos.length > 1"
                    :hideDelimiters="galleryVideos.length <= 1"
                />
            </v-tab-item>
            <v-tab-item>
                <img :src="dataSheet" />
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
import Carousel from "../../components/global/Carousel.vue";

export default {
    props: {
        isLoading: { type: Boolean, default: true },
        galleryImages: { type: Array, required: true, default: () => [] },
        galleryVideos: { type: Array, required: true, default: () => [] },
        dataSheet: { type: String, required: true, default: "" }
    },
    data: () => ({
        currentTab: 0
    }),
    components: {
        Carousel
    }
};
</script>

<style lang="scss" scoped>
.product-gallery {
    position: relative;
    height: 100%;
    min-height: 70vh;

    .v-tabs {
        position: absolute;
        z-index: 2;
        width: 92.5%;
        margin: auto;
        left: 0;
        right: 0;
        top: 0.75rem;

        @media (min-width: 600px) {
            width: 90%;
            top: 1.5rem;
        }

        &::v-deep {
            .v-slide-group__prev,
            .v-slide-group__next {
                display: none !important;
            }

            .v-tabs-bar__content {
                gap: 0.75rem;

                @media (min-width: 600px) {
                    gap: 1.5rem;
                }
            }
        }

        &-items {
            height: 100%;

            .v-window-item {
                flex: 1;
            }
        }

        .v-tab {
            background-color: #f5f5f5;
            border-radius: 5px;
            color: #000000 !important;
            font-size: var(--font-size-btn);
            font-weight: 600;
            letter-spacing: 1.25px;
            line-height: 17px;
            // flex: 1; // All tabs same width

            &:not(.v-tab--active):hover {
                background-color: rgba(#000000, 0.5);
                color: #ffffff !important;
            }

            &--active {
                background-color: #000000;
                color: #ffffff !important;
            }
        }
    }
}
</style>
