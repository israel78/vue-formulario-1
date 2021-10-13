import { createStore } from 'vuex'
import router from "../router";

export default createStore({
  state: {
    tareas:[],
    tarea:{
      id:'',
      nombre:"",
      //El array se rellena con la seleccion de checks, puede estar vacio con uno con 2 valores...
      categorias:[],
      //El radio solo acepta un valor aunque haya varios
      estado:"",
      numero:0
    }
  },
  mutations: {
    cargar(state,payload){
      this.state.tareas = payload;
    },
    set(state,payload){
      this.state.tareas.push(payload)
      //Cada vez que guardamos una nueva tarea.. se actualiza el localStorage
      localStorage.setItem('tareas',JSON.stringify(this.state.tareas))
    },
    eliminar(state,payload){
      this.state.tareas = this.state.tareas.filter(item=>item.id!==payload)
    }
    ,tarea(state,payload){
      if (!this.state.tareas.find(item=>item.id===payload)){
        //si se mete una ruta con un id inventado directamente en el navegador, redirige al inicio por que ese id no esta entre los disponibles
        //Cada vez que actualizamos una nueva tarea.. se actualiza el localStorage
        localStorage.setItem('tareas',JSON.stringify(this.state.tareas))
        router.push('/')
        return
      }
      this.state.tarea = this.state.tareas.find(item=>item.id===payload)
    }
    ,actualizar(state,payload){
      //si no hay id no se actualiza, si hay id igual se mete el objeto entero en el listado
      this.state.tareas.map(item => item.id ===payload.id?payload:id)
      //Despues de actualizar se redirige al usuario hacia la pagina de inicio para que se vea el
      //listado con la tarea actualizada
      router.push('/')
    }
  },
  actions: {
    cargarLocalStorage({commit}){
      if (localStorage.getItem('tareas')){
        commit('cargar',JSON.parse(localStorage.getItem('tareas')))
        return
      }
      localStorage.setItem('tareas',JSON.stringify([]))
    },
    setTareas({commit}, tarea) {
      commit('set', tarea)

    },
    setTarea({commit}, id) {
      commit('tarea', id)

    },
    deleteTareas({commit}, id) {
      commit('eliminar', id)
    },
    updateTarea({commit},trea){
      commit('actualizar', trea)
    }
  },
  modules: {
  }
})
