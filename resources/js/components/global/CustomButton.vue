<template>
    <v-btn
        v-bind:color="variant"
        class="text-uppercase"
        v-bind:outlined="outlined"
        v-bind:disabled="disabled"
    >
        {{ text }}
    </v-btn>
</template>

<script>
export default {
    name: "CustomButton",
    props: {
        text:String,
        icon:String,
        variant: {
            type:String,
            default: "white"
        },
        outlined:String,
        disabled:String,
    },
};
</script>
