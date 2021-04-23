<template>
  <section class="cestas-prontas">
    <h2 class="titulo-centralizado">Cestas Prontas</h2>
    <div class="container-lista-cards">
      <Card
        v-for="(cesta, index) of cestas"
        :key="index"
        :nome="cesta.nome"
        :imgSrc="cesta.imgSrc"
        :descricao="cesta.descricao"
        :categoria="cesta.categoria"
      />
    </div>
  </section>
</template>

<script>
import Card from "../cardProduto/Card.vue";
import srcBatata from "../../../assets/figures/batata.jpg";
import srcMorango from "../../../assets/figures/morango.jpg";
import srcLaranja from "../../../assets/figures/laranja.jpg";
import srcCenoura from "../../../assets/figures/cenoura.jpg";
import srcHortalicas from "../../../assets/figures/figure04.jpg";
import srcMercearia from "../../../assets/figures/figure00.jpg";

export default {
  components: {
    Card
  },

  data() {
    return {
      cestas: [
        {
          nome: "Legumes",
          imgSrc: srcBatata,
          descricao: "Cesta grande contendo até 20 legumes",
          categoria: "Legumes"
        },
        {
          nome: "Frutas",
          imgSrc: srcMorango,
          descricao: "Cesta grande contendo até 20 frutas",
          categoria: "Frutas"
        },

        {
          nome: "Hortaliças",
          imgSrc: srcHortalicas,
          descricao: "Cesta grande contendo até 20 hortaliças",
          categoria: "Hortalicas"
        },

        {
          nome: "Legumes",
          imgSrc: srcCenoura,
          descricao: "Cesta média contendo até 15 legumes",
          categoria: "Legumes"
        },

        {
          nome: "Hortaliças",
          imgSrc: srcHortalicas,
          descricao: "Cesta média contendo até 15 hortaliças",
          categoria: "Hortaliças"
        },

        {
          nome: "Frutas",
          imgSrc: srcLaranja,
          descricao: "Cesta média contendo até 15 frutas",
          categoria: "Frutas"
        },

        {
          nome: "Cereais & Ovos",
          imgSrc: srcMercearia,
          descricao: "Cesta Grande contendo até 20 cereais e ovos",
          categoria: "Mercearia"
        }
      ]
    };
  }
};
</script>

<style scoped>
.cestas-prontas {
  margin: 2em 0em;
}

.titulo-centralizado {
  margin: 1em;
}

.container-lista-cards {
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-flow: row wrap;
  justify-content: flex-start;
}

ul {
  list-style: none;
}
</style>
