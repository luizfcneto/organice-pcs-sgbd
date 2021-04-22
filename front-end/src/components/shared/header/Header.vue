<template>
  <div class="header">
    <div class="container-header">
      <a href="/" target="_self">
        <img class="logo" :src="logo.url" :alt="logo.alt" />
      </a>
      <a class="btn-minha-conta" href="/cadastro"> Minha Conta </a>
    </div>
  </div>
</template>

<script>
import logo from "../../../assets/imgs/logo-header.png";

export default {
  data() {
    return {
      logo: {
        url: logo,
        alt: "logo"
      }
    };
  }
};
</script>

<style scoped>
.header {
  background-color: #f4f7f7;
}

.btn-minha-conta {
  background-color: #8aae92;
  padding: 1em;
  color: #f4f7f7;
  text-decoration: none;
  border-radius: 10px;
  margin-left: 1em;
}

.container-header {
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.logo {
  width: 15em;
}
</style>
