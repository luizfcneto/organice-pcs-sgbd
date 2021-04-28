<template>
  <div class="">
    <Header />
    <NavigationBar />
    <div class="perfil">
      <h2 class="titulo-centralizado">Meus Dados:</h2>
      <form class="container-perfil">
        <fieldset>
          <legend>Dados Pessoais:</legend>

          <label for="nome">
            Nome*:
            <span class="error"> </span>
            <input id="nome" type="text" value="" />
          </label>

          <label for="celular">
            Celular*:
            <span class="error"> </span>
            <input id="celular" type="text" value="" />
          </label>

          <label id="label-endereco" for="endereco">
            Endereço*:
            <span class="error"> </span>
            <input id="endereco" type="text" value="" />
          </label>
        </fieldset>

        <fieldset>
          <legend>Dados da Conta:</legend>

          <label for="email">
            Email*:
            <span class="error"> </span>
            <input id="email" type="email" value="" />
          </label>

          <label for="senha">
            Senha*:
            <span class="error"> </span>
            <input id="senha" type="password" />
          </label>

          <label for="senhaNova">
            Senha Nova*:
            <span class="error"> </span>
            <input id="senhaNova" type="password" disabled />
          </label>

          <label id="label-confirmar-senha" for="confirmarSenhaNova">
            Confirmar Senha Nova*:
            <span class="error"> </span>
            <input id="confirmarSenhaNova" type="password" disabled />
          </label>
        </fieldset>

        <div class="container-btn">
          <button class="btn-form editar" type="submit">
            Editar
          </button>

          <!-- <button class="btn-form cancelar" type="submit">
            Cancelar
          </button> -->
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
  }
};
</script>

<style scoped>
.titulo-centralizado {
  margin: 1em 0;
}

.container-perfil {
  width: 80%;
  margin: 2em auto;
  display: flex;
  flex-flow: column;
}

fieldset {
  display: flex;
  width: 70%;
  margin: 0 auto;
  flex-flow: column;
  margin: 1em auto;
}

legend {
  margin-bottom: 1em;
  font-size: 26px;
}

.container-btn {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.error {
  color: #f05945;
  font-size: 14px;
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
  width: 100%;
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

  font-size: 16px;
  border-style: solid;
  border-color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
}

.editar {
  background-color: #8aae92;
  color: #ffffff;
}

.cancelar {
  background-color: #dc7567;
  color: #000000;
}

a {
  width: 30%;
  font-size: 16px;
  text-decoration: none;
}

#senhaNova,
#confirmarSenhaNova {
  background-color: #ededed;
}

@media screen and (min-width: 1200px) {
  fieldset {
    display: flex;
    width: 40%;
    margin: 0 auto;
    flex-flow: column;
  }

  .btn-form {
    width: 10%;
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
  .container-perfil {
    width: 100%;
    margin: 2em auto;
    display: flex;
    flex-flow: column;
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
