<template>
  <div class="">
    <Header />
    <NavigationBar />
    <div class="cadastro">
      <h2 class="titulo-centralizado">Cadastro:</h2>
      <form class="container-cadastro">
        <label for="nome">
          Nome*:
          <span v-if="!cadastro.nomeValido"> {{ this.erro.nome }} </span>
          <input
            id="nome"
            type="text"
            v-on:input="setCadastroNome($event)"
            placeholder="Nome..."
          />
        </label>

        <label for="celular">
          Celular*:
          <span v-if="!cadastro.celularValido"> </span>
          <input
            id="celular"
            type="text"
            v-on:input="setCadastroCelular($event)"
            placeholder="XXXXX-XXXX"
          />
        </label>

        <label for="email">
          Email*:
          <input
            id="email"
            type="email"
            v-on:input="setCadastroEmail($event)"
            placeholder="exemplo@email.com"
          />
        </label>

        <label for="senha">
          Senha*:
          <input
            id="senha"
            type="password"
            v-on:input="setCadastroSenha($event)"
            placeholder="Senha..."
          />
        </label>

        <label id="label-confirmar-senha" for="confirmarSenha">
          Confirmar Senha*:
          <input
            id="confirmarSenha"
            type="password"
            v-on:input="setCadastroConfirmaSenha($event)"
            placeholder="Confirme a senha..."
          />
        </label>

        <label id="label-endereco" for="endereco">
          Endereço*:
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
          Email*:
          <input
            id="emailLogin"
            type="text"
            v-on:input="setLoginEmail($event)"
            placeholder="exemplo@email.com"
          />
        </label>

        <label for="senhaLogin">
          Senha*:
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
import NavigationBar from "../../shared/navigationBar/NavigationBar.vue";
import Footer from "../../shared/footer/Footer.vue";
import {
  validateNome,
  validateCelular,
  validateEmail,
  validateSenha,
  validateConfirmarSenha,
  validateEndereco,
  validateLogin
} from "../../../utils/validations.js";

export default {
  components: {
    Header,
    NavigationBar,
    Footer
  },

  data() {
    return {
      cadastro: {
        nome: "",
        nomeValido: true,
        celular: "",
        celularValido: true,
        email: "",
        emailValido: true,
        senha: "",
        senhaValida: true,
        confirmarSenha: "",
        confirmarSenhaValida: true,
        endereco: "",
        enderecoValido: true
      },
      login: {
        email: "",
        emailValido: true,
        senha: "",
        senhaValida: true
      },
      erro: {
        nome: "",
        celular: "",
        email: "",
        senha: "",
        confirmarSenha: "",
        endereco: ""
      }
    };
  },

  methods: {
    validateNome: validateNome,
    validateCelular: validateCelular,
    validateEmail: validateEmail,
    validateSenha: validateSenha,
    validateConfirmarSenha: validateConfirmarSenha,
    validateEndereco: validateEndereco,

    validateCadastro: function(event) {
      event.preventDefault();

      let nomeValido = this.validateNome(this.cadastro.nome);
      if (!nomeValido.valido) {
        this.setCadastroNomeValido();
        this.setErroNome(nomeValido.msg);
      }

      let celularValido = this.validateCelular(this.cadastro.celular);
      if (!celularValido.valido) {
        this.setCadastroCelularValido();
        this.setErroCelular(celularValido.msg);
      }

      let emailValido = this.validateEmail(this.cadastro.email);
      if (!emailValido.valido) {
        this.setCadastroEmailValido();
        this.setErroEmail(emailValido.msg);
      }

      let senhaValida = this.validateSenha(this.cadastro.senha);
      if (!senhaValida.valido) {
        this.setCadastroSenhaValido();
        this.setErroSenha(senhaValida.msg);
      }

      let confirmaSenhaValida = this.validateConfirmarSenha(
        this.cadastro.confirmarSenha,
        this.cadastro.senha
      );

      if (!confirmaSenhaValida.valido) {
        this.setCadastroConfirmaSenhaValido();
        this.setErroConfirmarSenha(confirmaSenhaValida.msg);
      }

      let enderecoValido = this.validateEndereco(this.cadastro.endereco);
      if (!enderecoValido.valido) {
        this.setCadastroEnderecoValido();
        this.setErroEndereco(enderecoValido.msg);
      }

      console.log(
        this.cadastro,
        nomeValido,
        celularValido,
        emailValido,
        senhaValida,
        confirmaSenhaValida,
        enderecoValido
      );
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
    setCadastroConfirmaSenha: function(event) {
      this.cadastro.confirmarSenha = event.target.value;
    },
    setCadastroEndereco: function(event) {
      this.cadastro.endereco = event.target.value;
    },

    setCadastroNomeValido: function() {
      this.cadastro.nomeValido = !this.cadastro.nomeValido;
    },
    setCadastroCelularValido: function() {
      this.cadastro.celularValido = !this.cadastro.celularValido;
    },
    setCadastroEmailValido: function() {
      this.cadastro.emailValido = !this.cadastro.emailValido;
    },
    setCadastroSenhaValido: function() {
      this.cadastro.senhaValido = !this.cadastro.senhaValido;
    },
    setCadastroConfirmaSenhaValido: function() {
      this.cadastro.confirmarSenhaValido = !this.cadastro.ConfirmarSenhaValido;
    },
    setCadastroEnderecoValido: function() {
      this.cadastro.enderecoValido = !this.cadastro.enderecoValido;
    },

    setErroNome: function(msg) {
      this.erro.nome = msg;
    },
    setErroCelular: function(msg) {
      this.erro.celular = msg;
    },
    setErroEmail: function(msg) {
      this.erro.email = msg;
    },
    setErroSenha: function(msg) {
      this.erro.senha = msg;
    },
    setErroConfirmarSenha: function(msg) {
      this.erro.confirmarSenha = msg;
    },
    setErroEndereco: function(msg) {
      this.erro.endereco = msg;
    },

    validateLogin: validateLogin,

    setLoginEmail: function(event) {
      this.login.email = event.target.value;
    },

    setLoginEmailValido: function() {
      this.login.emailValido = !this.login.emailValido;
    },

    setLoginSenha: function(event) {
      this.login.senha = event.target.value;
    },

    setLoginSenhaValida: function() {
      this.login.senhaValida = !this.login.senhaValida;
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

.titulo-centralizado {
  margin: 1em 0;
}

.container-cadastro {
  width: 60%;
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
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
}

@import url("https://fonts.googleapis.com/css2?family=Tillana:wght@500&display=swap");
input {
  font-family: "Tillana", Arial, Helvetica, sans-serif;
  margin: 1em;
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

label {
  font-weight: bold;
}

.btn-form {
  font-family: "Tillana", Arial, Helvetica, sans-serif;
  width: 20%;
  margin: 1.5em;
  padding: 0.7em 0em;
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

.container-cadastro input {
  width: 80%;
}

.container-cadastro label {
  width: 50%;
}

.container-login input {
  width: 90%;
}

@media screen and (min-width: 1200px) {
  .container-cadastro {
    width: 50%;
  }
  .container-login {
    width: 30%;
  }

  .btn-form {
    width: 20%;
    padding: 0.5em 0em;
  }

  .container-cadastro input {
    width: 80%;
  }

  .container-cadastro label {
    width: 50%;
  }

  .container-login input {
    width: 90%;
  }
}

@media screen and (max-width: 871px) {
  .container-cadastro {
    flex-flow: column;
  }

  .container-cadastro {
    width: 80;
  }
  .container-login {
    width: 60%;
  }

  .btn-form {
    width: 30%;
    padding: 0.5em 0em;
  }

  .container-cadastro input {
    width: 100%;
  }

  .container-cadastro label {
    width: 90%;
  }
}
</style>
