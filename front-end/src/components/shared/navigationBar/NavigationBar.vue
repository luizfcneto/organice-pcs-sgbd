<template>
  <div class="nav-list">
    <ul class="container-list">
      <li class="element-link" v-for="(nav, index) of navs" :key="index">
        <router-link class="nav-link" :to="nav.link" v-if="nav.external">
          {{ nav.name }}
        </router-link>
        <a
          class="nav-link"
          :href="nav.link"
          target="_self"
          v-if="nav.external === false"
        >
          {{ nav.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        { link: "/#assinatura", name: "Assinaturas", external: false },
        { link: "/nossos-produtos/", name: "Nossos Produtos", external: true },
        { link: "/#como-funciona", name: "Como Funciona", external: false },
        { link: "/#cestas-prontas", name: "Cestas Prontas", external: false },
        { link: "/#sobre-nos", name: "Sobre Nós", external: false },
        { link: "/#contato", name: "Contato", external: false }
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
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.element-link {
  width: auto;
  text-align: center;
}

.nav-link {
  text-decoration: none;
  color: #ffffff;
  display: block;
  padding: 1em 1em;
}

.nav-link:hover {
  background-color: #596c68;
}

@media screen and (min-width: 740px) and (max-width: 1010px) {
  .container-list {
    width: 100%;
  }
}

@media screen and (min-width: 590px) and (max-width: 740px) {
  .container-list {
    width: 100%;
  }
}

@media screen and (max-width: 589px) {
  .container-list {
    width: 100%;
    flex-flow: column;
  }

  .element-link {
    width: 100%;
    /* margin: 1em 0; */
  }

  .nav-link {
    display: block;
  }
}
</style>
