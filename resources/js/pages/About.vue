<template>
    <div>
        <LayoutNavbarAuth />
        <v-container class="about my-4" fluid>
            <div class="main-wrapper">
                <v-row v-if="!detailsLoading">
                    <v-col cols="12" md="4">
                        <aside class="about-info">
                            <div class="about-info-header">
                                <v-img class="mr-4" aspect-ratio="1" src="/public/assets/img/bio-placeholder.png" />
                                <h1 class="text-uppercase black--text">
                                    {{ itemData.name || "Información" }}
                                </h1>
                            </div>
                            <v-divider class="my-5" />
                            <div class="about-info-content pr-4">
                                <p class="black--text">
                                    {{ itemData.biografia }}
                                </p>
                            </div>
                            <v-divider class="my-5" />
                            <CustomButton
                                text="Perfil"
                                block
                                color="grey"
                                :to="{ name: 'BrandDetails', params: { slug: itemData.slug } }"
                            />
                        </aside>
                    </v-col>
                    <v-col cols="12" md="8">
                        <CarouselDescription />
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
import CarouselDescription from "../components/global/CarouselDescription.vue";
import CustomButton from "../components/global/CustomButton.vue";
import LayoutNavbarAuth from "../components/global/LayoutNavbarAuth.vue";

export default {
    components: {
        CarouselDescription,
        CustomButton,
        LayoutNavbarAuth
    },
    data() {
        return {
            itemData: null,
            detailsLoading: true
        };
    },
    async created() {
        this.getDetails();
    },
    methods: {
        async getDetails() {
            const routeName = this.$route.name;

            if (routeName == "AboutBrand") {
                const res = await this.call_api("get", `brand/details/${this.$route.params.slug}`);

                if (res.data.success) {
                    this.itemData = res.data.data;
                } else {
                    this.snack({
                        message: res.data.message,
                        color: "red"
                    });

                    this.$router.push({ name: "404" });
                }

                this.detailsLoading = false;
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
