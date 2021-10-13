<template>
  <div class="home">
    <h1 class="my-5">Formularios con Vue.js</h1>
    <!--Con .prevent no se refresca la pantalla a darle al boton submit del formulario-->
    <form @submit.prevent="procesarFormulario">
      <!--se imprime el formulario y se le pasa la tarea desde el home-->
      <Input :tarea="tarea"></Input>
    </form>
    <hr>
    <p>{{tarea}}</p>
  </div>
</template>
<script>
import Input from "../components/Input";
import {mapActions} from 'vuex'
const shortId = require('shortid');
export default {
  name: 'Home',
  components: {
    Input
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
