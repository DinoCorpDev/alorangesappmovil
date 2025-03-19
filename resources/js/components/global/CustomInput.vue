<template>
    <v-text-field
        :error-messages="errorMessages"
        :hide-details="hideDetails"
        :placeholder="placeholder"
        :required="required"
        :type="type"
        :value="value"
        :maxlength="maxlength"
        @blur="$emit('blur', $event)"
        @input="$emit('input', $event)"
        @change="limitDigits"
        dense
        outlined
    />
</template>

<script>
export default {
    name: "CustomInput",
    props: {
        errorMessages: {
            type: Array,
            default: () => []
        },
        hideDetails: {
            type: [Boolean, String],
            default: "auto"
        },
        placeholder: {
            type: String,
            default: "Placeholder"
        },
        required: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: "text"
        },
        value: {
            type: String,
            default: ""
        },
        maxlength: {
            type: String,
            default: "1000"
        },
        card: {
            type: String,
            default: ""
        }
    },
    methods: {
        limitDigits() {
            if (this.props.card == "numberCard") {
                if (this.props.value.length > 3) {
                    this.props.value = this.props.value.slice(0, 3);
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.v-input {
    &::v-deep {
        .v-input__slot {
            background: #ffffff;
        }

        &:not(.v-input--has-state) {
            .v-input__slot fieldset {
                color: white;
            }
        }
    }

    &.v-text-field--outlined {
        &::v-deep {
            &:not(.v-input--has-state) {
                .v-input__slot {
                    &:hover,
                    fieldset {
                        border-color: white;
                    }
                }
            }
        }
    }
}
</style>
