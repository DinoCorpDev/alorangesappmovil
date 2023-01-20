<template>
    <div>
        <layout-navbar-auth />
        <v-container fluid>
            <div class="bar">
                <h5 class="filter">Filtro</h5>
                <custom-button class="mr-2 ms-2" light text="Nuevo" />
                <custom-button class="mr-2 ms-2" light text="Colecciones" />
                <custom-button class="mr-2 ms-2" light text="Planes" />
                <custom-button class="mr-2 ms-2" light text="Popular" />
                <custom-button class="mr-2 ms-2" light text="Marcas" />
                <custom-button class="mr-2 ms-2" light text="Ofertas" />
            </div>

            <v-divider></v-divider>
            <div class="cards">
                <v-row class="d-flex flex-wrap">
                    <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                        <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                    <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                        <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                    <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                        <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                    <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                        <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                    <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                        <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                    <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                        <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12" />
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
import CustomButton from "../components/global/CustomButton.vue";
import Products from "../components/global/Products.vue";
import LayoutNavbarAuth from "../components/global/LayoutNavbarAuth.vue";

export default {
    components: {
        CustomButton,
        Products,
        LayoutNavbarAuth
    }
};
</script>

<style lang="scss" scoped>
.img {
    background-color: #dfdfdf;
    border-radius: 50%;
    padding: 10px 0;
}

.cards {
    padding: 10px 0;
    margin: 20px 0px;
}

.filter {
    line-height: 42px;
    padding-right: 30px;
    display: inline-block;
}
</style>
