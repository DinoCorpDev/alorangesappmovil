<template>
    <div>
        <layout-navbar-auth />
        <bar text2="Compartir" icon2="la-share-alt-square" />
        <div class="bar">
            <h5 class="filter">Filtro</h5>
            <custom-button class="mr-2 ms-2" light text="Nuevo"/>
            <custom-button class="mr-2 ms-2" light text="Colecciones"/>
            <custom-button class="mr-2 ms-2" light text="Planes"/>
            <custom-button class="mr-2 ms-2" light text="Popular"/>
            <custom-button class="mr-2 ms-2" light text="Marcas"/>
            <custom-button class="mr-2 ms-2" light text="Ofertas"/>
        </div>

        <v-divider></v-divider>
        <div class="cards">
            <v-row class="d-flex justify-space-around flex-wrap">
                <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12"/>
                <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12"/>
                <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12"/>
                <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12"/>
                <products reference="QWEEQE" name="Lorem" brand="BMW" price="123.123123.12"/>
                <products />
            </v-row>
        </div>
    </div>
</template>

<script>
import Bar from "../components/global/Bar.vue";
import CustomButton from "../components/global/CustomButton.vue";
import Products from "../components/global/Products.vue";
import LayoutNavbarAuth from "../components/global/LayoutNavbarAuth.vue";

export default {
    components: {
        Bar,
        CustomButton,
        Products,
        LayoutNavbarAuth,
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

.cards {
    margin: 10px;
    padding: 10px 0;
}

.bar {
    margin: 20px;
    display: flex;
    justify-content: flex-start;
    overflow: auto;
}
.filter {
    line-height: 42px;
    padding-right: 30px;
}
</style>
