import { createStore } from 'vuex'

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
    set(state,payload){
      this.state.tareas.push(payload)
      console.log(this.state.tareas)
    }
  },
  actions: {
    setTareas({commit},tarea){
      commit('set',tarea)

    }
  },
  modules: {
  }
})
