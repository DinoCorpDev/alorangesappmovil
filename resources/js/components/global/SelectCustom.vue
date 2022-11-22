<template>
    <div class="div-select">
        <v-select
            :items="['Foo', 'Bar', 'Fizz', 'Buzz']"
            label="Fizzbuzz"
            color="#343A40"
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
    </div>
</template>

<script>
export default {
    name: "SelectCustom",
};
</script>

<style>
.div-select {
    background: #343A40;
    padding: 0rem 1rem;
    border-radius: 0.3rem;
}
.v-list-item__title {
    color: #F8F9FA ;
}
.v-label {
    color: #F8F9FA !important;
}

.v-select__selections {
    color: #F8F9FA;
}

.theme--light.v-list {
    background: #343A40
}
</style>

