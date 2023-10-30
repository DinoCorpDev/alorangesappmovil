<template>
    <v-select
        :clearable="clearable"
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
        :multiple="multiple"
        @blur="$emit('blur', $event)"
        @input="$emit('input', $event)"
        append-icon="las la-caret-down icono-grande"
        clear-icon="las la-times"
        flat
        outlined
        rounded
        solo
    ></v-select>
    

</template>

<script>

import ArrowUpload from "../../components/icons/ArrowUpload.vue";


export default {
    name: "SelectCustom",
    props: {
        clearable: {
            type: Boolean,
            default: true
        },
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
        },

        components: {
            ArrowUpload
        }
    },
    
};
</script>

<style lang="scss" scoped>
.v-select {
    font-family: "Roboto", sans-serif;
    font-size: calc(12px + (15 - 12) * var(--screen-size));
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

.theme--dark {
    .v-select {
        &::v-deep {
            .v-input__slot {
                background: #18191a;

                &:hover {
                    background: #000000;
                }
            }
        }

        &.v-text-field--outlined {
            &::v-deep {
                &:not(.v-input--has-state) {
                    .v-input__slot {
                        &:hover,
                        fieldset {
                            border-color: #18191a;
                        }
                    }
                }
            }
        }
    }
}

.icono-grande{
    font-size: 100px;
}
</style>
