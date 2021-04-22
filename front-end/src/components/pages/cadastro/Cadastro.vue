<template>
  <div class="">
    <Header />
    <NavigationBar />
    <div class="cadastro">
      <h2 class="titulo-centralizado">Cadastro:</h2>
      <form class="container-cadastro">
        <label for="nome">
          Nome*:
          <input
            id="nome"
            type="text"
            v-on:input="setCadastroNome($event)"
            placeholder="Nome..."
          />
        </label>

        <label for="celular">
          Celular*:
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
        celular: "",
        email: "",
        senha: "",
        confirmarSenha: "",
        endereco: ""
      },
      login: {
        email: "",
        senha: ""
      }
    };
  },

  methods: {
    validateNome: function(nome) {
      let valido = true;
      if (nome === "" || nome === "undefined" || nome === null) {
        valido = false;
        // motrar erro no input de nome, "campo vazio"
        console.log("nome vazio");
        return valido;
      }
      return valido;
    },

    validateCelular: function(celular) {
      let valido = true;
      if (celular === "" || celular === null || celular === undefined) {
        valido = false;
        console.log("celular não preenchido corretamente");
        // mostrar erro no input de celular, "campo não preenchido"
        return valido;
      }

      if (celular.length !== 9) {
        valido = false;
        console.log("O celular deve conter 9 números");
        // mostrar erro no input de celular, "verifique "
        return valido;
      }

      const onlyNumbersRegex = new RegExp("^[0-9]*$");
      let result = celular.match(onlyNumbersRegex);
      if (result === null) {
        valido = false;
        // mostrar erro no input de celular, "digite apenas números"
        console.log("Digite apenas números");
        return valido;
      }
      return valido;
    },

    validateEmail: function(email) {
      let valido = true;

      if (email === undefined || email === "" || email === null) {
        valido = false;
        // mostrar erro no input de email, "campo vazio"
        console.log("Email é obrigatório");
        return valido;
      } else {
        let checkArroba = email.trim().split("@");
        if (checkArroba.length > 2) {
          valido = false;
          console.log("email sem @");
          // mostrar erro no input de email, sem "@"
        }
        return valido;
      }
    },

    validateSenha: function(senha) {
      let valido = true;
      if (senha === undefined || senha === "" || senha === null) {
        valido = false;
        // mostrar erro no input da senha, "campo vazio"
        console.log("Senha é obrigatória");
      }
      return valido;
    },

    validateConfirmarSenha: function(confirmarSenha, senha) {
      let valido = true;
      if (
        confirmarSenha === undefined ||
        confirmarSenha === "" ||
        confirmarSenha === null
      ) {
        valido = false;
        // mostrar erro no input de confirmar senha, "campo vazio"
        console.log("Confirma Senha é obrigatório");
        return valido;
      }

      if (confirmarSenha !== senha) {
        valido = false;
        // mostrar erro no input de confirmar senha, "Senhas não coincidem"
        console.log("Senhas não coincidem");
      }

      return valido;
    },

    validateEndereco: function(endereco) {
      let valido = true;
      if (endereco === null || endereco === "" || endereco === undefined) {
        valido = false;
        // mostrar erro no input de endereço, "Endereço é Obrigatório"
        console.log("Endereço é obrigatório");
      }
      return valido;
    },

    validateCadastro: function(event) {
      event.preventDefault();

      let nomeValido = this.validateNome(this.cadastro.nome);
      let celularValido = this.validateCelular(this.cadastro.celular);
      let emailValido = this.validateEmail(this.cadastro.email);
      let senhaValida = this.validateSenha(this.cadastro.senha);
      let confirmaSenhaValida = this.validateConfirmarSenha(
        this.cadastro.confirmarSenha,
        this.cadastro.senha
      );
      let enderecoValido = this.validateEndereco(this.cadastro.endereco);

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
