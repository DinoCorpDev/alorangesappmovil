import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                white: "#f8f9fa",
                black: "#343A40",
            },
            light: {
                light: "#F8F9FA",
                dark: "#343A40",
            },
        },
    },
});

export { vuetify };
