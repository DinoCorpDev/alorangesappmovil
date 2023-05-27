<template>
    <v-menu class="toggle-menu" offset-y min-width="280" :close-on-content-click="false">
        <template v-slot:activator="{ on, attrs }">
            <v-btn class="toggle-menu-button" v-bind="attrs" v-on="on" depressed :ripple="false" plain>
                <MenuIcon />
            </v-btn>
        </template>
        <v-list class="toggle-menu-nav" flat>
            <v-list-item>
                <v-list-item-title>MENU</v-list-item-title>
            </v-list-item>
            <v-divider />

            <template v-for="item in items">
                <v-list-group :key="`list-${item.key}`" v-model="item.active" no-action>
                    <template v-slot:activator>
                        <v-list-item :ripple="false">
                            <v-list-item-icon>
                                <component :is="item.icon" />
                            </v-list-item-icon>
                            <v-list-item-title> {{ $t(item.title) }}: {{ $t(item.titleValue) }} </v-list-item-title>
                        </v-list-item>
                    </template>
                    <template v-slot:appendIcon>
                        <RightArrowIcon />
                    </template>
                    <v-list-item-group v-if="item.key == 'theme'" v-model="selectedTheme">
                        <template v-for="item in themeItems">
                            <v-divider :key="`divider-${item.label}`" />
                            <v-list-item :key="item.label">
                                <template v-slot:default="{ active }">
                                    <CustomCheckbox :checked="active" :label="$t(item.label)" />
                                </template>
                            </v-list-item>
                        </template>
                    </v-list-item-group>
                </v-list-group>
                <v-divider :key="`divider-${item.key}`" />
            </template>

            <v-list-item :to="{ name: 'PactoAmbiental' }"> Informacion </v-list-item>
            <v-list-item :to="{ name: 'Upgrade' }"> Solicitudes </v-list-item>
            <v-list-item :to="{ name: 'PactoAmbiental' }"> Contacto </v-list-item>
            <v-list-item>
                <span>© Idovela 2022</span>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
import { mapGetters } from "vuex";

import CustomButton from "../global/CustomButton.vue";
import ThemeToggleSwitch from "../global/ThemeToggleSwitch.vue";
import CustomCheckbox from "../global/CustomCheckbox.vue";

import MenuIcon from "../icons/Menu.vue";
import CrescentMoonIcon from "../icons/CrescentMoonIcon.vue";
import TranslateIcon from "../icons/TranslateIcon.vue";
import WorldGlobeIcon from "../icons/WorldGlobe.vue";
import CoinIcon from "../icons/CoinIcon.vue";
import TonIcon from "../icons/TonIcon.vue";
import RightArrowIcon from "../icons/RightArrowIcon.vue";

export default {
    components: {
        CustomButton,
        ThemeToggleSwitch,
        CustomCheckbox,

        MenuIcon,
        CrescentMoonIcon,
        TranslateIcon,
        WorldGlobeIcon,
        CoinIcon,
        TonIcon,
        RightArrowIcon
    },
    data() {
        return {
            selectedTheme: 0,
            themeItems: [
                {
                    key: "day",
                    label: "Day"
                },
                {
                    key: "night",
                    label: "Night"
                },
                {
                    key: "device",
                    label: "Device"
                }
            ]
        };
    },
    computed: {
        ...mapGetters("app", ["userLanguageObj", "userCurrencyObj"]),
        items() {
            return [
                {
                    key: "theme",
                    icon: "CrescentMoonIcon",
                    title: "Aspecto",
                    titleValue: this.selectedThemeString,
                    active: true
                },
                {
                    key: "lang",
                    icon: "TranslateIcon",
                    title: "Idioma",
                    titleValue: this.userLanguageObj.name
                },
                {
                    key: "country",
                    icon: "WorldGlobeIcon",
                    title: "País",
                    titleValue: "Colombia"
                },
                {
                    key: "currency",
                    icon: "CoinIcon",
                    title: "Divisa",
                    titleValue: this.userCurrencyObj.code
                },
                {
                    key: "measure",
                    icon: "TonIcon",
                    title: "Mediciones",
                    titleValue: "CGS"
                }
            ];
        },
        selectedThemeString() {
            return this.themeItems.find((item, index) => index == this.selectedTheme).label;
        }
    }
};
</script>

<style lang="scss" scoped>
.toggle-menu {
    min-width: 280px;

    &-button {
        height: unset !important;
        min-width: unset !important;
        padding: 0 !important;

        &::v-deep {
            .v-btn__content {
                opacity: 1 !important;
            }
        }

        svg {
            &::v-deep {
                g:nth-child(1) {
                    stroke: #888989;

                    rect {
                        fill: #fafcfc;
                    }
                }

                g:nth-child(2) > rect {
                    fill: #888989;
                }
            }
        }

        &:is(.v-btn--active, :focus, :hover) {
            svg {
                &::v-deep {
                    g:nth-child(1) {
                        stroke: #444444;

                        rect {
                            fill: #444444;
                        }
                    }

                    g:nth-child(2) > rect {
                        fill: #fafcfc;
                    }
                }
            }
        }

        &.theme--dark {
            svg {
                &::v-deep {
                    g:nth-child(1) {
                        stroke: #ffffff;

                        rect {
                            fill: #000000;
                        }
                    }

                    g:nth-child(2) > rect {
                        fill: #ffffff;
                    }
                }
            }

            &:is(.v-btn--active, :focus, :hover) {
                svg {
                    &::v-deep {
                        g:nth-child(1) {
                            rect {
                                fill: #ffffff;
                            }
                        }

                        g:nth-child(2) > rect {
                            fill: #000000;
                        }
                    }
                }
            }
        }
    }

    &-nav {
        background: #242526;
        margin-top: 10px;
        border-radius: 10px;

        .v-divider {
            border-color: #707070 !important;
        }

        .v-list-group__header {
            .v-list-item {
                padding: 0;
            }
        }

        .v-list-item {
            .v-list-item {
                .v-list-item__icon {
                    margin: 14px 0;
                    margin-right: 12px;

                    svg {
                        width: 20px;
                        height: 20px;
                    }
                }
            }

            .v-list-item__title {
                font-family: "Roboto", sans-serif;
                font-size: var(--font-size-body1);
            }
        }

        .v-list-group {
            &.v-list-group--active {
                .v-list-group__header__append-icon svg {
                    transform: rotate(-90deg);
                }
            }

            .v-list-group__header__append-icon svg {
                transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
            }
        }
    }
}
</style>
