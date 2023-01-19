<template>
    <v-container class="bar" fluid>
        <router-link class="bar-item" :to="{ name: backTo }">
            <back-arrow-icon />
            <span class="bar-label ml-3">{{ text1 }}</span>
        </router-link>
        <div class="bar-item">
            <span class="bar-label mr-3">{{ text2 }}</span>
            <pad-lock-icon />
        </div>
    </v-container>
</template>

<script>
import BackArrowIcon from "../icons/BackArrow.vue";
import PadLockIcon from "../icons/PadLock.vue";

export default {
    name: "NabvarBottomBar",
    props: {
        text1: {
            type: String,
            default: "Volver"
        },
        text2: {
            type: String,
            default: "Seguro"
        },
        icon1: {
            type: String,
            default: "la-arrow-left"
        },
        icon2: {
            type: String,
            default: "la-lock"
        },
        backTo: {
            type: String
        }
    },
    components: {
        BackArrowIcon,
        PadLockIcon
    }
};
</script>

<style lang="scss" scoped>
.bar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-item {
        display: flex;
        align-items: center;

        &::v-deep {
            svg {
                path {
                    fill: #040405;
                }
            }
        }
    }

    &-label {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.15px;
        color: #000000;
        margin-top: 3px;

        @media (min-width: 600px) {
            font-size: 16px;
        }
    }
}
</style>
