<template>
    <div>
        <layout-navbar-auth />
        <v-container fluid>
            <nabvar-bottom-bar text2="Compartir" icon2="la-share-alt-square" />
            <div class="brand">
                <div class="div-container">
                    <div class="col1">
                        <div class="div-img">
                            <div>
                                <v-img max-width="100px"
                                    src="../../public/assets/img/carousel-item-placeholder.png"></v-img>
                            </div>
                        </div>
                    </div>
                    <div class="col2">
                        <h5 class="black--text bold">Marcas</h5>
                        <span class="black--text body-2 text-uppercase"># Marcas</span>
                    </div>
                    <div class="divider"></div>
                    <div class="col3">
                        <p class="black--text">
                            Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the
                            industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been
                            the industry's • Incluye Lorem Ipsum is simply dummy text.
                        </p>
                    </div>
                </div>
            </div>
            <div class="cards">
                <v-row class="d-flex flex-wrap">
                    <v-col cols="6" sm="6" md="4" lg="3" xl="2">
                        <card-brand />
                    </v-col>
                    <v-col cols="6" sm="6" md="4" lg="3" xl="2">
                        <card-brand />
                    </v-col>
                    <v-col cols="6" sm="6" md="4" lg="3" xl="2">
                        <card-brand />
                    </v-col>
                    <v-col cols="6" sm="6" md="4" lg="3" xl="2">
                        <card-brand />
                    </v-col>
                    <v-col cols="6" sm="6" md="4" lg="3" xl="2">
                        <card-brand />
                    </v-col>
                    <v-col cols="6" sm="6" md="4" lg="3" xl="2">
                        <card-brand />
                    </v-col>
                    <v-col cols="6" sm="6" md="4" lg="3" xl="2">
                        <card-brand />
                    </v-col>
                    <v-col cols="6" sm="6" md="4" lg="3" xl="2">
                        <card-brand />
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
import NabvarBottomBar from "../components/global/NabvarBottomBar.vue";
import CardBrand from "../components/global/CardBrand.vue";
import LayoutNavbarAuth from "../components/global/LayoutNavbarAuth.vue";

export default {
    components: {
        NabvarBottomBar,
        CardBrand,
        LayoutNavbarAuth
    },
    mounted() {
        this.$vuetify.theme.dark = true;
    }
};
</script>

<style lang="scss" scoped>
.brand {
    margin: 20px 0px;
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 10px;
}

.div-container {
    height: 100%;
    display: flex;
    align-items: center;
}

.col1,
.col2 {
    max-width: 100%;
    padding: 5px 20px 5px 20px;
}

.col3 {
    width: 500px;
    padding: 5px 20px 5px 20px;
}

.div-img {
    background-color: #dfdfdf;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cards {
    margin: 20px 0px;
    padding: 10px 0;
}

.divider {
    background-color: #dfdfdf;
    width: 2px;
    height: 120px;
    margin: 5px 25px 5px 25px;
}

@media (max-width: 960px) {
    .div-container {
        display: flex;
        flex-wrap: wrap;
    }

    .col1,
    .col2 {
        max-width: 300px;
        padding: 5px 10px 5px 10px;
    }

    .col3 {
        width: 100%;
        padding: 5px 10px 5px 10px;
    }

    .divider {
        background-color: #dfdfdf;
        width: 100%;
        height: 2px;
        margin: 10px 10px 10px 10px;
    }
}
</style>
