<template>
    <div class="layout-navbar-nav">
        <CustomButton
            v-if="!userIsLoggedIn"
            :color="$vuetify.theme.dark ? 'orange' : 'orange'"
            class="double-button"
            @click="showLoginDialog(true)"
            ><span class="double-button-label mr-2 mr-sm-3 pr-2 pr-sm-3">
                {{ "Iniciar sesión" }}
            </span>
            <div class="double-button-cart">
                <ShopCartIcon class="mr-2 mr-sm-3" />
                <span class="mr-2 mr-sm-3">{{ getCartCount }}</span>
                <span class="status-indicator" :class="{ active: userShortName }"></span>
            </div>
        </CustomButton>
        <CustomButton
            v-else
            :color="$vuetify.theme.dark ? 'orange' : 'orange'"
            class="double-button"
            :to="{ name: 'Cart' }"
        >
            <span class="double-button-label mr-2 mr-sm-3 pr-2 pr-sm-3">
                {{ userShortName ? userShortName : "--" }}
            </span>
            <div class="double-button-cart">
                <ShopCartIcon class="mr-2 mr-sm-3" />
                <span class="mr-2 mr-sm-3">{{ getCartCount }}</span>
                <span class="status-indicator" :class="{ active: userShortName }"></span>
            </div>
        </CustomButton>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

import CustomButton from "../global/CustomButton.vue";

import ShopCartIcon from "../icons/ShopCart.vue";

export default {
    components: {
        CustomButton,

        // Icons
        ShopCartIcon
    },
    data() {
        return {
            headerFixed: false,
            logoLarge: false,
            scrollThreshold: 10
        };
    },
    computed: {
        ...mapGetters("cart", ["getCartCount"]),
        ...mapGetters("auth", ["userShortName"]),
        ...mapGetters("auth", ["userIsLoggedIn"])
    },
    mounted() {
       // window.addEventListener("resize", this.handleScroll);
        //window.addEventListener("scroll", this.handleScroll, { passive: true });
    },
    methods: {
        ...mapMutations("auth", ["showLoginDialog"]),
        /*handleScroll() {
            const currentScroll = this.$refs.layoutNavbar.currentScroll;
            const windowWidth = window.innerWidth;

            this.headerFixed = currentScroll >= this.scrollThreshold;
            this.logoLarge = windowWidth < 960 ? false : this.headerFixed;
        }*/
    }
};
</script>

<style lang="scss" scoped>
.double-button {
    padding: 0 10px !important;

    @media (min-width: 960px) {
        padding: 0 14px !important;
    }

    &-label {
        position: relative;
        display: block;
        letter-spacing: 0;

        &::after {
            content: "";
            display: block;
            width: 1px;
            height: 100%;
            background-color: currentColor;
            position: absolute;
            right: -1px;
            z-index: 2;
            top: 0;
            bottom: 0;
        }
    }

    &-cart {
        display: flex;
        align-items: center;

        font-family: "Roboto", sans-serif;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0;

        @media (min-width: 960px) {
            font-size: 15px;
        }

        svg {
            width: 20px;

            @media (min-width: 960px) {
                width: 24px;
            }
        }
    }
}

.status-indicator {
    width: 5px;
    height: 5px;
    background-color: rgba(#000000, 0.35);
    display: block;
    border-radius: 50%;

    &.active {
        background-color: #00ff3a;
    }
}
</style>
