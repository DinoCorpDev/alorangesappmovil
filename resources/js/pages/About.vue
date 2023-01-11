<template>
    <div>
        <layout-navbar />
        <v-container fluid>
            <bar text2="Compartir" icon2="la-share-alt-square" />
            <div class="div-about">
                <v-row no-gutters>
                    <v-col cols="12" md="4">
                        <div class="information">
                            <div class="title">
                                <div>
                                    <v-img
                                        class="img"
                                        max-width="90px"
                                        src="../../public/assets/img/carousel-item-placeholder.png"
                                    ></v-img>
                                </div>
                                <div>
                                    <h6 class="text-uppercase black--text">Información</h6>
                                </div>
                            </div>
                            <v-divider></v-divider>
                            <div class="text">
                                <span class="body1 black--text">
                                    Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the
                                    industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum
                                    has been the industry's • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum
                                    is simply dummy text of the printing • Lorem Ipsum has been the industry's Incluye
                                    Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the
                                    industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum
                                    has been the industry's • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum
                                    is simply dummy text of the printing • Lorem Ipsum has been the industry's • Lorem
                                    Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the
                                    printing • Lorem Ipsum has been the industry's Incluye Lorem Ipsum is simply dummy
                                    text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is
                                    simply dummy text of the printing • Lorem Ipsum has been the industry's • Lorem
                                    Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the
                                    printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy
                                    text of the printing • Lorem Ipsum has been the industry's • Lorem Ipsum has been
                                    the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem
                                    Ipsum has been the industry's Incluye Lorem Ipsum is simply dummy text of the
                                    printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy
                                    text of the printing • Lorem Ipsum has been the industry's • Lorem Ipsum has been
                                    the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem
                                    Ipsum has been the industry's • Lorem Ipsum has been the industry's • Incluye Lorem
                                    Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's
                                    Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the
                                    industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum
                                    has been the industry's • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum
                                    is simply dummy text of the printing • Lorem Ipsum has been the industry's
                                </span>
                            </div>
                            <v-divider></v-divider>
                        </div>
                    </v-col>
                    <v-col cols="12" md="8">
                        <div class="div-carousel">
                            <carousel-description />
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
import Bar from "../components/global/Bar.vue";
import LayoutNavbar from "../components/global/LayoutNavbar.vue";
import CarouselDescription from "../components/global/CarouselDescription.vue";

export default {
    components: {
        Bar,
        CarouselDescription,
        LayoutNavbar
    },
    mounted() {
        this.$vuetify.theme.dark = true;
    }
};
</script>

<style lang="scss" scoped>
.div-carousel {
    background-color: #f5f5f5;
    padding: 10px;
    height: 100%;
}

@media (max-width: 599px) {
    .div-carousel {
        background-color: #f5f5f5;
        padding: 0px;
        height: 100%;
        border-end-end-radius: 10px;
        border-end-start-radius: 10px;
    }
}

.title {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    gap: 10px;
}

.information {
    background-color: #f5f5f5;
    padding: 20px;
    height: 100%;
}

.img {
    background-color: #dfdfdf;
    border-radius: 50%;
    padding: 10px 0;
}

.text {
    margin: 20px 0;
}

@media (max-width: 959px) {
    .text {
        overflow: auto;
        height: 230px;
    }

    .information {
        border-start-start-radius: 10px;
        border-start-end-radius: 10px;
    }

    .div-carousel {
        border-end-start-radius: 10px;
        border-end-end-radius: 10px;
    }
}

@media (min-width: 960px) {
    .text {
        overflow: auto;
        height: 600px;
    }

    .information {
        border-start-start-radius: 10px;
        border-end-start-radius: 10px;
    }

    .div-carousel {
        border-end-end-radius: 10px;
        border-start-end-radius: 10px;
    }
}
</style>
