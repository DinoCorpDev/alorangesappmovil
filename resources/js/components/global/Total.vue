<template>
    <div class="d-flex justify-center">
        <div class="div_total">
            <div>
                <span class="text-uppercase bold title">Total </span>
                <span class="text-uppercase price"> {{ total }} COP</span>
            </div>
            <span class="iva">* Iva incluido</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Total",
    props: {
        total: {
            type: String,
            default: "000.000.000"
        },
        text1: {
            type: String
        },
        text2: {
            type: String
        },
        btn2: {
            type: String
        }
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
