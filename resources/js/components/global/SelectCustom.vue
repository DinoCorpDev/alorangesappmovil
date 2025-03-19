<template>
    <v-select
        :clearable="clearable"
        :error-messages="errorMessages"
        :hide-details="hideDetails"
        :item-text="itemText"
        :item-value="itemValue"
        :items="items"
        :light="light"
        :placeholder="placeholder"
        :required="required"
        :value="value"
        :multiple="multiple"
        :color="color"
        @blur="$emit('blur', $event)"
        @input="$emit('input', $event)"
        clear-icon="las la-times"
        flat
        outlined
        rounded
        solo
        style="cursor: pointer"
    >
        <template v-slot:append> <Flecha /> </template>
    </v-select>
</template>

<script>
import Flecha from "@components/icons/Flecha.vue";

export default {
    name: "SelectCustom",
    props: {
        clearable: {
            type: Boolean,
            default: true
        },
        errorMessages: {
            type: Array,
            default: () => []
        },
        color: {
            type: String,
            default: ""
        },
        hideDetails: {
            type: [Boolean, String],
            default: "auto"
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
        },
        multiple: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Flecha
    }
};
</script>

<style lang="scss" scoped>
.v-select {
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

    &.cart-select {
        &::v-deep {
            v-input__slot {
                border-color: #d5d6d9 !important;
            }
        }
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
        &.cart-select {
            &::v-deep {
                .v-input__slot {
                    background: transparent !important;

                    &:hover {
                        background: transparent !important;
                    }
                }
            }
            &.v-text-field--outlined {
                &::v-deep {
                    &:not(.v-input--has-state) {
                        .v-input__slot {
                            &:hover,
                            fieldset {
                                border-color: #d5d6d9;
                            }
                        }
                    }
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
