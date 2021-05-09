<template>
  <div class="">
    <div class="cadastro">
      <h2 class="titulo-centralizado">Cadastro:</h2>
      <AlertResponse
        v-show="cadastro.mensagem"
        :status="cadastro.class"
        :mensagem="cadastro.mensagem"
      />
      <form class="container-cadastro" @submit.prevent="fazCadastro($event)">
        <label for="nome">
          Nome*:
          <span class="error" v-if="!cadastro.nomeValido">
            {{ this.erro.nome }}
          </span>
          <input
            class="input-cadastro"
            id="nome"
            type="text"
            v-model="cadastro.nome"
            placeholder="Nome..."
          />
        </label>
        <label for="celular">
          Celular*:
          <span class="error" v-if="!cadastro.celularValido">
            {{ this.erro.celular }}
          </span>
          <input
            class="input-cadastro"
            id="celular"
            type="text"
            v-model="cadastro.celular"
            placeholder="XXXXX-XXXX"
          />
        </label>
        <label for="email">
          Email*:
          <span class="error" v-if="!cadastro.emailValido">
            {{ this.erro.email }}
          </span>
          <input
            class="input-cadastro"
            id="email"
            type="email"
            v-model="cadastro.email"
            placeholder="exemplo@email.com"
        /></label>

        <label for="senha">
          Senha*:
          <font-awesome-icon
            :icon="eye"
            v-on:click.prevent="showPassword($event)"/>

          <span class="error" v-if="!cadastro.senhaValida">
            {{ this.erro.senha }}
          </span>

          <input
            class="input-cadastro"
            id="senha"
            type="password"
            v-model="cadastro.senha"
            placeholder="Senha..."
        /></label>

        <label id="label-confirmar-senha" for="confirmarSenha">
          Confirmar Senha*:
          <font-awesome-icon
            :icon="eye"
            v-on:click.prevent="showPassword($event)"
          />

          <span class="error" v-if="!cadastro.confirmarSenhaValida">
            {{ this.erro.confirmarSenha }}
          </span>
          <input
            class="input-cadastro"
            id="confirmarSenha"
            type="password"
            v-model="cadastro.confirmarSenha"
            placeholder="Confirme a senha..."
          />
        </label>

        <label id="label-endereco" for="endereco">
          Endereço*:
          <span class="error" v-if="!cadastro.enderecoValido">
            {{ this.erro.endereco }}
          </span>
          <input
            class="input-cadastro"
            id="endereco"
            type="text"
            v-model="cadastro.endereco"
            placeholder="Endereco..."
        /></label>

        <div class="container-btn">
          <Botao type="submit" estilo="btn-form" valor="Cadastrar" />
        </div>
      </form>

      <h2 class="titulo-centralizado">Login:</h2>
      <AlertResponse
        v-show="login.mensagem"
        :status="login.class"
        :mensagem="login.mensagem"
      />

      <form class="container-login" @submit.prevent="fazLogin($event)">
        <label for="emailLogin">
          Email*:
          <span class="error" v-if="!login.emailValido">
            {{ this.erro.email }}
          </span>
          <input
            class="input-login"
            id="emailLogin"
            type="text"
            v-model="login.email"
            placeholder="exemplo@email.com"
          />
        </label>

        <label for="senhaLogin">
          Senha*:
          <span class="error" v-if="!login.senhaValida">
            {{ this.erro.senha }}
          </span>
          <font-awesome-icon
            :icon="eye"
            v-on:click.prevent="showPassword($event)"/>

          <input
            class="input-login"
            id="senhaLogin"
            type="password"
            v-model="login.senha"
            placeholder="senha..."
        /></label>
        <a href="#"> esqueci minha senha </a>
        <div class="container-btn">
          <Botao type="submit" estilo="btn-form" valor="Login" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "../../shared/header/Header.vue";
import NavigationBar from "../../shared/navigationBar/NavigationBar.vue";
import Botao from "../../shared/botao/Botao.vue";
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
import AlertResponse from "../../shared/alertResponse/AlertResponse.vue";

import { faEye } from "@fortawesome/free-solid-svg-icons";

export default {
  props: ["auth"],

  components: {
    Header,
    AlertResponse,
    NavigationBar,
    Botao,
    Footer
  },

  computed: {
    eye() {
      return faEye;
    }
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
        enderecoValido: true,
        mensagem: "",
        class: ""
      },
      login: {
        email: "",
        emailValido: true,
        senha: "",
        senhaValida: true,
        mensagem: "",
        class: ""
      },
      erro: {
        nome: "",
        celular: "",
        email: "",
        senha: "",
        confirmarSenha: "",
        endereco: ""
      },

      urlRealizaCadastro: "",
      urlRealizaLogin: ""
    };
  },

  methods: {
    validateNome: validateNome,
    validateCelular: validateCelular,
    validateEmail: validateEmail,
    validateSenha: validateSenha,
    validateConfirmarSenha: validateConfirmarSenha,
    validateEndereco: validateEndereco,

    setAllErrosTrue: function() {
      this.cadastro.nomeValido = true;
      this.cadastro.celularValido = true;
      this.cadastro.emailValido = true;
      this.cadastro.senhaValida = true;
      this.cadastro.confirmarSenhaValida = true;
      this.cadastro.enderecoValido = true;
      this.cadastro.nomeValido = true;

      this.login.emailValido = true;
      this.login.senhaValida = true;
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
    setCadastroSenhaValida: function() {
      this.cadastro.senhaValida = !this.cadastro.senhaValida;
    },
    setCadastroConfirmaSenhaValida: function() {
      this.cadastro.confirmarSenhaValida = !this.cadastro.confirmarSenhaValida;
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

    setLoginEmailValido: function() {
      this.login.emailValido = !this.login.emailValido;
    },

    setLoginSenhaValida: function() {
      this.login.senhaValida = !this.login.senhaValida;
    },

    showPassword: function(event) {
      let target = event.target;
      let input;
      if (target.parentElement.childElementCount === 1) {
        input = target.parentElement.parentElement.lastChild;
      } else {
        input = target.parentElement.lastChild;
      }

      if (input.type === "password") {
        input.type = "text";
      } else {
        input.type = "password";
      }
    },

    validateCadastro: function(event) {
      event.preventDefault();
      this.setAllErrosTrue();
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
        this.setCadastroSenhaValida();
        this.setErroSenha(senhaValida.msg);
      }

      let confirmaSenhaValida = this.validateConfirmarSenha(
        this.cadastro.confirmarSenha,
        this.cadastro.senha
      );

      if (!confirmaSenhaValida.valido) {
        this.setCadastroConfirmaSenhaValida();
        this.setErroConfirmarSenha(confirmaSenhaValida.msg);
      }

      let enderecoValido = this.validateEndereco(this.cadastro.endereco);
      if (!enderecoValido.valido) {
        this.setCadastroEnderecoValido();
        this.setErroEndereco(enderecoValido.msg);
      }

      if (
        nomeValido.valido &&
        celularValido.valido &&
        senhaValida.valido &&
        confirmaSenhaValida.valido &&
        enderecoValido.valido
      ) {
        // post para fazer cadastro do visitante
        this.fazCadastro();
      }
    },

    validateLogin: function(event) {
      event.preventDefault();
      this.setAllErrosTrue();

      let emailValido = this.validateEmail(this.login.email);
      if (!emailValido.valido) {
        this.setLoginEmailValido();
        this.setErroEmail(emailValido.msg);
      }

      let senhaValida = this.validateSenha(this.login.senha);
      if (!senhaValida.valido) {
        this.setLoginSenhaValida();
        this.setErroSenha(senhaValida.msg);
      }

      if (emailValido.valido && senhaValida.valido) {
        // post para verificar se email e senha estão iguais aos registrados no banco
        this.fazLogin();
      }
    },

    setMensagemCadastroSucesso() {
      this.cadastro.mensagem = "Cadastro Bem Sucedido!";
      this.cadastro.class = "sucesso";
    },

    setMensagemCadastroFalha() {
      this.cadastro.mensagem = "Ocorreu um erro ao realizar Cadadastro!";
      this.cadastro.class = "falha";
    },

    setMensagemLoginFalha() {
      this.login.mensagem = "Ocorreu um errro ao efetuar Login!";
      this.login.class = "falha";
    },

    // Post para fazer cadastro do visitante
    fazCadastro: async function() {
      let body = {
        nome: this.cadastro.senha,
        celular: this.cadastro.celular,
        email: this.cadastro.email,
        senha: this.cadastro.senha,
        endereco: this.cadastro.endereco
      };
      try {
        const response = await fetch(this.urlRealizaCadastro, {
          method: "POST",
          body: JSON.stringify(body)
        });

        if (response.status < 200 || response.status > 299) {
          this.setMensagemCadastroFalha();
          throw new Error();
        } else {
          this.setMensagemCadastroSucesso();
        }
      } catch (error) {
        console.log(error);
      }
    },

    // Post para verificar se email e senha estão iguais aos registrados no banco
    fazLogin: async function() {
      let body = {
        email: this.login.email,
        senha: this.login.senha
      };

      try {
        const response = await fetch(this.urlRealizaLogin, {
          method: "POST",
          body: JSON.stringify(body)
        });

        if (response.status < 200 || response.status > 299) {
          this.setMensagemLoginFalha();
          throw new Error();
        } else {
          console.log(body);
        }
      } catch (error) {
        console.log(error);
      }
    }
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

.error {
  color: #f05945;
  font-size: 14px;
}

@import url("https://fonts.googleapis.com/css2?family=Tillana:wght@500&display=swap");
.input-cadastro,
.input-login {
  font-family: "Tillana", Arial, Helvetica, sans-serif;
  margin: 1em;
  padding: 0.5em 0.5em;
  font-size: 16px;
  border-color: #8aae92;
  border-radius: 5px;
  border-style: solid;
}

.input-cadastro:active {
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

  .container-cadastro input {
    width: 100%;
  }

  .container-cadastro label {
    width: 90%;
  }
}
</style>
