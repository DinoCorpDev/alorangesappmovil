<template>
    <div class="div-card" :style="style">
        <v-col class="col">
            <div class="header">
                <div class="figure"></div>
            </div>
            <div class="body">
                <div>
                    <v-img src="/public/assets/img/carousel-item-placeholder.png" width="200px"></v-img>
                </div>
            </div>
            <div class="div-body2">
                <div class="space">
                    <span class="black--text body3 text-uppercase">{{ reference }}</span>
                </div>
                <div class="space">
                    <h6 class="black--text">{{ name }}</h6>
                </div>
                <div class="space">
                    <span class="black--text body1">{{ brand }}</span>
                </div>
                <div class="space">
                    <span class="black--text subtitle1">{{ price }} COP</span>
                </div>
                <custom-button block light text="Agregar a compras" />
            </div>
        </v-col>
    </div>
</template>


<script>
import CustomButton from "./CustomButton.vue";
export default {
    name: "Products",
    components: {
        CustomButton
    },
    props: {
        reference: {
            type: String,
            default: "Sin Asignar"
        },
        name: {
            type: String,
            default: "Sin Asignar"
        },
        brand: {
            type: String,
            default: "Sin Asignar"
        },
        price: {
            type: String,
            default: "Sin Asignar"
        },
    }
};
</script>

<style lang="scss" scoped>
.div-card {
    margin: 20px;
}

.col {
    background-color: #F5F5F5;
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
    background-color: #dfdfdf;
    display: flex;
    justify-content: center;
    align-items: center;
}

.div-body2 {
    padding: 15px;
}

.body3 {
    font-size: 10px;
}

.space {
    margin-bottom: 10px;
}
</style>
