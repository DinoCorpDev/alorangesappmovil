<template>
    <v-row class="d-flex justify-center flex-wrap">
        <v-col cols="12" md="3" sm="6">
            <div class="card">
                <div class="cols">
                    <h2 class="text-uppercase">{{ title }}</h2>
                </div>
            </div>
        </v-col>
        <card :description="description1" :title="titleCard1" />
        <card :description="description2" :title="titleCard2" />
        <card :description="description3" :title="titleCard3" />
    </v-row>
</template>

<script>
import Card from "./Card.vue";
export default {
    name: "CardsCustom",
    props: {
        title: String,
        titleCard1: String,
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
    border-radius: 10px;
}
@media (max-width: 599px) {
    .card {
        height: 560px;
    }
}
</style>
