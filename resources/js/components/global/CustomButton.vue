<template>
    <v-btn
        v-bind:color="variant"
        class="text-uppercase custom-button"
        v-bind:outlined="outlined"
        v-bind:disabled="disabled"
        v-bind:small="small"
        v-bind:large="large"
        v-bind:block="block"
    >
        <i :class="`las ${icon}`" :style="`font-size: ${sizeIcon}; ${stylesIcon}`" v-if="icon"></i>
        {{ text }}
    </v-btn>
</template>

<script>
export default {
    name: "CustomButton",
    props: {
        text:String,
        icon: {
            type:String,
            
        },
        variant: {
            type:String,
            default: "#white"
        },
        outlined:String,
        disabled:String,
        small:String,
        large:String,
        block:String,
        ml:String,
        sizeIcon: {
            type:String,
            default: "20px"
        },
        stylesIcon: {
            type:String,
            default: "margin-right: 10px;"
        }

    },
};
</script>

<style lang="scss">
    .theme--light.v-btn{
        &.custom-button:hover{
            background-color: #F8F9FA !important;
            
            &:before{
                background-color: #F8F9FA !important;
            }
        }
    }
    .theme--light.v-btn--outlined{
        &.custom-button:hover{
            color:black !important;
        }
    }
    
</style>