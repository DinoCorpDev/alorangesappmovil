<template>
    <div>
        <div class="div-container">
            <div class="div-img">
                <div>
                    <v-img max-width="100px" :src="img"></v-img>
                </div>
            </div>
            <div class="information d-block">
                <div>
                    <span class="black--text text-uppercase reference">{{ reference }}</span>
                    <h6 class="black--text text-uppercase object">{{ name }}</h6>
                    <span class="black--text brand">{{ brand }}</span>
                </div>
                <div v-if="isCollection == true" class="mt-2">
                    <h5 class="subt2 fw-600 text-uppercase mb-2">Se incluye:</h5>
                    <v-divider class="mb-3" />
                    <div v-for="product in productsCollection" class="mb-1" :key="product.id">
                        <div class="product-box-short">
                            <div class="product-box-short-body">
                                <div>
                                    <p class="product-box-short-reference mb-0">{{ product?.product?.reference }}</p>
                                    <h2 class="product-box-short-name mb-0">{{ product?.product?.name }}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="div-body">
                <div class="divider"></div>
                <div>
                    <span class="black--text price">{{ format_price(price2) }} COP</span>
                </div>
                <div class="divider"></div>
                <div class="quanty-res">
                    <div class="quantity">
                        <div>
                            <v-btn v-on:click="increment()" block plain v-if="showOperation == true">
                                <v-img src="/public/assets/img/icons/sum.svg"></v-img>
                            </v-btn>
                        </div>
                        <input type="number" v-model="quantity" class="textquantity" />
                        <div>
                            <v-btn v-on:click="decrement()" block plain v-if="showOperation == true">
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
                        <CustomButton block icon="la-ellipsis-v" class="btn-res" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

import CustomButton from "../../components/global/CustomButton.vue";

export default {
    name: "ProductCart",
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
            type: Number | String,
            default: 0
        },
        price2: {
            type: Number | String,
            default: 0
        },
        cart_id: {
            type: Number,
            default: 0
        },
        quantity: {
            type: Number,
            default: 0
        },
        showOperation: {
            type: Boolean,
            default: true
        },
        isCollection: {
            type: Boolean,
            default: false
        },
        productsCollection: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        ...mapActions("cart", ["updateQuantity"]),
        decrement() {
            if (this.quantity > 0) {
                this.quantity--;
                this.update("minus");
            }
        },
        increment() {
            this.quantity++;
            this.update("plus");
        },
        async update(type) {
            await this.updateQuantity({ type: type, cart_id: this.cart_id, isCollection: this.isCollection });
            this.$emit("changeQty", 1);
            //this.calculatedPrice();
        },
        async calculatedPrice() {
            this.price2 = this.price;
        }
    },
    async created() {
        this.calculatedPrice();
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
.product-box-short {
    display: flex;
    background-color: #f5f5f5;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;

    &-image {
        display: flex;
        background-color: #dfdfdf;
        height: auto;
        width: 100px;

        img {
            &.placeholder {
                width: 70%;
                margin: auto;
            }
        }
    }

    &-body {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px;

        & > div:first-child {
            flex: 1;
            margin-right: 1rem;
        }
    }

    &-reference {
        font-size: 10px;
        font-weight: 600;
        line-height: 13px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
    }

    &-name {
        font-size: 15px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0;
        text-transform: uppercase;
    }

    &-brand-name {
        font-family: "Roboto", sans-serif;
        font-size: 15px;
        line-height: 24px;
        letter-spacing: 0;
    }

    &-price {
        display: block;
        font-family: "Roboto", sans-serif;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0;

        &.discounted {
            font-size: 15px;

            & + .product-box-price {
                background-color: #e8ff00;
                display: inline-block;
            }
        }
    }
}
</style>
