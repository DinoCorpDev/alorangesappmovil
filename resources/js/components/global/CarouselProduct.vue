<template>
    <v-row class="d-flex flex-lg-wrap">
        <v-col class="col-lg-4" :class="orientation">
            <v-card color="#26272B">
                    <v-img
                        :src="imagenes"
                    ></v-img>
                    <v-card-text class="pr-16 white--text text-uppercase">{{ category }}</v-card-text>
                    <v-card-title class="pt-6 white--text text-uppercase">{{ title }}</v-card-title>
                    <v-card-text class="pr-16 white--text">{{ descripcion }}</v-card-text>
                    <v-card-actions>
                        <v-btn color="orange lighten-2" text>{{ idItem }}</v-btn>
                    </v-card-actions>
                </v-card>
        </v-col>
        <v-col class="col-lg-8">
            <v-card
                color="black"
                dark
                flat
                tile
            >
                <v-window
                    v-model="onboarding"
                    reverse
                >
                    <v-window-item v-for="n in length" :key="`card-${n}`">
                        <v-card color="grey" height="400">
                            <v-row class="fill-height" align="center" justify="center">
                                <h1 style="font-size: 5rem" class="white--text">
                                    Slide {{ n }}
                                </h1>
                            </v-row>
                        </v-card>
                    </v-window-item>
                </v-window>

                <v-card-actions class="justify-space-around">
                    <v-btn
                        small
                        @click="prev"
                        style="font-size: 20px; height: 35px; min-width: 35px; padding: 0px"
                        color="#26272B"
                    >
                        <i class="las la-angle-right"></i>
                    </v-btn>
                    <v-item-group
                        v-model="onboarding"
                        class="text-center"
                        mandatory
                    >
                        <v-item
                            v-for="n in length"
                            :key="`btn-${n}`"
                            v-slot="{ active, toggle }"
                        >
                            <v-btn
                                :input-value="active"
                                icon
                                small
                                @click="toggle"
                            >
                                <i class="las la-circle"></i>
                            </v-btn>
                        </v-item>
                    </v-item-group>
                    <v-btn
                        small
                        @click="next"
                        style="font-size: 20px; height: 35px; min-width: 35px; padding: 0px"
                        color="#26272B"
                    >
                        <i class="las la-angle-left"></i>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "CarouselProduct",
    props: {
        title:String,
        descripcion:String,
        idItem:String,
        category: {
            type:Array,
        },
        orientation: {
            type: Object,
        }
    },
    data: () => ({
        length: 3,
        onboarding: 0,
    }),

    methods: {
        next() {
            this.onboarding =
                this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
        },
        prev() {
            this.onboarding =
                this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
        },
    },
};
</script>
