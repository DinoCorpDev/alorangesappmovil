<template>
    <div class="shop-action-card" :class="boxStyle == 'vertical' ? 'vertical' : 'pa-3 pa-sm-6'">
        <img class="shop-action-card-image" :class="boxStyle != 'vertical' ? 'mr-5' : ''" :src="img" />
        <div :class="boxStyle == 'vertical' ? 'pa-3 pa-sm-6' : ''">
            <h6 class="shop-action-card-title mb-3">{{ title }}</h6>
            <p class="shop-action-card-description body1 mb-4">{{ description }}</p>
            <custom-button class="shop-action-card-btn" text="Acción" plain :href="href" :to="to" />
        </div>
    </div>
</template>

<script>
import CustomButton from "../global/CustomButton.vue";

export default {
    name: "ShopActionCard",
    props: {
        title: {
            type: String,
            default: "Titulo"
        },
        img: {
            type: String,
            default: "/public/assets/img/item-placeholder.png"
        },
        description: {
            type: String,
            default: "Incluye Lorem Ipsum is simply dummy text of the printing"
        },
        href: {
            type: String,
            default: "#"
        },
        to: {
            type: [String, Object]
        },
        boxStyle: {
            type: String,
            default: "horizontal"
        }
    },
    components: {
        CustomButton
    }
};
</script>

<style lang="scss" scoped>
.shop-action-card {
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 10px;
    overflow: hidden;

    &:not(.vertical) {
        cursor: pointer;

        &:hover {
            background-color: #dfdfdf;
        }
    }

    &.vertical {
        flex-direction: column;

        .shop-action-card-image {
            width: 100%;
            height: 30vh;
            object-fit: cover;
        }
    }

    &-image {
        height: 100px;
        width: 100px;
    }

    &-title {
        font-size: 15px;
        line-height: calc(18px + (24 - 18) * var(--screen-size));
        font-weight: 700;
        letter-spacing: 0;
        text-transform: uppercase;
    }

    &-btn {
        font-size: var(--font-size-caption);
        letter-spacing: 0;
    }
}
</style>
