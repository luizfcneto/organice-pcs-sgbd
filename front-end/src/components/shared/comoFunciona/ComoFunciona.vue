<template>
  <section id="como-funciona" class="como-funciona">
    <h2 class="titulo-centralizado">Como Funciona</h2>
    <div class="container-line">
      <div class="container-column">
        <img
          class="icon-img"
          src="../../../assets/icons/icon-vegetables.png"
          alt="orgânicos"
        />
        <p>Produtos Orgânicos Selecionados</p>
      </div>

      <div class="container-column">
        <img
          class="icon-img"
          src="../../../assets/icons/icon-basket00.png"
          alt="cesta de organicos"
        />
        <p>
          Disponibilizamos Cestas customizadas de acordo com sua necessidade
        </p>
      </div>

      <div class="container-column">
        <img
          id="icon-truck"
          src="../../../assets/icons/icon-truck.png"
          alt="entrega rápida"
        />
        <p>Entregamos rapidamente, no dia agendado</p>
      </div>

      <div class="container-column">
        <img
          class="icon-img"
          src="../../../assets/icons/icon-happy.png"
          alt="bem satisfeito"
        />
        <p>Sua Satisfação é nossa prioridade!</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.como-funciona {
  background-color: #8aae92;
  padding-bottom: 2em;
}

.titulo-centralizado {
  padding: 2em 0em;
  text-align: center;
  color: #000000;
  font-size: 36px;
}

.container-line {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}

.container-column {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.container-column p {
  margin: 1em 1em 2em 1em;
  text-align: center;
  width: auto;
  font-size: 18px;
}

.icon-img {
  width: 40%;
}

#icon-truck {
  width: 60%;
}

@media screen and (max-width: 589px) {
  .container-line {
    width: 100%;
    flex-flow: column;
    align-items: center;
  }

  .icon-img {
    width: 15%;
  }

  #icon-truck {
    width: 20%;
  }

  .container-column p {
    margin: 1em 1em 3em 1em;
  }
}
</style>
