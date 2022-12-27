<template>
  <v-btn @click="toggleTheme()">🌛</v-btn>
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