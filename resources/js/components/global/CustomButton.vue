<template>
  <v-btn
    class="text-uppercase"
    :color="variant"
    :outlined="outlined"
    :disabled="disabled"
    :large="large"
    :block="block"
    :small="small"
    :width="width"
  >
    <i v-if="icon" :class="`las ${icon}`" :style="`font-size: ${sizeIcon}; ${stylesIcon}`"></i>
    <span :class="VariantText">{{ text }}</span>
  </v-btn>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    text: String,
    width: String,
    VariantText: String,
    icon: {
      type: String
    },
    variant: {
      type: String,
      default: "white"
    },
    outlined: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    large: String,
    block: {
      type: Boolean,
      default: false
    },
    sizeIcon: {
      type: String,
      default: "20px"
    },
    stylesIcon: {
      type: String,
      default: "margin-right: 10px;"
    }
  }
};
</script>

<style lang="scss" scoped>
.theme--dark.v-btn {
  color: #000000;
  font-family: "Overpass";
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1.25px;
}
.v-size--small {
  height: 38px !important;
}
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
