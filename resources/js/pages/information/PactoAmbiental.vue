<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="data-notification">
                <div class="div-container">
                    <div class="div-img">
                        <div>
                            <v-img max-width="100px" :src="img"></v-img>
                        </div>
                    </div>
                    <div class="div-not1">
                        <h6 class="black--text bold">Pacto ambiental</h6>
                        <div class="div-not1-1">
                            <div>
                                <span class="black--text body2">Actualizacion 02 enero 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
                <v-divider class="my-4" />
            </v-col>
            <v-col cols="12" class="data-container">
                <h6 class="notification-subtitle">Subtitulo 2</h6>
                <p class="notification-data">
                    Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's •
                    Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's •
                    Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing •
                    Lorem Ipsum has been the industry's Incluye Lorem Ipsum is simply dummy text of the printing • Lorem
                    Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem
                    Ipsum has been the industry's • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply
                    dummy text of the printing • Lorem Ipsum has been the industry's • Lorem Ipsum has been the
                    industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the
                    industry's Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the
                    industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the
                    industry's • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the
                    printing • Lorem Ipsum has been the industry's
                </p>
            </v-col>
            <v-col cols="12" md="6" class="data-container">
                <h6 class="notification-subtitle">Subtitulo 2</h6>
                <p class="notification-data">
                    Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's •
                    Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's •
                    Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing •
                    Lorem Ipsum has been the industry's Incluye Lorem Ipsum is simply dummy text of the printing • Lorem
                    Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem
                    Ipsum has been the industry's • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply
                    dummy text of the printing • Lorem Ipsum has been the industry's • Lorem Ipsum has been the
                    industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the
                    industry's Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the
                    industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the
                    industry's • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the
                    printing • Lorem Ipsum has been the industry's
                </p>
            </v-col>
            <v-col cols="12" md="6" class="data-container">
                <h6 class="notification-subtitle">Subtitulo 2</h6>
                <p class="notification-data">
                    Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's •
                    Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's •
                    Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing •
                    Lorem Ipsum has been the industry's Incluye Lorem Ipsum is simply dummy text of the printing • Lorem
                    Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem
                    Ipsum has been the industry's • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply
                    dummy text of the printing • Lorem Ipsum has been the industry's • Lorem Ipsum has been the
                    industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the
                    industry's Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the
                    industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the
                    industry's • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the
                    printing • Lorem Ipsum has been the industry's
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import CustomButton from "../../components/global/CustomButton.vue";

export default {
    components: {
        CustomButton
    }
};
</script>

<style lang="scss" scoped>
.data-notification {
    // display: flex;
    width: 100%;
}

.data-container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.divider {
    background-color: #ffffff;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    height: 2px;
}

.notification-data {
    font: normal normal normal 15px/24px Roboto;
}

.notification-subtitle {
    padding-top: 20px;
    padding-bottom: 20px;
}

.notification-img {
    background-color: #f5f5f5;
}

.div-container {
    display: flex;
    width: 100%;
    align-content: center;
}

.div-not1 {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0px 10px;
    width: 100%;
    flex-wrap: wrap;
}

.div-not1-1 {
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 599px) {
        display: flex;
        flex-direction: column;
    }
}

.div-not2 {
    display: flex;
    align-items: center;
    width: fit-content;
}

.div-not2-1 {
    display: flex;
}

.cart {
    background-color: #f5f5f5;
    border-radius: 10px;
}

.div-img {
    background-color: #dfdfdf;
    border-radius: 50%;
    width: 80px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.divider {
    background-color: #dfdfdf;
    width: 2px;
    height: 80px;
}
</style>
