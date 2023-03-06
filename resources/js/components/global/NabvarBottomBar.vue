<template>
    <v-container class="bar" fluid>
        <div class="bar-item bar-link" @click="$router.back()">
            <back-arrow-icon />
            <span class="bar-label ml-3"> Volver </span>
        </div>
        <a v-if="share" class="bar-item" href="#">
            <span class="bar-label mr-3"> Compartir </span>
            <share-icon />
        </a>
        <div v-else class="bar-item">
            <span class="bar-label mr-3"> Seguro </span>
            <pad-lock-icon />
        </div>
    </v-container>
</template>

<script>
import BackArrowIcon from "../icons/BackArrow.vue";
import ShareIcon from "../icons/Share.vue";
import PadLockIcon from "../icons/PadLock.vue";

export default {
    name: "NabvarBottomBar",
    props: {
        share: {
            type: Boolean,
            default: false
        }
    },
    components: {
        BackArrowIcon,
        PadLockIcon,
        ShareIcon
    }
};
</script>

<style lang="scss" scoped>
.v-application.theme--dark {
    .bar {
        &-item {
            &::v-deep {
                svg {
                    path {
                        fill: #040405;
                    }
                }
            }
        }

        &-label {
            color: #040405;
        }
    }
}

.bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #dfdfdf;

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

    &-link {
        cursor: pointer;
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
