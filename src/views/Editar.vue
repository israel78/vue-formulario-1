<template>
Editar-- {{tarea}}
</template>

<script>
import {mapState,mapActions} from "vuex";
export default {
  name: "Editar",
  computed:{
    ...mapState(['tarea'])
  },
  methods:{
    ...mapActions(['setTarea'])
  },
  created() {
    this.setTarea(this.$route.params.id);
  }
}
</script>

<style scoped>

</style>