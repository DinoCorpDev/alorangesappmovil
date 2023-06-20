<template>
    <v-app class="d-flex flex-column">
        <Navbar v-if="$route.meta.hasHeader && $route.name == 'Home2'" />
        <NavbarAuth v-if="$route.meta.hasHeader && $route.name != 'Home2'" />

        <v-main class="aiz-main-wrap">
            <!-- prettier-ignore -->
            <router-view :key="['ShopDetails','ShopCoupons','ShopProducts'].includes($route.name) ? null : $route.path"></router-view>
        </v-main>

        <Footer v-if="$route.meta.hasFooter" :class="[{ 'd-none': routerLoading }]" />
        <AddToCartDialog />
        <LoginDialog v-if="!isAuthenticated" />
        <SnackBar />
    </v-app>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

import AddToCartDialog from "./product/AddToCartDialog";
import Footer from "./footer/Footer";
import LoginDialog from "./auth/LoginDialog.vue";
import Navbar from "./header/Navbar.vue";
import NavbarAuth from "./header/NavbarAuth.vue";
import SnackBar from "./inc/SnackBar";

export default {
    metaInfo() {
        return {
            title: this.appMetaTitle
        };
    },
    components: {
        AddToCartDialog,
        Footer,
        LoginDialog,
        Navbar,
        NavbarAuth,
        SnackBar
    },
    computed: {
        ...mapGetters("auth", ["isAuthenticated"]),
        ...mapGetters("app", ["appMetaTitle", "userLanguageObj", "routerLoading", "maintenanceMode"])
    },
    methods: {
        ...mapActions("auth", ["getUser", "checkSocialLoginStatus"]),
        ...mapMutations("auth", ["setSociaLoginStatus"]),
        changeRTL() {
            if (this.userLanguageObj.rtl == 1) {
                this.$vuetify.rtl = true;
            } else {
                this.$vuetify.rtl = false;
            }
        }
    },
    async created() {
        this.changeRTL();
        await this.getUser();
        setTimeout(() => {
            this.checkSocialLoginStatus();
        }, 200);
    }
};
</script>

<style scoped>
.absolute-full {
    background: #fff;
    z-index: 10000;
}
</style>
