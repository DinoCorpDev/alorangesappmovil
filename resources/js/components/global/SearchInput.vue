<template>
    <div class="search-input">
        <input type="search" class="search-input-input" :placeholder="placeholder" v-model="searchKeyword" />
        <button class="search-input-button" type="button" @click.stop.prevent="search()">
            <search-icon />
            <span class="ml-2 d-none d-md-block">
                {{ buttonLabel }}
            </span>
        </button>
    </div>
</template>

<script>
import SearchIcon from "../icons/Search.vue";

export default {
    name: "SearchInput",
    props: {
        placeholder: {
            type: String,
            default: "Escribe para buscar"
        },
        buttonLabel: {
            type: String,
            default: "Buscar"
        }
    },
    components: {
        SearchIcon
    },
    data() {
        return {
            searchKeyword: ""
        };
    },
    methods: {
        search() {
            this.$router
                .push({
                    name: "SearchProducts",
                    params: this.searchKeyword.length > 0 ? { keyword: this.searchKeyword } : {},
                    query: {
                        page: 1
                    }
                })
                .catch(() => {});
        }
    }
};
</script>

<style lang="scss" scoped>
.v-application {
    &.theme--light {
        .search-input {
            &:hover {
                .search-input-input {
                    border-color: #000000;
                }

                .search-input-button {
                    background-color: #000000;
                    border-color: #000000;

                    &::v-deep {
                        svg {
                            path {
                                fill: #ffffff;
                            }
                        }
                    }

                    span {
                        color: #ffffff;
                    }
                }
            }
        }
    }

    &.theme--dark {
        .search-input {
            &:hover {
                .search-input-button {
                    background-color: #ffffff;
                }
            }

            &-input {
                color: #ffffff;

                &::placeholder {
                    color: rgba(#ffffff, 0.5);
                }
            }
        }
    }
}

.search-input {
    display: flex;
    flex: 1;
    max-width: 836px;

    &-input {
        font-family: "Roboto";
        font-size: 15px;
        letter-spacing: 0.5px;

        border: 1px solid #dfdfdf;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        outline: none;

        width: 100%;
        padding: 0.5rem 1rem;

        transition: all 0.2s ease-in-out;

        &::placeholder {
            color: rgba(#000000, 0.5);
        }
    }

    &-button {
        display: flex;
        align-items: center;

        background-color: #dfdfdf;

        border: 1px solid #dfdfdf;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;

        padding: 0.5rem 1rem;

        transition: all 0.2s ease-in-out;

        @media (min-width: 600px) {
            padding: 0.5rem 2rem;
        }

        &::v-deep {
            svg {
                path {
                    fill: #040405;
                }
            }
        }

        span {
            color: #000000;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1.25px;
            line-height: 1;

            margin-top: 3px;
        }
    }
}
</style>
