<template>
  <v-container class="py-16">
    <v-row justify="center" class="mb-4 mb-sm-10 mb-md-16">
      <v-col cols="8" sm="9" md="10">
        <v-img
          src="/public/assets/img/landing/Logo-idovela-Estructural.svg"
          class="logo-idovela mx-auto mb-6 mb-sm-10"
          max-width="350"
        />
        <div class="text-center">
          <p class="saludo mb-4">¡Hola Colombia!</p>
          <p class="primer-parrafo">
            Idovela como estudio de diseño y desarrollo estamos creando una
            solución tecnológica efectiva para el mercado Colombiano que conecte
            a clientes con espacios habitables.
          </p>
        </div>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-4 mb-md-16">
      <v-col class="service-list" cols="10">
        <servicios
          servicio="Diseño de espacios"
          introduccion="Buscamos que los espacios sean únicos y consistentes"
          imagen="/public/assets/img/landing/Diseño-de-espacios.gif"
          descripcion="Simplificamos la manera en cómo las personas eligen, sienten y obtienen el espacio habitable que sueñan. implementando ingeniería más diseño para encontrar ese espacio ideal."
        />
        <servicios
          servicio="Servicios"
          introduccion="Contribuimos a crear un espacio habitable reconfortante"
          imagen="/public/assets/img/landing/Servicios.jpg"
          descripcion="Conocemos lo frustrante que es el intentar conectar con un servicio al estar creando ese espacio ideal, es por eso que brindamos nuestro acompañamiento, soporte y talento humano para construir."
        />
        <servicios
          servicio="Electrónica de consumo"
          introduccion="Dar función a los espacios implica una conexión con ellos"
          imagen="/public/assets/img/landing/Electronica-de-consumos.gif"
          descripcion="Sabemos lo difícil que puede ser elegir productos funcionales con plena confianza y visión objetiva. Analizamos todos aquéllos equipos que aporten una buenas experiencias con el usuario."
        />
        <servicios
          servicio="Pacto ambiental"
          introduccion="Impulsamos el uso de prácticas sostenibles con el ambiente "
          imagen="/public/assets/img/landing/Pacto-Ambiental.jpg"
          descripcion="Tenemos el compromiso ético y cívico de implementar en nuestros proyectos medidas y estándares que garanticen una ejecución con impacto ambiental mínimo."
        />
      </v-col>
    </v-row>
    <!-- -------------------------------------------------------------------------------------------------------- -->
    
    <!-- ---------------------------------------------------------------------------------------------------------------- -->
    <v-row tag="footer" justify="center">
      <v-col cols="10">
        <div class="info-adicional">
          <p class="letra">© IDOVELA 2022</p>
          <p class="letra punto">•</p>
          <p class="letra">BOGOTÁ - COLOMBIA</p>
          <p class="letra punto">•</p>
          <a href="#" class="letra">PRIVACIDAD Y COOKIES</a>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Servicios from "../components/temp-landing/Servicios.vue";


export default {
  name: "TempLanding",
  components: {
    Servicios,
  },
};
</script>

<style>
.v-main {
  background-color: #242526;
}

@media (min-width: 1264px) {
  .v-main {
    background-color: #000000;
  }
}

.logo-idovela {
  width: 250px;
}

p.saludo {
  font-family: "Overpass", sans-serif;
  font-size: 24px;
  line-height: 1;
  font-weight: 300;
}

p.primer-parrafo {
  font-family: "Roboto";
  font-size: 16px;
  line-height: 1.3;
  margin-bottom: 0;
}

@media (min-width: 600px) {
  p.saludo {
    font-size: 48px;
  }
}

@media (min-width: 960px) {
  .logo-idovela {
    width: 350px;
  }

  p.saludo {
    font-size: 90px;
  }

  p.primer-parrafo {
    font-size: 24px;
  }
}

a.letra {
  color: #ffffff;
  text-decoration: none;
}

.letra {
  font-family: "Overpass";
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 0 !important;
}

@media (min-width: 768px) {
  .letra {
    font-size: 15px;
  }
}

.letra.punto {
  margin: 0 10px;
}

.info-adicional {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.service-list .service-item:last-child {
  margin-bottom: 0 !important;
}
</style>
