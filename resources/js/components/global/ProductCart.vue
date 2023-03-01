<template>
    <div>
        <div class="div-container">
            <div class="div-img">
                <div>
                    <v-img max-width="100px" :src="img"></v-img>
                </div>
            </div>
            <div class="div-body">
                <div>
                    <span class="black--text text-uppercase reference">{{ reference }}</span>
                    <h6 class="black--text text-uppercase object">{{ name }}</h6>
                    <span class="black--text brand">{{ brand }}</span>
                </div>
                <div class="divider"></div>
                <div>
                    <span class="black--text price">{{ price }} COP</span>
                </div>
                <div class="divider"></div>
                <div>
                    <div class="quantity">
                        <div>
                            <custom-button color="#FAFAFA" block text="+" />
                        </div>
                        <span class="textquantity">{{ quantity }}</span>
                        <div>
                            <custom-button color="#FAFAFA" block text="-" />
                        </div>
                    </div>
                </div>
                <div class="divider"></div>
                <div class="d-none d-md-flex">
                    <custom-button :icon="icon1" />
                    <custom-button :icon="icon2" />
                    <custom-button :icon="icon3" />
                </div>
                <div class="d-md-none">
                    <custom-button block icon="la-ellipsis-v" />
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
        icon1: String,
        icon2: String,
        icon3: String,
        img: {
            type: String,
            default: "/public/assets/img/carousel-item-placeholder.png"
        },
        reference: {
            type: String,
            default: "Referencia"
        },
        name: {
            type: String,
            default: "Objeto"
        },
        brand: {
            type: String,
            default: "Marca"
        },
        price: {
            type: String,
            default: "000.000.000"
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
    background-color: #f5f5f5;
    border-radius: 10px;
    display: flex;
    flex-wrap: nowrap;
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

.div-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    padding: 5px 0px 5px 10px;
    width: 100%;
}

//Texts
.reference {
    font: normal normal 600 10px/13px Overpass;
}

.object {
    font: normal normal bold 15px/24px Overpass;
}

.brand {
    font: normal normal normal 15px/24px Roboto;
}
.price {
    font: normal normal normal 18px/24px Roboto;
}

@media (max-width: 959px) {
    .div-body {
        display: flex;
        justify-content: space-around;
    }
}

@media (max-width: 599px) {

    .object {
        font: normal normal bold 12px/14px Overpass;
    }

    .brand {
        font: normal normal normal 12px/24px Roboto;
    }
    .price {
        font: normal normal normal 12px/24px Roboto;
    }
}



.divider {
    background-color: #dfdfdf;
    width: 2px;
    height: 90%;
}

.quantity {
    background-color: #fafafa;
    border-radius: 10px;
    display: flex;
    justify-content: center;
}

.textquantity {
    line-height: 40px;
    font-family: 'Roboto';
    font-size: 15px;
}

@media (max-width: 599px) {
    .div-container {
        height: 112px;
    }
    .div-img {
        margin-top: 6px;
        margin-left: 7px;
        border-radius: 10px;
    }
    .quantity {
        border-radius: 10px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }

    .textquantity {
        line-height: normal;
        display: flex;
        justify-content: center;
    }
}
</style>
