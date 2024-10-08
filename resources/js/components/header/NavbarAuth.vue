<template>
    <div>
        <v-app-bar
            ref="layoutNavbar"
            class="layout-navbar-auth"
            :color="$vuetify.theme.dark ? '#000000' : '#FAFCFC'"
            elevation="0"
            prominent
            dense
            shrink-on-scroll
            :fixed="headerFixed"
        >
            <v-container class="pa-0 fill-height d-flex justify-space-between" fluid>
                <router-link :to="{ name: 'Home2' }" class="layout-navbar-auth-brand">
                    <LogoAloranges class="d-none d-md-flex" />
                    <LogoAlorange class="d-flex d-md-none" />
                </router-link>

                <SearchInput
                    class="d-none d-sm-flex"
                    :showInput="false"
                    :placeholder="'Escribe lo que buscas'"
                    style="max-width: 500px"
                />

                <div class="header-actions">
                    <CustomButton class="d-flex d-sm-none" color="orange3" :to="{ name: 'Search' }">
                        <Search class="cart-icon ml-sm-2" style="margin-bottom: 4px" />
                    </CustomButton>
                    <CustomButton color="orange3" :to="{ name: 'Shop' }">
                        <span class="d-none d-sm-flex">Tienda</span
                        ><Cart class="cart-icon ml-sm-2" style="margin-bottom: 4px" />
                    </CustomButton>
                    <div class="layout-navbar-auth-nav">
                        <DoubleButton class="d-none d-sm-flex" />
                        <div class="d-flex d-sm-none">
                            <v-menu offset-y>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn class="logout-icon-esc" style="min-width: 45px" v-bind="attrs" v-on="on">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="15"
                                            viewBox="0 0 18 15"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M0.599976 1.50005C0.599976 0.837307 1.13723 0.300049 1.79998 0.300049H16.2C16.8627 0.300049 17.4 0.837307 17.4 1.50005C17.4 2.16279 16.8627 2.70005 16.2 2.70005H1.79998C1.13723 2.70005 0.599976 2.16279 0.599976 1.50005Z"
                                                fill="#F58634"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M0.599976 7.50005C0.599976 6.83731 1.13723 6.30005 1.79998 6.30005H16.2C16.8627 6.30005 17.4 6.83731 17.4 7.50005C17.4 8.16279 16.8627 8.70005 16.2 8.70005H1.79998C1.13723 8.70005 0.599976 8.16279 0.599976 7.50005Z"
                                                fill="#F58634"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M0.599976 13.5C0.599976 12.8373 1.13723 12.3 1.79998 12.3H16.2C16.8627 12.3 17.4 12.8373 17.4 13.5C17.4 14.1628 16.8627 14.7 16.2 14.7H1.79998C1.13723 14.7 0.599976 14.1628 0.599976 13.5Z"
                                                fill="#F58634"
                                            />
                                        </svg>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item class="d-flex justify-center">
                                        <DoubleButton />
                                    </v-list-item>
                                    <v-list-item class="d-flex justify-center">
                                        <v-dialog v-model="dialogResposive" width="500">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn class="logout-icon" v-bind="attrs" v-on="on">
                                                    <Logout />
                                                </v-btn>
                                            </template>

                                            <v-card>
                                                <v-card-text
                                                        style="
                                                            display: flex;
                                                            flex-direction: column;
                                                            justify-content: center;
                                                            align-items: center;
                                                        "
                                                    >
                                                        <img style="width: 200px; padding-top: 10%;" src="./Logo Aloranges.png" />
                                                        <h3
                                                            class="pa-12"
                                                            style="
                                                                font-size: 35px;
                                                                font-weight: 500px;
                                                                line-height: 42px;
                                                                text-align: center;
                                                                color: black;
                                                            "
                                                        >
                                                            ¿Seguro que desea cerrar sesión?
                                                        </h3>
                                                    </v-card-text>
                                                    <v-card-actions class="justify-center">
                                                        <CustomButton color="white" @click="dialogResposive = false"
                                                            >Cancelar</CustomButton
                                                        >
                                                        <CustomButton color="orange" @click="logout"
                                                            >Cerrar sesión</CustomButton
                                                        >
                                                    </v-card-actions>
                                                    <v-btn
                                                        class="logout-icon-esc"
                                                        style="position: absolute; top: 5px; right: 5px"
                                                        @click="dialogResposive = false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="21"
                                                            height="20"
                                                            viewBox="0 0 21 20"
                                                            fill="none"
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                clip-rule="evenodd"
                                                                d="M1.36853 0.868532C1.99337 0.243693 3.00643 0.243693 3.63127 0.868532L10.4999 7.73716L17.3685 0.868532C17.9934 0.243693 19.0064 0.243693 19.6313 0.868532C20.2561 1.49337 20.2561 2.50643 19.6313 3.13127L12.7626 9.9999L19.6313 16.8685C20.2561 17.4934 20.2561 18.5064 19.6313 19.1313C19.0064 19.7561 17.9934 19.7561 17.3685 19.1313L10.4999 12.2626L3.63127 19.1313C3.00643 19.7561 1.99337 19.7561 1.36853 19.1313C0.743693 18.5064 0.743693 17.4934 1.36853 16.8685L8.23716 9.9999L1.36853 3.13127C0.743693 2.50643 0.743693 1.49337 1.36853 0.868532Z"
                                                                fill="#25292E"
                                                            />
                                                        </svg>
                                                    </v-btn>
                                                    
                                            </v-card>
                                        </v-dialog>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                        <!-- MODAL LOGOUT START -->
                        <div class="d-none d-sm-flex">
                            <v-dialog transition="dialog-top-transition" max-width="600">
                                <template v-slot:activator="dialog">
                                    <button
                                        class="d-none d-sm-flex logout-icon"
                                        color="orange3"
                                        @click="dialog.value = true"
                                    >
                                        <Logout />
                                    </button>
                                </template>
                                <template v-slot:default="dialog">
                                    <v-card class="pa-10" style="position: relative">
                                        <v-card-text
                                            style="
                                                display: flex;
                                                flex-direction: column;
                                                justify-content: center;
                                                align-items: center;
                                            "
                                        >
                                            <img style="width: 200px" src="./Logo Aloranges.png" />
                                            <h3
                                                class="pa-12"
                                                style="
                                                    font-size: 35px;
                                                    font-weight: 500px;
                                                    line-height: 42px;
                                                    text-align: center;
                                                    color: black;
                                                "
                                            >
                                                ¿Seguro que desea <br />
                                                cerrar sesión?
                                            </h3>
                                        </v-card-text>
                                        <v-card-actions class="justify-center">
                                            <CustomButton color="white" @click="dialog.value = false"
                                                >Cancelar</CustomButton
                                            >
                                            <CustomButton color="orange" @click="logout">Cerrar sesión</CustomButton>
                                        </v-card-actions>
                                        <v-btn
                                            class="logout-icon-esc"
                                            style="position: absolute; top: 15px; right: 15px"
                                            @click="dialog.value = false"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="21"
                                                height="20"
                                                viewBox="0 0 21 20"
                                                fill="none"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M1.36853 0.868532C1.99337 0.243693 3.00643 0.243693 3.63127 0.868532L10.4999 7.73716L17.3685 0.868532C17.9934 0.243693 19.0064 0.243693 19.6313 0.868532C20.2561 1.49337 20.2561 2.50643 19.6313 3.13127L12.7626 9.9999L19.6313 16.8685C20.2561 17.4934 20.2561 18.5064 19.6313 19.1313C19.0064 19.7561 17.9934 19.7561 17.3685 19.1313L10.4999 12.2626L3.63127 19.1313C3.00643 19.7561 1.99337 19.7561 1.36853 19.1313C0.743693 18.5064 0.743693 17.4934 1.36853 16.8685L8.23716 9.9999L1.36853 3.13127C0.743693 2.50643 0.743693 1.49337 1.36853 0.868532Z"
                                                    fill="#25292E"
                                                />
                                            </svg>
                                        </v-btn>
                                    </v-card>
                                </template>
                            </v-dialog>
                        </div>
                        <!-- MODAL LOGOUT END -->
                    </div>
                </div>
            </v-container>
        </v-app-bar>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

import CustomButton from "../global/CustomButton.vue";
import DoubleButton from "./DoubleButton.vue";
import Cart from "../icons/CartIcon.vue";
import Search from "../icons/IconSearch.vue";
import Logout from "../icons/Logout.vue";
import LogoAloranges from "./LogoAloranges.vue";
import LogoAlorange from "./LogoAlorange.vue";
import SearchInput from "../global/SearchInput.vue";
import ToggleMenu from "./ToggleMenu.vue";

export default {
    name: "LayoutNavbarAuth",
    components: {
        CustomButton,
        DoubleButton,
        LogoAloranges,
        LogoAlorange,
        Search,
        Logout,
        SearchInput,
        Cart,
        ToggleMenu
    },
    data() {
        return {
            headerFixed: false,
            logoLarge: false,
            scrollThreshold: 70,
            dialogResposive: false
        };
    },
    computed: {
        ...mapGetters("auth", ["userShortName"]),
        breadcrumbItems() {
            return this.$store.getters["breadcrumb/breadcrumbItems"];
        }
    },
    mounted() {
        window.addEventListener("resize", this.handleScroll);
        window.addEventListener("scroll", this.handleScroll, { passive: true });
    },
    methods: {
        handleScroll() {
            const currentScroll = this.$refs.layoutNavbar.currentScroll;
            const windowWidth = window.innerWidth;

            this.headerFixed = currentScroll >= this.scrollThreshold;
            this.logoLarge = windowWidth < 960 ? false : currentScroll >= this.scrollThreshold / 2;
        },
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
.header-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
}

.container {
    gap: 0.65rem;

    @media (min-width: 960px) {
        gap: 1rem;
    }

    @media (max-width: 600px) {
        flex-wrap: nowrap;
    }
}
.logout-icon {
    border: none !important;
    background-color: transparent !important;
    padding: 0 !important;
    min-width: 20px !important;
    box-shadow: none !important;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: transparent !important;
    }
    &:focus {
        background-color: transparent !important;
    }
}
.logout-icon-esc {
    border: none !important;
    background-color: transparent !important;
    padding: 0 !important;
    box-shadow: none !important;
    display: flex;
    justify-content: center;
    align-items: center;
}
.layout-navbar-auth {
    min-height: 60px;
    z-index: 10;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 6px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px !important;
    @media (max-width: 960px) {
        max-height: 60px;
    }

    &::v-deep {
        .v-toolbar__content {
            min-height: 60px;
            padding: 0 12px;

            @media (max-width: 960px) {
                max-height: 60px;
            }
        }
    }

    &-brand {
        text-decoration: none;

        @media (min-width: 960px) {
            min-width: 160px;
        }

        &::v-deep {
            .logo-idovela {
                width: 60px;
                height: 38px;

                @media (min-width: 960px) {
                    width: 90px;
                    height: 55px;
                }

                @media (min-width: 1264px) {
                    width: 117px;
                    height: 72px;
                }
            }
        }
    }

    &-nav {
        display: flex;
        gap: 0.65rem;

        @media (min-width: 960px) {
            gap: 1rem;
        }
    }
}
</style>
