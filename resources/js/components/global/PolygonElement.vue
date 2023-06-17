<template>
    <a class="polygon" :href="href">
        <div class="wrap">
            <span class="text-uppercase body2 d-none d-sm-block">
                {{ text }}
            </span>
            <div class="pl-2">
                <v-img :src="icon" contain />
            </div>
        </div>
    </a>
</template>

<script>
export default {
    name: "PolygonElement",
    props: {
        text: {
            type: String,
            default: "Usuario"
        },
        icon: {
            type: String,
            default: "/public/assets/img/home/icon-usuario.svg"
        },
        href: {
            type: String,
            default: "#"
        }
    }
};
</script>

<style lang="scss" scoped>
.polygon {
    background-image: url("/public/assets/img/home/img-polygon-sm.svg");
    width: 100%;
    padding-top: 120%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
    display: block;
    z-index: 2;

    @media (min-width: 960px) {
        background-image: url("/public/assets/img/home/img-polygon-md.svg");
        padding-top: 73%;
    }

    > .wrap {
        padding: 14px;
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;

        .body2 {
            color: rgba(255, 255, 255, 0.5);
        }

        .v-image {
            width: 40%;
            margin: auto;

            @media (min-width: 600px) {
                width: 70%;
            }

            @media (min-width: 1264px) {
                width: 100%;
            }
        }
    }
}
</style>
