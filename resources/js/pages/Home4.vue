<template>
    <div>
        <layout-navbar-auth />
        <bar text2="Compartir" icon2="la-share-alt-square" />
        <v-row class="mr-6 ms-6 mb-5">
            <v-col cols="12" md="5" class="brand">
                <div class="div-container">
                    <div class="col1">
                        <v-img class="img" max-width="90px"
                            src="../../public/assets/img/carousel-item-placeholder.png"></v-img>
                    </div>
                    <div class="col2">
                        <h5 class="black--text bold">Marcas</h5>
                        <span class="black--text body-2 text-uppercase"># Marcas</span>
                    </div>
                    <div class="divider"></div>
                    <div class="col3">
                        <p class="black--text">Incluye Lorem Ipsum is simply dummy text of the printing • Lorem
                            Ipsum has
                            been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem
                            Ipsum has
                            been the industry's • Incluye Lorem Ipsum is simply dummy text.</p>
                    </div>
                </div>
                <v-row class="d-flex justify-center">
                    <v-col cols="12" lg="6">
                        <custom-button block light text="Ir a colección" />
                    </v-col>
                    <v-col cols="12" lg="6">
                        <custom-button block light text="Descargar catalogo" />
                    </v-col>
                    <v-col cols="12" lg="6">
                        <custom-button block light text="Conocer historia de marca" />
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="7" class="banner" height="100%">
                <v-img class="img-banner" src="../../public/assets/img/carousel-item-placeholder.png"></v-img>
            </v-col>
        </v-row>
        <div class="bar">
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
        </div>
        <v-divider></v-divider>
        <div class="cards">
            <v-row class="d-flex justify-space-around flex-wrap">
                <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                    <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12"/>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                    <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12"/>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                    <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12"/>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                    <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12"/>
                </v-col>
            </v-row>
        </div>
        <v-row class="d-flex justify-center">
            <v-col cols="10" md="6" lg="5">
                <custom-button block class="mb-5" light text="Ver más" />
            </v-col>
        </v-row>
        <div class="bar2">
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
        </div>
        <div class="cards">
            <v-row class="d-flex justify-space-around flex-wrap">
                <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                    <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12"/>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                    <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12"/>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                    <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12"/>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                    <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12"/>
                </v-col>
            </v-row>
        </div>
        <v-row class="d-flex justify-center">
            <v-col cols="10" md="6" lg="5">
                <custom-button block class="mb-5" light text="Ver más" />
            </v-col>
        </v-row>
        <div class="bar2">
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
        </div>
        <div class="cards">
            <v-row class="d-flex justify-space-around flex-wrap">
                <v-col cols="12" sm="6" md="5" lg="4" xl="3">
                    <product-item4 />
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                    <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12"/>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                    <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12"/>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                    <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12"/>
                </v-col>
            </v-row>
        </div>
        <v-row class="d-flex justify-center">
            <v-col cols="10" md="6" lg="5">
                <custom-button block class="mb-5" light text="Ver más" />
            </v-col>
        </v-row>
        <div class="bar2">
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
        </div>
        <div class="cards">
            <v-row class="d-flex justify-space-around flex-wrap">
                <v-col cols="12" sm="6" md="5" lg="4" xl="3">
                    <product-item4 />
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                    <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12"/>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                    <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12"/>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                    <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12"/>
                </v-col>
            </v-row>
        </div>
        <v-row class="d-flex justify-center">
            <v-col cols="10" md="6" lg="5">
                <custom-button block class="mb-5" light text="Ver más" />
            </v-col>
        </v-row>
        <div class="bar2">
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
            <custom-button class="mr-2 ms-2" light text="Nuevo" />
        </div>
        <div class="cards">
            <v-row class="d-flex justify-space-around flex-wrap">
                <v-col cols="12" sm="12" md="6" lg="4" xl="3">
                    <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12"/>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="4" xl="3">
                    <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12"/>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="4" xl="3">
                    <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12"/>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="4" xl="3">
                    <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12"/>
                </v-col>
            </v-row>
        </div>
        <v-row class="d-flex justify-center">
            <v-col cols="10" md="6" lg="5">
                <custom-button block class="mb-5" light text="Ver más" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Bar from "../components/global/Bar.vue";
import CustomButton from "../components/global/CustomButton.vue";
import Products from "../components/global/Products.vue";
import LayoutNavbarAuth from "../components/global/LayoutNavbarAuth.vue";
import PresentationBanner from "../components/global/PresentationBanner.vue";
import ProductItem4 from "../components/global/ProductItem4.vue";

export default {
    components: {
        Bar,
        CustomButton,
        Products,
        LayoutNavbarAuth,
        PresentationBanner,
        ProductItem4,
    },
    mounted() {
        this.$vuetify.theme.dark = true;
    }
};
</script>

<style lang="scss" scoped>
.img {
    background-color: #dfdfdf;
    border-radius: 50%;
    padding: 10px 0;
}

.img-banner {
    height: 100%;
}

.cards {
    margin: 20px;
    padding: 10px 0;
}

.bar {
    margin: 20px;
    display: flex;
    justify-content: flex-start;
    overflow: auto;
}
.bar2 {
    margin: 20px;
    display: flex;
    justify-content: flex-end;
    overflow: auto;
}

.brand {
    background-color: #F5F5F5;
    padding: 10px;
    border-end-start-radius: 10px;
    border-top-left-radius: 10px;
}

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
    background-color: #DFDFDF;
    width: 100%;
    height: 2px;
    margin: 10px 10px 10px 10px;
}

.banner {
    background-color: #E4E4E4;
    border-end-end-radius: 10px;
    border-top-right-radius: 10px;
}

@media (max-width: 959px) {
    .brand {
        order: 2;
        border-end-start-radius: 0px;
        border-top-left-radius: 0px;
    }

    .banner {
        order: 1;
        border-end-end-radius: 0px;
        border-top-right-radius: 0px;
        height: 250px;
        width: 100%;
    }
}
</style>
