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
        clear-icon="las la-times"
        :prepend-inner-icon="icono"
        flat
        outlined
        rounded
        solo
        style="cursor: pointer;"
    >
        
        
        <!-- <template v-slot:item="{
            parent: SelectCustom,
            item: items
        }">
            <i class="las la-star pb-1" style="color: black" v-if="items.favorite"></i>
            <i class="las la-star pb-1" style="color: grey" v-else></i>
            <p style="margin: 0;">{{ items.name }}</p>
        </template> -->
        <!-- <template v-slot:prepend-inner>
            <div v-if="itemValue.favorite">
                <i class="las la-star" style="color: black"></i> 
            </div>
            <div v-if="!itemValue.favorite">
            <i class="las la-star" style="color: grey"></i>
            </div>
        </template> -->
        <!-- <template v-slot:prepend-inner>
            <div v-if="value">
                <div v-if="items.default_billing === 1">
                    <i class="las la-star" style="color: black"></i> 
                    <i class="las la-cat"></i>
                </div>
                <div v-if="items.default_billing === 0">
                    <i class="las la-star" style="color: grey"></i>
                    <i class="las la-dog"></i>
                </div>
            </div>
        </template> -->

        <template v-slot:append> <Flecha /> </template>

    </v-select>
</template>

<script>
import Flecha from "../../components/icons/Flecha.vue";

export default {
    name: "SelectCustom",
    props: {
        clearable: {
            type: Boolean,
            default: true
        },
        // icono: {
        //     type: String,
        //     default: "lar la-star",
        //     get() {
        //         return this.pruebas ? "las la-star" : this.icono;
        //     },
        // },
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
        }
    },
    computed: {
        // adjustedIcon() {
        //     return this.pruebas ? "las la-star" : this.icono;
        // },
    },

    components: {
        Flecha
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

.icono-grande {
    font-size: 25px;
}
</style>
