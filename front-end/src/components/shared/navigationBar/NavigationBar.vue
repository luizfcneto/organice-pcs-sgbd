<template>
  <div class="nav-list">
    <ul class="container-list">
      <li class="element-link" v-for="(nav, index) of navs" :key="index">
        <a class="nav-link" :href="nav.link" target="_self"> {{ nav.name }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        { link: "#", name: "Legumes" },
        { link: "#", name: "Nossos Produtos" },
        { link: "#", name: "Marcenaria" },
        { link: "#", name: "Verduras" },
        { link: "#", name: "Cestas Prontas" },
        { link: "#", name: "Frutas" }
      ]
    };
  }
};
</script>

<style scoped>
.nav-list {
  background-color: #8aae92;
}

.container-list {
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.element-link {
  width: auto;
  margin: 1em 0em;
  text-align: center;
}

.nav-link {
  text-decoration: none;
  color: #ffffff;
  padding: 0.7em 0.5em;
}

.nav-link:hover {
  background-color: #596c68;
}

@media screen and (min-width: 740px) and (max-width: 1010px) {
  .container-list {
    width: 80%;
  }
}

@media screen and (min-width: 590px) and (max-width: 740px) {
  .container-list {
    width: 100%;
  }
}

@media screen and (max-width: 589px) {
  .container-list {
    flex-flow: column;
  }

  .element-link {
    width: 100%;
    margin: 1em 0;
  }

  .nav-link {
    padding-right: 5em;
    padding-left: 5em;
  }
}
</style>
