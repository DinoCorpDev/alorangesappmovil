<template>
    <v-carousel hide-delimiters> 
        <template v-for="(item, index) in slides"> 
          <v-carousel-item v-if="(index + 1) % columns === 1 || columns === 1" 
                           :key="index"
          > 
            <v-row class="flex-nowrap" style="height:100%"> 
              <template v-for="(n,i) in columns"> 
                <template v-if="(+index + i) < slides.length"> 
                  <v-col :key="i"> 
                    <v-sheet v-if="(+index + i) < slides.length" 
                             height="100%"
                    >
                     <component :is="slides[+index + i].component" v-bind="slides[+index + i]"/>
                    </v-sheet>
                  </v-col> 
                </template> 
              </template> 
            </v-row> 
          </v-carousel-item> 
        </template> 
      </v-carousel>
</template>
<script>
import ItemProduct from "./ItemProduct.vue";
export default {
    computed: {
    columns() {
      /*if (this.$vuetify.breakpoint.xl) {
        return 4;
      }

      if (this.$vuetify.breakpoint.lg) {
        return 3;
      }

      if (this.$vuetify.breakpoint.md) {
        return 2;
      }*/

      return 3;
    }
  },
    props: {
        slides: {
            type: Array,
            default: () => [
                
            ]
        }
    }
}
</script>