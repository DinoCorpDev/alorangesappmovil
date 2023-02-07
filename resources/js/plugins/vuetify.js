import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        themes: {
            dark: {
                primary: "#18191A",
                grey: "#858585"
            },
            light: {
                primary: "#F5F5F5",
                grey: "#858585"
            }
        }
    }
});

export { vuetify };
