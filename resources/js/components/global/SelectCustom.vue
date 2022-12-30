<template>
    <div>
        <v-select class="text-uppercase" :items="items" :label="label" :dark="dark" :light="light" solo
            append-icon="las la-angle-down">
            <template v-slot:item="{ item, attrs, on }">
                <v-list-item v-bind="attrs" v-on="on">
                    <v-list-item-title :id="attrs['aria-labelledby']" v-text="item"></v-list-item-title>
                </v-list-item>
            </template>
        </v-select>
    </div>
</template>

<script>
export default {
    name: "SelectCustom",
    props: {
        dark: {
            type: Boolean,
            default: false
        },
        light: {
            type: Boolean,
            default: false
        },
        label: {
            type: String
        },
        items: {
            type: Array
        }
    }
};
</script>

<style lang="scss" scoped>
.v-select {
    border-radius: 5px;

    &::v-deep {
        .v-input__control {
            min-height: 38px;

            .v-input__slot {
                background: #18191a;
                padding: 0 18px !important;
            }
        }

        .v-label {
            font-family: "Roboto", sans-serif;
            font-size: 15px;
            color: #ffffff;
        }

        .v-icon {
            font-size: 15px;
        }

        .theme--dark {
            &.v-list {
                background: #18191a;
            }
        }
    }
}
</style>

