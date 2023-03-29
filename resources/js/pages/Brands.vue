<template>
    <div>
        <layout-navbar-auth />
        <v-container fluid class="brands">
            <div class="main-wrapper mb-10">
                <v-row align="center">
                    <v-col cols="12" sm="4" md="3" lg="2">
                        <div class="brands-info-header pb-5 pb-sm-0">
                            <v-img class="mr-4" aspect-ratio="1" src="/public/assets/img/bio-placeholder.png" />
                            <div>
                                <h1 class="text-uppercase black--text mb-2">Marcas</h1>
                                <h3 class="text-uppercase black--text"># Marcas</h3>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="8" md="6" lg="4">
                        <p class="brands-info-content black--text mb-0">
                            Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the
                            industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been
                            the industry's • Incluye Lorem Ipsum is simply dummy text.
                        </p>
                    </v-col>
                </v-row>
            </div>
            <v-row class="mb-7">
                <v-col cols="6" sm="6" md="4" lg="2" v-for="(brand, i) in brands" :key="i">
                    <card-brand :bodyImg="brand?.logo" :id="brand?.id" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import NabvarBottomBar from "../components/global/NabvarBottomBar.vue";
import CardBrand from "../components/global/CardBrand.vue";
import LayoutNavbarAuth from "../components/global/LayoutNavbarAuth.vue";

export default {
    data: () => ({
        brands: []
    }),
    components: {
        NabvarBottomBar,
        CardBrand,
        LayoutNavbarAuth
    },
    created() {
        this.getDetails();
    },
    methods: {
        async getDetails() {
            const res = await this.call_api("get", `all-brands`);
            if (res.data.success) {
                this.brands = res.data.data;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.main-wrapper {
    padding: 1rem;
    background: #f5f5f5;
    border-radius: 10px;
}

.brands {
    &-info {
        &-header {
            display: flex;
            align-items: center;

            @media (max-width: 599px) {
                border-bottom: 1px solid #dfdfdf;
            }

            @media (min-width: 600px) {
                border-right: 1px solid #dfdfdf;
            }

            .v-image {
                background-color: #dfdfdf;
                border-radius: 50%;

                max-width: 60px;

                @media (min-width: 600px) {
                    max-width: 84px;
                }
            }

            h1 {
                font-size: 15px;
                font-weight: 700;
                letter-spacing: 0;

                @media (min-width: 600px) {
                    font-size: 24px;
                }
            }

            h3 {
                font-size: 12px;
                font-weight: 500;

                @media (min-width: 600px) {
                    letter-spacing: 1.5px;
                }
            }
        }

        &-content {
            font-family: "Roboto";
            font-size: 12px;
            letter-spacing: 0.5px;

            @media (min-width: 600px) {
                font-size: 15px;
            }
        }
    }
}
</style>
