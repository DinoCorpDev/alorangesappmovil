<template>
  <v-footer color="#18191A" class="px-5 py-5">
    <v-row class="d-flex justify-center flex-wrap">
      <v-col cols="6" sm="3" md="3">
        <span>© Idovela 2022</span>
      </v-col>
      <v-col cols="6" sm="3" md="3">
        <span> <i class="las la-globe"></i> Bogota, Colombia </span>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-row>
          <v-col cols="4">
            <span>Información</span>
          </v-col>
          <v-col cols="4">
            <span>Solicitudes</span>
          </v-col>
          <v-col cols="4">
            <span>Contacto</span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "FooterCustom"
};
</script>

<style lang="scss" scoped>
.v-footer {
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
}
</style>
