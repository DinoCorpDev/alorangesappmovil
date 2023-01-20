<template>
    <div class="div-card">
        <div class="col">
            <div class="header">
                <div class="figure"></div>
            </div>
            <div class="body">
                <div>
                    <v-img :src="img" max-width="110px"></v-img>
                </div>
            </div>
            <div class="body2">
                <div class="div-img">
                    <div>
                        <v-img :src="img2" max-width="170px"></v-img>
                    </div>
                </div>
            </div>
            <div class="div-btn">
                <custom-button block light text="Ver Detalles" />
            </div>
        </div>
    </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
    name: "CardBrand",
    components: {
        CustomButton
    },
    props: {
        img: {
            type: String,
            default: "/public/assets/img/idovela-logo-dark.png"
        },
        img2: {
            type: String,
            default: "public/assets/img/carousel-item-placeholder.png"
        }
    }
};
</script>

<style lang="scss" scoped>
.div-card {
    height: 100%;
}

.col {
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 0;
}

.header {
    display: flex;
    justify-content: flex-end;
    padding: 10px 15px;
}

.figure {
    clip-path: polygon(100% 0, 100% 100%, 48% 55%, 0 100%, 0 49%, 0% 0%);
    background-color: #7c7c7d;
    width: 20px;
    height: 20px;
}

.body {
    height: 200px;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
}

.body2 {
    display: flex;
    justify-content: center;
}

.div-img {
    background-color: #ffffff;
    height: 170px;
    border-radius: 50%;
    margin-top: -85px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.div-btn {
    height: 100px;
    padding: 50px 15px 20px 15px;
}
</style>
