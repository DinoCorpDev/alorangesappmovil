<template>
  <v-btn
    class="text-uppercase"
    :color="color"
    :outlined="outlined"
    :disabled="disabled"
    :block="block"
    :width="width"
    :dark="dark"
    :light="light"
    :ripple="false"
    :plain="plain"
  >
    <i v-if="icon" :class="`las ${icon}`" class="mr-3"></i>
    {{ text }}
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
    }
  }
};
</script>

<style lang="scss" scoped>
.v-btn {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.25px;

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
}

.theme--light {
  &.v-btn {
    color: #000000;

    &.v-btn--has-bg {
      background-color: #dfdfdf;

      &:before {
        background-color: #ffffff;
      }

      &.v-btn--disabled {
        color: #000000 !important;

        &.v-btn--has-bg {
          background-color: #fafcfc !important;
        }
      }
    }

    &.v-btn--outlined {
      color: #ffffff;

      &:hover,
      &:focus {
        color: #000000;
      }

      &:before {
        background-color: rgba(255, 255, 255, 0.8);
      }

      &:focus {
        &:before {
          background-color: #ffffff;
        }
      }
    }
  }
}
</style>
