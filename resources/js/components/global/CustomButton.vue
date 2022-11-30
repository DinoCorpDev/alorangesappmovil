<template>
    <v-btn
        class="text-uppercase"
        :color="variant"
        :outlined="outlined"
        :disabled="disabled"
        :small="small"
        :large="large"
        :block="block"
    >
        <i
            v-if="icon"
            :class="`las ${icon}`"
            :style="`font-size: ${sizeIcon}; ${stylesIcon}`"
        ></i>
        <span :class="VariantText">{{ text }}</span>
    </v-btn>
</template>

<script>
export default {
    name: "CustomButton",
    props: {
        text: String,
        VariantText: String,
        icon: {
            type: String,
        },
        variant: {
            type: String,
            default: "light",
        },
        outlined: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        small: String,
        large: String,
        block: String,
        sizeIcon: {
            type: String,
            default: "20px",
        },
        stylesIcon: {
            type: String,
            default: "margin-right: 10px;",
        },
    },
};
</script>

<style lang="scss" scoped>
// .theme--light.v-btn.light:hover {
//   background-color: #e2e6ea;

//   &:before {
//     background-color: #e2e6ea !important;
//     opacity: 1;
//   }
// }
// .theme--light.v-btn--outlined {
//   &.custom-button:hover {
//     color: black !important;
//   }
// }

// -------------------

// .theme--light.v-btn {
//   &:before {
//     opacity: 1 !important;
//     background-color: unset;
//   }

//   &:hover:before {
//     background-color: #e2e6ea;
//   }

//   &.v-btn--disabled.v-btn--has-bg {
//     background-color: #fafcfc !important;
//   }
// }
</style>
