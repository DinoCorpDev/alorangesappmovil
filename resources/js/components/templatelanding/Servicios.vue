<template>
    <div class="contenedor-principal">
      <div class="contenedor-servicio">
       <img
          class="imagen-servicio"
          :src="imagen"
          :alt="servicio"
        > 
        <div class="texto-servicio">
            <p class="serv">{{servicio}}</p> 
            <p class="intro">{{introduccion}}</p>
            <p class="desc">{{descripcion}}</p>
        </div>    
      </div>
    </div>
</template>

<script>
export default {
    name: "Servicios",
    props: ['imagen','servicio','introduccion','descripcion']
}
</script>

<style>
p{
  color: white;
}
p.serv{
  margin-left: 48px;
  font-family: 'Overpass';
  font-size: 32px;
  font-weight: 400;
}
p.intro{
  margin-left: 48px;
  font-family: 'Overpass';
  font-size: 46px;
  font-weight: 300;
}
p.desc{
  margin-left: 48px;
  font-family: 'Roboto';
  font-size: 24px;
}
.contenedor-principal{ 
  min-height: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 112px;
}
.contenedor-servicio{
  width: 1108px;
  height: 396px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.imagen-servicio{
  width: 400px;
  height: 382.27px;
  border-radius: 20px;
}

@media (min-width: 1200px)
{

}
@media (max-width: 1199px)
{
  p.serv{
    margin-left: 37px;
    font-family: 'Overpass';
    font-size: 24px;
    font-weight: 400;
  }
  p.intro{
    margin-left: 37px;
    font-family: 'Overpass';
    font-size: 36px;
    font-weight: 300;
  }
  p.desc{
    margin-left: 37px;
    margin-bottom: 0;
    font-family: 'Roboto';
    font-size: 16px;
  }
  .contenedor-principal{ 
   margin-bottom: 46.8px;
  }
  .contenedor-servicio{
    width: 883.26px;
    height: 300.1px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .imagen-servicio{
    width: 307.91px;
    height: 294.26px;
    
  }
}
@media (max-width: 991px)
{
  p.serv{
    margin-left: 37px;
    font-family: 'Overpass';
    font-size: 20px;
    font-weight: 400;
  }
  p.intro{
    margin-left: 37px;
    font-family: 'Overpass';
    font-size: 27px;
    font-weight: 300;
  }
  p.desc{
    margin-left: 37px;
    margin-bottom: 0;
    font-family: 'Roboto';
    font-size: 15px;
  }
  .contenedor-principal{ 
   margin-bottom: 46.8px;
  }
  .contenedor-servicio{
    width: 883.26px;
    height: 300.1px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .imagen-servicio{
    width: 307.91px;
    height: 294.26px;
    
  }
}
@media (max-width: 767px)
{
  p.serv{
    margin-left: 0;
    font-size: 16px;
    
  }
  p.intro{
    margin-left: 0;
    font-family: 'Overpass';
    font-size: 19px;
    font-weight: 300;
  }
  p.desc{
    margin-left: 0;
    font-family: 'Roboto';
    font-size: 12px;
  }
  .contenedor-principal{ 
   margin-bottom: 46.8px;
  }
  .contenedor-servicio{
    width: 276px;
    height: 486.56px;
    display: block;
  }
  .imagen-servicio{
    width: 275.68px;
    height: 263.46px;
    margin-bottom: 27px;
    
  }
}
</style>