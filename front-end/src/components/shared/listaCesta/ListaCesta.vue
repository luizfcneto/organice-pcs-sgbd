<template>
  <section class="cestas-prontas">
    <h2 class="titulo-centralizado">Cestas Prontas</h2>
    <div class="container-lista-cards">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </section>
</template>

<script>
import Card from "../cardProduto/Card.vue";

export default {
  components: {
    Card
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
