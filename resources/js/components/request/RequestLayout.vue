<template>
    <div>
        <layout-navbar-auth />
        <v-container fluid>
            <v-row>
                <v-col lg="3" class="user-layout-sidebar d-none d-lg-block">
                    <SideMenu2 />
                </v-col>
                <v-col cols="12" lg="9" class="pt-0">
                    <router-view></router-view>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import SideMenu2 from "./SideMenu2";
import LayoutNavbarAuth from "../../components/global/LayoutNavbarAuth.vue";

export default {
    components: {
        SideMenu2,
        LayoutNavbarAuth
    }
};
</script>

<style lang="scss" scoped>
.container {
    background-color: #fafcfc;
}
.user-layout {
    &-sidebar {
        background-color: #f5f5f5;
    }

    &-content {
        background-color: #fafcfc;
    }
}
</style>
