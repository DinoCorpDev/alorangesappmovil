<template>
    <v-banner
    >
        <v-img
            class="rounded"
            :src="img"
            aspect-ratio="3.12"
        >
            <div class="cols">
                <div class="col1">
                    <h1 class="text-uppercase white--text">{{ title }}</h1>
                </div>
                <div class="col2">
                    <span class="white--text">{{ descripcion }}</span>
                    <br>
                    <span class="white--text">{{ idItem }}</span>
                </div>
            </div>
        </v-img>
    </v-banner>
</template>

<script>
export default {
    name: "BannerCategoryProduct",
    props: {
        title: String,
        descripcion: String,
        img: {
            type: String,
            default: "/public/assets/img/placeholder-rect.jpg",
        },
        idItem: String,
        variant: {
            type: String,
            default: "black",
        },
    },
};
</script>

<style>
.cols {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0px 10px 20px 20px;
}
.col1 {
    width: 50%;
}
.col2 {
    width: 50%;
}
</style>
