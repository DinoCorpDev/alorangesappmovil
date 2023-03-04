<template>
    <v-select
        :dark="dark"
        :error-messages="errorMessages"
        :hide-details="hideDetails"
        :item-text="itemText"
        :item-value="itemValue"
        :items="items"
        :light="light"
        :placeholder="placeholder"
        :required="required"
        :value="value"
        @blur="$emit('blur', $event)"
        @input="$emit('input', $event)"
        append-icon="las la-angle-down"
        clear-icon="las la-times"
        clearable
        flat
        outlined
        rounded
        solo
    ></v-select>
</template>

<script>
export default {
    name: "SelectCustom",
    props: {
        dark: {
            type: Boolean,
            default: false
        },
        errorMessages: {
            type: Array,
            default: () => []
        },
        hideDetails: {
            type: [Boolean, String],
            default: false
        },
        itemText: {
            type: String,
            default: "text"
        },
        itemValue: {
            type: String,
            default: "value"
        },
        items: {
            type: Array,
            default: () => []
        },
        light: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: "--"
        },
        required: {
            type: Boolean,
            default: false
        },
        value: {
            type: [String, Number, Boolean, Object, Array],
            default: null
        }
    }
};
</script>

<style lang="scss" scoped>
.v-select {
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

        .v-input__icon {
            min-width: 12px;
            width: 12px;
            height: 12px;

            .v-icon {
                font-size: 12px;
            }
        }
    }

    &.v-text-field--rounded {
        border-radius: 5px;
    }
}

.theme--light {
    .v-select {
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
