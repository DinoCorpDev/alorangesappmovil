<template>
    <v-container class="auth h-100" fluid>
        <v-row>
            <v-col cols="12" class="text-center">
                <LogoAloranges />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <router-view />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import LogoAloranges from "@components/icons/LogoAlorange.vue";

export default {
    components: {
        LogoAloranges
    }
};
</script>

<style lang="scss">
.auth {
    background-color: #ffefdf;

    &-title {
        position: relative;
        margin-bottom: 20px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;

        .icon {
            font-size: 30px;
            position: absolute;
            left: 0;
        }

        h1 {
            font-size: 26px;
            font-weight: 500;
            letter-spacing: 1px;
        }
    }

    &-link {
        font-size: 16px;
        color: #f58634 !important;

        &:hover {
            text-decoration: underline;
        }
    }
}

.form-group {
    label {
        font-size: 18px;
        color: #25292e;
    }
}

.v-input {
    .v-input__slot {
        background: #ffffff !important;
    }

    &.v-text-field--outlined {
        &:not(.v-input--has-state) {
            .v-input__slot {
                &:hover,
                fieldset {
                    border-color: #ffffff;
                }
            }
        }
    }
}
</style>
