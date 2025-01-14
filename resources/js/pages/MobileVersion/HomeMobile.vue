<template>
    <v-container style="background-color: white">
        <v-row v-if="!showRecuperarPass" class="center-items ma-2 ma-sm-6">
            <v-col col="12" sm="12" md="12" class="bg-green-ligth border-style-banner">
                <CarouselSpaces title="" img="/public/assets/img/home/icon-be-there.svg" :spaces="itemsArray" />
            </v-col>
        </v-row>
        <RecuperarPassCodigo v-if="showRecuperarPass" :email="this.$route.query.email" />
        <!-- <VerifyAccount v-model="showVerifyAccount" /> -->
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { sliderSeeder } from "../../seeders/products";

import CarouselSpaces from "./globalComponents/CarouselSpaces.vue";
import RecuperarPassCodigo from "../../components/auth/RecuperarPassCodigo.vue";
import VerifyAccount from "../../components/auth/VerifyAccount.vue";
import SearchInput from "../../components/global/SearchInput.vue";

export default {
    components: {
        CarouselSpaces,
        RecuperarPassCodigo,
        VerifyAccount,
        SearchInput
    },
    data() {
        return {
            showRecuperarPass: false,
            showVerifyAccount: false,
            itemsArray: [
                {
                    title: "Papeleria",
                    img: "/public/assets/img/PapeleriaMobile.png",
                    description: "Papeleria",
                    url: "/shop/papeleria"
                },
                {
                    title: "Aseo",
                    img: "/public/assets/img/AseoMobile.png",
                    description: "Aseo",
                    url: "/shop/aseo"
                },
                {
                    title: "Cafeteria",
                    img: "/public/assets/img/CafeteriaMobile.png",
                    description: "Cafeteria",
                    url: "/shop/cafeteria"
                },
                {
                    title: "Seguridad industrial",
                    img: "/public/assets/img/SeguridadIndMobile.png",
                    description: "Seguridad ind",
                    url: "/shop/seguridad-industrial"
                },
                {
                    title: "Cartonería",
                    img: "/public/assets/img/CartoneriaMobile.png",
                    description: "Cartoneria",
                    url: "/shop/cartoneria"
                },
                {
                    title: "Accesorios de oficina",
                    img: "/public/assets/img/AccesoriosOffMobile.png",
                    description: "Tecnologia",
                    url: "/shop/tecnologia"
                },
                {
                    title: "Botiqueria",
                    img: "/public/assets/img/BotiqueriaMobile.png",
                    description: "Botiqueria",
                    url: "#"
                },
                {
                    title: "Uniformes",
                    img: "/public/assets/img/DotacionMobile.png",
                    description: "Dotación",
                    url: "#"
                }
            ],
            selectedCode: null,
            sliderSeeder,
            sliderItems: [
                {
                    src: "/public/assets/img/home/banner-home.png",
                    type: "image"
                }
            ]
        };
    },
    computed: {
        ...mapGetters("app", ["userLanguageObj", "allLanguages"])
    },
    created() {
        if (this.$route.query.modal === "Password") {
            this.showRecuperarPass = true;
        }
        if (
            this.$route.query.modal == "VerifyAccount" ||
            this.$route.query.modal == "verifyaccount" ||
            this.$route.query.modal == "VerifyAccount"
        ) {
            this.showVerifyAccount = true;
        }
    },
    mounted() {
        this.$vuetify.theme.dark = true;

        this.selectedCode = this.userLanguageObj.code;

        this.scrollToCenter();
        this.updateBreadcrumb();
        // if(this.$route.query.modal == 'Password'){
        //     this.showRecuperarPass = true;
        // }
    },
    methods: {
        ...mapActions("app", ["setLanguage"]),
        agree() {
            if (this.$i18n.locale !== this.selectedCode) {
                this.setLanguage(this.selectedCode);
                window.location.reload();
            }
        },
        updateBreadcrumb() {
            const newItems = [{ text: "disabled", href: "/", disabled: true }];
            this.$store.dispatch("breadcrumb/setBreadcrumbItems", newItems);
        }
    }
};
</script>

<style lang="scss">
body {
    overflow-x: hidden;
    margin: 0;
}
.search-menu {
    @media (max-width: 700px) {
        max-width: 100% !important;
    }

    @media (min-width: 700px) {
        max-width: 90% !important;
    }
}
.center-items {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
}
.wrapper-app-banner {
    // background-image: url("/public/assets/img/bg10400.png");
    background-position: center;
    background-size: contain;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.imgsize-cel {
    width: 75%;
    height: auto;
}
.imgsize-btn-dwn {
    width: 200px;
    height: auto;
}
.title-banner-dwn {
    font-size: 25px;
    font-weight: 700;
}
</style>

<style lang="scss" scoped>
.home {
    &-main {
        &-description {
            color: black;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            @media (min-width: 600px) {
                font-size: 31px;
                line-height: 37px;
            }
        }
        &-title {
            font-size: 30px;
            line-height: 36px;
            font-weight: 600;
            @media (min-width: 600px) {
                line-height: 57px;
                font-size: 53px;
            }
        }
        &-carousel {
            height: 80vh !important;
            max-height: 786px;

            &::v-deep {
                .v-carousel__item {
                    height: 100%;
                }
            }
        }
    }

    &-portfolio {
        &-wrap {
            border: 1px solid #fff;
            border-radius: 10px;
            padding: 1rem;
            height: 100%;
            min-height: 560px;
            display: flex;
            align-items: center;
        }

        &-title {
            @media (max-width: 600px) {
                width: 60%;
            }
        }
    }
}

.temp {
    padding: 0 15%;
}
h3 {
    font-size: 12px;
    font-weight: 700;
    @media (min-width: 600px) {
        font-size: 35px;
        font-weight: 500;
    }
}
.preambulo-text {
    font-size: 10px;
    font-weight: 400;
    @media (min-width: 600px) {
        font-size: 25px;
    }
}
.theme--dark {
    .preambulo .rounded-section {
        background-color: #18191a;
    }
}

.v-select {
    text-transform: uppercase;
}

.border-style-banner {
    border-radius: 20px;
}

.bg-orange {
    background: #f58634;
}
.bg-orange-ligth {
    background: #f5cea6;
}
.bg-green-ligth {
    background: #f3f9ec;
}
.center-flex {
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media (min-width: 835px) {
    .container {
        max-width: 1920px;
    }
}

.div-map {
    width: 100%;
}

.map {
    border: 1px solid #59595a;
    border-radius: 400px;
    padding: 2% 15%;
}

.img-map {
    border-radius: 50%;
}

@media (max-width: 834px) {
    .div-map {
        width: 100%;
    }

    .map {
        border: 1px solid #59595a;
        border-radius: 50%;
        padding: 20% 0;
    }
}
.Wrapper-AppStore {
    display: flex;
}
.Wrapper-AppStore-responsive {
    display: flex;
    flex-direction: column;
}
.wrapper-dwn-app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.banner-title {
    // font-family: 'Montserrat', Courier, monospace;
    font-size: 35px;
    @media (min-width: 600px) {
        font-size: 58px;
    }
}
</style>
