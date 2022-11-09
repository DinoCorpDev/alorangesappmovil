<template>
  <v-row class="service-item mb-4 mb-md-16">
    <v-col cols="12" sm="4">
      <v-img
        class="imagen-servicio mx-auto mb-4 mb-sm-0"
        :src="imagen"
        :alt="servicio"
        max-width="400"
        aspect-ratio="1.05"
      />
    </v-col>
    <v-col cols="12" sm="8">
      <div class="texto-servicio ms-sm-2 ms-md-4">
        <p class="serv">{{ servicio }}</p>
        <p class="intro">{{ introduccion }}</p>
        <p class="desc">{{ descripcion }}</p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Servicios",
  props: ["imagen", "servicio", "introduccion", "descripcion"],
};
</script>

<style>
.imagen-servicio {
  border-radius: 20px;
}

@media (min-width: 600px) {
  .texto-servicio {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
  }
}

@media (min-width: 960px) {
  .texto-servicio {
    justify-content: space-between;
  }
}

p {
  font-family: "Overpass", sans-serif;
  color: #ffffff;
}

p.serv {
  font-size: 16px;
  line-height: 1;
}

p.intro {
  font-size: 20px;
  line-height: 1.15;
  font-weight: 300;
}

p.desc {
  font-family: "Roboto";
  font-size: 12px;
  margin-bottom: 0;
  line-height: 1.3;
}

@media (min-width: 768px) {
  p.intro {
    font-size: 24px;
  }
}

@media (min-width: 960px) {
  p.serv {
    font-size: 24px;
  }

  p.intro {
    font-size: 36px;
  }

  p.desc {
    font-size: 16px;
  }
}

@media (min-width: 1264px) {
  p.serv {
    font-size: 28px;
  }

  p.intro {
    font-size: 42px;
  }

  p.desc {
    font-size: 24px;
  }
}
</style>