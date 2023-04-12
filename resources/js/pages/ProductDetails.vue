<template>
    <div>
        <layout-navbar-auth />
        <div>
            <!-- <chart-view /> -->
            <v-row class="px-2 pt-8">
                <v-col cols="12" md="4" order="3" order-md="1" sm="12" order-sm="3">
                    <v-row dense class="px-4">
                        <v-col cols="4">
                            <v-row justify="center">
                                <v-btn
                                    light
                                    @click="
                                        showd = true;
                                        showd1 = false;
                                        showd2 = false;
                                    "
                                >
                                    Especificación
                                </v-btn>
                            </v-row>
                        </v-col>
                        <v-col cols="4">
                            <v-row justify="center">
                                <v-btn
                                    light
                                    @click="
                                        showd = false;
                                        showd1 = true;
                                        showd2 = false;
                                    "
                                >
                                    Reseña
                                </v-btn>
                            </v-row>
                        </v-col>
                        <v-col cols="4">
                            <v-row justify="center">
                                <v-btn
                                    light
                                    @click="
                                        showd = false;
                                        showd1 = false;
                                        showd2 = true;
                                    "
                                >
                                    Sostenibilidad
                                </v-btn>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-divider class="mt-6 mb-4" />
                    <v-card
                        v-scroll.self="onScroll"
                        class="overflow-y-auto overflow-uw pa-2"
                        max-height="645"
                        v-show="showd"
                    >
                        <div class="product-item-body pa-4 la-border">
                            <v-row>
                                <v-col cols="6">
                                    <v-row justify="center" dense>
                                        <span>Energía</span>
                                    </v-row>
                                    <v-row justify="center" dense>
                                        <h5 class="subtitle2 text-uppercase mt-1">
                                            {{ productDetails?.intake || "--" }}
                                        </h5>
                                    </v-row>
                                </v-col>
                                <v-divider inset vertical class="mb-2" />
                                <v-col cols="6">
                                    <v-row justify="center" dense>
                                        <span>Material</span>
                                    </v-row>
                                    <v-row justify="center" dense>
                                        <h5 class="subtitle2 text-uppercase mt-1">
                                            {{ productDetails?.material || "--" }}
                                        </h5>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="product-item-body pa-4 la-border mt-4">
                            <v-row>
                                <v-col cols="5">
                                    <v-row dense>
                                        <v-icon class="mr-2">la-cube</v-icon>
                                        <v-icon class="mr-2">la-cube</v-icon>
                                        <v-icon>la-cube</v-icon>
                                    </v-row>
                                    <v-row dense>
                                        <span class="subtitle2 text-uppercase mt-1">Medida de Producto</span>
                                    </v-row>
                                    <v-row dense>
                                        <span class="subtitle2 text-uppercase">Medida de Embalaje</span>
                                    </v-row>
                                    <v-row dense>
                                        <span class="subtitle2 text-uppercase">Medida de Engaste</span>
                                    </v-row>
                                </v-col>
                                <v-col cols="5">
                                    <v-row justify="center" dense>
                                        <span class="subtitles-gray">(Fuente x Profundidad x Altura)</span>
                                    </v-row>
                                    <v-row justify="center" dense>
                                        <span class="subtitle2 text-uppercase mt-3">
                                            {{ productDetails?.medida_producto || "--" }}
                                        </span>
                                    </v-row>
                                    <v-row justify="center" dense>
                                        <span class="subtitle2 text-uppercase">
                                            {{ productDetails?.medidas_de_embalaje || "--" }}
                                        </span>
                                    </v-row>
                                    <v-row justify="center" dense>
                                        <span class="subtitle2 text-uppercase">
                                            {{ productDetails?.engaste || "--" }}
                                        </span>
                                    </v-row>
                                </v-col>
                                <v-col cols="2">
                                    <v-row justify="center" dense>
                                        <span class="subtitles-gray">(Unidades)</span>
                                    </v-row>
                                    <v-row justify="center" dense>
                                        <span class="subtitle2 mt-3">
                                            {{ productDetails?.unit_metering || "--" }}
                                        </span>
                                    </v-row>
                                    <v-row justify="center" dense>
                                        <span class="subtitle2">
                                            {{ productDetails?.unit_metering || "--" }}
                                        </span>
                                    </v-row>
                                    <v-row justify="center" dense>
                                        <span class="subtitle2">
                                            {{ productDetails?.unit_metering || "--" }}
                                        </span>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="product-item-body pa-4 la-border mt-4">
                            <v-row>
                                <v-col cols="6">
                                    <v-row justify="center" dense>
                                        <span>{{ productDetails?.peso_de_producto || "--" }}</span>
                                    </v-row>
                                    <v-row justify="center" dense>
                                        <h5 class="subtitle2 text-uppercase mt-1">Peso de Producto</h5>
                                    </v-row>
                                </v-col>
                                <v-divider inset vertical class="mb-2" />
                                <v-col cols="6">
                                    <v-row justify="center" dense>
                                        <span>{{ productDetails?.peso_de_envio || "--" }}</span>
                                    </v-row>
                                    <v-row justify="center" dense>
                                        <h5 class="subtitle2 text-uppercase mt-1">Peso de Envío</h5>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="product-item-body pa-4 la-border mt-4">
                            <v-row>
                                <v-col cols="6">
                                    <v-row justify="center" dense>
                                        <span>{{ productDetails?.tipo_de_coneccion || "--" }}</span>
                                    </v-row>
                                    <v-row justify="center" dense>
                                        <h5 class="subtitle2 text-uppercase mt-1">Voltaje</h5>
                                    </v-row>
                                </v-col>
                                <v-divider inset vertical class="mb-2" />
                                <v-col cols="6">
                                    <v-row justify="center" dense>
                                        <span>{{ productDetails?.eficiencia || "--" }} %</span>
                                    </v-row>
                                    <v-row justify="center" dense>
                                        <h5 class="subtitle2 text-uppercase mt-1">Eficiencia</h5>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </div>
                        <h5 class="subtitle2 text-uppercase mt-5">Características</h5>
                        <v-divider class="mt-2" />
                        <ul>
                            <li class="subtitle2 mt-1">{{ productDetails?.caracteristica1 || "--" }}</li>
                            <li class="subtitle2">{{ productDetails?.caracteristica2 || "--" }}</li>
                            <li class="subtitle2">{{ productDetails?.caracteristica3 || "--" }}</li>
                            <li class="subtitle2">{{ productDetails?.caracteristica4 || "--" }}</li>
                            <li class="subtitle2">{{ productDetails?.caracteristica5 || "--" }}</li>
                            <li class="subtitle2">{{ productDetails?.caracteristica6 || "--" }}</li>
                            <li class="subtitle2">{{ productDetails?.caracteristica7 || "--" }}</li>
                        </ul>
                        <div class="d-flex justify-space-between">
                            <h5 class="subtitle2 text-uppercase mt-5">Manuales y Guías</h5>
                            <h5 class="subtitles-gray mt-5">(Para descargar)</h5>
                        </div>
                        <v-divider class="mt-2" />
                        <v-row class="mt-1 ml-1">
                            <v-col cols="6">
                                <v-row dense>
                                    <a
                                        class="subtitle2 text-white"
                                        :href="productDetails?.manual_de_producto"
                                        target="_blank"
                                    >
                                        <u>Manual de producto</u>
                                    </a>
                                </v-row>
                                <v-row dense class="mt-1">
                                    <a
                                        class="subtitle2 text-white"
                                        :href="productDetails?.ficha_tecnica_del_producto"
                                        target="_blank"
                                    >
                                        <u>Ficha técnica del producto</u>
                                    </a>
                                </v-row>
                            </v-col>
                            <v-col cols="6">
                                <v-row dense>
                                    <span class="subtitle2"><u>Hora de especificaciones</u></span>
                                </v-row>
                                <v-row dense class="mt-1">
                                    <a
                                        class="subtitle2 text-white"
                                        :href="productDetails?.manual_de_instalacion"
                                        target="_blank"
                                    >
                                        <u>Guía de instalación</u>
                                    </a>
                                </v-row>
                            </v-col>
                        </v-row>
                        <h5 class="subtitle2 text-uppercase mt-5">Beneficios</h5>
                        <v-divider class="mt-2" />
                        <ul>
                            <li class="subtitle2 mt-1">{{ productDetails?.beneficio1 || "--" }}</li>
                            <li class="subtitle2">{{ productDetails?.beneficio2 || "--" }}</li>
                            <li class="subtitle2">{{ productDetails?.beneficio3 || "--" }}</li>
                            <li class="subtitle2">{{ productDetails?.beneficio4 || "--" }}</li>
                            <li class="subtitle2">{{ productDetails?.beneficio5 || "--" }}</li>
                        </ul>
                        <h5 class="subtitle2 text-uppercase mt-5">Servicio Postventa</h5>
                        <v-divider class="mt-2" />
                        <p class="subtitle2">
                            {{ productDetails?.postventa || "--" }}
                        </p>
                    </v-card>
                    <v-card
                        v-scroll.self="onScroll"
                        class="overflow-y-auto overflow-x-auto overflow-uw pa-2"
                        max-height="645"
                        v-show="showd1"
                    >
                        <div class="product-item-body pa-4 la-border">
                            <h5 class="subtitle2 text-uppercase">Calificación</h5>
                            <v-row class="mt-2">
                                <v-col cols="4" class="justify-end" style="line-height: 2.4">
                                    <h5 class="text-uppercase">5.0</h5>
                                    <v-rating
                                        empty-icon="las la-star"
                                        full-icon="las la-star active"
                                        half-icon="las la-star half half"
                                        background-color=""
                                        length="5"
                                        size="11"
                                        v-model="rating"
                                    ></v-rating>
                                    <span class="caption">Opiniones (22)</span>
                                </v-col>
                                <v-col cols="8">
                                    <v-row>
                                        <v-col cols="1" style="line-height: 0.1">
                                            <span class="caption mr-2">5</span>
                                            <span class="caption mr-2">4</span>
                                            <span class="caption mr-2">3</span>
                                            <span class="caption mr-2">2</span>
                                            <span class="caption mr-2">1</span>
                                        </v-col>
                                        <v-col cols="9" style="line-height: 2.1">
                                            <v-progress-linear
                                                v-model="ratings.rating5"
                                                color="white"
                                                class="mt-2"
                                            ></v-progress-linear>
                                            <v-progress-linear
                                                v-model="ratings.rating4"
                                                color="white"
                                                class="mt-4"
                                            ></v-progress-linear>
                                            <v-progress-linear
                                                v-model="ratings.rating3"
                                                color="white"
                                                class="mt-4"
                                            ></v-progress-linear>
                                            <v-progress-linear
                                                v-model="ratings.rating2"
                                                color="white"
                                                class="mt-4"
                                            ></v-progress-linear>
                                            <v-progress-linear
                                                v-model="ratings.rating1"
                                                color="white"
                                                class="mt-4"
                                            ></v-progress-linear>
                                        </v-col>
                                        <v-col cols="2" style="line-height: 0.1">
                                            <span class="caption">30</span><br />
                                            <span class="caption">10</span><br />
                                            <span class="caption">5</span><br />
                                            <span class="caption">0</span><br />
                                            <span class="caption">0</span>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="d-flex pa-2">
                            <h5 class="subtitle2 text-uppercase mt-4">¿Deseas calificar este producto?</h5>
                            <custom-button text="Calificar" class="ml-4 mt-2" light />
                        </div>
                    </v-card>
                    <v-card
                        v-scroll.self="onScroll"
                        class="overflow-y-auto overflow-x-auto pa-2 overflow-uw"
                        max-height="645"
                        v-show="showd2"
                    >
                        <div class="product-item-body pa-4 la-border">
                            <h5 class="subtitle2 text-uppercase">Vida Útil</h5>
                            <v-row dense class="mt-2" justify="center">
                                <v-progress-linear
                                    style="width: 78%"
                                    v-model="ratings.vidaUtil"
                                    color="white"
                                    class="mt-2"
                                ></v-progress-linear>
                            </v-row>
                            <v-row>
                                <v-col cols="3">
                                    <v-row justify="center">
                                        <span>1-14</span>
                                    </v-row>
                                    <v-row justify="center">
                                        <span class="caption">Semanas</span>
                                    </v-row>
                                </v-col>
                                <v-col cols="3">
                                    <v-row justify="center"> <span>1-24</span><br /> </v-row>
                                    <v-row justify="center">
                                        <span class="caption">Meses</span>
                                    </v-row>
                                </v-col>
                                <v-col cols="3">
                                    <v-row justify="center"> <span>1-10</span><br /> </v-row>
                                    <v-row justify="center">
                                        <span class="caption">Años</span>
                                    </v-row>
                                </v-col>
                                <v-col cols="3">
                                    <v-row justify="center"> <span>10-25</span><br /> </v-row>
                                    <v-row justify="center">
                                        <span class="caption">Años</span>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="product-item-body pa-4 la-border mt-4">
                            <h5 class="subtitle2 text-uppercase">Composición de producto</h5>
                            <v-row class="mt-4">
                                <v-col cols="6">
                                    <div class="piechart"></div>
                                </v-col>
                                <v-col cols="6">
                                    <tbody>
                                        <tr v-for="item in desserts" :key="item.name">
                                            <td style="width: 20px">
                                                <div
                                                    class="pa-2 bg-secondary rounded-circle d-inline-block"
                                                    :style="item.color"
                                                />
                                            </td>
                                            <td style="width: 120px" class="text-size-comp ml-1">{{ item.name }}</td>
                                            <td style="width: 50px" class="text-size-comp ml-2">{{ item.percent }}</td>
                                            <td class="text-size-comp ml-2">{{ item.kg }}</td>
                                        </tr>
                                    </tbody>
                                </v-col>
                            </v-row>
                            <v-divider class="mt-3 mb-4" />
                            <h5 class="subtitle2 text-uppercase">Impacto Ambiental</h5>
                            <v-row class="mt-4" justify="center">
                                <div style="width: 78%; position: relative" class="d-flex">
                                    <v-icon large class="markerLoc" :style="{ left: impacto }">la-map-pin</v-icon>
                                    <v-col cols="3" style="padding: 20px 0px">
                                        <v-progress-linear background-color="green" class="mt-2"></v-progress-linear>
                                    </v-col>
                                    <v-col cols="3" style="padding: 15px 0px">
                                        <v-progress-linear background-color="yellow" class="mt-2"></v-progress-linear>
                                    </v-col>
                                    <v-col cols="3" style="padding: 10px 0px">
                                        <v-progress-linear background-color="orange" class="mt-2"></v-progress-linear>
                                    </v-col>
                                    <v-col cols="3" style="padding: 5px 0px">
                                        <v-progress-linear background-color="red" class="mt-2"></v-progress-linear>
                                    </v-col>
                                </div>
                            </v-row>
                            <v-row class="mt-0 mb-1">
                                <v-col cols="4">
                                    <v-row justify="start">
                                        <span class="caption ml-4">Sostenible</span>
                                    </v-row>
                                </v-col>
                                <v-col cols="4">
                                    <v-row justify="center">
                                        <span class="caption">Reversible</span>
                                    </v-row>
                                </v-col>
                                <v-col cols="4">
                                    <v-row justify="end">
                                        <span class="caption mr-4">Irreversible</span>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="product-item-body pa-4 la-border mt-4">
                            <h5 class="subtitle2 text-uppercase">Consejos Ecológicos</h5>
                            <ul>
                                <li class="subtitle2 mt-1">
                                    Una vez el producto cumpla su vida útil debes ser riguroso en reciclar sus
                                    materiales de forma correcta.
                                </li>
                                <li class="subtitle2 mt-2">
                                    Realizar el mantenimiento pertinente en las fechas adecuadas para extender la vida
                                    útil del producto.
                                </li>
                            </ul>
                        </div>
                        <v-row>
                            <v-col cols="6">
                                <div class="product-item-body pa-2 la-border mt-4">
                                    <v-row dense justify="center" class="mt-3">
                                        <v-icon x-large>la-sync</v-icon>
                                    </v-row>
                                    <v-row dense justify="center" class="mt-5">
                                        <p class="subtitle2" style="text-align: center">
                                            Deseo reciclar un viejo producto y recibir un bono adicional de descuento a
                                            cambio.
                                        </p>
                                    </v-row>
                                    <v-row dense justify="center">
                                        <custom-button plain text="Solicitar" />
                                    </v-row>
                                    <v-row dense justify="center" class="mt-4 mb-2">
                                        <custom-button light text="RENOVACIÓN UPGRADE" class="button-espe" />
                                    </v-row>
                                </div>
                            </v-col>
                            <v-col cols="6">
                                <div class="product-item-body pa-2 la-border mt-4">
                                    <v-row dense justify="center" class="mt-3">
                                        <v-icon x-large>la-tools</v-icon>
                                    </v-row>
                                    <v-row dense justify="center" class="mt-5">
                                        <p class="subtitle2" style="text-align: center">
                                            Deseo programar un mantenimiento preventivo para mi producto/s.
                                        </p>
                                    </v-row>
                                    <v-row dense justify="center">
                                        <custom-button plain text="Solicitar" />
                                    </v-row>
                                    <v-row dense justify="center" class="mt-4 mb-2">
                                        <custom-button light text="SOPORTE TÉCNICO" class="button-espe" />
                                    </v-row>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>

                <v-col
                    cols="12"
                    class="positionColbuttons pt-0"
                    lg="4"
                    order-lg="2"
                    md="4"
                    order-md="1"
                    sm="12"
                    order-sm="1"
                    order="1"
                >
                    <v-row dense class="buttons-img">
                        <v-col cols="4">
                            <v-row justify="center">
                                <v-btn
                                    class="btn-img"
                                    light
                                    @click="
                                        showp = true;
                                        showp1 = false;
                                        showp2 = false;
                                    "
                                >
                                    Imágenes
                                </v-btn>
                            </v-row>
                        </v-col>
                        <v-col cols="4">
                            <v-row justify="center">
                                <v-btn
                                    class="btn-img"
                                    light
                                    @click="
                                        showp = false;
                                        showp1 = true;
                                        showp2 = false;
                                    "
                                >
                                    Videos
                                </v-btn>
                            </v-row>
                        </v-col>
                        <v-col cols="4">
                            <v-row justify="center">
                                <v-btn
                                    class="btn-img"
                                    light
                                    @click="
                                        showp = false;
                                        showp1 = false;
                                        showp2 = true;
                                    "
                                >
                                    Ficha Técnica
                                </v-btn>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row dense justify class="pt-0">
                        <v-col>
                            <carousel :slides="productDetails?.imagenes" v-show="showp" style="height: 700px" />
                            <carousel :slides="productDetails?.videos" v-show="showp1" style="height: 700px" />
                            <v-img
                                :src="productDetails?.ficha_tecnica_del_producto"
                                v-show="showp2"
                                height="700px"
                                width="100%"
                            />
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="4" order-md="3" sm="12" order-sm="2" order="2" class="py-0">
                    <div class="product-item-body pa-4 la-border">
                        <div class="d-flex justify-space-between">
                            <h5 class="subtitle2 text-uppercase mb-2">REFERENCIA: {{ productDetails?.reference }}</h5>
                            <v-icon right> la-bookmark </v-icon>
                        </div>
                        <h5 class="subtitle1 text-uppercase font-weight-bold mb-2">{{ productDetails?.name ?? "" }}</h5>
                        <h5 class="subtitle1 mb-2">{{ productDetails?.brand?.name ?? "" }}</h5>
                        <div class="d-flex">
                            <h5 class="subtitle1 mb-2 mr-2">
                                {{ productDetails?.lowest_price ?? "000" }} {{ productDetails?.currency ?? "" }}
                            </h5>
                            <h5 class="caption mb-2">
                                <del
                                    >{{ productDetails?.highest_price ?? "000" }}
                                    {{ productDetails?.currency ?? "" }}</del
                                >
                            </h5>
                        </div>
                        <div class="d-flex justify-space-between">
                            <h5 class="caption mb-3">{{ iva }}</h5>
                            <div class="d-flex justify-space-around align-center">
                                <v-btn icon @click="model = Math.max(model - 1, 0)">
                                    <v-icon small> la-minus </v-icon>
                                </v-btn>
                                {{ model }}
                                <v-btn icon @click="model = Math.min(model + 1, 8)">
                                    <v-icon small> la-plus </v-icon>
                                </v-btn>
                            </div>
                        </div>
                        <custom-button text="Agregar a Compras" block />
                        <custom-button light text="Consultar a un Asesor" block class="mt-3" />
                    </div>
                    <div class="product-item-body pa-4 la-border mt-3">
                        <div class="d-flex justify-space-between">
                            <h5 class="subtitle2 text-uppercase mb-1">{{ varia }}</h5>
                            <v-btn-toggle>
                                <v-btn class="blue toggle-btn" />
                                <v-btn class="ml-2 white toggle-btn" />
                                <v-btn class="ml-2 black toggle-btn" />
                                <v-btn class="ml-2 red toggle-btn" />
                            </v-btn-toggle>
                        </div>
                    </div>
                    <div class="product-item-body pa-4 la-border mt-3">
                        <div class="d-flex justify-space-between">
                            <h5 class="subtitle2 text-uppercase mb-1">Disponibilidad</h5>
                            <h5 class="subtitle1 mb-2">{{ productDetails?.stock ?? "000" }} en stock</h5>
                        </div>
                        <div class="d-flex justify-space-between">
                            <h5 class="subtitle2 text-uppercase mb-1">Garantía</h5>
                            <h5 class="subtitle1 mb-2">{{ productDetails?.warranty_text ?? "--" }}</h5>
                        </div>
                        <div class="d-flex justify-space-between">
                            <h5 class="subtitle2 text-uppercase mb-1">Pago</h5>
                            <h5 class="subtitle1 mb-2">--</h5>
                        </div>
                        <div class="d-flex justify-space-between">
                            <h5 class="subtitle2 text-uppercase">Envío</h5>
                            <h5 class="subtitle1">{{ productDetails?.shipping ?? "--" }}</h5>
                        </div>
                    </div>
                    <h5 class="subtitle2 text-uppercase mt-3 mb-2">Se incluye con la compra</h5>
                    <div class="product-item-body mt-3">
                        <v-divider />
                        <product-item-6 />
                    </div>
                </v-col>
            </v-row>

            <div class="px-2 pt-12">
                <div class="d-flex justify-space-between mb-8">
                    <h5 class="mt-1">H5</h5>
                    <div class="d-none d-lg-block" style="width: 38%">
                        <custom-button light text="Nuevo" style="width: 23%" />
                        <custom-button light text="Nuevo" class="ml-2" style="width: 23%" />
                        <custom-button light text="Nuevo" class="ml-2" style="width: 23%" />
                        <custom-button light text="Nuevo" class="ml-2" style="width: 23%" />
                    </div>
                    <div class="d-lg-none" style="width: 40%; text-align: end">
                        <custom-button light text="Filtro" style="width: 40%" />
                    </div>
                </div>
                <v-row>
                    <v-col cols="6" md="4" sm="4" xs="6" lg="2" xl="2" v-for="(product, i) in moreProducts" :key="i">
                        <product-box :product-details="product" />
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <custom-button light text="Ver más" class="mt-6 mb-6" style="width: 40%" />
                </v-row>
            </div>

            <v-row class="px-2 py-12">
                <v-col cols="12">
                    <div class="d-flex justify-space-between mb-8">
                        <h5 class="mt-1">H5</h5>
                        <div class="d-none d-lg-block" style="width: 38%">
                            <custom-button light text="Nuevo" style="width: 23%" />
                            <custom-button light text="Nuevo" class="ml-2" style="width: 23%" />
                            <custom-button light text="Nuevo" class="ml-2" style="width: 23%" />
                            <custom-button light text="Nuevo" class="ml-2" style="width: 23%" />
                        </div>
                        <div class="d-lg-none" style="width: 40%; text-align: end">
                            <custom-button light text="Filtro" style="width: 40%" />
                        </div>
                    </div>
                    <v-row>
                        <v-col
                            cols="12"
                            md="6"
                            sm="6"
                            xs="12"
                            lg="3"
                            xl="3"
                            v-for="(product, i) in footerProducts"
                            :key="i"
                        >
                            <product-box :product-details="product" boxStyle="two" />
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <custom-button light text="Ver más" class="mt-6" style="width: 40%" />
                    </v-row>
                </v-col>
            </v-row>
        </div>
        <footer-custom />
    </div>
</template>

<script>
import ProductBox from "../components/product/ProductBox.vue";
import ProductItem6 from "../components/global/ProductItem6.vue";
import CustomButton from "../components/global/CustomButton.vue";
import FooterCustom from "../components/global/FooterCustom.vue";
import LayoutNavbarSpaces from "../components/global/LayoutNavbarSpaces.vue";
import Carousel from "../components/global/Carousel.vue";
import LayoutNavbarAuth from "../components/global/LayoutNavbarAuth.vue";
// import ChartView from "../components/global/ChartView.vue";
import { mapActions } from "vuex";
export default {
    data: () => ({
        productDetails: {},
        showp: true,
        showp1: false,
        showp2: false,
        showd: true,
        showd1: false,
        showd2: false,
        id: "0",
        img: "/public/assets/img/item-placeholder.png",
        iva: "* Iva Incluido",
        varia: "Variación",
        model: 0,
        tags: ["1", "2", "3"],
        ratings: { rating5: 67, rating4: 22, rating3: 11, rating2: 0, rating1: 0, vidaUtil: 0 },
        desserts: [],
        impacto: "28%",
        moreProducts: [],
        footerProducts: []
    }),
    components: {
        ProductBox,
        ProductItem6,
        CustomButton,
        LayoutNavbarSpaces,
        Carousel,
        LayoutNavbarAuth,
        FooterCustom
        // ChartView
    },
    methods: {
        async getDetails() {
            const res = await this.call_api("get", `product/details/${this.$route.params.slug}`);
            if (res.data.success) {
                this.productDetails = res.data.data;
                this.setVidaUtil(this.productDetails.vida_util);
                this.setComposition(this.productDetails);
                this.setImpacto(this.productDetails?.impacto_ambiental);
                this.getMoreProducts(this.productDetails?.id);
                this.getMoreProducts2(this.productDetails?.id);
            }
        },
        async getMoreProducts(id) {
            const res = await this.call_api("get", `product/random/6/${id}`);
            if (res.data.success) {
                res.data?.data?.map(product => {
                    this.moreProducts.push({
                        id: product?.id,
                        name: product?.name,
                        val: product?.base_price + " " + product?.currency,
                        img: product?.thumbnail_image,
                        description: product?.description,
                        brand: product?.brandName,
                        ref: product?.reference,
                        slug: product?.slug
                    });
                });
            }
        },
        async getMoreProducts2(id) {
            const res = await this.call_api("get", `product/random/4/${id}`);
            if (res.data.success) {
                res.data?.data?.map(product => {
                    this.footerProducts.push({
                        id: product?.id,
                        name: product?.name,
                        val: product?.base_price + " " + product?.currency,
                        img: product?.thumbnail_image,
                        description: product?.description,
                        brand: product?.brandName,
                        ref: product?.reference,
                        slug: product?.slug
                    });
                });
            }
        },
        setVidaUtil(value) {
            if (value) {
                switch (value) {
                    case "1-10 años":
                        this.ratings.vidaUtil = 67;
                        break;
                    case "10-25 años":
                        this.ratings.vidaUtil = 100;
                        break;
                    case "1-24 Meses":
                        this.ratings.vidaUtil = 34;
                        break;
                    case "1-14 Semanas":
                        this.ratings.vidaUtil = 0;
                        break;
                    default:
                        this.ratings.vidaUtil = 0;
                        break;
                }
            }
        },
        setComposition(data) {
            this.desserts = [
                {
                    color: "background-color:#114B99",
                    name: "Plástico",
                    percent: data?.plastico ?? "-",
                    kg: data?.peso_plastico ?? "-" + "Kg"
                },
                {
                    color: "background-color:#FEA60F",
                    name: "Cartón",
                    percent: data?.carton ?? "-",
                    kg: data?.peso_carton ?? "-" + "Kg"
                },
                {
                    color: "background-color:#FFFFFF",
                    name: "Papel",
                    percent: data?.papel ?? "-",
                    kg: data?.peso_papel ?? "-" + "Kg"
                },
                {
                    color: "background-color:#445056",
                    name: "Metal",
                    percent: data?.metal ?? "-",
                    kg: data?.peso_metal ?? "-" + "Kg"
                },
                {
                    color: "background-color:#61A959",
                    name: "Vidrio",
                    percent: data?.vidrio ?? "-",
                    kg: data?.peso_vidrio ?? "-" + "Kg"
                },
                {
                    color: "background-color:#B1771D",
                    name: "Madera",
                    percent: data?.madera ?? "-",
                    kg: data?.peso_madera ?? "-" + "Kg"
                },
                {
                    color: "background-color:#ED847B",
                    name: "Textil",
                    percent: data?.textil ?? "-",
                    kg: data?.peso_textil ?? "-" + "Kg"
                },
                {
                    color: "background-color:#ED847B",
                    name: "Baterías / Eléctrico",
                    percent: data?.bateria_electrico ?? "-",
                    kg: data?.peso_bateria_electrico ?? "-" + "Kg"
                }
            ];
        },
        setImpacto(value) {
            if (value) {
                switch (value) {
                    case "Reversible":
                        this.impacto = "35%";
                        break;
                    case "Sostenible":
                        this.impacto = "11%";
                        break;
                    case "No Reversible":
                        this.impacto = "75%";
                        break;
                    default:
                        this.impacto = "11%";
                        break;
                }
            }
        }
    },
    mounted() {
        this.$vuetify.theme.dark = true;
    },
    async created() {
        this.getDetails();
    }
};
</script>

<style lang="scss" scoped>
.v-btn {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1.25px;

    @media (min-width: 960px) {
        font-size: 14px;
    }

    border-radius: 5px;

    i {
        font-size: 20px;
    }

    &:hover:before,
    &:focus:before {
        opacity: 1;
    }

    &.v-size--default {
        height: 38px;
    }
}

.theme--light {
    &.v-btn {
        color: #000000;

        &.v-btn--has-bg {
            background-color: #dfdfdf;

            &:before {
                background-color: #ffffff;
            }

            &.v-btn--disabled {
                color: #000000 !important;

                &.v-btn--has-bg {
                    background-color: #fafcfc !important;
                }
            }
        }

        &.v-btn--outlined {
            color: #ffffff;

            &:hover,
            &:focus {
                color: #000000;
            }

            &:before {
                background-color: rgba(255, 255, 255, 0.8);
            }

            &:focus {
                &:before {
                    background-color: #ffffff;
                }
            }
        }
    }
}

.buttonsAct {
    top: 20px;
    position: absolute;
    width: 96%;
}
.buttons-img {
    position: absolute;
    width: 95%;
    z-index: 2;
    top: 5%;
    padding: 15px;
}
.button-espe {
    font-size: 10px;
}
.markerLoc {
    top: -37%;
    position: absolute;
}
.btn-img {
    width: 85% !important;
}
.positionColbuttons {
    position: relative;
}

.la-border {
    border-radius: 0.5em;
}

.v-btn-toggle {
    border-radius: 0px;
    height: 20px !important;
}

.toggle-btn {
    height: 20px !important;
    min-width: 20px !important;
}

.v-divider {
    border-width: thin 0 0;
}

.v-divider--vertical {
    border-width: 0 thin 0 0;
}

.subtitles-gray {
    font-size: 12px;
    color: gray;
}

.justify-end {
    text-align: end;
}

.piechart {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background-image: conic-gradient(from 180deg, #b1771d 0 320deg, #445056 0 336deg, #114b99 0);
}

.text-size-comp {
    font-size: 0.6rem;
}
</style>
