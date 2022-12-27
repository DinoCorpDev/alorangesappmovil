<template>
  <div>
    <layout-navbar-auth />
    <div class="all">
      <v-container class="mt-5 mb-5 container">
        <v-row>
          <v-col cols="12" md="6">
            <carousel-description
              title="h4"
              description="Lorem ipsum dolor atum adipisci, suscipit iusto molestiae voluptates!"
              :slides="sliderSeeder"
            />
          </v-col>
          <v-col cols="12" md="6">
            <div class="form">
              <div class="div-title">
                <h6 class="black--text title">Inicio de Sesión</h6>
                <v-divider class="divider"></v-divider>
              </div>
              <div class="inputs">
                <span class="black--text body-2 text-uppercase">Correo Electronico</span>
                <v-text-field class="input"></v-text-field>
                <span class="black--text body-2 text-uppercase">Contraseña</span>
                <v-text-field class="input mb-5"></v-text-field>
                <span class="black--text body-2 text-uppercase span">¿Has olvidado tu contraseña? </span>
                <custom-button block color="#888989" class="mt-3 mb-3" text="Iniciar Sesión" />
                <span class="black--text body-2 text-uppercase span">¿No tienes ninguna cuenta?</span>
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
                        <span class="subtitle1 bold text-uppercase black--text">Información</span>
                      </v-col>
                      <v-col cols="4">
                        <span class="subtitle1 bold text-uppercase black--text">Solicitudes</span>
                      </v-col>
                      <v-col cols="4">
                        <p class="subtitle1 bold text-uppercase black--text">Contacto</p>
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

<style lang="scss" scoped>
.title {
  margin-top: 5px;
}

.container {
  background-color: #fafcfc;
  border-radius: 10px;
}

@media (min-width: 960px) {
  .form {
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    padding: 10px;
  }
  .footer {
    margin-top: 150px;
  }
  .all {
    margin: 0 12%;
  }
}

@media (max-width: 959px) {
  .all {
    margin: 0 20px;
  }
  .footer {
    margin-top: 30px;
  }
}

.input {
  background-color: #f5f5f5;
  height: 38px;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 0 10px;
}
.divider {
  margin: 15px 0;
}
</style>
