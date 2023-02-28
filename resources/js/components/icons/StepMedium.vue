<template>
    <div>
        <div class="d-none d-xl-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="272" height="38" viewBox="0 0 272 38">
                <path id="Trazado_10004" data-name="Trazado 10004"
                    d="M343.834,1564.808l7.633-13.151a2.573,2.573,0,0,0,.022-2.579l-7.772-13.926c-1.069-1.915.518-4.151,2.945-4.151H600.511a3.349,3.349,0,0,1,2.946,1.613l9.189,16.464a2.573,2.573,0,0,1-.022,2.579l-9.154,15.771a3.359,3.359,0,0,1-2.923,1.573H346.756C344.305,1569,342.72,1566.726,343.834,1564.808Z"
                    transform="translate(-343.378 -1531)" :fill="color" />
                <text :x="xtextxl" y="25" :fill="colortext" font-size="16px" class="text-uppercase bold">{{ text }}</text>
            </svg>
        </div>
        <div class="d-none d-md-flex d-lg-flex d-xl-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="184" height="38" viewBox="0 0 184 38">
                <path id="Trazado_10004" data-name="Trazado 10004"
                    d="M 0.3125 33.808594 L 5.511719 20.65625 C 5.832031 19.863281 5.835938 18.878906 5.527344 18.078125 L 0.230469 4.152344 C -0.496094 2.238281 0.585938 0 2.238281 0 L 175.230469 0 C 176.050781 -0.0273438 176.816406 0.585938 177.238281 1.613281 L 183.5 18.078125 C 183.8125 18.878906 183.804688 19.863281 183.484375 20.65625 L 177.246094 36.429688 C 176.820312 37.429688 176.0625 38.027344 175.257812 38 L 2.300781 38 C 0.632812 38 -0.449219 35.726562 0.3125 33.808594 Z M 0.3125 33.808594"
                    :fill="color" />
                <text :x="xtextmd" y="25" :fill="colortext" font-size="16px" class="text-uppercase bold">{{ text }}</text>
            </svg>
        </div>
        <div class="d-md-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="99" height="38" viewBox="0 0 99 38">
                <path id="Trazado_10004" data-name="Trazado 10004"
                    d="M 0.167969 33.808594 L 2.964844 20.65625 C 3.136719 19.863281 3.140625 18.878906 2.972656 18.078125 L 0.125 4.152344 C -0.269531 2.238281 0.3125 0 1.203125 0 L 94.28125 0 C 94.722656 -0.0273438 95.132812 0.585938 95.363281 1.613281 L 98.730469 18.078125 C 98.898438 18.878906 98.894531 19.863281 98.722656 20.65625 L 95.367188 36.429688 C 95.136719 37.429688 94.730469 38.027344 94.296875 38 L 1.238281 38 C 0.339844 38 -0.242188 35.726562 0.167969 33.808594 Z M 0.167969 33.808594 "
                    :fill="color"/>
                <text :x="xtextsm" y="25" :fill="colortext" font-size="16px" class="text-uppercase bold hide">{{ text }}</text>
                <text :x="xtextxs" y="23" :fill="colortext" font-size="16px" class="text-uppercase bold hidetwo">{{ text }}</text>
            </svg>
        </div>
    </div>
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
        xtextxl: {
            type: String
        },
        xtextmd: {
            type: String
        },
        xtextsm: {
            type: String
        },
        xtextxs: {
            type: String
        }
    }
};
</script>

<style lang="scss" scoped>
@media (max-width: 600px) {
    .hide {
        display: none;
    }

    text {
        font-size: 12px;
    }
}

@media (min-width: 600px) {
    .hidetwo {
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
