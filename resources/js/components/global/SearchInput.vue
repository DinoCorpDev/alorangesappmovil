<template>
    <div class="search-input">
        <input
            @keyup.enter="search()"
            class="search-input-input"
            placeholder="Escribe lo que buscas"
            v-model="searchKeyword"
            type="search"
            required
            :class="{'show-input' : showInput}"
        />
        <button class="search-input-button" type="button" @click.stop.prevent="search()">
            <SearchIcon />
            <span class="search-input-label ml-2">
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
        },
        showInput: {
            type: Boolean,
            default: false
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
                    name: "Search",
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
.search-input-input,
.search-input-label {
    display: none;
    @media (min-width: 700px) {
        display: block;
    }
}

.show-input{
    display: block !important;
}
.v-application {
    &.theme--light {
        .search-input {
            &:hover {
                .search-input-input {
                    border-color: #000000;
                    background-color: #ffffff;
                }

                .search-input-button {
                    color: #fff;
                    background-color: #fcd6ba !important;
                    border-color: #fcd6ba;

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
    justify-content: flex-end;

    &-input {
        font-family: "Roboto";
        font-size: 15px;
        background-color: #ffffff;
        letter-spacing: 0.5px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border: 1px solid transparent;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        outline: none;
        width: 100%;
        padding: 0.5rem 1rem;
        transition: all 0.2s ease-in-out;
        &:hover{
            border-color: transparent !important;
        }
        &::placeholder {
            color: rgb(211, 211, 211);
        }
    }

    &-button {
        display: flex;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        color: #000;
        background-color: #f58634 !important;
        border: 1px solid #f58634;
        border-radius: 5px;
        padding: 0 10px;
        height: 40px;

        transition: all 0.2s ease-in-out;

        @media (min-width: 600px) {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }

        @media (min-width: 960px) {
            padding: 0.5rem 2rem;
        }

        &::v-deep {
            svg {
                path {
                    fill: #ffffff;
                }
            }
        }

        span {
            color: #ffffff;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            line-height: 1;
            margin-top: 3px;

            @media (min-width: 960px) {
                font-size: 14px;
            }
        }
    }
}
</style>
