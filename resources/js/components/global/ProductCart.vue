<template>
    <v-row class="product-box-cart">
        <v-col cols="5" class="product-box-cart-body">
            <div class="product-box-cart-image">
                <img
                    :alt="productDetails.name"
                    :class="!productDetails.thumbnail ? 'placeholder' : ''"
                    :src="productDetails.thumbnail || productPlaceholderUrl"
                />
            </div>
            <div class="product-box-cart-info">
                <p class="product-box-cart-reference mb-0">{{ productDetails.reference || "--" }}</p>
                <h2 class="product-box-cart-name">{{ productDetails.name || "--" }}</h2>
                <p class="product-box-cart-brand-name mb-0">{{ productDetails.brandName || "--" }}</p>
            </div>
        </v-col>
        <v-divider vertical class="my-3" />
        <v-col cols="2">
            <div>
                <template v-if="productDetails.base_price > productDetails.base_discounted_price">
                    <del class="product-box-cart-price discounted">{{ format_price(productDetails.base_price) }}</del>
                </template>
                <span class="product-box-cart-price">{{ format_price(productDetails.base_discounted_price) }}</span>
            </div>
        </v-col>
        <v-divider vertical class="my-3" />
        <v-col cols="2">
            <vue-numeric-input v-model="cartQuantity" :min="1" :max="maxCartLimit" :step="1" align="center" />
        </v-col>
        <v-divider vertical class="my-3" />
        <v-col cols="3" class="product-box-cart-actions">
            <div class="product-box-cart-actions-icons d-none d-md-flex">
                <TrashIcon />
                <EyeIcon />
                <FavoriteIcon />
            </div>
            <div class="d-md-none">
                <CustomButton block icon="la-ellipsis-v" class="btn-res" />
            </div>
        </v-col>
    </v-row>
</template>

<script>
import { mapActions } from "vuex";

import CustomButton from "../../components/global/CustomButton.vue";

import EyeIcon from "../../components/icons/EyeIcon.vue";
import FavoriteIcon from "../../components/icons/Favorite.vue";
import TrashIcon from "../../components/icons/TrashIcon.vue";

export default {
    name: "ProductCart",
    props: {
        productDetails: { type: Object, required: true, default: {} },
        actionLoading: false
    },
    data() {
        return {
            productPlaceholderUrl: "/public/assets/img/item-placeholder.png",
            cartQuantity: 1,
            minCartLimit: 1,
            maxCartLimit: Infinity
        };
    },
    watch: {
        productDetails: {
            immediate: true,
            handler(newVal, oldVal) {
                if (!this.is_empty_obj(newVal)) {
                    this.cartQuantity = newVal.qty || 1;
                    this.maxCartLimit = newVal.max_qty > 0 ? newVal.max_qty : Infinity;
                    this.minCartLimit = newVal.min_qty;
                }
            }
        }
    },
    components: {
        CustomButton,

        EyeIcon,
        FavoriteIcon,
        TrashIcon
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
        }
    }
};
</script>

<style lang="scss" scoped>
.theme--dark {
    .product-box-cart {
        &-body {
            color: #000000;
        }
    }
}

.product-box-cart {
    display: flex;
    align-items: center;

    border-radius: 10px;
    background-color: #f5f5f5;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    box-sizing: border-box;

    .v-divider {
        border-width: 0 2px 0 0;
    }

    .col {
        padding: 0 1.5rem;
    }

    &-body {
        display: flex;
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 0 !important;
    }

    &-image {
        display: flex;
        background-color: #dfdfdf;
        height: auto;
        width: 100px;
        aspect-ratio: 1;
        object-fit: cover;
        overflow: hidden;

        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;

        img {
            width: 100%;
            height: auto;

            &.placeholder {
                width: 70%;
                margin: auto;
            }
        }
    }

    &-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.75rem 1.25rem;
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
        font-size: calc(12px + (18 - 12) * var(--screen-size));
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

    &-actions {
        &-icons {
            display: flex;
            align-items: center;
            width: 100%;
            gap: 1rem;
            justify-content: space-around;

            svg {
                opacity: 0.5;
                cursor: pointer;

                &:hover {
                    opacity: 1;
                }
            }
        }
    }

    &::v-deep {
        .vue-numeric-input {
            width: 100% !important;

            .numeric-input {
                border: none;
                background: #ffffff;
                padding: 5px;
                border-radius: 5px;
            }

            .btn {
                background: none;
                box-shadow: none;
                border: none;
                cursor: pointer;
            }

            .btn-decrement {
                left: 5px;
            }

            .btn-increment {
                right: 5px;
            }

            .btn-increment .btn-icon:before,
            .btn-decrement .btn-icon:before {
                width: 62.5%;
            }
        }
    }
}
</style>
