<template>
  <section id="contato" class="contato">
    <h2 class="titulo-centralizado">Dúvidas? Entre Contato Conosco</h2>

    <div class="container-contato">
      <form class="container-form">
        <label for="email">
          Email:
          <input class="input-contato" type="text" placeholder="Email..." />
        </label>

        <label for="mensagem">
          Mensagem:
          <textarea
            class="input-contato"
            cols=""
            rows=""
            placeholder="Escreva a sua mensagem..."
          >
          </textarea>
        </label>

        <div class="container-btn">
          <Botao type="type" estilo="btn-enviar-msg" valor="Enviar Mensagem" />
        </div>
        <!-- <button type="submit" class="btn-enviar-msg">Enviar Mensagem</button> -->
      </form>

      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d117558.65599159664!2d-43.3297657!3d-22.9609786!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997ff1cedab71f%3A0x488a0957bfcccedb!2sClube%20Org%C3%A2nico!5e0!3m2!1spt-BR!2sbr!4v1618958362610!5m2!1spt-BR!2sbr"
          loading="lazy"
        ></iframe>

        <p>
          <b>Endereço</b>: rua ali atrás, do outro lado do parque, virando a
          esquerda
        </p>
        <p><b>Telefone</b>: (XX) XXXXX-XXXX</p>
      </div>
    </div>
  </section>
</template>

<script>
import Botao from "../botao/Botao.vue";

export default {
  components: {
    Botao
  }
};
</script>

<style scoped>
.contato {
  margin: 2em 0em;
  padding: 2em 0em;
}

.titulo-centralizado {
  margin-bottom: 2em;
}

.container-contato {
  width: 80%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: flex-start;
}

.container-form {
  display: flex;
  flex-flow: column;
  flex-grow: 1;
}

.map {
  flex-grow: 1;
}

textarea {
  height: 5em;
}

label {
  margin: 0.5em 0em 0.5em 0em;
}

.container-btn {
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
}

@import url("https://fonts.googleapis.com/css2?family=Tillana:wght@500&display=swap");
.input-contato {
  font-family: "Tillana", Arial, Helvetica, sans-serif;
  margin: 1em 0em;
  width: 90%;
  padding: 0.5em;
  font-size: 16px;
  border-color: #c4e3cb;
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
}

iframe {
  margin: 0em 0em 1em 1em;
  width: 100%;
  height: 300px;
}

p {
  margin: 0em 0em 1em 1em;
}

b,
label {
  font-weight: bold;
}

@media screen and (min-width: 1200px) {
  .container-contato {
    width: 70%;
    justify-content: space-around;
    align-items: flex-start;
  }

  .container-form {
    flex-grow: 1;
  }

  .map {
    flex-grow: 1;
  }

  .input-contato {
    width: 90%;
    margin: 1em auto;
  }

  iframe {
    margin: 0 auto 1em;
    width: 90%;
    height: 450px;
  }

  p {
    margin: 0em 0em 1em 0em;
  }

  .container-btn {
    display: flex;
    margin: 0 auto;
    justify-content: center;
  }
}

@media screen and (max-width: 830px) {
  .container-contato {
    width: 90%;
    flex-flow: column;
    align-items: center;
  }

  iframe {
    margin: 2em auto;
    width: 100%;
    height: 350px;
  }

  .input-contato {
    width: 100%;
    margin: 1em auto;
  }

  p {
    margin: 0em auto 1em auto;
  }
}
</style>
