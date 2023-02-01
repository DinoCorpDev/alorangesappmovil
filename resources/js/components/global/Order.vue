<template>
    <div class="div-order">
        <div>
            <h6 class="font-weight-bold">Orden de pedido # IDO2421</h6>
            <p class="body-1">Fecha 02 de Julio de 2022</p>
        </div>
        <div class="div-status">
            <v-divider vertical />
            <div>
                <p class="text-uppercase font-weight-bold">ESTADO</p>
                <p>Por aprobar pedido</p>
            </div>
            <v-divider vertical />
            <div class="d-none d-sm-flex">
                <custom-button v-if="icon1" plain :icon="icon1" />
                <custom-button v-if="icon2" plain :icon="icon2" />
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
        icon1: {
            type: String,
        },
        icon2: {
            type: String,
        },
        icon3: {
            type: String
        },
    }
};
</script>

<style lang="scss" scoped>
.div-order {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}

.div-status {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}
</style>
