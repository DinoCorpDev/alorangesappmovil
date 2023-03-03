<template>
    <div class="auth-footer">
        <span class="auth-footer-copyright">© Idovela 2022</span>
        <ul class="auth-footer-links">
            <li class="auth-footer-link" v-for="link in authFooterLinks" :key="`link-${link.label}`">
                <a :href="link.link"> {{ link.label }} </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: () => ({
        authFooterLinks: [
            { label: "Información", link: "#" },
            { label: "Solicitudes", link: "#" },
            { label: "Contacto", link: "#" }
        ]
    })
};
</script>

<style lang="scss" scoped>
.auth-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-copyright,
    &-link a {
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0;
        line-height: 24px;
        color: #000000;
        text-transform: uppercase;

        @media (min-width: 600px) {
            font-size: 15px;
        }
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
