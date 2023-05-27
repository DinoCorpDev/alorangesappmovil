<template>
    <div
        class="shop-action-card"
        :class="boxStyle == 'vertical' ? 'vertical' : 'pa-3 pa-sm-6'"
        @click.stop="$emit('click')"
    >
        <img v-if="img" class="shop-action-card-image" :class="boxStyle != 'vertical' ? 'mr-5' : ''" :src="img" />
        <img
            v-else
            :class="boxStyle != 'vertical' ? 'mr-5' : ''"
            class="shop-action-card-image placeholder"
            src="/public/assets/img/item-placeholder.png"
        />
        <div class="shop-action-card-body" :class="boxStyle == 'vertical' ? 'pa-3 pa-sm-6' : ''">
            <h6 class="shop-action-card-title mb-3">{{ title }}</h6>
            <p class="shop-action-card-description body1 mb-4">{{ description }}</p>
            <CustomButton class="shop-action-card-btn" text="Acción" plain :href="href" :to="to" />
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
        img: String,
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
.theme--dark.v-application {
    .shop-action-card {
        background-color: #18191a;
    }
}

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
        height: 100%;
        flex-direction: column;

        .shop-action-card-image {
            width: 100%;
            height: 30vh;
            object-fit: cover;

            &.placeholder {
                object-fit: contain;
            }
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
