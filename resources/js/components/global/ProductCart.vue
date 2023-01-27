<template>
    <div class="cart">
        <div class="div-container">
            <div class="div-img">
                <div>
                    <v-img max-width="100px" :src="img"></v-img>
                </div>
            </div>
            <div class="div-body">
                <div>
                    <span class="black--text body2">{{ reference }}</span>
                    <h6 class="black--text bold text-uppercase">{{ name }}</h6>
                    <span class="black--text body1">{{ brand }}</span>
                </div>
                <div class="divider"></div>
                <div>
                    <span class="black--text text-uppercase bold body1">{{ price }}</span>
                </div>
                <div class="divider"></div>
                <div>
                    <div class="quantity">
                        <custom-button text="+" plain />
                        <h6 class="quantity2">{{ quantity }}</h6>
                        <custom-button text="-" plain />
                    </div>
                </div>
                <div class="divider"></div>
                <div class="d-none d-md-block">
                    <custom-button plain icon="la-trash" />
                    <custom-button plain icon="las la-eye" />
                    <custom-button plain icon="las la-eye" />
                </div>
                <div class="d-md-none">
                    <custom-button plain icon="la-ellipsis-v" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CustomButton from "../../components/global/CustomButton.vue";

export default {
    name: "ProductItem",
    components: {
        CustomButton
    },
    props: {
        img: {
            type: String,
            default: "/public/assets/img/carousel-item-placeholder.png"
        },
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
        quantity: {
            type: String,
            default: "00"
        }
    }
};
</script>

<style lang="scss" scoped>
.div-container {
    display: flex;
}

.div-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
    width: 100%;
}

.cart {
    background-color: #f5f5f5;
    border-radius: 10px;
}

.div-img {
    background-color: #dfdfdf;
    border-start-start-radius: 10px;
    border-end-start-radius: 10px;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.divider {
    background-color: #dfdfdf;
    width: 2px;
    height: 80px;
}

.quantity {
    background-color: #fafafa;
    border-radius: 10px;
    display: flex;
    justify-content: center;
}

.quantity2 {
    line-height: 40px;
}

@media (max-width: 959px) {
    .quantity {
        border-radius: 10px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }
    .quantity2 {
        line-height: normal;
        display: flex;
        justify-content: center;
    }
}
</style>
