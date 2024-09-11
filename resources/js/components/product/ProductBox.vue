<template>
    <div class="product-box">
        <div class="product-box-header">
            <template v-if="isThisWishlisted(productDetails.id)">
                <button type="button" class="icon active" @click="removeFromWishlist(productDetails.id)">
                    <FavoriteIcon />
                </button>
            </template>
            <template v-else>
                <button type="button" class="icon" @click="addNewWishlist(productDetails.id)">
                    <FavoriteIcon />
                </button>
            </template>
        </div>
        <div class="product-box-image">
            <v-img
                :src="productDetails.thumbnail_image || productPlaceholderUrl"
                :alt="productDetails.name"
                :aspect-ratio="1"
            />
            <div class="product-box-image-hover">
                <CustomButton
                    block
                    color="orange"
                    text="Ver Detalles"
                    :to="{ name: 'ProductDetails', params: { slug: productDetails.slug } }"
                />
            </div>
        </div>
        <div class="product-box-body">
            <p class="product-box-reference mb-3">{{ productDetails.reference || "--" }}</p>
            <h2 class="product-box-name mb-1">{{ productDetails.name || "--" }}</h2>
            <p class="product-box-brand-name mb-3">{{ productDetails.brandName || "--" }}</p>
            <template v-if="productDetails.base_price > productDetails.base_discounted_price">
                <del class="product-box-price discounted">{{ format_price(productDetails.base_price) }}</del>
            </template>
            <span class="product-box-price">{{ format_price(productDetails.base_discounted_price) }}</span>
            <template v-if="boxStyle == 'two'">
                <v-divider class="my-4" />
                <p class="product-box-description">{{ productDetails.description || "--" }}</p>
            </template>
        </div>
        <div class="product-box-footer pt-0">
            <CustomButton
                block
                color="orange"
                text="Agregar a Compras"
                @click="showAddToCartDialog({ status: true, slug: productDetails.slug })"
                :loading="actionLoading"
                :disabled="actionLoading"
            />
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";

import CustomButton from "../global/CustomButton.vue";
import FavoriteIcon from "../icons/Favorite.vue";

export default {
    name: "ProductBox",
    components: {
        CustomButton,
        FavoriteIcon
    },
    props: {
        boxStyle: { type: String, default: "one" },
        productDetails: { type: Object, required: true, default: {} },
        actionLoading: false
    },
    mounted() {
        this.productDetails.type = "product";
    },
    data() {
        return {
            productPlaceholderUrl: "/public/assets/img/item-placeholder.png"
        };
    },
    computed: {
        ...mapGetters("wishlist", ["isThisWishlisted"])
    },
    methods: {
        ...mapActions("wishlist", ["addNewWishlist", "removeFromWishlist"]),
        ...mapActions("cart", ["addToCart", "updateQuantity"]),
        ...mapMutations("auth", ["showAddToCartDialog"]),
        addCart() {
            if (!this.$props.productDetails.is_variant) {
                this.addToCart({
                    variation_id: this.$props.productDetails.variations[0].id,
                    qty: this.$props.productDetails.min_qty
                });
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.theme--dark {
    .product-box {
        &-body {
            color: #000;
        }
    }
}

.product-box {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: #f5f5f5;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;

    &-header,
    &-body,
    &-image-hover,
    &-footer {
        padding: 0.5rem;

        @media (min-width: 600px) {
            padding: 0.65rem 0.85rem;
        }
    }

    &-header {
        background-color: #f5f5f5;
        display: flex;
        justify-content: flex-end;

        &::v-deep {
            .icon {
                line-height: 0.5;

                @media (max-width: 600px) {
                    svg {
                        height: 14px;
                        width: 14px;
                    }
                }

                path {
                    fill: #040405;
                    opacity: 0.5;
                }

                &:hover {
                    path {
                        opacity: 0.8;
                    }
                }

                &.active {
                    path {
                        opacity: 1;
                    }
                }
            }
        }
    }

    &-image {
        position: relative;
        background-color: #dfdfdf;
        cursor: pointer;

        &::after {
            content: "";
            display: block;
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.5);
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }

        &-hover {
            width: 100%;
            position: absolute;
            bottom: 0;
            opacity: 0;
        }

        &:hover {
            &::after {
                opacity: 1;
            }

            .product-box-image-hover {
                opacity: 1;
            }
        }

        button,
        a {
            position: relative;
            z-index: 2;
        }
    }

    &-body {
        flex: 1;

        .v-divider {
            background-color: #e4e4e4;
        }
    }

    &-footer {
        .v-btn {
            @media (max-width: 600px) {
                font-size: 11px;
                height: 30px !important;
            }
        }
    }

    &-reference {
        font-size: var(--font-size-caption2);
        font-weight: 600;
        line-height: 13px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
    }

    &-name {
        font-size: var(--font-size-body1);
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
            font-size: var(--font-size-body1);

            & + .product-box-price {
                background-color: #e8ff00;
                display: inline-block;
            }
        }
    }

    &-description {
        font-family: "Roboto", sans-serif;
        font-size: 15px;
        letter-spacing: 0.5px;
        line-height: 18px;
    }
}
</style>
