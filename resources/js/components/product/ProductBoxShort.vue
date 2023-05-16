<template>
    <div class="product-box-short">
        <div class="product-box-short-image">
            <img
                :alt="productDetails.name"
                :class="!productDetails.thumbnail_image ? 'placeholder' : ''"
                :src="productDetails.thumbnail_image || productPlaceholderUrl"
            />
        </div>
        <div class="product-box-short-body">
            <div>
                <p class="product-box-short-reference mb-3">{{ productDetails.reference || "--" }}</p>
                <h2 class="product-box-short-name mb-1">{{ productDetails.name || "--" }}</h2>
                <p class="product-box-short-brand-name mb-0">{{ productDetails.brandName || "--" }}</p>
            </div>
            <div>
                <template v-if="productDetails.base_price > productDetails.base_discounted_price">
                    <del class="product-box-short-price discounted">{{ format_price(productDetails.base_price) }}</del>
                </template>
                <span class="product-box-short-price">{{ format_price(productDetails.base_discounted_price) }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductBoxShort",
    props: {
        productDetails: { type: Object, required: true, default: {} },
        actionLoading: false
    },
    data() {
        return {
            productPlaceholderUrl: "/public/assets/img/item-placeholder.png"
        };
    }
};
</script>

<style lang="scss" scoped>
.theme--dark {
    .product-box-short {
        &-body {
            color: #000;
        }
    }
}

.product-box-short {
    display: flex;

    border-radius: 10px;
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
        padding: 0.75rem 1.5rem;

        & > div:first-child {
            flex: 1;
            border-right: 1px solid #dfdfdf;
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
