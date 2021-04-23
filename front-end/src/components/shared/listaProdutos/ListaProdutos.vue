<template>
  <div class="container-lista-produtos">
    <Card
      v-for="(produto, index) of produtos"
      :key="index"
      :nome="produto.nome"
      :imgSrc="produto.imgSrc"
      :descricao="produto.descricao"
      :categoria="produto.categoria"
      :preco="produto.preco"
      :compravel="true"
      :emEstoque="true"
    />
  </div>
</template>

<script>
import Card from "../cardProduto/Card.vue";
import srcBatata from "../../../assets/figures/batata.jpg";
import srcMorango from "../../../assets/figures/morango.jpg";
import srcCenoura from "../../../assets/figures/cenoura.jpg";
import srcMercearia from "../../../assets/figures/figure00.jpg";

export default {
  components: {
    Card
  },

  data() {
    return {
      produtos: [
        {
          nome: "Batata",
          imgSrc: srcBatata,
          descricao: "Batatinha batatão batata",
          categoria: "Legumes",
          preco: "2,49"
        },
        {
          nome: "Cenoura",
          imgSrc: srcCenoura,
          descricao: "Cenoura cenourão cenourinha",
          categoria: "Legumes",
          preco: "1,50"
        },
        {
          nome: "Morango",
          imgSrc: srcMorango,
          descricao: "Morango moranguinho da morangolandia",
          categoria: "Frutas",
          preco: "9,50"
        },
        {
          nome: "ETC",
          imgSrc: srcMercearia,
          descricao: "Um monte de coisa",
          categoria: "Mercearia",
          preco: "1110,50"
        }
      ]
    };
  }
};
</script>

<style scoped>
.container-lista-produtos {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}

@media screen and (min-width: 1200px) {
}

@media screen and (max-width: 871px) {
}
</style>
