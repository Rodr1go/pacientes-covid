<template>
  <div id="app">
    <div class="ui fixed inverted menu vue-color">
      <div class="ui container">
        <a href="#" class="header item">Pacientes</a>
      </div>
    </div>

    <div class="ui main container">
      <AddPaciente :form="form" @onFormSubmit="onFormSubmit" />
      <Loader v-if="loader" />
      <ListaPacientes :pacientes="pacientes" 
        @onDelete="onDelete"
        @onEdit="onEdit"
      />
      <div class="text-center">
        <br/>
        <Pagination :source="pagination" @navigate="navigate"></Pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AddPaciente from "./components/AddPaciente";
import ListaPacientes from "./components/ListaPacientes";
import Loader from "./components/Loader";
import Pagination from "./components/Pagination";

export default {
  name: 'App',
  components: {
    AddPaciente,
    ListaPacientes,
    Loader,
    Pagination
  },
  data() {
    return {
      url: "http://0.0.0.0:3333/api/v1/pacientes",
      pacientes: {
        // data: [],
      },
      pagination: {},
      form: { nome: "", idade: 0, teste: "", isEdit: false },
      loader: false
    };
  },
  methods: {
    getPacientes() {
      this.loader = true;
      axios.get(this.url)
        .then(response => {
          this.pacientes = response.data;
          this.pagination = response.data.meta;
          this.loader = false;
      }).catch(response => {
        console.log(response);
      });
    },
    navigate (page) {
      this.loader = true;
      axios.get(this.url+`?page=${page}`)
        .then(response => {
          this.pacientes = response.data;
          this.pagination = response.data.meta;
          this.loader = false;
      }).catch(response => {
        console.log(response);
      });
    },
    deletePaciente(id) {
      this.loader = true;

      axios
        .delete(`${this.url}/${id}`)
        .then(() => {
          this.getPacientes();
        })
        .catch(e => {
          alert(e);
        });
    },
    onDelete(id) {
      // window.console.log("app delete " +id);
      this.deletePaciente(id);
    },
    onEdit(data) {
      // window.console.log("app edit ", data);
      this.form = data;
      this.form.isEdit = true;
    },
    createPaciente(data) {
      this.loader = true;

      axios.post(this.url, {
        nome: data.nome,
        idade: data.idade,
        teste: data.teste
      }).then(() => {
        this.getPacientes();
      }).catch(e => {
        alert(e);
      });
    },
    editPaciente(data) {
      this.loader = true;

      axios.put(`${this.url}/${data.id}`, {
        nome: data.nome,
        idade: data.idade,
        teste: data.teste
      })
      .then(() => {
        this.getPacientes();
      })
      .catch(e => {
        alert(e);
      });
    },
    onFormSubmit(data) {
      // window.console.log("onFormSubmit", data);
      if(data.isEdit) {
        this.editPaciente(data);
      } else {
        this.createPaciente(data);
      }
    }
  },
  created() {

    this.getPacientes();
  }
};
</script>

<style>
  .vue-color {
    background: #41b883 !important;
  }

  .main.container {
    margin-top: 60px;
  }

  .submit-button {
    margin-top: 24px !important;
    float: right;
  }

  .ui.inverted.dimmer {
    background-color: rgba(255, 255, 255, 0) !important;
  }

  .data {
    margin-top: 15px;
  }

  thead tr th {
    background: #e0e0e0 !important;
  }
</style>
