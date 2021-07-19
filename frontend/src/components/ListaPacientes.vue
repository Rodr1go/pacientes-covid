<template>
  <div class="pacientes">
    <div class="data">
      <table class="ui celled table">
        <thead>
          <tr>
            <th style="width: 50px; text-align: center;">#</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Teste</th>
            <th style="width: 165px;">Ação</th>
          </tr>
        </thead>
        <tbody>
          <Paciente 
            v-for="paciente in pacientes.data"
            :key="paciente.id"
            :paciente="paciente"
            @onDelete="onDelete"
            @onEdit="onEdit"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import Paciente from "./Paciente";

export default {
  name: "ListaPacientes",
  components: {
    Paciente
  },
  props: {
    pacientes: { 
      type: Object 
    }
  },
  methods: {
    onDelete(id) {
      // window.console.log("Deleta paciente" + id);
      this.$emit("onDelete", id);
    },
    onEdit(data) {
      // window.console.log("Edita paciente " + data);
      this.$emit("onEdit", data);
    }
  }
};
</script>

<style scoped>

</style>