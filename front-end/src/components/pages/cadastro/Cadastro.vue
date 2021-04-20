<template>
  <div class="">
    <Header />
    <div class="cadastro">
      <h2 class="titulo-centralizado">Cadastro:</h2>
      <form class="container-cadastro">
        <label for="nome">
          Nome:
          <input
            id="nome"
            type="text"
            v-on:input="setCadastroNome($event)"
            placeholder="Nome..."
          />
        </label>

        <label for="celular">
          Celular:
          <input
            id="celular"
            type="text"
            v-on:input="setCadastroCelular($event)"
            placeholder="Celular..."
          />
        </label>

        <label for="email">
          Email:
          <input
            id="email"
            type="mail"
            v-on:input="setCadastroEmail($event)"
            placeholder="Email..."
          />
        </label>

        <label for="senha">
          Senha:
          <input
            id="senha"
            type="password"
            v-on:input="setCadastroSenha($event)"
            placeholder="Senha..."
          />
        </label>

        <label id="label-endereco" for="endereco">
          Endereco:
          <input
            id="endereco"
            type="text"
            v-on:input="setCadastroEndereco($event)"
            placeholder="Endereco..."
          />
        </label>

        <div class="container-btn">
          <button
            class="btn-form"
            v-on:click.prevent="validateCadastro($event)"
            type="submit"
          >
            Cadastrar
          </button>
        </div>
      </form>

      <h2 class="titulo-centralizado">Login:</h2>

      <form class="container-login">
        <label for="emailLogin">
          Email:
          <input
            id="emailLogin"
            type="text"
            v-on:input="setLoginEmail($event)"
            placeholder="e-mail..."
          />
        </label>

        <label for="senhaLogin">
          Senha:
          <input
            id="senhaLogin"
            type="password"
            v-on:input="setLoginSenha($event)"
            placeholder="senha..."
          />
        </label>
        <a href="#"> esqueci minha senha </a>
        <div class="container-btn">
          <button
            class="btn-form"
            v-on:click.prevent="validateLogin($event)"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../../shared/header/Header.vue";
import Footer from "../../shared/footer/Footer.vue";

export default {
  components: {
    Header,
    Footer
  },

  data() {
    return {
      cadastro: {
        nome: "",
        celular: "",
        email: "",
        senha: "",
        endereco: ""
      },
      login: {
        email: "",
        senha: ""
      }
    };
  },

  methods: {
    validateCadastro: function(event) {
      event.preventDefault();
      console.log(this.cadastro, this.login);
    },
    setCadastroNome: function(event) {
      this.cadastro.nome = event.target.value;
    },
    setCadastroCelular: function(event) {
      this.cadastro.celular = event.target.value;
    },
    setCadastroEmail: function(event) {
      this.cadastro.email = event.target.value;
    },
    setCadastroSenha: function(event) {
      this.cadastro.senha = event.target.value;
    },
    setCadastroEndereco: function(event) {
      this.cadastro.endereco = event.target.value;
    },

    validateLogin: function(event) {},
    setLoginEmail: function(event) {
      this.login.email = event.target.value;
    },
    setLoginSenha: function(event) {
      this.login.senha = event.target.value;
    }

    // Post para verificar se o email do cliente já foi cadastrado

    // Post para fazer cadastro do visitante

    // Post para verificar se email e senha estão iguais aos registrados no banco
  }
};
</script>

<style scoped>
.cadastro {
  margin: 2em 0em;
}

.container-cadastro {
  width: 75%;
  margin: 2em auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.container-btn {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.container-login {
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
}

label {
  font-weight: bold;
}

label #endereco {
  width: 100%;
}

@import url("https://fonts.googleapis.com/css2?family=Tillana:wght@500&display=swap");
input {
  font-family: "Tillana", Arial, Helvetica, sans-serif;
  margin: 1em;
  width: 90%;
  padding: 0.5em 0.5em;
  font-size: 16px;
  border-color: #8aae92;
  border-radius: 5px;
  border-style: solid;
}

input:active {
  border-color: #8aae92;
  border-radius: 5px;
  border-style: solid;
}

.btn-form {
  font-family: "Tillana", Arial, Helvetica, sans-serif;
  width: 20%;
  margin: 1.5em;
  padding: 1em 0em;
  flex-grow: 0;
  background-color: #8aae92;
  color: #ffffff;
  font-size: 16px;
  border-style: solid;
  border-color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
}

a {
  width: 30%;
  font-size: 16px;
  text-decoration: none;
}
</style>
