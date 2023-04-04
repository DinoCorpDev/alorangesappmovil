<template>
    <v-row class="d-flex justify-center flex-wrap">
        <v-col cols="12" md="3" sm="6">
            <div class="card">
                <div class="cols">
                    <h2>{{ title }}</h2>
                </div>
            </div>
        </v-col>
        <card :description="description1" :title="titleCard1" :img="'/public/assets/img/home/diseño_de_espacios.png'" />
        <card :description="description2" :title="titleCard2" :img="'/public/assets/img/home/electrodomesticos.png'" />
        <card :description="description3" :title="titleCard3" :img="'/public/assets/img/home/servicios_card.png'" />
    </v-row>
</template>

<script>
import Card from "./Card.vue";
export default {
    name: "CardsCustom",
    props: {
        title: String,
        titleCard1: "Diseño de espacios",
        titleCard2: String,
        titleCard3: String,
        description1: String,
        description2: String,
        description3: String
    },
    components: {
        Card
    }
};
</script>

<style lang="scss" scoped>
.cols {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 15px;
}
.card {
    border: 1px solid #707070;
    height: 100%;
    max-height: 760px;
    border-radius: 10px;
}
@media (max-width: 599px) {
    .card {
        height: 560px;
    }
}
</style>
