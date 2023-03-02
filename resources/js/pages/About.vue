<template>
    <div>
        <layout-navbar-auth />
        <v-container class="about my-4" fluid>
            <div class="main-wrapper">
                <v-row>
                    <v-col cols="12" md="4">
                        <aside class="about-info">
                            <div class="about-info-header">
                                <v-img class="mr-4" aspect-ratio="1" src="/public/assets/img/bio-placeholder.png" />
                                <h1 class="text-uppercase black--text">Información</h1>
                            </div>
                            <v-divider class="my-5" />
                            <div class="about-info-content pr-4">
                                <p class="black--text">
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
                                </p>
                            </div>
                            <v-divider class="my-5" />
                            <custom-button text="Perfil" block color="grey" />
                        </aside>
                    </v-col>
                    <v-col cols="12" md="8">
                        <carousel-description />
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
import LayoutNavbarAuth from "../components/global/LayoutNavbarAuth.vue";
import CarouselDescription from "../components/global/CarouselDescription.vue";
import CustomButton from "../components/global/CustomButton.vue";

export default {
    components: {
        CarouselDescription,
        LayoutNavbarAuth,
        CustomButton
    }
};
</script>

<style lang="scss" scoped>
.main-wrapper {
    padding: 1rem;
    background: #f5f5f5;
    border-radius: 10px;
    width: 97.5%;
    margin: 0 auto;
}

.about {
    &-info {
        &-header {
            display: flex;
            align-items: center;

            .v-image {
                background-color: #dfdfdf;
                border-radius: 50%;

                max-width: 60px;

                @media (min-width: 600px) {
                    max-width: 80px;
                }

                @media (min-width: 960px) {
                    max-width: 100px;
                }
            }

            h1 {
                font-size: 15px;
                font-weight: 700;
                letter-spacing: 0;
            }
        }

        &-content {
            overflow: auto;
            height: 250px;

            @media (min-width: 960px) {
                height: 600px;
            }

            p {
                font-family: "Roboto";
                font-size: 12px;

                @media (min-width: 600px) {
                    font-size: 15px;
                }
            }

            /* width */
            &::-webkit-scrollbar {
                width: 3px;
            }

            /* Track */
            &::-webkit-scrollbar-track {
                background: #b5b5b5;
                border-radius: 1px;
            }

            /* Handle */
            &::-webkit-scrollbar-thumb {
                background: rgba(#5a5a5a, 0.8);
                border-radius: 1px;
            }

            /* Handle on hover */
            &::-webkit-scrollbar-thumb:hover {
                background: #5a5a5a;
            }
        }
    }
}
</style>
