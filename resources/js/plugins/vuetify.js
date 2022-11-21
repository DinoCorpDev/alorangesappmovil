import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                light: "#F8F9FA",
                dark: "#343A40",
            },
        },
    },
});

export { vuetify };
