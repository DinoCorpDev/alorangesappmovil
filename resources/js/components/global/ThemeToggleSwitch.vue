<template>
  <v-btn @click="toggleTheme()" class="px-2">🌛</v-btn>
</template>

<script>
export default {
  name: "ThemeToggleSwitch",
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-btn {
  min-width: auto !important;
}
</style>