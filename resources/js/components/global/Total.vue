<template>
    <div class="d-flex justify-center">
        <div class="div_total">
            <div style="display: flex; align-items: end;">
                <span class="text-uppercase bold title" style="padding-right: 21px;">SUBTOTAL </span>
                <span class="text-uppercase price"> {{ format_price(getCartPrice) }} COP</span>
                <v-divider vertical style="margin-left:114px; margin-right:38px;"></v-divider>
                <div style="background: white; display: flex;   align-items: center; justify-content: center;">
                    <FavoriteIcon /> <span style="color: #919191">+99</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import FavoriteIcon from "../../components/icons/Favorite.vue";
export default {
    name: "Total",
    components: {
        FavoriteIcon
        
    },
    computed: {
        ...mapGetters("cart", ["getCartPrice"])
    }
};
</script>

<style lang="scss" scoped>
.title {
    font: normal normal 600 24px/30px Overpass;
}

.price {
    // font: normal normal normal 24px/24px Roboto;
    font-size: calc(12px + 6 * var(--screen-size));
}

// .iva {
//     font: normal normal 600 12px/16px Overpass;
// }

@media (max-width: 600px) {
    .div_total {
        text-align: center;
    }
    .title {
        font: normal normal 600 16px/23px Overpass;
    }

    .price {
        font: normal normal normal 15px/24px Roboto;
        display: flex;
        flex-wrap: nowrap;
    }

    .iva {
        font: normal normal 600 10px/13px Overpass;
    }
}
</style>
