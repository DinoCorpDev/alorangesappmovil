<template>
    <v-container>
        <div>
            <div class="data-notification">
                <notification-cart2
                    title="Titulo de mensaje"
                    date="02 de Julio de 2022"
                    remitent="correo@idovela.com"
                />
            </div>
            <div class="divider"></div>
                <div class="data-container">
                    <h6 class="notification-subtitle">Subtitulo 2</h6>
                    <p class="notification-data">
                        Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's •
                        Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's •
                        Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing •
                        Lorem Ipsum has been the industry's Incluye Lorem Ipsum is simply dummy text of the printing •
                        Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing •
                        Lorem Ipsum has been the industry's • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum
                        is simply dummy text of the printing • Lorem Ipsum has been the industry's • Lorem Ipsum has
                        been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has
                        been the industry's Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has
                        been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has
                        been the industry's • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy
                        text of the printing • Lorem Ipsum has been the industry's
                    </p>
                </div>
                <div class="data-container">
                    <h6 class="notification-subtitle">Subtitulo 2</h6>
                    <v-img class="notification-img" :src="itemPlaceholderUrl" :aspect-ratio="aspectRatio" contain />
                </div>
 
        </div>
    </v-container>
</template>
<script>
import NotificationCart2 from "../../components/global/NotificationCart2.vue";

export default {
    components: {
        NotificationCart2
    },
    data() {
        return {
            itemPlaceholderUrl: "/public/assets/img/carousel-item-placeholder.png"
        };
    }
};
</script>
<style lang="scss" scoped>

.data-notification {
    // display: flex;
    width: 100%;
}
.data-container{
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
.notification-data{
    font: normal normal normal 15px/24px Roboto;
}
.notification-subtitle{
    padding-top: 20px;
    padding-bottom: 20px;
}
.notification-img{
    background-color: #f5f5f5;
}
</style>
