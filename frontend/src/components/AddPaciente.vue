<template>
  <div class="add-paciente">
    <form class="ui form">
      <div class="fields">
        <div class="four wide field">
          <label>Nome</label>
          <input 
            type="text" 
            name="nome" 
            placeholder="Nome"
            @change="handleChange"
            :value="form.nome"
          />
          <br><br>
        </div>

        <div class="four wide field">
          <label>Idade</label>
          <input 
            type="number"
            min="0" 
            name="idade" 
            placeholder="Idade"
            @change="handleChange"
            :value="form.idade"
          />
        </div>


        <div class="four wide field">
          <label>Teste</label>
          <select name="teste" v-model="form.teste" @change="handleChange">
            <option value="" selected disabled>-- Selecione --</option>
            <option v-for="teste in testes" v-bind:value="teste.value" :key="teste.value">
              {{ teste.text }}
            </option>
          </select>
        </div>

        <div class="two wide field">
          <button :class="btnClass" @click="onFormSubmit">
            {{ btnName }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddPaciente",
  data() {
    return {
      btnName: "Salvar",
      btnClass: "ui primary button submit-button",
      testes: [
        { text: 'Negativo', value: 'Negativo'},
        { text: 'Positivo', value: 'Positivo'},
      ]
    };
  },
  props: {
    form: {
      type: Object
    }
  },
  methods: {
    handleChange(event) {
      const { name, value } = event.target;
      let form = this.form;
      form[name] = value;
      this.form = form;
    },
    onFormSubmit(e) {
      e.preventDefault();

      // validação do formulário
      if(this.formValidation()) {
        // window.console.log("pronto para enviar");
        this.$emit("onFormSubmit", this.form);
        
        // Muda o botão para salvar
        this.btnName = "Salvar";
        this.btnClass = "ui primary button submit-button";

        this.clearFormFields();
      }
    },
    formValidation() {
      // nome
      if(document.getElementsByName('nome')[0].value === "") {
        alert("Informe o Nome");
        return false;
      }

      // idade
      if(document.getElementsByName('idade')[0].value === "") {
        alert("Informe a idade");
        return false;
      }

      // teste
      if(document.getElementsByName('teste')[0].value === "") {
        alert("Informe o teste");
        return false;
      }

      return true;
    },
    clearFormFields() {
      this.form.nome = "";
      this.form.idade = "";
      this.form.teste = "";
      this.form.isEdit = false;

      document.querySelector('.form').reset();
    }
  },
  updated() {
    if(this.form.isEdit) {
      this.btnName = "Atualizar";
      this.btnClass = "ui orange button submit-button";
    }
  }
};
</script>

<style scoped>

</style>
