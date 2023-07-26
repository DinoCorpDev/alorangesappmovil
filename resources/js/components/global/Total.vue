<template>
    <div class="d-flex justify-center">
        <div class="div_total">
            <div>
                <span class="text-uppercase bold title">Total </span>
                <span class="text-uppercase price"> {{ format_price(getCartPrice) }} COP</span>
            </div>
            <span class="iva">* Iva incluido</span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "Total",
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
    font: normal normal normal 24px/24px Roboto;
}

.iva {
    font: normal normal 600 12px/16px Overpass;
}

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
