<template>
  <v-select
    class="text-uppercase"
    :items="['COLOMBIA', 'DEUTSCHLAND', 'ENGLAND']"
    label="Seleccionar país"
    solo
    append-icon="las la-angle-down"
  >
    <template v-slot:item="{ item, attrs, on }">
      <v-list-item v-bind="attrs" v-on="on">
        <v-list-item-title :id="attrs['aria-labelledby']" v-text="item"></v-list-item-title>
      </v-list-item>
    </template>
  </v-select>
</template>

<script>
export default {
  name: "SelectCustom"
};
</script>

<style>
.div-select {
  background: #343a40;
  padding: 0rem 1rem;
  border-radius: 0.3rem;
}
.v-list-item__title {
  color: #f8f9fa;
}
.v-label {
  color: #f8f9fa !important;
}

.v-select__selections {
  color: #f8f9fa;
}

.theme--light.v-list {
  background: #343a40;
}
</style>

