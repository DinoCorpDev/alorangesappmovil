<template>
    <div class="user-layout">
        <layout-navbar-auth />
        <v-container fluid>
            <v-row>
                <v-col lg="3" class="user-layout-sidebar d-lg-block">
                    <SideMenu2 class="d-none d-sm-block" />
                    <div class="d-sm-none btn-menu">
                        <custom-button @click="drawer = !drawer" dark text="MENU" icon="la-ellipsis-v" />
                    </div>
                </v-col>
                <v-col cols="12" lg="9" class="user-layout-content">
                    <router-view />
                </v-col>
                <v-navigation-drawer v-model="drawer" class="drawerNot" absolute temporary>
                    <v-tabs class="tabsCon2" bg-color="teal-darken-3" center vertical v-model="tab">
                        <v-tab class="data-user">
                            <div class="div-img">
                                <div>
                                    <v-avatar size="100">
                                        <img
                                            :src="previewAvatar || currentUser.avatar"
                                            @error="imageFallback($event)"
                                            class="border border-4"
                                        />
                                    </v-avatar>
                                </div>
                            </div>
                            <h6 class="black--text text-uppercase bold mt-3">SOLICITUDES</h6>
                        </v-tab>
                        <v-tab>
                            <custom-button color="white" text="Vista de Diseñador" :to="{ name: 'Upgrade' }" />
                        </v-tab>
                        <v-tab>
                            <custom-button color="white" text="Revision Técnica" :to="{ name: 'Upgrade' }" />
                        </v-tab>
                        <v-tab>
                            <custom-button color="white" text="Soporte Tecnico" :to="{ name: 'Upgrade' }" />
                        </v-tab>
                        <v-tab>
                            <custom-button color="white" text="Renovación UpGrade" :to="{ name: 'Upgrade' }" />
                        </v-tab>
                    </v-tabs>
                </v-navigation-drawer>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import SideMenu2 from "./SideMenu2";
import CustomButton from "../../components/global/CustomButton.vue";
import LayoutNavbarAuth from "../../components/global/LayoutNavbarAuth.vue";

export default {
    components: {
        SideMenu2,
        LayoutNavbarAuth,
        CustomButton
    },
    data: () => ({
        drawer: false,
        group: null
    }),

    watch: {
        group() {
            this.drawer = false;
        }
    },
    computed: {
        ...mapGetters("auth", ["currentUser"]),
        ...mapState("app", ["previewAvatar"])
    }
};
</script>

<style lang="scss" scoped>
.user-layout {
    &-sidebar {
        background-color: #f5f5f5;
    }

    &-content {
        background-color: #fafcfc;
    }
}
.data-user {
    display: flow-root;
    height: 45% !important;
    margin: 10px 0;
}
.div-img {
    background-color: #dfdfdf;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    padding: 50px;
}
.btn-menu {
    justify-content: flex-end;
    display: flex;
}
</style>
