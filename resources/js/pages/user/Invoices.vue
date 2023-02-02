<template>
    <div>
        <v-container>
            <h6>Compras</h6>
            <v-divider class="my-3"></v-divider>
            <v-row>
                <v-col cols="12">
                    <order style="background-color: #F5F5F5;" icon1="la-download" icon2="la-eye" icon3="la-print"/>
                </v-col>
                <v-col cols="12">
                    <order style="background-color: #F5F5F5;" icon1="la-download" icon2="la-eye" icon3="la-print"/>
                </v-col>
                <v-col cols="12">
                    <order style="background-color: #F5F5F5;" icon1="la-download" icon2="la-eye" icon3="la-print"/>
                </v-col>
                <v-col cols="12">
                    <order style="background-color: #F5F5F5;" icon1="la-download" icon2="la-eye" icon3="la-print" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import Order from "../../components/global/Order.vue";

export default {
    components: {
        Order,
    },
}

</script>

<style lang="scss" scoped>
.container {
    background-color: #ffffff;
}
</style>
