<template>
    <v-text-field
        :error-messages="errorMessages"
        :hide-details="hideDetails"
        :placeholder="placeholder"
        :required="required"
        :type="type"
        :value="value"
        @input="$emit('input', $event)"
        @blur="$emit('blur', $event)"
        class="input"
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
            default: ""
        },
        errorMessages: {
            type: Array,
            default: () => []
        },
        hideDetails: {
            type: [Boolean, String],
            default: false
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
