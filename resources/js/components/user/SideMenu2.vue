<template>
    <v-card color="#F5F5F5" elevation="0" height="100%">
        <div class="pt-4 border-bottom">
            <div class="div-container">
                <div class="col1">
                    <div class="div-img">
                        <div>
                            <v-avatar size="100">
                                <img :src="currentUser.avatar" @error="imageFallback($event)" class="border border-4" />
                            </v-avatar>
                        </div>
                    </div>
                </div>
                <div class="col2">
                    <h6 class="black--text text-uppercase bold">{{ currentUser.name }}</h6>
                </div>
                <div class="divider"></div>
                <UserMenu2 />
            </div>
        </div>
    </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import UserMenu2 from './UserMenu2';
import CustomButton from "../../components/global/CustomButton.vue";

export default {
    components: {
        UserMenu2,
        CustomButton,
    },
    data: () => ({

    }),
    computed: {
        ...mapGetters("auth", ["currentUser"]),
    },
};
</script>


<style lang="scss" scoped>
.div-img {
    background-color: #dfdfdf;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.div-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.col1,
.col2 {
    max-width: 300px;
    padding: 5px 10px 5px 10px;
}

.col3 {
    width: 100%;
    padding: 5px 10px 5px 10px;
}

.divider {
    background-color: #dfdfdf;
    width: 100%;
    height: 2px;
    margin: 10px;
}
</style>
