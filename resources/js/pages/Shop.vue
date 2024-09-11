<template>
    <div>
        <v-tabs fixed-tabs :show-arrows="false" class="mt-3">
            <v-tab
                v-for="tab in tabs"
                :key="`tab-${tab.text}`"
                :ripple="false"
                :to="{ name: tab.routeName }"
                class="text-none"
                link
            >
                <component :is="tab.icon" class="mb-2 mb-sm-0 mr-sm-3" />
                <span class="mb-1 mb-sm-0">{{ tab.text }}</span>
            </v-tab>
        </v-tabs>

        <router-view />
    </div>
</template>

<script>
import BuildingIcon from "../components/icons/Building.vue";
import ChairIcon from "../components/icons/Chair.vue";
import HomeAppliancesIcon from "../components/icons/HomeAppliances.vue";
import ToolsIcon from "../components/icons/Tools.vue";

export default {
    data: () => ({
        tabs: [
            { icon: "BuildingIcon", text: "Cafeteria", routeName: "ShopCafeteria" },
            { icon: "ChairIcon", text: "Cartoneria", routeName: "ShopCartoneria" },
            { icon: "ToolsIcon", text: "Papeleria", routeName: "ShopServices" },
            { icon: "HomeAppliancesIcon", text: "Aseo", routeName: "ShopHomeAppliances" },
            { icon: "ToolsIcon", text: "Tecnología", routeName: "ShopCafeteria" },
            { icon: "BuildingIcon", text: "Seguridad Industrial", routeName: "ShopCafeteria" },
            { icon: "BuildingIcon", text: "Aseo", routeName: "ShopCafeteria" },
        ]
    }),
    components: {
        ChairIcon,
        ToolsIcon,
        HomeAppliancesIcon,
        BuildingIcon
    }
};
</script>

<style lang="scss">
.v-application.theme--light {
    background: #fafcfc;
}
</style>

<style lang="scss" scoped>
.theme--dark.v-tabs {
    &::v-deep {
        .v-tabs-bar {
            background-color: #000000;
        }

        .v-tabs-bar__content {
            border-bottom: 1px solid #242526;
        }
    }
}

.v-tabs {
    &::v-deep {
        .v-tabs-bar {
            background-color: #fafcfc;

            @media (max-width: 600px) {
                height: auto;
            }
        }

        .v-tabs-bar__content {
            border-bottom: 1px solid #e4e4e4;
        }

        .v-tab {
            font-size: calc(10px + (16 - 10) * var(--screen-size));
            font-weight: 400;
            letter-spacing: 0.15px;
            line-height: calc(18px + (20 - 18) * var(--screen-size));
            max-width: 100%;

            @media (max-width: 600px) {
                flex-direction: column;
                white-space: nowrap;
                padding: 0 10px;
            }

            @media (min-width: 600px) {
                font-weight: 600;
            }
        }

        .v-slide-group__prev,
        .v-slide-group__next {
            display: none !important;
        }
    }
}

::v-deep {
    .main {
        &-carousel {
            height: 76.5vh !important;
            max-height: 786px;

            @media (min-width: 1601px) {
                height: 64vh !important;
            }

            &::v-deep {
                .v-carousel__item {
                    height: 100%;
                }
            }
        }
    }
}
</style>
