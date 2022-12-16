<template>
  <v-row class="d-flex justify-center flex-wrap">
    <v-col cols="12" md="3" sm="6">
      <v-card color="#000000" :height="height">
        <div class="cols" width="100%">
            <h2 class="text-uppercase">{{ title }}</h2>
        </div>
      </v-card>
    </v-col>
    <card :description="description1" :height="height" />
    <card :description="description2" :height="height" />
    <card :description="description3" :height="height" />
  </v-row>
</template>

<script>
import Card from "./Card.vue";
export default {
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 560;
        case "sm":
          return 580;
        case "md":
          return 600;
        case "lg":
          return 660;
        case "xl":
          return 760;
      }
    },
  },
  name: "CardsCustom",
  props: {
    title: String,
    description1: String,
    description2: String,
    description3: String
  },
  components: {
    Card
  }
};
</script>

<style>
.cols {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 15px;
}
</style>
