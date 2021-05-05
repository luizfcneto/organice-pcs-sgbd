<template>
  <div class="header">
    <div class="container-header">
      <router-link to="/">
        <img class="logo" :src="logo.url" :alt="logo.alt" />
      </router-link>

      <router-link v-if="!auth" class="btn-minha-conta" to="/cadastro">
        Minha Conta
      </router-link>

      <div v-if="auth" class="btn-meu-perfil container-dropdown">
        <div class="dropdown-header">
          {{ user }}
          <img
            class="icon-arrow-down"
            :src="iconArrowDown.url"
            :alt="iconArrowDown.alt"
          />
        </div>

        <div class="dropdown-content">
          <ul>
            <li v-for="(option, index) of optionsDropDown" :key="index">
              <router-link class="nav-link" :to="option.url">
                {{ option.titulo }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../../../assets/imgs/logo-header.png";
import iconArrowDown from "../../../assets/icons/icon-arrow-down.png";

export default {
  props: ["auth", "user"],

  data() {
    return {
      logo: {
        url: logo,
        alt: "logo"
      },
      iconArrowDown: {
        url: iconArrowDown,
        alt: "seta para baixo"
      },

      optionsDropDown: [
        {
          titulo: "Meu Perfil",
          url: "/perfil"
        },
        {
          titulo: "Minha Cesta",
          url: "#"
        },
        {
          titulo: "Sair",
          url: "#"
        }
      ]
    };
  }
};
</script>

<style scoped>
.header {
  background-color: #f4f7f7;
}

.logo {
  width: 15em;
}

.btn-minha-conta {
  background-color: #8aae92;
  padding: 1em;
  color: #f4f7f7;
  text-decoration: none;
  border-radius: 10px;
  margin-left: 1em;
}

.btn-meu-perfil {
  background-color: #8aae92;
  padding: 1em;
  color: #f4f7f7;
  text-decoration: none;
  border-radius: 10px;
  margin-left: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15%;
}

.icon-arrow-down {
  width: 1em;
}

.container-dropdown {
  display: flex;
  width: 15%;
  flex-flow: column;
}

.dropdown-content {
  display: none;
  background-color: #8aae92;
  min-width: 100%;
  padding: 1em;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-style: solid;
  border-width: 3px;
  border-color: #ffffff;
  border-top-style: unset;
}

.container-dropdown:hover .dropdown-content {
  display: block;
  margin-bottom: -11em;
  z-index: 2;
}

.container-dropdown:hover {
  border-style: solid;
  border-width: 3px;
  border-color: #ffffff;
}

.nav-link {
  text-decoration: none;
  color: #ffffff;
  display: block;
  padding: 1em 0em;
  margin: 0 -1em;
  text-align: center;
}

.nav-link:hover {
  margin-left: -1em;
  margin-right: -1em;
  background-color: #596c68;
}

.container-header {
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

@media screen and (min-width: 1200px) {
  .btn-meu-perfil {
    width: 10%;
  }
}

@media screen and (max-width: 871px) {
  .container-header {
    width: 100%;
  }

  .btn-meu-perfil {
    width: 20%;
  }
}
</style>
