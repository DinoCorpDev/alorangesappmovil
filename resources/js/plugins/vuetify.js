import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#000000"
            },
            dark: {
                primary: "#ffffff"
            }
        }
    }
});

export { vuetify };
