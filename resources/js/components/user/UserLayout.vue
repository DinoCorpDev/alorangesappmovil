<template>
    <div>
        <layout-navbar-auth />
        <v-container fluid>
            <v-row no-gutters>
                <v-col lg="3" class="d-none d-lg-block">
                    <sidemenu></sidemenu>
                </v-col>
                <v-col cols="12" lg="9" class="pt-0">
                    <router-view></router-view>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import SideMenu from "./SideMenu";
import LayoutNavbarAuth from "../../components/global/LayoutNavbarAuth.vue";

export default {
    components: {
        SideMenu,
        LayoutNavbarAuth
    }
};
</script>
