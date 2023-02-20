<template>
    <div>
        <layout-navbar-auth />
        <!-- <chart-view /> -->
        <v-row>
            <v-col cols="12" md="4" order-md="1" sm="12" order-sm="3" xs="12" order-xs="3">
                <v-row dense class="mt-2 ml-3">
                    <v-col cols="4">
                        <v-row justify="center">
                            <v-btn
                                light
                                width="150px"
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
                                width="150px"
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
                                width="150px"
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
                <v-divider class="mt-8 ml-3" />
                <v-card v-scroll.self="onScroll" class="overflow-y-auto mt-3" max-height="628" v-show="showd">
                    <div class="product-item-body pa-4 la-border ml-3">
                        <v-row>
                            <v-col cols="6">
                                <v-row justify="center" dense>
                                    <span>Energía</span>
                                </v-row>
                                <v-row justify="center" dense>
                                    <h5 class="subtitle2 text-uppercase mt-1">Consumo</h5>
                                </v-row>
                            </v-col>
                            <v-divider inset vertical class="mb-2" />
                            <v-col cols="6">
                                <v-row justify="center" dense>
                                    <span>Material</span>
                                </v-row>
                                <v-row justify="center" dense>
                                    <h5 class="subtitle2 text-uppercase mt-1">Cuerpo</h5>
                                </v-row>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="product-item-body pa-4 la-border ml-3 mt-4">
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
                                    <span class="subtitle2 text-uppercase mt-3">000 x 000 x 000</span>
                                </v-row>
                                <v-row justify="center" dense>
                                    <span class="subtitle2 text-uppercase">000 x 000 x 000</span>
                                </v-row>
                                <v-row justify="center" dense>
                                    <span class="subtitle2 text-uppercase">000 x 000 x 000</span>
                                </v-row>
                            </v-col>
                            <v-col cols="2">
                                <v-row justify="center" dense>
                                    <span class="subtitles-gray">(Unidades)</span>
                                </v-row>
                                <v-row justify="center" dense>
                                    <span class="subtitle2 mt-3">cm</span>
                                </v-row>
                                <v-row justify="center" dense>
                                    <span class="subtitle2">cm</span>
                                </v-row>
                                <v-row justify="center" dense>
                                    <span class="subtitle2">cm</span>
                                </v-row>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="product-item-body pa-4 la-border ml-3 mt-4">
                        <v-row>
                            <v-col cols="6">
                                <v-row justify="center" dense>
                                    <span>00.0</span>
                                </v-row>
                                <v-row justify="center" dense>
                                    <h5 class="subtitle2 text-uppercase mt-1">Peso de Producto</h5>
                                </v-row>
                            </v-col>
                            <v-divider inset vertical class="mb-2" />
                            <v-col cols="6">
                                <v-row justify="center" dense>
                                    <span>00.0</span>
                                </v-row>
                                <v-row justify="center" dense>
                                    <h5 class="subtitle2 text-uppercase mt-1">Peso de Envío</h5>
                                </v-row>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="product-item-body pa-4 la-border ml-3 mt-4">
                        <v-row>
                            <v-col cols="6">
                                <v-row justify="center" dense>
                                    <span>0.0 V / 0.0 Hz / 0.0 A</span>
                                </v-row>
                                <v-row justify="center" dense>
                                    <h5 class="subtitle2 text-uppercase mt-1">Voltaje</h5>
                                </v-row>
                            </v-col>
                            <v-divider inset vertical class="mb-2" />
                            <v-col cols="6">
                                <v-row justify="center" dense>
                                    <span>0.0 %</span>
                                </v-row>
                                <v-row justify="center" dense>
                                    <h5 class="subtitle2 text-uppercase mt-1">Eficiencia</h5>
                                </v-row>
                            </v-col>
                        </v-row>
                    </div>
                    <h5 class="subtitle2 text-uppercase mt-5 ml-3">Características</h5>
                    <v-divider class="mt-2 ml-3" />
                    <ul>
                        <li class="subtitle2 mt-1">
                            Característica 1 incluye Lorem Ipsum is simply dummy text of printing
                        </li>
                        <li class="subtitle2">Característica 2 incluye Lorem Ipsum is simply dummy text of printing</li>
                        <li class="subtitle2">Característica 3 incluye Lorem Ipsum is simply dummy text of printing</li>
                        <li class="subtitle2">Característica 4 incluye Lorem Ipsum is simply dummy text of printing</li>
                        <li class="subtitle2">Característica 5 incluye Lorem Ipsum is simply dummy text of printing</li>
                        <li class="subtitle2">Característica 6 incluye Lorem Ipsum is simply dummy text of printing</li>
                        <li class="subtitle2">Característica 7 incluye Lorem Ipsum is simply dummy text of printing</li>
                        <li class="subtitle2">Característica 8 incluye Lorem Ipsum is simply dummy text of printing</li>
                    </ul>
                    <div class="d-flex justify-space-between">
                        <h5 class="subtitle2 text-uppercase mt-5 ml-3">Manuales y Guías</h5>
                        <h5 class="subtitles-gray mt-5">(Para descargar)</h5>
                    </div>
                    <v-divider class="mt-2 ml-3" />
                    <v-row class="mt-1 ml-3">
                        <v-col cols="6">
                            <v-row dense>
                                <span class="subtitle2"><u>Manual de producto</u></span>
                            </v-row>
                            <v-row dense class="mt-1">
                                <span class="subtitle2"><u>Ficha técnica del producto</u></span>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-row dense>
                                <span class="subtitle2"><u>Hora de especificaciones</u></span>
                            </v-row>
                            <v-row dense class="mt-1">
                                <span class="subtitle2"><u>Guía de instalación</u></span>
                            </v-row>
                        </v-col>
                    </v-row>
                    <h5 class="subtitle2 text-uppercase mt-5 ml-3">Beneficios</h5>
                    <v-divider class="mt-2 ml-3" />
                    <ul>
                        <li class="subtitle2 mt-1">
                            Característica 1 incluye Lorem Ipsum is simply dummy text of printing
                        </li>
                        <li class="subtitle2">Característica 2 incluye Lorem Ipsum is simply dummy text of printing</li>
                        <li class="subtitle2">Característica 3 incluye Lorem Ipsum is simply dummy text of printing</li>
                        <li class="subtitle2">Característica 4 incluye Lorem Ipsum is simply dummy text of printing</li>
                        <li class="subtitle2">Característica 5 incluye Lorem Ipsum is simply dummy text of printing</li>
                    </ul>
                    <h5 class="subtitle2 text-uppercase mt-5 ml-3">Servicio Postventa</h5>
                    <v-divider class="mt-2 ml-3" />
                    <p class="subtitle2 ml-3">
                        Característica 1 incluye Lorem Ipsum is simply dummy text of printing Característica 1 incluye
                        Lorem Ipsum is simply dummy text of printing Característica 1 incluye Lorem Ipsum is simply
                        dummy text of printing Característica 1 incluye Lorem Ipsum is simply dummy text of printing
                        Característica 1 incluye Lorem Ipsum is simply dummy text of printing
                    </p>
                </v-card>
                <v-card v-scroll.self="onScroll" class="overflow-y-auto mt-3" max-height="628" v-show="showd1">
                    <div class="product-item-body pa-4 la-border ml-3 mt-4">
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
                    <div class="d-flex pa-4 ml-3">
                        <h5 class="subtitle2 text-uppercase mt-4">¿Deseas calificar este producto?</h5>
                        <custom-button text="Calificar" class="ml-4 mt-2" light />
                    </div>
                </v-card>
                <v-card v-scroll.self="onScroll" class="overflow-y-auto mt-3" max-height="628" v-show="showd2">
                    <div class="product-item-body pa-4 la-border ml-3 mt-4">
                        <h5 class="subtitle2 text-uppercase">Vida Útil</h5>
                        <v-row dense class="mt-2" justify="center">
                            <v-progress-linear
                                style="width: 78%"
                                v-model="ratings.rating5"
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
                    <div class="product-item-body pa-4 la-border ml-3 mt-4">
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
                            <div style="width: 78%" class="d-flex">
                                <v-icon large class="markerLoc">la-map-pin</v-icon>
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
                    <div class="product-item-body pa-4 la-border ml-3 mt-4">
                        <h5 class="subtitle2 text-uppercase">Consejos Ecológicos</h5>
                        <ul>
                            <li class="subtitle2 mt-1">
                                Una vez el producto cumpla su vida útil debes ser riguroso en reciclar sus materiales de
                                forma correcta.
                            </li>
                            <li class="subtitle2 mt-2">
                                Realizar el mantenimiento pertinente en las fechas adecuadas para extender la vida útil
                                del producto.
                            </li>
                        </ul>
                    </div>
                    <v-row>
                        <v-col cols="6">
                            <div class="product-item-body pa-1 la-border ml-3 mt-4">
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
                                    <custom-button light text="RENOVACIÓN UPGRADE" :width="190" />
                                </v-row>
                            </div>
                        </v-col>
                        <v-col cols="6">
                            <div class="product-item-body pa-1 la-border mt-4">
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
                                    <custom-button light text="SOPORTE TÉCNICO" :width="190" />
                                </v-row>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <v-col cols="12" class="positionColbuttons" md="4" order-md="2" sm="12" order-sm="1" xs="12" order-xs="1">
                <v-row dense justify>
                    <v-col>
                        <carousel v-show="showp" style="height: 700px" />
                        <carousel :slides="sliderSeeder" v-show="showp1" style="height: 700px" />
                        <v-img
                            src="https://picsum.photos/1920/1080?random=1"
                            v-show="showp2"
                            height="700px"
                            width="100%"
                        />
                    </v-col>
                </v-row>
                <v-row class="buttonsAct px-4">
                    <v-col cols="4">
                        <v-btn
                            light
                            block
                            @click="
                                showp = true;
                                showp1 = false;
                                showp2 = false;
                            "
                        >
                            Imágenes
                        </v-btn>
                    </v-col>
                    <v-col cols="4">
                        <v-btn
                            light
                            block
                            @click="
                                showp = false;
                                showp1 = true;
                                showp2 = false;
                            "
                        >
                            Videos
                        </v-btn>
                    </v-col>
                    <v-col cols="4">
                        <v-btn
                            light
                            block
                            @click="
                                showp = false;
                                showp1 = false;
                                showp2 = true;
                            "
                        >
                            Ficha Técnica
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="4" order-md="3" sm="12" order-sm="2" xs="12" order-xs="2">
                <div class="product-item-body pa-4 la-border mr-5">
                    <div class="d-flex justify-space-between">
                        <h5 class="subtitle2 text-uppercase mb-2">{{ ref }}</h5>
                        <v-icon right> la-bookmark </v-icon>
                    </div>
                    <h5 class="subtitle1 text-uppercase font-weight-bold mb-2">{{ name }}</h5>
                    <h5 class="subtitle1 mb-2">{{ brand }}</h5>
                    <div class="d-flex">
                        <h5 class="subtitle1 mb-2 mr-2">{{ val }}</h5>
                        <h5 class="caption mb-2">
                            <del>{{ val }}</del>
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
                <div class="product-item-body pa-4 la-border mr-5 mt-3">
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
                <div class="product-item-body pa-4 la-border mr-5 mt-3">
                    <div class="d-flex justify-space-between">
                        <h5 class="subtitle2 text-uppercase mb-1">Disponibilidad</h5>
                        <h5 class="subtitle1 mb-2">Stock</h5>
                    </div>
                    <div class="d-flex justify-space-between">
                        <h5 class="subtitle2 text-uppercase mb-1">Garantía</h5>
                        <h5 class="subtitle1 mb-2">12 Meses</h5>
                    </div>
                    <div class="d-flex justify-space-between">
                        <h5 class="subtitle2 text-uppercase mb-1">Pago</h5>
                        <h5 class="subtitle1 mb-2">Payu Visa PSE MC</h5>
                    </div>
                    <div class="d-flex justify-space-between">
                        <h5 class="subtitle2 text-uppercase">Envío</h5>
                        <h5 class="subtitle1">A domicilio</h5>
                    </div>
                </div>
                <h5 class="subtitle2 text-uppercase mt-3 mb-2">Se incluye con la compra</h5>
                <div class="product-item-body mr-5 mt-3">
                    <v-divider />
                    <product-item-6 />
                </div>
            </v-col>
        </v-row>

        <div class="mb-4 mt-16">
            <div class="d-flex justify-space-between mb-8">
                <h5 class="mt-1">H5</h5>
                <div style="width: 38%">
                    <custom-button light text="Nuevo" style="width: 23%" />
                    <custom-button light text="Nuevo" class="ml-2" style="width: 23%" />
                    <custom-button light text="Nuevo" class="ml-2" style="width: 23%" />
                    <custom-button light text="Nuevo" class="ml-2" style="width: 23%" />
                </div>
            </div>
            <v-row>
                <v-col cols="2">
                    <product-item-2 headerPr="true" />
                </v-col>
                <v-col cols="2">
                    <product-item-2 headerPr="true" />
                </v-col>
                <v-col cols="2">
                    <product-item-2 headerPr="true" img="/public/assets/img/landing/Pacto-Ambiental.jpg" />
                </v-col>
                <v-col cols="2">
                    <product-item-2 headerPr="true" img="/public/assets/img/landing/Pacto-Ambiental.jpg" />
                </v-col>
                <v-col cols="2">
                    <product-item-2 headerPr="true" />
                </v-col>
                <v-col cols="2">
                    <product-item-2 headerPr="true" img="/public/assets/img/landing/Pacto-Ambiental.jpg" />
                </v-col>
            </v-row>
            <v-row justify="center">
                <custom-button light text="Ver más" class="mt-6 mb-6" style="width: 40%" />
            </v-row>
        </div>

        <v-row class="mb-6">
            <v-col cols="12">
                <div class="d-flex justify-space-between mb-8">
                    <h5 class="mt-1">H5</h5>
                    <div style="width: 38%">
                        <custom-button light text="Nuevo" style="width: 23%" />
                        <custom-button light text="Nuevo" class="ml-2" style="width: 23%" />
                        <custom-button light text="Nuevo" class="ml-2" style="width: 23%" />
                        <custom-button light text="Nuevo" class="ml-2" style="width: 23%" />
                    </div>
                </div>
                <v-row>
                    <v-col cols="3">
                        <product-item-3 />
                    </v-col>
                    <v-col cols="3">
                        <product-item-3
                            title="Producto 1"
                            descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
                            idItem="1"
                        />
                    </v-col>
                    <v-col cols="3">
                        <product-item-3
                            title="Producto 1"
                            descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
                            idItem="1"
                            img="/public/assets/img/landing/Pacto-Ambiental.jpg"
                        />
                    </v-col>
                    <v-col cols="3">
                        <product-item-3
                            title="Producto 1"
                            descripcion="Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa."
                            idItem="1"
                            img="/public/assets/img/landing/Pacto-Ambiental.jpg"
                        />
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <custom-button light text="Ver más" class="mt-6" style="width: 40%" />
                </v-row>
            </v-col>
        </v-row>

        <v-card>
            <v-footer color="#18191A" class="px-5 py-5">
                <v-row class="d-flex justify-space-between flex-wrap">
                    <v-col cols="2" sm="3">
                        <span class="subtitle1 bold text-uppercase">© Idovela 2022</span>
                    </v-col>
                    <v-col cols="4" sm="3">
                        <span class="subtitle1 bold text-uppercase"><i class="las la-globe"></i> Bogota, Colombia</span>
                    </v-col>
                    <v-col cols="6" sm="6">
                        <v-row>
                            <v-col cols="4">
                                <span class="subtitle1 bold text-uppercase">Información</span>
                            </v-col>
                            <v-col cols="4">
                                <span class="subtitle1 bold text-uppercase">Solicitudes</span>
                            </v-col>
                            <v-col cols="4">
                                <span class="subtitle1 bold text-uppercase">Contacto</span>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-footer>
        </v-card>
    </div>
</template>

<script>
import ProductItem3 from "../components/global/ProductItem3.vue";
import ProductItem2 from "../components/global/ProductItem2.vue";
import ProductItem6 from "../components/global/ProductItem6.vue";
import CustomButton from "../components/global/CustomButton.vue";
import LayoutNavbarSpaces from "../components/global/LayoutNavbarSpaces.vue";
import Carousel from "../components/global/Carousel.vue";
import LayoutNavbarAuth from "../components/global/LayoutNavbarAuth.vue";
// import ChartView from "../components/global/ChartView.vue";

import { sliderSeeder } from "../seeders/products";

export default {
    data: () => ({
        showp: true,
        showp1: false,
        showp2: false,
        showd: true,
        showd1: false,
        showd2: false,
        sliderSeeder,
        id: "0",
        name: "Colección",
        ref: "REFERENCIA",
        brand: "Marcas",
        val: "000.000.000 COP",
        img: "/public/assets/img/item-placeholder.png",
        iva: "* Iva Incluido",
        varia: "Variación",
        model: 0,
        tags: ["1", "2", "3"],
        ratings: { rating5: 67, rating4: 22, rating3: 11, rating2: 0, rating1: 0 },
        desserts: [
            {
                color: "background-color:#114B99",
                name: "Plástico",
                percent: "5%",
                kg: "1Kg"
            },
            {
                color: "background-color:#FEA60F",
                name: "Cartón",
                percent: "0%",
                kg: "0Kg"
            },
            {
                color: "background-color:#FFFFFF",
                name: "Papel",
                percent: "3%",
                kg: "0.2Kg"
            },
            {
                color: "background-color:#445056",
                name: "Metal",
                percent: "0%",
                kg: "0Kg"
            },
            {
                color: "background-color:#61A959",
                name: "Vidrio",
                percent: "0%",
                kg: "0Kg"
            },
            {
                color: "background-color:#B1771D",
                name: "Madera",
                percent: "91%",
                kg: "5Kg"
            },
            {
                color: "background-color:#ED847B",
                name: "Textil",
                percent: "0%",
                kg: "0Kg"
            },
            {
                color: "background-color:#ED847B",
                name: "Baterías / Eléctrico",
                percent: "0%",
                kg: "0Kg"
            }
        ]
    }),
    components: {
        ProductItem3,
        ProductItem2,
        ProductItem6,
        CustomButton,
        LayoutNavbarSpaces,
        Carousel,
        LayoutNavbarAuth
        // ChartView
    },
    mounted() {
        this.$vuetify.theme.dark = true;
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

.markerLoc {
    top: 73%;
    position: absolute;
    left: 29%;
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
