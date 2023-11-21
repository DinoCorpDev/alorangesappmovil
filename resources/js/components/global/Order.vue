<template>
    <div class="div-order">
        <v-row class="order">
            <v-col cols="8">
                <div>
                    <h5 class="font-weight-bold">Orden de pedido # {{ order }}</h5>
                    <p class="body-1">Fecha {{ day }} de {{ month }} de {{ year }}</p>
                </div>
            </v-col>
            <v-divider vertical style="max-height: 20px;" />
            <v-col cols="4" class="pr-5 iconos">
                <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                        <div v-bind="attrs" v-on="on">
                            <custom-button plain> <Descargar /> </custom-button>
                        </div>
                    </template>
                    <span>Descargar</span>
                </v-tooltip>

                <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                        <div v-bind="attrs" v-on="on">
                            <custom-button plain :to="{ name: 'InvoicesDetails' }"> <Compartir /> </custom-button>
                        </div>
                    </template>
                    <span>Compartir</span>
                </v-tooltip>

                <v-tooltip bottom color="black">
                    <template v-slot:activator="{ on, attrs }">
                        <div v-bind="attrs" v-on="on">
                            <custom-button plain> <Imprimir /> </custom-button>
                        </div>
                    </template>
                    <span>Imprimir</span>
                </v-tooltip>
            </v-col>
        </v-row>

        <!-- <div class="div-status">
             <v-divider vertical />
             <div class="d-none d-sm-flex">
                <custom-button v-if="icon1" plain > <Descargar /> </custom-button>
                <custom-button v-if="icon2" plain :to="{ name: 'InvoicesDetails' }" > <Compartir /> </custom-button>
                <custom-button v-if="icon3" plain > <Imprimir /> </custom-button>
            </div>
            <div class="d-sm-none">
                <custom-button plain icon="la-ellipsis-v" />
            </div>
             <div>
                <div class="status">
                    <p class="text-uppercase font-weight-bold">ESTADO</p>
                    <div class="color-status" :class="colorStatus"></div>
                </div>
                <p>{{ descriptionStatus }}</p>
            </div> 

        </div> -->
    </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
import Compartir from "../../components/icons/Compartir.vue";
import Imprimir from "../../components/icons/Imprimir.vue";
import Descargar from "../../components/icons/Descargar.vue";

export default {
    components: {
        CustomButton,
        Compartir,
        Imprimir,
        Descargar
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
    border: 1px solid #e6e6e6;
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

.iconos {
    display: flex;
    gap: 44px;
    align-items: center;
    justify-content: end;
    
}
</style>
