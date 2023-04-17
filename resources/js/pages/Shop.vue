<template>
    <div>
        <layout-navbar-auth :bottom-bar="false" />
        <v-tabs :background-color="'#FAFCFC'" centered fixed-tabs slider-color="black">
            <v-tab v-for="tab in tabs" class="text-none" :key="`tab-${tab.text}`" link :to="{ name: tab.routeName }">
                <v-icon left> {{ tab.icon }} </v-icon>
                {{ tab.text }}
            </v-tab>
        </v-tabs>

        <router-view />

        <footer-custom />
    </div>
</template>

<script>
import LayoutNavbarAuth from "../components/global/LayoutNavbarAuth.vue";
import FooterCustom from "../components/global/FooterCustom.vue";

export default {
    data: () => ({
        tabs: [
            { icon: "la-chair", text: "Diseño de espacios", routeName: "ShopSpaces" },
            { icon: "la-tools", text: "Servicios", routeName: "ShopServices" },
            { icon: "la-tv", text: "Electrodomésticos", routeName: "ShopHomeAppliances" },
            { icon: "la-building", text: "Portal de empresas", routeName: "ShopBusinessPortal" }
        ]
    }),
    components: {
        LayoutNavbarAuth,
        FooterCustom
    },
    mounted() {
        this.$vuetify.theme.dark = false;
    }
};
</script>

<style lang="scss" scoped>
::v-deep {
    .theme--dark {
        &.v-tabs-items {
            background-color: #f5f5f5;
        }
    }
}

@media (min-width: 1264px) {
    .v-toolbar__content,
    .v-toolbar__extension {
        padding: 4px 24px;
    }
}
.v-tab--active {
    color: black;
}

.v-input__slot,
.v-text-field__slot {
    min-height: 38px;
}

.layout-navbar-spaces {
    position: sticky;
}
</style>
