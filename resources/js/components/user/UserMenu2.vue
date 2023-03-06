<template>
    <div style="width: 100%;">
        <div class="buttons">
            <h6 class="black--text bold">Compras</h6>
            <custom-button block class="mb-3 mt-3" color="nero" text="Carrito" :to="{ name: 'Cart' }" />
            <custom-button block class="mb-3" color="nero" text="Favoritos" :to="{ name: 'Favorites' }" />
            <custom-button block class="mb-3" color="nero" text="Facturas" :to="{ name: 'Invoices' }" />
            <div class="divider"></div>
        </div>
        <div class="buttons">
            <h6 class="black--text bold">Usuario</h6>
            <custom-button block class="mb-3 mt-3" color="nero" text="Perfil" :to="{ name: 'Profile' }" />
            <custom-button block class="mb-3" color="nero" text="Notificaciones" :to="{ name: 'NotificationAll' }" />
            <custom-button block class="mb-3" color="nero" text="Informacion" :to="{ name: 'PactoAmbiental' }" />
            <div class="divider"></div>
            <custom-button block class="mb-5 mt-5" color="nero" @click="logout">
                {{ $t("logout") }}
            </custom-button>
            <div class="divider"></div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CustomButton from "../../components/global/CustomButton.vue";
export default {
    components: {
        CustomButton
    },
    computed: {
        ...mapGetters("app", ["generalSettings", "getUnseenProductQuerries"]),
        routes() {
            return this.getMenuItems().sort((a, b) => a.order - b.order);
        }
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
            this.$router.push({ name: "Home2" }).catch(() => {});
        },
        getMenuItems() {
            let items = [
                {
                    label: this.$i18n.t("dashboard"),
                    order: 10,
                    icon: "las la-th-large",
                    to: "DashBoard"
                },
                {
                    label: this.$i18n.t("purchase_history"),
                    order: 20,
                    icon: "las la-file-invoice-dollar",
                    to: "PurchaseHistory"
                },
                {
                    label: this.$i18n.t("wishlist"),
                    order: 30,
                    icon: "la la-heart-o",
                    to: "Wishlist"
                },
                {
                    label: this.$i18n.t("coupons"),
                    order: 50,
                    icon: "las la-tags",
                    to: "Coupon"
                },
                {
                    label: this.$i18n.t("manage_profile"),
                    order: 60,
                    icon: "las la-user",
                    to: "Profile"
                }
            ];

            let wallet = {
                label: this.$i18n.t("my_wallet"),
                order: 40,
                icon: "las la-wallet",
                to: "Wallet"
            };
            if (this.generalSettings.wallet_system == 1) {
                items.push(wallet);
            }

            let refund_request = {
                label: this.$i18n.t("refund_requests"),
                order: 21,
                icon: "las la-undo-alt",
                to: "RefundRequests"
            };
            if (this.is_addon_activated("refund")) {
                items.push(refund_request);
            }

            let shop = {
                label: this.$i18n.t("followed_shops"),
                order: 35,
                icon: "las la-store-alt",
                to: "FollowedShops"
            };

            if (this.is_addon_activated("multi_vendor")) {
                items.push(shop);
            }

            // conversation
            let conversation = {
                label: this.$i18n.t("product_querries") + "( " + this.getUnseenProductQuerries + " )",
                order: 36,
                icon: "la la-comment",
                to: "Conversations"
            };
            if (this.generalSettings.conversation_system == 1 && this.is_addon_activated("multi_vendor")) {
                items.push(conversation);
            }

            return items;
        }
    }
};
</script>

<style lang="scss" scoped>
.divider {
    background-color: #dfdfdf;
    width: 100%;
    height: 2px;
}

.buttons {
    padding: 10px;
    width: 100%;
}
</style>
