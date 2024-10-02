<template>
    <div>
        <v-breadcrumbs
            v-if="breadcrumbItems[0].text != 'disabled'"
            class="mt-7"
            exact-active-class="active"
            active-class="disabled"
            :items="breadcrumbItems"
            style="background-color: #f4f4f3; margin: 12px; margin-bottom: 0; font-size: 18px !important"
        >
            <template v-slot:divider>
                <i class="las la-angle-right"></i>
            </template>
        </v-breadcrumbs>
    </div>
</template>

<script>
import { mapGetters } from "vuex";


export default {
    name: "Breadcrumb",
    computed: {
        ...mapGetters("auth", ["userShortName"]),
        breadcrumbItems() {
            return this.$store.getters["breadcrumb/breadcrumbItems"];
        }
    },
};
</script>

<style lang="scss" scoped>
::v-deep .v-breadcrumbs {
    padding-left: 50px;
}
::v-deep .v-breadcrumbs li:first-of-type a {
    &:first-of-type::before {
        content: "";
        background-image: url("./Home.png");
        background-size: contain;
        background-repeat: no-repeat;
        width: 15px;
        height: 15px;
        display: inline-block;
        position: absolute;
        left: -20px;
        top: 40%;
        transform: translateY(-50%);
    }
}
::v-deep .v-breadcrumbs li a {
    font-size: 17px !important;
    position: relative;
}

::v-deep .v-breadcrumbs li {
    font-size: 17px !important;
}

::v-deep .theme--light.v-breadcrumbs .v-breadcrumbs__divider,
.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled {
    color: #f58634;
    margin-bottom: 5px;
}
</style>
