<template>
    <v-text-field
        :error-messages="errorMessages"
        :hide-details="hideDetails"
        :placeholder="placeholder"
        :required="required"
        :type="type"
        :value="value"
        @blur="$emit('blur', $event)"
        @input="$emit('input', $event)"
        flat
        outlined
        rounded
        solo
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
            default: "--"
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
        }
    }
};
</script>

<style lang="scss" scoped>
.v-input {
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    letter-spacing: 0.5px;

    &::v-deep {
        .v-input__control,
        .v-input__slot {
            min-height: 38px;
        }

        &:not(.v-input--has-state) {
            .v-input__slot fieldset {
                color: #dfdfdf;
            }
        }
    }

    &.v-text-field--rounded {
        border-radius: 5px;
    }
}

.theme--light {
    .v-input {
        &::v-deep {
            .v-input__slot {
                background: #f5f5f5;

                &:hover {
                    background: #dfdfdf;
                }
            }
        }

        &.v-text-field--outlined {
            &::v-deep {
                &:not(.v-input--has-state) {
                    .v-input__slot {
                        &:hover,
                        fieldset {
                            border-color: #f5f5f5;
                        }
                    }
                }
            }
        }
    }
}
</style>
