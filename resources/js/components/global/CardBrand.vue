<template>
    <div class="div-card">
        <div class="col">
            <div class="header">
                <div class="figure"></div>
            </div>
            <div class="body">
                <div>
                    <v-img :src="img" width="100px"></v-img>
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
            default: "/public/assets/img/presentation-banner-logo.png"
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

.div-btn {
    height: 150px;
    padding: 100px 15px 20px 15px;
}
</style>
