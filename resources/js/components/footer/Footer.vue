<template>
    <v-footer class="auth-footer">
        <v-row class="pt-5">
            <v-col cols="12" md="6" class="d-flex justify-center align-center">
                <div style="max-width: 320px;">
                    <LogoAlorange class="mb-1"/>
                    <p style="font-size: 15px;">
                        Compras telefónicas horarios de atención es de lunes a Domingo 
                        & Festivos de 7:00 am a 7:00 pm, cotizaciones y orden de compra 
                        dirigirse a contáctanos
                    </p>
                    <div style="display: flex; gap: 10px; justify-content: flex-start;">
                        <a href="#"><img src="../icons/facebook.svg" alt="Facebook" style="width: 50px;"></a>
                        <a href="#"><img src="../icons/whatsapp.svg" alt="whatsapp" style="width: 50px;"></a>
                        <a href="#"><img src="../icons/instagram.svg" alt="instagram" style="width: 50px;"></a>
                    </div>
                </div>
                
            </v-col>
            <v-col cols="6" md="4"  class="list-footer align-center align-md-start">
                <a href="#">Politica de Protección de datos</a>
                <a href="#">Cambios y Devoluciones</a>
                <a href="#">Tiempo y costo de envío</a>
            </v-col>
            <v-col cols="6" md="2"  class="list-footer align-center align-md-start">
                <a href="#">Mi cuenta</a>
                <a href="#">Regístrate</a>
                <a href="#">¿Olvidó su clave?</a>
            </v-col>
            <v-col cols="12" class="d-flex justify-center align-center">
                <p style="font-size: 13px; margin-bottom: 0;"><b>Copyright © 2022 Aloranges.com.</b> Todos los derechos reservados.</p>
            </v-col>
        </v-row>
        <!-- <div class="auth-footer-copyright-wrap">
            <span class="auth-footer-copyright">© Idovela 2023</span>
            <span class="auth-footer-location">
                <WorldGlobeIcon class="mr-2" />
                <span>Bogota, Colombia</span>
            </span>
        </div>
        <ul class="auth-footer-links">
            <li class="auth-footer-link" v-for="link in authFooterLinks" :key="`link-${link.label}`">
                <router-link :to="link.link"> {{ link.label }} </router-link>
            </li>
        </ul> -->
    </v-footer>
</template>

<script>
import { mapState } from "vuex";
import WorldGlobeIcon from "../icons/WorldGlobe.vue";
import LogoAlorange from "../icons/LogoAlorange.vue";

export default {
    name: "FooterCustom",
    components: {
        WorldGlobeIcon,
        LogoAlorange,
    },
    computed: {
        ...mapState("app", ["authFooterLinks"])
    }
};
</script>

<style lang="scss" scoped>
p{
    color: white;
}
.list-footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    a{
        margin-bottom: 10px;
        font-size: 18px;
        color: white;
        &:hover{
            text-decoration: underline;
        }
    }
}
.auth-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: #3a3f43;

    @media (max-width: 599px) {
        flex-direction: column;
    }

    // &.theme--dark {
    //     background-color: #18191a;
    // }

    &-copyright,
    &-location,
    &-link a {
        font-size: var(--font-size-body1);
        font-weight: 500;
        letter-spacing: 0;
        line-height: 1;
        text-transform: uppercase;

        @media (min-width: 960px) {
            font-weight: 600;
        }
    }

    &-location {
        display: flex;
        align-items: center;
    }

    &-copyright-wrap,
    &-links {
        gap: 1.5rem;

        @media (max-width: 599px) {
            width: 100%;
        }

        @media (min-width: 960px) {
            gap: 3rem;
        }

        @media (min-width: 1264px) {
            gap: 5rem;
        }
    }

    &-copyright-wrap {
        display: flex;
        align-items: center;

        @media (max-width: 599px) {
            justify-content: space-between;
            margin-bottom: 1rem;
        }
    }

    &-links {
        display: flex;
        padding: 0;
        list-style: none;

        @media (max-width: 599px) {
            justify-content: space-between;
        }
    }
}
</style>
