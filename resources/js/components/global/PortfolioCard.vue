<template>
    <div class="portfolio-card">
        <div class="portfolio-card-header">
            <h6 class="subt2 text-uppercase">{{ title }}</h6>
        </div>
        <div class="portfolio-card-body">
            <img v-if="img" class="portfolio-card-image" :src="img" />
            <img
                v-else
                class="portfolio-card-image placeholder"
                src="/public/assets/img/carousel-item-placeholder.png"
            />
            <div class="portfolio-card-hover">
                <div class="portfolio-card-hover-wrap mt-8">
                    <div class="portfolio-card-hover-box mb-8">
                        <img class="portfolio-card-hover-icon" :src="icon" />
                    </div>
                    <p class="portfolio-card-hover-description">
                        {{ description }}
                    </p>
                </div>
                <custom-button block color="white" text="Ver Detalles" :to="to" :href="href" />
            </div>
        </div>
    </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";

export default {
    name: "PortfolioCard",
    props: {
        title: String,
        img: String,
        icon: String,
        description: String,
        href: {
            type: [String, Object]
        },
        to: {
            type: [String, Object]
        }
    },
    components: {
        CustomButton
    }
};
</script>

<style lang="scss" scoped>
.portfolio-card {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    height: 100%;
    min-height: 560px;
    overflow: hidden;

    &-header,
    &-hover,
    &-footer {
        padding: 0.65rem 0.85rem;
    }

    &-header {
        color: #ffffff;
        background-color: #000000;
        text-align: center;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        position: relative;
        z-index: 2;

        h6 {
            letter-spacing: 1.25px;
            line-height: 22px;
            font-weight: 600;
        }
    }

    &-body {
        color: #ffffff;
        height: 100%;
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
            background: rgba(0, 0, 0, 0.2);
            opacity: 0;
        }

        &:hover {
            .portfolio-card-image {
                filter: blur(1rem);
            }

            &::after {
                opacity: 1;
            }

            .portfolio-card-hover {
                opacity: 1;
            }
        }
    }

    &-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.1s linear;

        &.placeholder {
            object-fit: contain;
        }
    }

    &-hover {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        opacity: 0;
        z-index: 2;

        display: flex;
        flex-direction: column;
        align-items: center;

        &-wrap {
            width: 80%;
            height: 100%;
        }

        &-box {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #ffffff;
            padding: 1rem;
            border-radius: 10px;
            aspect-ratio: 1;

            &-icon {
                width: 100px;
                height: 100px;
                object-fit: contain;
            }
        }

        &-description {
            font-family: "Roboto", sans-serif;
            font-size: calc(16px + (17 - 16) * var(--screen-size));
            line-height: calc(20px + (24 - 20) * var(--screen-size));
            letter-spacing: 0.5px;
            text-align: center;
        }

        button,
        a {
            position: relative;
            z-index: 2;
        }
    }
}
</style>
