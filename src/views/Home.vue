<template>
  <div class="home">
    <h1 class="my-5">Formularios con Vue.js</h1>
    <!--Con .prevent no se refresca la pantalla a darle al boton submit del formulario-->
    <form @submit.prevent="procesarFormulario">
      <!-- si a v-model añadimos .trim se eliminan espacios vacios.-->
      <input
          type="text"
          class="form-control my-2"
          placeholder="Ingrese nombre"
          v-model.trim="tarea.nombre"
      >
      <div class="form-check form-check-inline">
        <input
            type="checkbox"
            id="check-1"
            class="form-check-input"
            v-model="tarea.categorias"
            value="javascript"
        >
        <label for="check-1" class="form-check-label">Javascript</label>
      </div>
      <div class="form-check form-check-inline">
        <input
            type="checkbox"
            id="check-2"
            class="form-check-input"
            v-model="tarea.categorias"
            value="node js"
        >
        <label for="check-2" class="form-check-label">Node.js</label>
      </div>

      <div class="mt-2">
        <div class="form-check form-check-inline">
          <input
              type="radio"
              id="radio-1"
              class="form-check-input"
              value="urgente"
              v-model="tarea.estado"
          >
          <label for="radio-1" class="form-check-label">Urgente</label>
        </div>
        <div class="form-check form-check-inline">
          <input
              type="radio"
              id="radio-2"
              class="form-check-input"
              value="relax"
              v-model="tarea.estado"
          >
          <label for="radio-2" class="form-check-label">Relax</label>
        </div>

        <div class="mt-2">
          <!-- si a v-model añadimos .number el string lo transforma a numerico.-->
          <input
              type="number"
              class="form-control"
              v-model.number="tarea.numero"
          >
        </div>

      </div>
      <button
          class="btn btn-dark mt-2 btn-block"
          type="submit"
          :disabled="bloquear"
      >
        Procesar
      </button>
    </form>
    <hr>
    <p>{{tarea}}</p>
  </div>
</template>
<script>

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      tarea:{
        nombre:"",
        //El array se rellena con la seleccion de checks, puede estar vacio con uno con 2 valores...
        categorias:[],
        //El radio solo acepta un valor aunque haya varios
        estado:"",
        numero:0
      }
    }
  },
  computed:{
    bloquear(){
      return this.tarea.nombre === ""
    }
  },
  methods:{
    procesarFormulario(){
      console.log(this.tarea)
      if (this.tarea.nombre.trim()===""){
        console.log('Campo vacio')
        return
      }
      //Se envían los datos

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
