<template>
    <div class="brand-item">
        <div class="brand-item-header">
            <button type="button" class="icon">
                <FavoriteIcon />
            </button>
        </div>
        <div class="brand-item-body">
            <v-img :src="brandDetails.bgImg || '/public/assets/img/brand-item-bg-placeholder.png'" aspect-ratio="1" />
            <div class="brand-item-body-image">
                <v-img
                    :src="brandDetails.logo || 'public/assets/img/brand-item-img-placeholder.png'"
                    aspect-ratio="1"
                />
            </div>
        </div>
        <div class="brand-item-footer">
            <CustomButton block color="nero" text="Ver Detalles" @click="goToBrand(brandDetails.id)" />
        </div>
    </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
import FavoriteIcon from "../icons/Favorite.vue";

export default {
    name: "CardBrand",
    components: {
        CustomButton,
        FavoriteIcon
    },
    props: {
        brandDetails: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
        goToBrand(id) {
            this.$router.push({ name: "Brand2", params: { brandId: id } });
        }
    }
};
</script>

<style lang="scss" scoped>
.brand-item {
    border-radius: 10px;
    background-color: #f5f5f5;
    height: 100%;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: transparent;
    }

    &-header {
        background-color: #f5f5f5;
        display: flex;
        justify-content: flex-end;
        padding: 0.75rem 1rem;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;

        &::v-deep {
            .icon {
                line-height: 0.5;

                path {
                    fill: #040405;
                    opacity: 0.5;
                }

                &:hover {
                    path {
                        opacity: 0.8;
                    }
                }

                &:active {
                    path {
                        opacity: 1;
                    }
                }
            }
        }
    }

    &-body {
        &-image {
            width: 85%;
            background-color: #ffffff;
            margin: auto;
            margin-top: -40%;
            position: relative;
            border-radius: 50%;
            margin-bottom: 2rem;
        }
    }

    &-footer {
        padding: 0.75rem 1rem;
    }
}
</style>
