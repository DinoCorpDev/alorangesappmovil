<template>
    <div class="custom-checkbox" @click="toggleCheckbox">
        <div class="custom-checkbox-input">
            <input type="checkbox" :required="required" :checked="isChecked" />
            <span class="custom-checkbox-checkmark">
                <svg xmlns="http://www.w3.org/2000/svg" width="15.673" height="12.19" viewBox="0 0 15.673 12.19">
                    <path
                        d="M19.929,13.245l-1.741,1.741-1.741,1.741-1.741,1.741-1.741,1.741-1.741,1.741L7.739,18.469,6,20.211l3.483,3.483h0l.871.871.871.871h0l1.741-1.741,1.741-1.741,1.741-1.741,1.741-1.741,1.741-1.741,1.741-1.741Z"
                        transform="translate(-5.998 -13.245)"
                        fill="#fff"
                    />
                </svg>
            </span>
        </div>
        <label class="custom-checkbox-label">
            <template v-if="label">{{ label }}</template>
            <slot v-else />
        </label>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: ""
        },
        required: {
            type: Boolean,
            default: false
        },
        value: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        isChecked: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            }
        }
    },
    methods: {
        toggleCheckbox() {
            this.isChecked = !this.isChecked;
        }
    }
};
</script>

<style lang="scss" scoped>
.theme--dark {
    .custom-checkbox {
        &-checkmark {
            border: 1px solid #ffffff;

            &:is(:hover) {
                background-color: #ffffff;

                svg {
                    path {
                        fill: #000;
                    }
                }
            }
        }

        input {
            &:is(:checked) {
                ~ .custom-checkbox-checkmark {
                    background-color: #ffffff;

                    svg {
                        path {
                            fill: #000;
                        }
                    }
                }
            }
        }
    }
}

.custom-checkbox {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    min-height: 38px;

    &-input {
        position: absolute;
        left: 0;
    }

    &-checkmark {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 24px;
        width: 24px;
        border-radius: 5px;
        border: 1px solid #000000;

        &:is(:hover) {
            background-color: #000000;
        }
    }

    /* Hide the browser's default checkbox */
    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;

        &:is(:checked) {
            ~ .custom-checkbox-checkmark {
                background-color: #000000;
            }
        }

        &:not(:checked) {
            ~ .custom-checkbox-checkmark {
                svg {
                    opacity: 0;
                }
            }
        }
    }

    &-label {
        font-family: "Roboto", sans-serif;
        font-size: var(--font-size-body1);
        cursor: pointer;

        a {
            text-decoration: underline;
            font-weight: 700;
        }
    }
}
</style>
