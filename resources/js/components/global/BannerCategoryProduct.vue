<template>
    <v-banner
    :color="variant"
    class="rounded"
    >
        <div class="cols">
            <div class="col1">
                <h2 class="text-uppercase white--text">{{ title }}</h2>
            </div>
            <div class="col2">
                <v-img
                    class="rounded"
                    :src="img"
                >
            </v-img>
            </div>
            <div class="col3">
                <p class="white--text">{{ descripcion }}</p>
                <custom-button
                    text="Compartir"
                    block
                />
            </div>
        </div>
    </v-banner>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
    name: "BannerCategoryProduct",
    props: {
        title: String,
        descripcion: String,
        img: {
            type: String,
            default: "/public/assets/img/carousel-item-placeholder.png",
        },
        idItem: String,
        variant: {
            type: String,
            default: "black",
        },
    },
    components: {
        CustomButton,
    },
};
</script>

<style lang="scss" scoped>

.v-banner {

    &::v-deep {

        * {
            padding: 0px;
        }
        .v-application--is-ltr, .v-banner--is-mobile, .v-banner__wrapper, .v-banner__content {
            padding: 0px;
        }
    }
}
.cols {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 15px;
}
.col1, .col2, .col3 {
    width: calc(100% / 3);
    padding: 5px 10px 5px 10px;
}
@media (max-width: 750px) {
    .cols {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .col2 {
        order: 3;
    }
    .col1, .col2, .col3 {
        width: 100%;
    }
}
</style>
