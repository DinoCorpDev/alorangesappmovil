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
            type: String,
            default: "#"
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
    font-size: var(--font-size-btn);
    font-weight: 600;
    letter-spacing: 1.25px;
    transition: all 0.2s ease-in-out;

    &:before {
        content: unset;
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

    &.v-btn--plain {
        min-width: unset;
        height: unset !important;
        padding-left: 0;
        padding-right: 0;

        &::v-deep {
            .v-btn__content {
                margin-top: 0;
                opacity: 1 !important;
            }
        }
    }

    &.v-btn--outlined {
        &:hover,
        &:focus {
            color: #000000;
        }

        &:hover {
            background-color: rgba(#ffffff, 0.8);
        }

        &:focus {
            background-color: #ffffff;
        }
    }

    &.grey {
        color: #000;
        background-color: rgba(#dfdfdf, 0.5) !important;

        &:hover {
            color: #fff;
            background-color: rgba(#434343, 0.8) !important;
        }

        &:focus {
            color: #fff;
            background-color: #161616 !important;
        }
    }

    &.black {
        color: #ffffff;
        background-color: rgba(#000000, 0.5);

        &:hover {
            background-color: rgba(#858585, 0.8);
        }

        &:focus {
            background-color: #161616;
        }
    }

    &.doubleblack {
        color: #ffffff;
        background-color: rgba(#18191a, 0.5);

        &:hover {
            background-color: rgba(#18191a, 0.8);
            color: #000 !important;
        }

        &:focus {
            background-color: #18191a;
            color: #000 !important;
        }
    }

    &.nero {
        color: #ffffff !important;
        background-color: #858585;

        &:hover {
            background-color: rgba(#434343, 0.8);
        }

        &:focus {
            background-color: #161616;
        }
    }

    &.white {
        color: #000;
        background-color: #f5f5f5 !important;

        &:hover,
        &:focus {
            color: #ffffff;
        }

        &:hover {
            background-color: rgba(#161616, 0.8) !important;
        }

        &:focus {
            background-color: #161616 !important;
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
//     }
// }
</style>
