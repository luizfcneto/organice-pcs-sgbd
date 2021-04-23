<template>
  <div class="aside-bar">
    <ul v-for="(categoria, index) of categorias" :key="index">
      <li>
        <a href="#" target="_self"> {{ categoria.nome }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["categorias"]
};
</script>

<style scoped>
.aside-bar {
  width: 25%;
}

li {
  margin: 0 1em;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-color: #8aae92;
}

a {
  text-decoration: none;
  color: #000000;
  font-size: 18px;
  padding: 1em;
  display: block;
}

a:hover {
  color: #ffffff;
  background-color: #8aae92;
}

ul:last-child {
  margin-bottom: 2em;
}

@media screen and (min-width: 1200px) {
  .aside-bar {
    width: 15%;
  }
}

@media screen and (max-width: 871px) {
  .aside-bar {
    width: 30%;
  }
}
</style>
