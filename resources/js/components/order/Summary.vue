<template>
    <div v-if="!is_empty_obj(orderDetails) && orderDetails.orders.length > 0">
        <v-sheet class="" color="white" elevation="0" v-for="(order, i) in orderDetails.orders" :key="i">
            <!-- <OrderPackage :order-details="order" /> -->
        </v-sheet>
        <v-row>
            <v-col cols="12" md="6">
                <v-row>
                    <v-col cols="12">
                        <h5 class="fw-600">Dirección de envio</h5>
                        <v-divider class="my-4" />
                        <div class="form">
                            <h6 class="black--text bold">Nombre de direccion</h6>
                            <v-divider class="my-3" />
                            <div class="d-flex justify-space-between mb-2">
                                <span class="subtitle1 text-uppercase bold pl-3">Nombre de Dirección</span>
                                <span class="body1 pr-3">Dirección principal</span>
                            </div>
                            <div class="d-flex justify-space-between mb-2">
                                <span class="subtitle1 text-uppercase bold pl-3">Dirección</span>
                                <span class="body1 text-right pr-3">{{ orderDetails.shipping_address?.address }}</span>
                            </div>
                            <div class="d-flex justify-space-between mb-2">
                                <span class="subtitle1 text-uppercase bold pl-3"> Descripción de Dirección </span>
                                <span class="body1 pr-3">{{ orderDetails.shipping_address?.address }}</span>
                            </div>
                            <div class="d-flex justify-space-between mb-2">
                                <span class="subtitle1 text-uppercase bold pl-3">Codigo Postal</span>
                                <span class="body1 pr-3">{{ orderDetails.shipping_address?.postal_code }}</span>
                            </div>
                            <div class="d-flex justify-space-between mb-2">
                                <span class="subtitle1 text-uppercase bold pl-3">Departamento</span>
                                <span class="body1 pr-3">{{ orderDetails.shipping_address?.country }}</span>
                            </div>
                            <div class="d-flex justify-space-between mb-2">
                                <span class="subtitle1 text-uppercase bold pl-3">Municipio</span>
                                <span class="body1 pr-3">{{ orderDetails.shipping_address?.city }}</span>
                            </div>
                            <div class="d-flex justify-space-between mb-2">
                                <span class="subtitle1 text-uppercase bold pl-3">Barrio</span>
                                <span class="body1 pr-3"> -- </span>
                            </div>
                            <div class="d-flex justify-space-between mb-2">
                                <span class="subtitle1 text-uppercase bold pl-3">Telefono / Celular</span>
                                <span class="body1 pr-3">{{ orderDetails.shipping_address?.phone }}</span>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="6">
                <v-row>
                    <v-col cols="12">
                        <h5 class="fw-600">Facturar a nombre de</h5>
                        <v-divider class="my-4" />
                        <div class="form">
                            <h6 class="black--text bold">Usuario principal</h6>
                            <v-divider class="my-3" />
                            <div class="d-flex justify-space-between mb-2">
                                <span class="subtitle1 text-uppercase bold pl-3">Correo electronico</span>
                                <span class="body1 pr-3">{{ orderDetails.user.email || "--" }}</span>
                            </div>
                            <div class="d-flex justify-space-between mb-2">
                                <span class="subtitle1 text-uppercase bold pl-3">Tipo de Persona</span>
                                <span class="body1 pr-3">{{ "--" }}</span>
                            </div>
                            <div class="d-flex justify-space-between mb-2">
                                <span class="subtitle1 text-uppercase bold pl-3">Nombre</span>
                                <span class="body1 pr-3">{{ orderDetails.user.name || "--" }}</span>
                            </div>
                            <div class="d-flex justify-space-between mb-3">
                                <span class="subtitle1 text-uppercase bold pl-3">Documento</span>
                                <span class="body1 pr-3">
                                    {{ "--" }}
                                </span>
                            </div>
                        </div>

                        <h5 class="fw-600">Medio de pago</h5>
                        <v-divider class="my-4" />
                        <div class="form" v-if="payment_method.payment_method">
                            <div class="d-flex justify-space-between mb-2">
                                <span class="subtitle1 text-uppercase bold pl-3">{{payment_method.payment_method.extra.brand || 'PSE'}}</span>
                                <span class="body1 pr-3">{{ payment_method.payment_method.extra.last_four ? `************${payment_method.payment_method.extra.last_four}` : payment_method.status }}</span>
                            </div>
                        </div>
                        <div class="form" v-else>
                            <div>Información no recibida</div>
                        </div>
                        <h5 class="fw-600">Código promocional</h5>
                        <v-divider class="my-4" />
                        <div class="form">
                            <div class="d-flex"><regalo /></div>
                            <v-divider class="my-3" />
                            <v-row>
                                <v-col cols="6" class="text-left"> CODIGO (REGALO/REFERIDO) </v-col>
                                <v-col cols="6" class="text-right"> XXXX XXXX XXXX XXXX </v-col>
                            </v-row>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-divider class="my-4" />

        <v-row>
            <p style="font-size: 0.7rem; color: #b4b5b5; padding-left: 1.2rem; text-align: left">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Urna curabitur aliquet condimentum facilisis ex nec
                morbi porta laoreet. Tempus fusce et mollis dolor est augue cursus. Fusce et nisi venenatis ad neque
                tincidunt dapibus. Condimentum maximus in leo mollis nascetur dignissim. Curae leo odio morbi efficitur
                sociosqu metus. Magnis feugiat hac conubia non torquent commodo sit. Euismod metus hac ullamcorper
                tristique feugiat ut. Praesent turpis magnis himenaeos quis adipiscing. Fusce sodales morbi dictum felis
                feugiat. Pellentesque condimentum nisl integer tincidunt ac urna nascetur ante fermentum. Montes nec
                integer sagittis eu accumsan orci lacus orci sociosqu. Cras etiam augue non fermentum finibus sed.
                Cursus primis ridiculus in faucibus velit ultricies lectus. Amet tempus quam sollicitudin aenean
                imperdiet accumsan imperdiet. Enim himenaeos rhoncus montes sollicitudin lacinia dis mus commodo. Etiam
                vitae senectus phasellus hendrerit pretium mi adipiscing. Dui libero montes; ante elementum augue
                lectus. Hac phasellus felis feugiat nulla ante. Interdum malesuada sem finibus, etiam penatibus gravida
                molestie ante faucibus? Ipsum in metus nibh faucibus dapibus proin suspendisse eget.
            </p>
        </v-row>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Regalo from "../../components/icons/Regalo.vue";
import OrderPackage from "./OrderPackage.vue";

export default {
    data(){
        return {
            payment_method:{},
        }
    },
    components: {
        OrderPackage,
        Regalo
    },
    computed: {
        ...mapGetters("app", ["appUrl"])
    },
    props: {
        orderDetails: { type: Object, default: () => {} }
    },
    created() {
        this.iterateOrderUpdates();
    },
    methods: {
        iterateOrderUpdates() {
            const orderUpdates = this.orderDetails.order_updates;
            this.payment_method = this.orderDetails.orders[0].manual_payment;
            console.log(this.payment_method);
            this.orderDetails.orders[0].order_updates = orderUpdates;
        }
    }
};
</script>

<style>
.container {
    background-color: #fafcfc;
}

.form {
    border: 1px solid #f5f5f5;
    border-radius: 10px;
    padding: 10px;
    background: #f5f5f5;
    margin-bottom: 15px;
}

.bold {
    font-weight: bold;
}
</style>
