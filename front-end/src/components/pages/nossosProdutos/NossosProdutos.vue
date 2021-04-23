<template>
  <div class="nossos-produtos">
    <Header />
    <NavigationBar />
    <div class="header-busca">
      <h1 class="titulo-esquerda">Nossos Produtos:</h1>
      <Busca />
    </div>

    <main>
      <AsideBarCategorias :categorias="categorias" />
      <ListaProdutos />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../../shared/header/Header.vue";
import NavigationBar from "../../shared/navigationBar/NavigationBar.vue";
import Busca from "../../shared/busca/Busca.vue";
import ListaProdutos from "../../shared/listaProdutos/ListaProdutos.vue";
import AsideCategorias from "../../shared/asideCategorias/AsideCategorias.vue";
import Footer from "../../shared/footer/Footer.vue";

export default {
  components: {
    Header,
    NavigationBar,
    Busca,
    AsideBarCategorias: AsideCategorias,
    ListaProdutos,
    Footer
  },

  data() {
    return {
      categorias: [
        {
          nome: "Legumes",
          cor: ""
        },
        {
          nome: "Frutas",
          cor: ""
        },
        {
          nome: "Hortaliças",
          cor: ""
        },
        {
          nome: "Mercearia",
          cor: ""
        },
        {
          nome: "Proteínas",
          cor: ""
        },
        {
          nome: "Cereais",
          cor: ""
        },
        {
          nome: "Cestas Prontas",
          cor: ""
        }
      ]
    };
  }
};
</script>

<style scoped>
.header-busca {
  width: 80%;
  margin: 2em auto;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
}

.titulo-esquerda {
  font-size: 36px;
  width: 30%;
}

main {
  width: 100%;
  align-items: flex-start;
  display: flex;
  margin: 2em 0;
}

@media screen and (min-width: 1200px) {
  .header-busca {
    width: 60%;
  }
}

@media screen and (max-width: 871px) {
  .header-busca {
    flex-flow: column;
    width: 90%;
  }

  .titulo-esquerda {
    width: 90%;
    text-align: center;
  }
}
</style>
