<template>
  <div class="card">
    <div class="header-card">
      <img class="img-product" :src="imgSrc" alt="" />
      <h3 class="card-name">{{ nome }}</h3>
    </div>

    <div class="body-card">
      <p class="p-description">
        {{ descricao }}
      </p>
      <Categoria :nome="categoria" :cor="defineColor(categoria)" />

      <div class="preço" v-if="compravel">
        <p class="p-preco">preço: {{ preco }}</p>
      </div>
      <div class="quantidade-produto" v-if="emEstoque">
        <img
          :src="iconeMenos"
          class="icone-menos"
          @click="quantidade > 0 ? quantidade-- : quantidade"
        />
        <span class="quantidade"> {{ quantidade }} </span>
        <img :src="iconeMais" class="icone-mais" @click="quantidade++" />
      </div>

      <div class="container-btn">
        <Botao
          type="submit"
          estilo="btn-sm"
          valor="Comprar"
          @click.prevent="adicionarNoCarrinho($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Categoria from "../categoria/Categoria.vue";
import Botao from "../botao/Botao.vue";
import IconPlus from "../../../assets/icons/plus-icon.png";
import IconMinus from "../../../assets/icons/minus-icon.png";

export default {
  components: {
    Categoria,
    Botao
  },

  props: [
    "nome",
    "imgSrc",
    "descricao",
    "categoria",
    "preco",
    "compravel",
    "quantidade",
    "emEstoque"
  ],

  data() {
    return {
      colors: ["yellow", "green", "brown", "blue"],
      ehCompravel: this.compravel,
      estaNoEstoque: this.emEstoque,
      iconeMais: IconPlus,
      iconeMenos: IconMinus
    };
  },

  methods: {
    defineColor: function(nome) {
      let result = "";
      switch (nome) {
        case "Legumes":
          result = "blue";
          break;
        case "Frutas":
          result = "yellow";
          break;
        case "Hortaliças":
          result = "green";
          break;
        default:
          result = "brown";
      }
      return result;
    },

    adicionarNoCarrinho: function(event) {
      console.log(event);
    }
  }
};
</script>

<style scoped>
.card {
  border-style: solid;
  border-color: #8aae92;
  border-width: 1px;
  width: 28%;
  border-radius: 5px;
  height: auto;
  margin: 1em;
  box-shadow: 1px 1px 2px #8aae92;
}

.card:hover {
  box-shadow: 1px 1px 10px #8aae92;
}

img {
  width: 100%;
  max-height: 50%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

.card-name {
  text-align: center;
  margin: 0.5em;
  font-size: 20px;
}

.body-card {
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  width: 90%;
}

.p-description {
  margin: 0.5em auto;
}

.p-preco {
  margin: 0.5em auto;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
}

.quantidade-produto {
  display: flex;
  width: 80%;
  margin: 1em auto;
  align-items: center;
  justify-content: space-between;
}

.quantidade {
  font-size: 16px;
}

.icone-menos {
  width: 10%;
}

.icone-menos:hover {
  cursor: pointer;
}

.icone-mais {
  width: 10%;
}

.icone-mais:hover {
  cursor: pointer;
}

.container-btn {
  display: flex;
  justify-content: center;
  width: 70%;
  margin: 0 auto;
}

@import url("https://fonts.googleapis.com/css2?family=Tillana:wght@500&display=swap");

@media screen and (min-width: 500px) and (max-width: 830px) {
  .card {
    width: 40%;
  }
}

@media screen and (max-width: 510px) {
  .card {
    width: 80%;
    margin: 1em auto;
  }
}
</style>
