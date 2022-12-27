<template>
  <div>
    <layout-navbar-auth />
    <v-container>
      <v-row class="wrap pa-5" no-gutters>
        <v-col cols="12" md="6">
          <div class="d-md-none">
            <h5>Inicio de Sesión</h5>
            <v-divider class="my-4" />
          </div>
          <carousel-description
            title="h4"
            description="Lorem ipsum dolor atum adipisci, suscipit iusto molestiae voluptates!"
            :slides="sliderSeeder"
          />
        </v-col>
        <v-col cols="12" md="6" class="pt-5 pt-md-0 pl-md-5">
          <div class="form">
            <div class="d-none d-md-block">
              <h5 class="black--text">Inicio de Sesión</h5>
              <v-divider class="my-4" />
            </div>
            <div class="inputs">
              <div class="form-group">
                <label class="black--text">Correo Electronico</label>
                <v-text-field filled></v-text-field>
              </div>
              <div class="form-group">
                <label class="black--text">Contraseña</label>
                <v-text-field filled></v-text-field>
              </div>
              <a href="#" class="black--text link-custom">¿Has olvidado tu contraseña?</a>
              <custom-button block color="#888989" class="mt-3 mb-3" text="Iniciar Sesión" />
              <a href="#" class="black--text link-custom">¿No tienes ninguna cuenta?</a>
              <custom-button block light color="#DFDFDF" class="mt-3" text="Registrarse" />
            </div>
            <div class="footer">
              <v-row>
                <v-col cols="4">
                  <span class="subtitle1 bold text-uppercase black--text">© Idovela 2022</span>
                </v-col>
                <v-col cols="8">
                  <v-row>
                    <v-col cols="4">
                      <a href="#" class="subtitle1 bold text-uppercase black--text"> Información </a>
                    </v-col>
                    <v-col cols="4">
                      <a href="#" class="subtitle1 bold text-uppercase black--text"> Solicitudes </a>
                    </v-col>
                    <v-col cols="4">
                      <a href="#" class="subtitle1 bold text-uppercase black--text"> Contacto </a>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CarouselDescription from "../../components/global/CarouselDescription.vue";
import CustomButton from "../../components/global/CustomButton.vue";
import LayoutNavbarAuth from "../../components/global/LayoutNavbarAuth.vue";

export default {
  components: {
    CarouselDescription,
    CustomButton,
    LayoutNavbarAuth
  }
};
</script>

<style lang="scss">
.v-application {
  &.theme--light {
    background: #dee0e0;
  }
}
</style>

<style lang="scss" scoped>
.wrap {
  background-color: #fafcfc;
  border-radius: 10px;
}

h5 {
  font-size: 17px;
  font-weight: 600;

  @media (min-width: 600px) {
    font-size: 24px;
  }
}

.v-divider {
  border-width: 2px 0 0;
  border-color: #e4e4e4 !important;
}

@media (min-width: 960px) {
  .form {
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    padding: 20px;
  }
  .footer {
    margin-top: 150px;
  }
}

@media (max-width: 959px) {
  .footer {
    margin-top: 30px;
  }
}

.form-group {
  label {
    font-family: "Overpass", sans-serif;
    font-size: 12px;
    letter-spacing: 0.4px;
    text-transform: uppercase;
  }
}

.link-custom {
  font-family: "Overpass", sans-serif;
  font-size: 12px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
}
</style>
