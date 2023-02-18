<template>
    <div class="cart">
        <div class="div-container">
            <div class="div-img">
                <div>
                    <v-img max-width="100px" :src="img"></v-img>
                </div>
            </div>
            <div class="div-not1">
                <h6 class="black--text bold">{{ title }}</h6>
                <div class="div-not1-1">
                    <div>
                        <span class="black--text body2">Fecha</span>
                        <span class="black--text body2">{{ date }}</span>
                    </div>
                    <div>
                        <span class="black--text bold body2">Envíado</span>
                        <span class="black--text body2">{{ remitent }}</span>
                    </div>
                </div>
            </div>
            <div class="div-not2">
                <div class="divider"></div>
                <div class="d-none d-sm-block">
                    <div class="div-not2-1">
                    <custom-button icon="la-trash" />
                    <custom-button icon="las la-eye" /></div>
                </div>
                <div class="d-sm-none div-not2-1">
                    <custom-button icon="la-ellipsis-v" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CustomButton from "../../components/global/CustomButton.vue";

export default {
    name: "Notification",
    components: {
        CustomButton
    },
    props: {
        id: {
            type: String,
            default: "Sin Asignar"
        },
        img: {
            type: String,
            default: "/public/assets/img/carousel-item-placeholder.png"
        },
        title: {
            type: String,
            default: "Sin Asignar"
        },
        date: {
            type: String,
            default: "Sin Asignar"
        },
        remitent: {
            type: String,
            default: "Sin Asignar"
        }
    }
};
</script>

<style lang="scss" scoped>
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
.div-not2-1{
    display: flex;
}
.cart {
    background-color: #f5f5f5;
    border-radius: 10px;
}

.div-img {
    background-color: #dfdfdf;
    border-radius: 50%;
    width: 100px;
    height: 100px;
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
