<template>
    <div>
        <div class="d-none d-xl-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="272" height="38" viewBox="0 0 272 38">
                <path id="Trazado_10003" data-name="Trazado 10003"
                    d="M278.087,1549.431l-9.205-16.8a3.344,3.344,0,0,0-2.956-1.632H9.327A3.145,3.145,0,0,0,6,1533.923v32.195A3.1,3.1,0,0,0,9.28,1569H266a3.362,3.362,0,0,0,2.911-1.553l9.135-15.436A2.572,2.572,0,0,0,278.087,1549.431Z"
                    transform="translate(-6 -1531)" :fill="color" />
                <text x="60" y="25" fill="#FFFFFF" font-size="16px" class="text-uppercase bold">{{ text1 }}</text>
                <text x="135" y="25" fill="#FFFFFF" font-size="16px" class="text-uppercase bold">{{ text2 }}</text>
            </svg>
        </div>
        <div class="d-none d-md-flex d-lg-flex d-xl-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="184" height="38" viewBox="0 0 184 38">
                <path id="Trazado_10003" data-name="Trazado 10003"
                    d="M 184.058594 18.429688 L 177.832031 1.632812 C 177.414062 0.59375 176.648438 -0.03125 175.832031 0 L 2.25 0 C 1.085938 -0.105469 0.078125 1.199219 0 2.921875 L 0 35.117188 C 0.078125 36.816406 1.070312 38.101562 2.21875 38 L 175.882812 38 C 176.675781 38.027344 177.425781 37.4375 177.851562 36.445312 L 184.03125 21.011719 C 184.351562 20.21875 184.363281 19.234375 184.058594 18.429688 Z M 184.058594 18.429688 "
                    :fill="color" />
                <text x="25" y="25" fill="#FFFFFF" font-size="16px" class="text-uppercase bold">{{ text1 }}</text>
                <text x="95" y="25" fill="#FFFFFF" font-size="16px" class="text-uppercase bold">{{ text2 }}</text>
            </svg>
        </div>
        <div class="d-md-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="99" height="38" viewBox="0 0 99 38">
                <path id="Trazado_10003" data-name="Trazado 10003"
                    d="M 99.03125 18.429688 L 95.679688 1.632812 C 95.457031 0.59375 95.046875 -0.03125 94.605469 0 L 1.210938 0 C 0.582031 -0.105469 0.0429688 1.199219 0 2.921875 L 0 35.117188 C 0.0429688 36.816406 0.574219 38.101562 1.195312 38 L 94.632812 38 C 95.058594 38.027344 95.460938 37.4375 95.691406 36.445312 L 99.015625 21.011719 C 99.191406 20.21875 99.195312 19.234375 99.03125 18.429688 Z M 99.03125 18.429688 "
                    :fiill="color"/>
                <text x="20" y="25" fill="#FFFFFF" font-size="16px" class="text-uppercase bold hide">{{ text2 }}</text>
                <text x="25" y="23" fill="#FFFFFF" font-size="16px" class="text-uppercase bold hidetwo">{{ text2 }}</text>
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
        text1: {
            type: String
        },
        text2: {
            type: String
        },
        xtext: {
            type: String
        }
    }
};
</script>

<style lang="scss" scoped>
@media (max-width: 599px) {
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
</style>
