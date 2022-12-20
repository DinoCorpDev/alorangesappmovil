<template>
  <div>
    <layout-navbar-auth />
    <div class="all">
      <v-container class="container">
        <h6 class="black--text">¿Olvidó su contraseña?</h6>
      </v-container>
    </div>
  </div>
</template>

<script>
import CarouselDescription from "../../components/global/CarouselDescription.vue";
import CustomButton from "../../components/global/CustomButton.vue";
import LayoutNavbarAuth from "../../components/global/LayoutNavbarAuth.vue";

export default {
  components: {
    CarouselDescription,
    CustomButton,
    LayoutNavbarAuth
  },
  mounted() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style lang="scss" scoped>
.all {
  position: absolute;
  top: calc(50%);
  background-color: #fafcfc;
  border-radius: 10px;
  left: calc(40%);
  padding: 10px;
}
.container {
    border: 1px solid #e4e4e4;
    border-radius: 10px;
}
</style>
