<template>
    <div>
        <input class="input" type="text" :placeholder="placeholder">
    </div>
</template>

<script>
export default {
    name: "CustomInput",
    props: {
        placeholder: {
            type: String,
            default: "--"
        }
    }
};

</script>

<style lang="scss" scoped>
.input {
    background-color: #f5f5f5;
    height: 38px;
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 0 10px;
    width: 100%;
    outline: none;
}
</style>
