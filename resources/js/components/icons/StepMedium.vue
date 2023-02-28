<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="272" height="38" viewBox="0 0 272 38">
        <path id="Trazado_10004" data-name="Trazado 10004"
            d="M343.834,1564.808l7.633-13.151a2.573,2.573,0,0,0,.022-2.579l-7.772-13.926c-1.069-1.915.518-4.151,2.945-4.151H600.511a3.349,3.349,0,0,1,2.946,1.613l9.189,16.464a2.573,2.573,0,0,1-.022,2.579l-9.154,15.771a3.359,3.359,0,0,1-2.923,1.573H346.756C344.305,1569,342.72,1566.726,343.834,1564.808Z"
            transform="translate(-343.378 -1531)" :fill="color" />
        <text :x="xtext" y="25" :fill="colortext" font-size="16px" class="text-uppercase bold">{{ text }}</text>
    </svg>
</template>

<script>
export default {
    name: "StepSvg",
    props: {
        color: {
            type: String
        },
        colortext: {
            type: String,
            default: "#FFFFFF"
        },
        width: {
            type: String
        },
        text: {
            type: String
        },
        xtext: {
            type: String
        }
    },
    data() {
        return {
            if () {

            }
        }
    }
};
</script>

<style lang="scss" scoped>
@media (max-width: 600px) {
    .hide {
        display: none;
    }
}

// svg {
//     width: 272px;
//     height: 38px;
// }

// @media (max-width: 1600px) {
//     svg {
//         height: 68px;
//     }
// }
</style>
