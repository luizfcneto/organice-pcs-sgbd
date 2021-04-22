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
      <Categoria :nome="categoria" :cor="defineColor(nome)" />
      <button type="submit" class="btn-comprar">Comprar</button>
    </div>
  </div>
</template>

<script>
import Categoria from "../categoria/Categoria.vue";

export default {
  components: {
    Categoria
  },

  props: ["nome", "imgSrc", "descricao", "categoria"],

  data() {
    return {
      colors: ["yellow", "green", "brown", "blue"]
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

@import url("https://fonts.googleapis.com/css2?family=Tillana:wght@500&display=swap");
.btn-comprar {
  width: 50%;
  padding: 0.2em 0.5em;
  margin: 0.5em auto 1.5em auto;
  font-family: "Tillana", Arial, Helvetica, sans-serif;
  border-color: #8aae92;
  color: #000000;
  border-width: 1px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-comprar:hover {
  color: #ffffff;
  background-color: #8aae92;
}

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
