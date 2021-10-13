<template>
  <div class="home">
    <!--Con .prevent no se refresca la pantalla a darle al boton submit del formulario-->
    <form @submit.prevent="procesarFormulario">
      <!--se imprime el formulario y se le pasa la tarea desde el home-->
      <Input :tarea="tarea"></Input>
    </form>
    <hr>
    <ListaTareas/>
   </div>
</template>
<script>
import Input from "../components/Input";
import ListaTareas from "../components/ListaTareas";

import {mapActions} from 'vuex'
const shortId = require('shortid');
export default {
  name: 'Home',
  components: {
    Input,
    ListaTareas
  },
  data() {
    return {
      tarea:{
        id:'',
        nombre:"",
        //El array se rellena con la seleccion de checks, puede estar vacio con uno con 2 valores...
        categorias:[],
        //El radio solo acepta un valor aunque haya varios
        estado:"",
        numero:0
      }
    }
  },
  methods:{
    ...mapActions(['setTareas']),
    procesarFormulario(){
      console.log(this.tarea)
      if (this.tarea.nombre.trim()===""){
        console.log('Campo vacio')
        return
      }
      //Se envían los datos
      //generar id con pluggin instalado
      this.tarea.id = shortId.generate()
      this.setTareas(this.tarea)
      //Despues, se limpia el formulario con los datos por defecto
      this.tarea = {
        nombre:"",
        //El array se rellena con la seleccion de checks, puede estar vacio con uno con 2 valores...
        categorias:[],
        //El radio solo acepta un valor aunque haya varios
        estado:"",
        numero:0
      }
      console.log('Campo no vacio')
    }
  }
}
</script>
