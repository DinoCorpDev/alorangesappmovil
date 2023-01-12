<template>
    <v-text-field
        class="input"
        :placeholder="placeholder"
        :type="type"
        :required="required"
        :error-messages="errorMessages"
        :value="value"
        @input="$emit('input', $event)"
    />
</template>

<script>
export default {
    name: "CustomInput",
    props: {
        placeholder: {
            type: String,
            default: "--"
        },
        type: {
            type: String,
            default: "text"
        },
        required: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            required: true
        },
        errorMessages: {
            type: Array,
            default: () => []
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
