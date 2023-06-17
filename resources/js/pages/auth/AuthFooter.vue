<template>
    <v-footer class="auth-footer">
        <span class="auth-footer-copyright">© Idovela 2022</span>
        <ul class="auth-footer-links">
            <li class="auth-footer-link" v-for="link in authFooterLinks" :key="`link-${link.label}`">
                <router-link :to="link.link"> {{ link.label }} </router-link>
            </li>
        </ul>
    </v-footer>
</template>

<script>
import { mapState } from "vuex";

export default {
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
    padding: 0;

    &-copyright,
    &-link a {
        font-size: var(--font-size-body1);
        font-weight: 700;
        letter-spacing: 0;
        line-height: 1;
        color: #000000;
        text-transform: uppercase;
    }

    &-links {
        display: flex;
        padding: 0;
        list-style: none;
        justify-content: flex-end;
        gap: 1rem;
    }
}
</style>
