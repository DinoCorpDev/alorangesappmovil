<template>
    <v-select
        class="text-uppercase"
        :items="['COLOMBIA', 'DEUTSCHLAND', 'ENGLAND']"
        label="Seleccionar"
        solo
    >
        <template v-slot:item="{ item, attrs, on }">
            <v-list-item
                v-bind="attrs"
                v-on="on"
            >
                <v-list-item-title
                    :id="attrs['aria-labelledby']"
                    v-text="item"
                ></v-list-item-title>
            </v-list-item>
        </template>
    </v-select>
</template>

<script>
export default {
    name: "SelectCustom",
};
</script>

<style>
</style>

