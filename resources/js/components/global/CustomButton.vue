<template>
    <v-btn
        :block="block"
        :color="color"
        :dark="dark"
        :disabled="disabled"
        :href="href"
        :light="light"
        :loading="loading"
        :outlined="outlined"
        :plain="plain"
        :ripple="false"
        :to="to"
        :width="width"
        @click.stop="$emit('click')"
        class="text-uppercase"
        depressed
    >
        <i v-if="icon" :class="`las ${icon}`" class="mr-3"></i>
        <template v-if="text">{{ text }}</template>
        <template v-else>
            <slot></slot>
        </template>
    </v-btn>
</template>

<script>
export default {
    name: "CustomButton",
    props: {
        text: String,
        width: String,
        icon: {
            type: String
        },
        dark: {
            type: Boolean,
            default: false
        },
        light: {
            type: Boolean,
            default: false
        },
        color: {
            type: String
        },
        outlined: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        block: {
            type: Boolean,
            default: false
        },
        plain: {
            type: Boolean,
            default: false
        },
        href: {
            type: [String, Object]
        },
        to: {
            type: [String, Object]
        },
        loading: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="scss" scoped>
.v-btn {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1.25px;
    transition: all 0.2s ease-in-out;

    &:before {
        content: unset;
    }

    @media (min-width: 960px) {
        font-size: 14px;
    }

    border-radius: 5px;

    i {
        font-size: 20px;
    }

    &:hover:before,
    &:focus:before {
        opacity: 1;
    }

    &.v-size--default {
        height: 38px !important;
    }

    &::v-deep {
        .v-btn__content {
            margin-top: 3px;
        }
    }

    &.grey {
        color: #ffffff;

        &:hover {
            background-color: rgba(#161616, 0.8);
        }

        &:focus {
            background-color: #161616;
        }
    }

    &.black {
        color: #ffffff;
        background-color: rgba(#000000, 0.5);

        &:hover {
            background-color: rgba(#000000, 0.8);
        }

        &:focus {
            background-color: #000000;
        }
    }

    &.nero {
        color: #ffffff;
        background-color: rgba(#161616, 0.5);

        &:hover {
            background-color: rgba(#161616, 0.8);
        }

        &:focus {
            background-color: #161616;
        }
    }
}

// .theme--light {
//     &.v-btn {
//         color: #000000;

//         &.v-btn--has-bg {
//             background-color: #dfdfdf;

//             &:before {
//                 background-color: #ffffff;
//             }

//             &.v-btn--disabled {
//                 color: #000000 !important;

//                 &.v-btn--has-bg {
//                     background-color: #fafcfc !important;
//                 }
//             }
//         }

//         &.v-btn--outlined {
//             color: #ffffff;

//             &:hover,
//             &:focus {
//                 color: #000000;
//             }

//             &:before {
//                 background-color: rgba(255, 255, 255, 0.8);
//             }

//             &:focus {
//                 &:before {
//                     background-color: #ffffff;
//                 }
//             }
//         }
//     }
// }
</style>
