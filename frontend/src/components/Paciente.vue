<template>
  <tr>
    <td>{{ paciente.id }}</td>
    <td>{{ paciente.nome }}</td>
    <td>{{ paciente.idade }} Anos</td>
    <td>{{ paciente.teste }}</td>
    <td>
      <button class="mini ui blue button" @click="onEdit">Editar</button>
      <button class="mini ui red button" @click="onDelete">Deletar</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "Paciente",
  props: {
    paciente: {
      type: Object
    }
  },
  methods: {
    onDelete() {
      // window.console.log("customer list delete " + this.paciente.id);
      this.$emit("onDelete", this.paciente.id);
    },
    onEdit() {
      // window.console.log("car list edit " + this.paciente.id);
      this.$emit("onEdit", this.paciente);
    }
  }
};
</script>

<style scoped>

</style>
