<template>
    <v-container class="bar" fluid>
        <router-link class="bar-item" :to="{ name: backTo }">
            <back-arrow-icon />
            <span class="bar-label ml-3"> Volver </span>
        </router-link>
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
        backTo: {
            type: String
        },
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
                        fill: #ffffff;
                    }
                }
            }
        }

        &-label {
            color: #ffffff;
        }
    }
}

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
