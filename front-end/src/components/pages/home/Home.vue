<template>
  <div class="">
    <Header />
    <NavigationBar />
    <main>
      <section class="figure-section">
        <div class="container-figure">
          <img
            class="main-figure"
            src="../../../assets/figures/figure01.jpg"
            alt="muitas frutas e legumes organizados em cestas"
          />
        </div>
      </section>

      <AssineJa />
      <ComoFunciona />
      <ListaCesta />
      <SobreNos />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../../shared/header/Header.vue";
import Footer from "../../shared/footer/Footer.vue";
import NavigationBar from "../../shared/navigationBar/NavigationBar.vue";
import AssineJa from "../../shared/assineJa/AssineJa.vue";
import ComoFunciona from "../../shared/comoFunciona/ComoFunciona.vue";
import SobreNos from "../../shared/sobreNos/SobreNos.vue";
import ListaCesta from "../../shared/listaCesta/ListaCesta.vue";

export default {
  components: {
    Header,
    NavigationBar,
    AssineJa,
    ComoFunciona,
    ListaCesta,
    SobreNos,
    Footer
  }
};
</script>

<style scoped>
.main-figure {
  width: 100%;
  height: 50%;
}

@media screen and (min-width: 1120px) {
  .figure-section {
    background-color: #c4e3cb;
    padding: 4em 0em;
  }

  .container-figure {
    width: 70%;
    margin: 0 auto;
  }

  .main-figure {
    height: 40%;
  }
}
</style>
