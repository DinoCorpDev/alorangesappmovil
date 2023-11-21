<template>
    <div class="div-order">
        <div class="order">
            <div>
                <h5 class="font-weight-bold">Orden de pedido # {{ order }}</h5>
                <p class="body-1">Fecha {{ day }} de {{ month }} de {{ year }}</p>
            </div>
        </div>
        <div class="div-status">
            <!-- <v-divider vertical />
            <div>
                <div class="status">
                    <p class="text-uppercase font-weight-bold">ESTADO</p>
                    <div class="color-status" :class="colorStatus"></div>
                </div>
                <p>{{ descriptionStatus }}</p>
            </div> -->
            <v-divider vertical />
            <div class="d-none d-sm-flex">
                <custom-button v-if="icon1" plain :icon="icon1" />
                <custom-button v-if="icon2" plain :icon="icon2" :to="{ name: 'InvoicesDetails' }" />
                <custom-button v-if="icon3" plain :icon="icon3" />
            </div>
            <div class="d-sm-none">
                <custom-button plain icon="la-ellipsis-v" />
            </div>
        </div>
    </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
    components: {
        CustomButton
    },
    props: {
        order: String,
        day: [String, Number],
        month: String,
        year: [String, Number],
        descriptionStatus: String,
        colorStatus: String,
        icon1: String,
        icon2: String,
        icon3: String
    }
};
</script>

<style lang="scss" scoped>
.div-order {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
}

.div-status {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}

.color-status {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-top: 5px;
}

.status {
    display: flex;
    gap: 8px;
}
</style>
