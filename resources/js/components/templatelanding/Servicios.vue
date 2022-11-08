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
</style>