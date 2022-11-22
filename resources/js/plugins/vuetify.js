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
        },
        // themes: {
        //     light: {
        //         light: "#F8F9FA",
        //         dark: "#343A40",
        //     },
        // },
        // disable: true,
    },
});

export { vuetify };
