<template>
  <v-app-bar elevation="2" dark>
    <a href="#">
      <v-img
        src="../../public/assets/img/Logo-idovela-sin-fondo.png"
        max-width="90px"
        height="auto"
      />
    </a>
    <v-spacer></v-spacer>
    <div>
      <custom-button
        text="Ir a tienda"
        variant="white"
        icon="la-store-alt"
        class="black--text"
        small="small"
      ></custom-button>
      <custom-button
        text="Iniciar Sesión"
        variant="white"
        class="black--text"
        small="small"
      ></custom-button>
    </div>
  </v-app-bar>
</template>

<script>
import CustomButton from "./CustomButton.vue";

export default {
  components: {
    CustomButton,
  },
};
</script>

<style lang="scss" scoped>
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #ffffff;
}

.v-btn {
  width: 160px;
}
</style>