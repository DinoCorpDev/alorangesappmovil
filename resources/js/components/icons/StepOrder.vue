<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="272" height="38" viewBox="0 0 272 38">
        <path id="Trazado_10003" data-name="Trazado 10003"
            d="M278.087,1549.431l-9.205-16.8a3.344,3.344,0,0,0-2.956-1.632H9.327A3.145,3.145,0,0,0,6,1533.923v32.195A3.1,3.1,0,0,0,9.28,1569H266a3.362,3.362,0,0,0,2.911-1.553l9.135-15.436A2.572,2.572,0,0,0,278.087,1549.431Z"
            transform="translate(-6 -1531)" :fill="color" />
            <text x="60" y="25" fill="#FFFFFF" font-size="16px" class="text-uppercase bold hide">{{ text2 }}</text>
            <template v-if="text2">
                <text x="135" y="25" fill="#FFFFFF" font-size="16px" class="text-uppercase bold">{{ text1 }}</text>
            </template>
            <template v-else>
                <text x="100" y="25" fill="#FFFFFF" font-size="16px" class="text-uppercase bold">{{ text1 }}</text>
            </template>
    </svg>
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
@media (max-width: 600px) {
    .hide {
        display: none;
    }
}
</style>
