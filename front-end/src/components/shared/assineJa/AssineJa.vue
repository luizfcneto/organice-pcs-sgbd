<template>
  <section id="assinatura" class="assine-section">
    <div class="container-assine">
      <img
        class="figure-assine"
        src="../../../assets/figures/figure02.jpg"
        alt="legumes de boa aparencia"
      />
      <div class="container-p-assine">
        <p class="assine-p">{{ p1 }}</p>

        <p class="assine-p">{{ p2 }}</p>
      </div>
    </div>

    <div class="container-link-assine">
      <router-link class="link-assine" to="#"> Assine já! </router-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      p1: "Receba sua cesta toda semana, com produtos orgânicos selecionados.",
      p2: "Frutas, Legumes e Hortaliças frescas."
    };
  }
};
</script>

<style scoped>
.assine-section {
  margin: 3em 0em 0em 0em;
}

.container-assine {
  display: flex;
  width: 60%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
}

.figure-assine {
  width: 50%;
  height: 50%;
  margin-right: 2em;
  flex-grow: 2;
}

.container-p-assine {
  width: 30%;
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  height: 10em;
  justify-content: space-around;
}

.container-link-assine {
  display: flex;
  width: 70%;
  margin: 0 auto;
  justify-content: space-around;
}

a {
  text-decoration: none;
}

@import url("https://fonts.googleapis.com/css2?family=Tillana:wght@500&display=swap");
.link-assine {
  margin: 3em 0em;
  padding: 0.5em 2em;
  background-color: #8aae92;
  color: #ffffff;
  border-color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  font-family: "Tillana", Arial, Helvetica, sans-serif;
}

@media screen and (min-width: 1120px) {
}

@media screen and (min-width: 1011px) {
  .container-assine {
    flex-grow: 0;
  }

  .container-p-assine {
    flex-grow: 1;
  }

  .figure-assine {
    width: 10%;
  }
}

@media screen and (max-width: 589px) {
  .container-assine {
    flex-flow: column;
  }

  .figure-assine {
    width: 100%;
  }

  .container-p-assine {
    width: 100%;
    height: auto;
    justify-content: flex-start;
    margin-top: 1em;
  }

  .assine-p {
    margin-top: 1em;
  }
}
</style>
