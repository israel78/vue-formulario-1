<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Categorias</th>
      <th scope="col">Estado</th>
      <th scope="col">Número</th>
      <th scope="col">Acción</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in tareas" :key="item.id">

      <th scope="row">{{item.id}}</th>
      <td>{{item.nombre}}</td>
      <td >
        <span v-for="(cat,index) in item.categorias" :key="index">
          {{cat}}
          {{
            (item.categorias.length === index+1)?'':','
          }}
        </span>
      </td>
      <td>{{item.estado}}</td>
      <td>{{item.numero}}</td>
      <td><button
          @click="deleteTareas(item.id)"
          class="btn btn-danger btn-sm">
          Eliminar
      </button>
        <router-link :to="{
                          name:'Editar',
                          params:{
                            id: item.id
                          }
                        }"
                     class="btn btn-warning ml-2 btn-sm">
          Editar
        </router-link>
      </td>

    </tr>

    </tbody>
  </table>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: "ListaTareas",
  computed:{
    ...mapState(['tareas'])
  },
  methods:{
    ...mapActions(['deleteTareas']),
  }
}
</script>

<style scoped>

</style>