<template>
    <div class="cart">
        <div class="div-container">
            <div class="div-img">
                <div>
                    <v-img max-width="100px" :src="img"></v-img>
                </div>
            </div>
            <div class="div-body">
                <div>
                    <span class="black--text body2">{{ reference }}</span>
                    <h6 class="black--text bold text-uppercase">{{ name }}</h6>
                    <span class="black--text body1">{{ brand }}</span>
                </div>
                <div class="divider"></div>
                <div>
                    <h6 class="black--text text-uppercase">{{ price }}</h6>
                </div>
                <div class="divider"></div>
                <div>
                    <div class="quantity">
                        <h6>+ {{ quantity }} -</h6>
                    </div>
                </div>
                <div class="divider"></div>
                <div>
                    <i width="64px" class="las la-trash"></i>
                    <i class="las la-eye"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "ProductItem",
    props: {
        img: {
            type: String,
            default: "/public/assets/img/carousel-item-placeholder.png"
        },
        reference: {
            type: String,
            default: "Sin Asignar"
        },
        name: {
            type: String,
            default: "Sin Asignar"
        },
        brand: {
            type: String,
            default: "Sin Asignar"
        },
        price: {
            type: String,
            default: "Sin Asignar"
        },
        quantity: {
            type: String,
            default: "00"
        }
    }
};
</script>

<style lang="scss" scoped>
.div-container {
    display: flex;
}
.div-body {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
    width: 100%;
}

.cart {
    background-color: #F5F5F5;
    border-radius: 10px;
}

.div-img {
    background-color: #dfdfdf;
    border-start-start-radius: 10px;
    border-end-start-radius: 10px;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.divider {
    background-color: #DFDFDF;
    width: 2px;
    height: 80px;
}

.quantity {
    background-color: #FAFAFA;
    padding: 10px 15px;
    border-radius: 10px;
}
</style>
