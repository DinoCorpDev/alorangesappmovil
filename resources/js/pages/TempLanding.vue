<template>
    <div class="general">
      <div class="logo-idovela">  
         <img src="../../../public/assets/img/Logo-idovela-Estructural.svg"> 
       </div>  
            
       <div class="bienvenida">
          <p class="saludo">¡Hola Colombia!</p>
          <p class="primer-parrafo">Idovela como estudio de diseño y desarrollo estamos creando una solución tecnológica efectiva 
              para el mercado Colombiano que conecte a clientes con espacios habitables.</p>
        </div>
        
        <servicios 
        servicio="Diseño de espacios"
        introduccion="Buscamos que los espacios sean únicos y consistentes"
        imagen="../../../public/assets/img/Diseño-de-espacios.gif"
        descripcion="Simplificamos la manera en cómo las personas eligen, sienten y obtienen el espacio habitable que sueñan. implementando ingeniería más diseño para encontrar ese espacio ideal."
        />
        <servicios 
        servicio="Servicios"
        introduccion="Contribuimos a crear un espacio habitable reconfortante"
        imagen="../../../public/assets/img/Servicios.jpg"
        descripcion="Conocemos lo frustrante que es el intentar conectar con un servicio al estar creando ese espacio ideal, es por eso que brindamos nuestro acompañamiento, soporte y talento humano para construir."
        />
        <servicios 
        servicio="Electrónica de consumo"
        introduccion="Dar función a los espacios implica una conexión con ellos"
        imagen="../../../public/assets/img/Electronica-de-consumos.gif"
        descripcion="Sabemos lo difícil que puede ser elegir productos funcionales con plena confianza y visión objetiva. Analizamos todos aquéllos equipos que aporten una buenas experiencias con el usuario."
        />
        <servicios class="sin-margin"
        servicio="Pacto ambiental"
        introduccion="Impulsamos el uso de prácticas sostenibles con el ambiente "
        imagen="../../../public/assets/img/Pacto-Ambiental.jpg"
        descripcion="Tenemos el compromiso ético y cívico de implementar en nuestros proyectos medidas y estándares que garanticen una ejecución con impacto ambiental mínimo."
        />

        <!--<registro/>-->
        
        <div class="contenedor-info">
          <div class="info-adicional">
            <a href="https://www.instagram.com/idovelaco/" target="_blank" rel="noopener noreferrer" class="letra">@IDOVELA 2022</a>
            <p class="letra punto">•</p>
            <p class="letra">BOGOTÁ - COLOMBIA</p>
            <p class="letra punto">•</p>
            <a href="#" class="letra">PRIVACIDAD Y COOKIES</a>
          </div>
        </div>
        
     </div>
</template>
<script>
import Servicios from '../components/templatelanding/Servicios.vue'
import Registro from '../components/templatelanding/Registro.vue'
export default {
    components: {
      Servicios,
      Registro
    },
    name: "TempLanding"
   
         
}
</script>

<style> 
@import url('https://fonts.googleapis.com/css2?family=Overpass:wght@200;300;400;700&display=swap');
a.letra{
  color: white;
  text-decoration: none;
}

p.saludo {
    font-size: 90px;
    font-family: 'Overpass' ;
    font-weight: 300;
}
p.primer-parrafo{
  font-size: 24px;
  font-family: 'Roboto';
  margin-bottom: 0;
}
p.letra{
  margin-bottom: 0;
}
.letra{
  font-family: 'Overpass' ;
  font-weight: 700;
  font-size: 15px;
}
.letra.punto{
  margin: 0 10px;
}
.general{
    width: 100%;
    height: 100%;
    background-color: black;
    padding-top: 5.3%;
    padding-bottom: 14.8%;

}
.logo-idovela {
   margin: auto auto 57.7px auto; 
   align-items: center;
   display: flex;
   justify-content: center; 
   width: 350px;
   height: 350px;
   
}
.bienvenida{
    text-align: center;
    margin: 0 auto 13.8px auto;
    color: white;
    width: 1043px;
    height: 308px;
}

.sin-margin
{
  margin-bottom: 0;
}
.contenedor-info{
  min-height: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.info-adicional{
  width: 504px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 1200px)
{

}
@media (max-width: 1199px)
{
  .general{
    background-color: #242526;
    padding-top: 50px;
    padding-bottom: 106.5px;
    padding-left: 60px;
    padding-right: 60px;
  }
  .logo-idovela { 
   width: 250.07px;
   height: 250.07px;
   
  }
  .bienvenida{
    width: 679px;
    height: 165.3px;
    margin-bottom: 90.8px;
  }
  p.saludo {
    font-size: 48px;
  }
  p.primer-parrafo{
    font-size: 16px;
    margin-bottom: 0; 
  }
  .contenedor-info{
    margin-top: 48px;
  }   
  .info-adicional{
    width: 308px;
    height: 43px;
  }
  .letra{
    font-family: 'Overpass' ;
    font-weight: 700;
    font-size: 8px;
  }
}
@media (max-width: 991px)
{
  .general{
    background-color: #242526;
    padding-top: 50px;
    padding-bottom: 106.5px;
    padding-left: 60px;
    padding-right: 60px;
  }
  .logo-idovela { 
   width: 250.07px;
   height: 250.07px;
   
  }
  .bienvenida{
    width: 679px;
    height: 165.3px;
    margin-bottom: 90.8px;
  }
  p.saludo {
    font-size: 48px;
  }
  p.primer-parrafo{
    font-size: 16px;
    margin-bottom: 0; 
  }
  .contenedor-info{
    margin-top: 48px;
  }   
  .info-adicional{
    width: 308px;
    height: 43px;
  }
  .letra{
    font-family: 'Overpass' ;
    font-weight: 700;
    font-size: 8px;
  }
}
@media (max-width: 767px)
{
  .general{
    background-color: #242526;
    padding-top: 46px;
    padding-bottom: 24px;
  }
  .logo-idovela { 
   width: 241.4px;
   height: 241.4px;
   
  }
  .bienvenida{
    width: 276px;
    height: 233.8px;
    margin-bottom: 46.3px;
  }
  p.saludo {
    font-size: 24px;
  }
  p.primer-parrafo{
    font-size: 16px;
    margin-bottom: 0; 
  }
  .contenedor-info{
    margin-top: 48px;
  }   
  .info-adicional{
    width: 308px;
    height: 43px;
  }
  .letra{
    font-family: 'Overpass' ;
    font-weight: 700;
    font-size: 7px;
  }
}

</style>