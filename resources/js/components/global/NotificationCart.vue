<template>
    <div class="cart">
        <div class="div-container">
            <div class="div-img">
                <div>
                    <v-img max-width="100px" :src="img"></v-img>
                </div>
            </div>
            <div class="div-body">
                <div class="div-not1">
                    <div>
                        <h6 class="black--text bold ">{{ title }}</h6>
                        <span class="black--text body1">Fecha</span>
                        <span class="black--text body1 ">{{ date }}</span>
                    </div>
                    <div>
                        <span class="black--text  bold body1">Envíado</span>
                        <span class="black--text body1 ">{{ remitent }}</span>
                    </div>
                </div>
                <div class="div-not2">
                    <div class="divider"></div>
                    <div>
                        <custom-button plain icon="la-trash" />
                        <custom-button plain icon="las la-eye" />
                    </div>
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
}

.div-body {
    grid-template-columns: 4fr 1fr;
    display: grid;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
    width: 100%;
}

.div-not1{
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0px 10px;
    width: 100%;
}
.div-not2{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
    width: 100%;
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

@media (max-width: 959px) {

}
</style>
