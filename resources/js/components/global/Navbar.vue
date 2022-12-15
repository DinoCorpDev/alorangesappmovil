<template>
    <div>
        <v-card class="blacks" 
            >
            <v-toolbar class="black mt-2" style="border-radius: 0; height: 82px" elevation="0" outlined>
                <a href="#"><v-img src="../../public/assets/img/Logo-idovela-sin-fondo.png" max-width="90px" height="auto"/></a>
                <v-spacer></v-spacer>
                <custom-button 
                    text="Ir a tienda"   
                    variant="#E2E6EA"
                    icon="la-store-alt"
                    class="black--text tamaño-boton-desktop"
                    small="small"
                ></custom-button> 
                <custom-button 
                    text="Iniciar Sesión"   
                    variant="#E2E6EA"
                    class="black--text ml-4 tamaño-boton-desktop"
                    small="small"
                ></custom-button>            
            </v-toolbar>
        </v-card>
        <v-container  style="width: 100%; height: 786px; ">
            
        </v-container>
        
    </div>
    
</template>

<script>

export default {
   name: "Navbar"
}
</script>

<style>
.v-main {
  background-color: #000;
}


  
@media (min-width: 1264px) {
  .v-main {
    background-color: #000000;
  }
  .tamaño-boton-desktop{
    width: 221px;
    height: 38px; 
  }
  .container{
    max-width: 100%;
  }  
}
</style>