<template>
    <div class="">
        <layout-navbar-auth />
        <nabvar-bottom-bar />
        <v-row no-gutters>
            <v-col lg="3" class="d-none d-lg-block">
                <sidemenu></sidemenu>
            </v-col>
            <v-col cols="12" lg="9" class="pt-0">
                <router-view></router-view>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import sidemenu from "./SideMenu";
import NabvarBottomBar from "../../components/global/NabvarBottomBar.vue";
import LayoutNavbarAuth from "../../components/global/LayoutNavbarAuth.vue";
export default {
    components: {
        sidemenu,
        NabvarBottomBar,
        LayoutNavbarAuth,
    }
};
</script>

<style lang="scss" scoped>

</style>
