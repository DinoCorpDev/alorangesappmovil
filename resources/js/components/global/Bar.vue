<template>
    <div>
        <div class="bar">
            <h6 class="text-uppercase"> <i :class="`las ${icon1}`"></i> {{ text1 }}</h6>
            <h6 class="text-uppercase">{{ text2 }} <i :class="`las ${icon2}`"></i></h6>
        </div>
    </div>
</template>


<script>
export default {
    name: "Bar",
    props: {
        text1: {
            type: String,
            default: "Volver"
        },
        text2: {
            type: String,
            default: "Seguro"
        },
        icon1: {
            type: String,
            default: "la-arrow-left"
        },
        icon2: {
            type: String,
            default: "la-lock"
        },
    }
};
</script>

<style>
.bar {
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
}
</style>
