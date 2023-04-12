<template>
    <v-footer color="#18191A" class="px-5 py-5">
        <v-row class="d-flex justify-center flex-wrap">
            <v-col cols="6" sm="3" md="3">
                <span>© Idovela 2022</span>
            </v-col>
            <v-col cols="6" sm="3" md="3">
                <span> <i class="las la-globe"></i> Bogota, Colombia </span>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-row>
                    <v-col cols="4" class="btn-fot">
                        <custom-button color="doubleblack" text="Informacion" :to="{ name: 'PactoAmbiental' }" />
                    </v-col>
                    <v-col cols="4" class="btn-fot">
                        <custom-button color="doubleblack" text="Solicitudes" :to="{ name: 'Upgrade' }" />
                    </v-col>
                    <v-col cols="4" class="btn-fot">
                        <custom-button color="doubleblack" text="Contacto" :to="{ name: 'PactoAmbiental' }" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
import CustomButton from "../../components/global/CustomButton.vue";

export default {
    components: {
        CustomButton
    },
    name: "FooterCustom"
};
</script>

<style lang="scss" scoped>
.v-footer {
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
}
.btn-fot {
    font-size: 15px;
    padding: 0;
    text-align: right;
}
</style>
