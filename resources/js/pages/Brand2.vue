<template>
    <div>
        <layout-navbar-auth />
        <v-container fluid>
            <v-row class="mr-1 ms-1 mb-5 border-div">
                <v-col cols="12" md="5" class="brand">
                    <div class="div-container">
                        <div class="col1">
                            <div class="div-img">
                                <div>
                                    <v-img
                                        max-width="100px"
                                        src="../../public/assets/img/carousel-item-placeholder.png"
                                    ></v-img>
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
                                industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has
                                been the industry's • Incluye Lorem Ipsum is simply dummy text.
                            </p>
                        </div>
                    </div>
                    <v-row class="d-flex justify-center">
                        <v-col cols="12" md="6" lg="6" xl="6">
                            <custom-button block light text="Ir a colección" />
                        </v-col>
                        <v-col cols="12" md="6" lg="6" xl="6">
                            <custom-button block light text="Descargar catalogo" />
                        </v-col>
                        <v-col cols="12">
                            <custom-button block light text="Conocer historia de marca" />
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="7" class="banner">
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
            <v-divider />
            <v-row>
                <v-col class="bar3">
                    <h5 class="black--text">H5</h5>
                </v-col>
                <v-col class="bar2">
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                </v-col>
            </v-row>
            <div class="cards">
                <v-row class="d-flex justify-space-around flex-wrap">
                    <v-col cols="6" sm="4" md="4" lg="2" xl="2">
                        <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                    <v-col cols="6" sm="4" md="4" lg="2" xl="2">
                        <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                    <v-col cols="6" sm="4" md="4" lg="2" xl="2">
                        <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                    <v-col cols="6" sm="4" md="4" lg="2" xl="2">
                        <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                    <v-col cols="6" sm="4" md="4" lg="2" xl="2">
                        <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                    <v-col cols="6" sm="4" md="4" lg="2" xl="2">
                        <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                </v-row>
            </div>
            <v-row class="d-flex justify-center">
                <v-col cols="10" md="6" lg="5">
                    <custom-button block class="mb-5" light text="Ver más" />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="bar3">
                    <h5 class="black--text">H5</h5>
                </v-col>
                <v-col class="bar2">
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                </v-col>
            </v-row>
            <div class="cards">
                <v-row class="d-flex justify-space-around flex-wrap">
                    <v-col cols="6" sm="4" md="4" lg="2" xl="2">
                        <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                    <v-col cols="6" sm="4" md="4" lg="2" xl="2">
                        <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                    <v-col cols="6" sm="4" md="4" lg="2" xl="2">
                        <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                    <v-col cols="6" sm="4" md="4" lg="2" xl="2">
                        <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                    <v-col cols="6" sm="4" md="4" lg="2" xl="2">
                        <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                    <v-col cols="6" sm="4" md="4" lg="2" xl="2">
                        <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                </v-row>
            </div>
            <v-row class="d-flex justify-center">
                <v-col cols="10" md="6" lg="5">
                    <custom-button block class="mb-5" light text="Ver más" />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="bar3">
                    <h5 class="black--text">H5</h5>
                </v-col>
                <v-col class="bar2">
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                </v-col>
            </v-row>
            <div class="cards">
                <v-row class="d-flex justify-space-around flex-wrap">
                    <v-col cols="12" sm="8" md="8" lg="4" xl="4">
                        <product-item5 />
                    </v-col>
                    <v-col cols="6" sm="4" md="4" lg="2" xl="2">
                        <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                    <v-col cols="6" sm="4" md="4" lg="2" xl="2">
                        <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                    <v-col cols="6" sm="4" md="4" lg="2" xl="2">
                        <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                    <v-col cols="6" sm="4" md="4" lg="2" xl="2">
                        <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                </v-row>
            </div>
            <v-row class="d-flex justify-center">
                <v-col cols="10" md="6" lg="5">
                    <custom-button block class="mb-5" light text="Ver más" />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="bar3">
                    <h5 class="black--text">H5</h5>
                </v-col>
                <v-col class="bar2">
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                </v-col>
            </v-row>
            <div class="cards">
                <v-row class="d-flex justify-space-around flex-wrap">
                    <v-col cols="12" sm="8" md="8" lg="4" xl="4">
                        <product-item5 />
                    </v-col>
                    <v-col cols="6" sm="4" md="4" lg="2" xl="2">
                        <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                    <v-col cols="6" sm="4" md="4" lg="2" xl="2">
                        <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                    <v-col cols="6" sm="4" md="4" lg="2" xl="2">
                        <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                    <v-col cols="6" sm="4" md="4" lg="2" xl="2">
                        <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                </v-row>
            </div>
            <v-row class="d-flex justify-center">
                <v-col cols="10" md="6" lg="5">
                    <custom-button block class="mb-5" light text="Ver más" />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="bar3">
                    <h5 class="black--text">H5</h5>
                </v-col>
                <v-col class="bar2">
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                    <custom-button class="mr-2 ms-2" light text="Nuevo" />
                </v-col>
            </v-row>
            <div class="cards">
                <v-row class="d-flex justify-space-around flex-wrap">
                    <v-col cols="12" sm="6" md="6" lg="3" xl="3">
                        <products2 reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="3" xl="3">
                        <products2 reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="3" xl="3">
                        <products2 reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="3" xl="3">
                        <products2 reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                </v-row>
            </div>
            <v-row class="d-flex justify-center">
                <v-col cols="10" md="6" lg="5">
                    <custom-button block class="mb-5" light text="Ver más" />
                </v-col>
            </v-row>
        </v-container>
        <footer-custom />
    </div>
</template>

<script>
import NabvarBottomBar from "../components/global/NabvarBottomBar.vue";
import FooterCustom from "../components/global/FooterCustom.vue";
import CustomButton from "../components/global/CustomButton.vue";
import Products from "../components/global/Products.vue";
import Products2 from "../components/global/Products2.vue";
import LayoutNavbarAuth from "../components/global/LayoutNavbarAuth.vue";
import PresentationBanner from "../components/global/PresentationBanner.vue";
import ProductItem5 from "../components/global/ProductItem5.vue";

export default {
    components: {
        NabvarBottomBar,
        CustomButton,
        Products,
        Products2,
        LayoutNavbarAuth,
        PresentationBanner,
        ProductItem5,
        FooterCustom
    },
    mounted() {
        this.$vuetify.theme.dark = true;
    }
};
</script>

<style lang="scss" scoped>
.div-img {
    background-color: #dfdfdf;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.img-banner {
    height: 100%;
}

.cards {
    margin: 20px 0px;
    padding: 10px 0;
}

.bar2 {
    margin: 20px 0px;
    display: flex;
    justify-content: flex-end;
    overflow: auto;
}
.bar3 {
    margin: 20px 0px;
    display: flex;
    justify-content: flex-start;
    overflow: auto;
}

.brand {
    background-color: #fff;
    border-end-start-radius: 10px;
    border-top-left-radius: 10px;
    height: 413px;
}

.border-div {
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    height: 413px;
}
@media (max-width: 768px) {
    .border-div {
        border: 1px solid #e4e4e4;
        border-radius: 10px;
        height: 664px;
    }
}
.div-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
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

.banner {
    background-color: #e4e4e4;
    border-end-end-radius: 10px;
    border-top-right-radius: 10px;
    height: 413px;
}

@media (max-width: 959px) {
    .brand {
        order: 2;
        border-end-start-radius: 10px;
        border-start-start-radius: 0px;
        border-end-end-radius: 10px;
    }

    .banner {
        order: 1;
        border-end-end-radius: 0px;
        border-start-start-radius: 10px;
        border-start-end-radius: 10px;
        height: 250px;
        width: 100%;
    }
}
</style>
