<template>
    <div class="side-menu">
        <div class="user-info-wrap mb-sm-5 mb-lg-0">
            <div class="user-info">
                <v-row>
                    <v-col cols="4" style="position: relative">
                        <v-avatar class="user-info-avatar">
                            <img
                                :src="previewAvatar || currentUser.avatar"
                                @error="imageFallback($event)"
                                class="border border-4"
                            />
                        </v-avatar>

                        <div class="avatar-upload" style="width: 10px; position: absolute; right: 0; top: 75px">
                            <v-tooltip bottom color="black">
                                <template v-slot:activator="{ on, attrs }">
                                    <custom-button
                                        @click="changeAvatar"
                                        style="min-width: 2px; background: transparent; padding: 0 !important;"
                                    >
                                        <i class="las la-pen icono-avatar" v-bind="attrs" v-on="on"></i>
                                    </custom-button>
                                    <input
                                        hidden
                                        type="file"
                                        ref="avatar-input"
                                        id="avatar-input"
                                        accept="image/png, image/jpg, image/jpeg"
                                        @change="previewThumbnail"
                                    />
                                </template>
                                <span>Cambiar avatar</span>
                            </v-tooltip>
                        </div>
                    </v-col>

                    <v-col cols="8" style="margin-top: 18px">
                        <v-col cols="12" style="padding-bottom: 0">
                            <h3 class="user-info-name">
                                {{ currentUser.name }}
                            </h3>
                        </v-col>

                        <v-col cols="12" style="padding-top: 0">
                            <h3 class="user-info-date">
                                <p style="font-size: 11px">Se unió en {{ formatDate(currentUser.registerSince) }}</p>
                            </h3>
                        </v-col>
                    </v-col>
                </v-row>
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
        changeAvatar() {
            this.$refs["avatar-input"].click();
        },
        ...mapActions("wishlist", ["resetWishlist"]),
        async logout() {
            const res = await this.call_api("get", "auth/logout");
            this["auth/logout"]();
            this.resetCart();
            this.resetWishlist();
            this.$router.push({ name: "Home2" }).catch(() => {
                console.log("Error while redirecting to home");
            });
        },

        async previewThumbnail(event) {
            this.form.avatar = event.target.files[0];
            if (event.target.files && event.target.files[0]) {
                var form_data = new FormData();
                form_data.append("avatar", event.target.files[0]);

                let config = {
                    method: "post",
                    url: store.state.app.apiPath + "user/info/updateAvatar",
                    data: form_data,
                    headers: { "content-type": "multipart/form-data" }
                };

                try {
                    let res = axios(config);

                    console.log(res);
                } catch (e) {
                    // return e.response
                }

                const reader = new FileReader();
                reader.onload = e => {
                    this.form.previewAvatar = e.target.result;
                    this.setPreviewAvatar(e.target.result);
                };
                reader.readAsDataURL(event.target.files[0]);
            }
        },
        formatDate(date) {
            const d = new Date(date);
            const month = d.toLocaleString("default", { month: "long" }).toLocaleLowerCase();

            return `${this.$i18n.t(month)} de ${d.getFullYear()}`;
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

@media (min-width: 1265px) {
    .side-menu {
        background-color: #f5f5f5;
        padding: 10px;
        border-radius: 10px;
    }
}

.icono-avatar {
    display: flex;
    place-items: center;
    justify-content: center;
    font-size: 20px;
    color: white;
    background: #878888;
    border-radius: 100px;
    width: 25px;
    height: 25px;
}

.avatar-upload {
    background: transparent;
}
</style>
