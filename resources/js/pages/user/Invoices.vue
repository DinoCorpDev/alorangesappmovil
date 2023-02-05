<template>
    <v-container>
        <h6>Compras</h6>
        <v-divider class="my-3"></v-divider>
        <v-row>
            <v-col cols="12">
                <order
                    style="background-color: #f5f5f5"
                    order="ID1222"
                    day="07"
                    month="Julio"
                    year="2020"
                    colorStatus="red"
                    descriptionStatus="Por aprobar pedido"
                    icon1="la-download"
                    icon2="la-eye"
                    icon3="la-print"
                />
            </v-col>
            <v-col cols="12">
                <order
                    style="background-color: #f5f5f5"
                    order="ID1222"
                    day="07"
                    month="Julio"
                    year="2020"
                    colorStatus="yellow"
                    descriptionStatus="Por aprobar pedido"
                    icon1="la-download"
                    icon2="la-eye"
                    icon3="la-print"
                />
            </v-col>
            <v-col cols="12">
                <order
                    style="background-color: #f5f5f5"
                    order="ID1222"
                    day="07"
                    month="Julio"
                    year="2020"
                    colorStatus="green"
                    descriptionStatus="Por aprobar pedido"
                    icon1="la-download"
                    icon2="la-eye"
                    icon3="la-print"
                />
            </v-col>
            <v-col cols="12">
                <order
                    style="background-color: #f5f5f5"
                    order="ID1222"
                    day="07"
                    month="Julio"
                    year="2020"
                    colorStatus="red"
                    descriptionStatus="Por aprobar pedido"
                    icon1="la-download"
                    icon2="la-eye"
                    icon3="la-print"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Order from "../../components/global/Order.vue";

export default {
    components: {
        Order
    }
};
</script>

<style lang="scss" scoped>
.container {
    background-color: #ffffff;
}
</style>
