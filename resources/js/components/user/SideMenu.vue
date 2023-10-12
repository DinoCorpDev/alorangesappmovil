<template>
    <div class="side-menu">
        <div class="user-info-wrap mb-sm-5 mb-lg-0">
            <div class="user-info">
                <v-avatar class="user-info-avatar">
                    <img
                        :src="previewAvatar || currentUser.avatar"
                        @error="imageFallback($event)"
                        class="border border-4"
                    />
                </v-avatar>
                <h3 class="user-info-name">
                    {{ currentUser.name }}
                </h3>
            </div>
            <CustomButton class="d-none d-sm-flex d-lg-none" color="white" @click="logout">
                {{ $t("Cerrar sesión") }}
            </CustomButton>
        </div>

        <UserMenu />

        <CustomButton class="d-sm-none d-lg-flex" block color="white" @click="logout">
            {{ $t("Cerrar sesión") }}
        </CustomButton>

        <v-divider class="d-none d-lg-block my-5" />
    </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

import UserMenu from "./UserMenu.vue";
import CustomButton from "../../components/global/CustomButton.vue";

export default {
    components: {
        CustomButton,
        UserMenu
    },
    computed: {
        ...mapGetters("auth", ["currentUser"]),
        ...mapState("app", ["previewAvatar"])
    },
    methods: {
        ...mapActions(["auth/logout"]),
        ...mapActions("cart", ["resetCart"]),
        ...mapActions("wishlist", ["resetWishlist"]),
        async logout() {
            const res = await this.call_api("get", "auth/logout");
            this["auth/logout"]();
            this.resetCart();
            this.resetWishlist();
            this.$router.push({ name: "Home2" }).catch(() => {
                console.log("Error while redirecting to home");
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.side-menu {
    .user-info {
        display: flex;
        align-items: center;
        gap: 1rem;

        &-wrap {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        @media (min-width: 960px) {
            gap: 1.5rem;
        }

        &-avatar {
            width: 60px !important;
            height: 60px !important;

            @media (min-width: 1264px) {
                width: 100px !important;
                height: 100px !important;
            }
        }

        &-name {
            font-size: var(--font-size-body1);
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0;
            line-height: 1rem;
        }
    }
}


</style>
