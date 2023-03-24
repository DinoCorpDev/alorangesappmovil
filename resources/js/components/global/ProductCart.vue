<template>
    <div>
        <div class="div-container">
            <div class="div-img">
                <div>
                    <v-img max-width="100px" :src="img"></v-img>
                </div>
            </div>
            <div class="information">
                <div>
                    <span class="black--text text-uppercase reference">{{ reference }}</span>
                    <h6 class="black--text text-uppercase object">{{ name }}</h6>
                    <span class="black--text brand">{{ brand }}</span>
                </div>
            </div>
            <div class="div-body">
                <div class="divider"></div>
                <div>
                    <span class="black--text price">{{ price }} COP</span>
                </div>
                <div class="divider"></div>
                <div class="quanty-res">
                    <div class="quantity">
                        <div>
                            <v-btn v-on:click="increment()" block plain>
                                <v-img src="/public/assets/img/icons/sum.svg"></v-img>
                            </v-btn>
                        </div>
                        <input type="number" v-model="quantity" class="textquantity" />
                        <div>
                            <v-btn v-on:click="decrement()" block plain>
                                <v-img src="/public/assets/img/icons/subtract.svg"></v-img>
                            </v-btn>
                        </div>
                    </div>
                </div>
                <div class="divider"></div>
                <div class="icons">
                    <div class="d-none d-md-flex">
                        <div>
                            <v-btn block plain>
                                <v-img :src="icon1"></v-img>
                            </v-btn>
                        </div>
                        <div>
                            <v-btn block plain>
                                <v-img src="/public/assets/img/icons/view.svg"></v-img>
                            </v-btn>
                        </div>
                        <div>
                            <v-btn block plain>
                                <v-img :src="icon3"></v-img>
                            </v-btn>
                        </div>
                    </div>
                    <div class="d-md-none">
                        <custom-button block icon="la-ellipsis-v" class="btn-res" />
                    </div>
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
            type: Number,
            default: 100000
        }
    },
    data() {
        return {
            quantity: 0
        };
    },
    methods: {
        increment() {
            this.quantity++;
        },
        decrement() {
            if (this.quantity > 0) {
                this.quantity--;
            }
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

.information {
    display: flex;
    justify-content: flex-start;
    padding: 13px 0px 13px 25px;
    width: 100%;
}

.div-body {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 25px;
    padding: 5px 0px 5px 10px;
    width: 100%;
}

.icons {
    padding-right: 25px;
}

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
    overflow: hidden;
    white-space: nowrap;
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
    align-items: center;
}

.textquantity {
    line-height: 35px;
    font-family: "Roboto";
    font-size: 15px;
    width: 20px;
    outline: none;
    text-align: center;
}

@media (max-width: 959px) {
    .div-body {
        gap: 15px;
    }

    .information {
        padding: 13px 0px 13px 15px;
    }

    .icons {
        padding-right: 0px;
    }
}

@media (max-width: 599px) {
    .object {
        font: normal normal bold 12px/14px Overpass;
        padding-top: 25px;
        padding-bottom: 24px;
    }
    .quanty-res {
        width: 25px;
    }
    .btn-res {
        padding: 0 0 !important;
    }
    .brand {
        font: normal normal normal 12px/24px Roboto;
    }

    .price {
        font: normal normal normal 12px/24px Roboto;
    }

    .div-body {
        gap: 5px;
    }

    .div-container {
        height: 112px;
    }

    .div-img {
        margin-top: 6px;
        margin-left: 7px;
        border-radius: 10px;
    }

    .information {
        padding: 0px 0px 0px 6px;
    }

    .reference {
        padding-top: 5px;
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

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type="number"] {
    -moz-appearance: textfield;
}
</style>
