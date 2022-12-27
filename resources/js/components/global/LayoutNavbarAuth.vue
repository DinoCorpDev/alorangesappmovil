<template>
  <v-app-bar :color="$vuetify.theme.dark ? '#000000' : '#FAFCFC'" height="60">
    <v-container class="pa-0 fill-height justify-space-between" fluid>
      <router-link :to="{ name: 'TempLanding' }" class="navbar-brand">
        <v-img v-if="$vuetify.theme.dark" src="/public/assets/img/idovela-large-logo-dark.png" max-width="158" />
        <v-img v-else src="/public/assets/img/idovela-large-logo.png" max-width="158" />
      </router-link>
      <div class="d-flex">
        <div class="double-button d-flex mr-4">
          <custom-button class="btn-login" dark color="#888989" text="Iniciar Sesión"></custom-button>
          <custom-button class="btn-cart" dark color="#888989">
            <span class="d-block">
              <i class="las la-shopping-cart" />
              <span>{{ getCartCount }}</span>
            </span>
          </custom-button>
        </div>
        <theme-toggle-switch />
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
import CustomButton from "./CustomButton.vue";
import ThemeToggleSwitch from "./ThemeToggleSwitch.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    CustomButton,
    ThemeToggleSwitch
  },
  computed: {
    ...mapGetters("cart", ["getCartCount"])
  }
};
</script>

<style lang="scss" scoped>
.navbar-brand {
  text-decoration: none;

  .v-image {
    width: 60px;

    @media (min-width: 600px) {
      width: 90px;
    }

    @media (min-width: 960px) {
      width: 158px;
    }
  }
}

.logo {
  line-height: 60px;
}

.btn-login {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 60%;
    background-color: #ffffff;
    position: absolute;
    right: 0px;
    z-index: 2;
  }

  &:hover {
    &::after {
      opacity: 0;
    }
  }
}

.btn-cart {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.double-button {
  &:hover {
    .btn-login {
      &::after {
        opacity: 0;
      }
    }
  }
}
</style>
