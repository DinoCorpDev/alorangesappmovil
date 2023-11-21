<template>
    <v-footer class="auth-footer">
        <div class="auth-footer-copyright-wrap">
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
        </ul>
    </v-footer>
</template>

<script>
import { mapState } from "vuex";
import WorldGlobeIcon from "../icons/WorldGlobe.vue";

export default {
    name: "FooterCustom",
    components: {
        WorldGlobeIcon
    },
    computed: {
        ...mapState("app", ["authFooterLinks"])
    }
};
</script>

<style lang="scss" scoped>
.auth-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    @media (max-width: 599px) {
        flex-direction: column;
    }

    &.theme--dark {
        background-color: #18191a;
    }

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
