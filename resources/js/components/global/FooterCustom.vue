<template>
  <div>
    <v-footer color="#18191A" class="px-5 py-5">
      <v-row class="d-flex justify-space-between flex-wrap">
        <v-col cols="6" sm="3" md="3">
          <span class="subtitle1 bold text-uppercase">© Idovela 2022</span>
        </v-col>
        <v-col cols="6" sm="3" md="3">
          <span class="subtitle1 bold text-uppercase"><i class="las la-globe"></i> Bogota, Colombia</span>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-row>
            <v-col cols="4">
              <span class="subtitle1 bold text-uppercase">Información</span>
            </v-col>
            <v-col cols="4">
              <span class="subtitle1 bold text-uppercase">Solicitudes</span>
            </v-col>
            <v-col cols="4">
              <span class="subtitle1 bold text-uppercase">Contacto</span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "FooterCustom"
};
</script>
