<template>
  <section class="sobre-nos">
    <h2 class="titulo-centralizado">Sobre a OrgaNice</h2>
    <div class="container-sobre">
      <img
        class="img-sobre"
        src="../../../assets/figures/feirantes.jpg"
        alt="feirante vendendo cesta de legumes para cliente"
      />
      <p>{{ text }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    };
  }
};
</script>

<style scoped>
.sobre-nos {
  background-color: #95a792;
  padding: 1em 0em;
}

.titulo-centralizado {
  color: #ffffff;
  margin: 2em 0em;
}

.container-sobre {
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-flow: column;
}

.img-sobre {
  width: 100%;
}

p {
  margin: 2em 0em;
  text-align: center;
  font-size: 24px;
  color: #ffffff;
}
</style>
