<template>
  <ul class="container-list">
    <li
      class="container-element"
      v-for="(element, index) of listaProdutos"
      :key="index"
    >
      <img :src="element.imgSrc" alt="" class="produto-img" />
      <p>{{ element.description }}</p>
      <div class="quantidade-produto">
        <img
          :src="IconeMenos"
          class="icone-menos"
          @click="element.quantity > 0 ? element.quantity-- : element.quantity"
        />
        <span class="quantidade"> {{ element.quantity }} </span>
        <img :src="IconeMais" class="icone-mais" @click="element.quantity++" />
      </div>
      <p>
        Preço: {{ (parseFloat(element.price) * element.quantity).toFixed(2) }}
      </p>
      <img
        :src="IconeLixeira"
        alt=""
        class="icone-lixeira"
        @click.prevent="excluirProduto()"
      />
    </li>
  </ul>
</template>

<script>
import IconeMais from "../../../assets/icons/plus-icon.png";
import IconeMenos from "../../../assets/icons/minus-icon.png";
import IconeLixeira from "../../../assets/icons/trash-icon.png";
import srcCenoura from "../../../assets/figures/cenoura.jpg";
import srcBatata from "../../../assets/figures/batata.jpg";
import srcMercearia from "../../../assets/figures/figure00.jpg";
import { listBasket } from "../../pages/minhaCesta/mock/basketsLists.js";

export default {
  components: {
    listBasket
  },

  props: ["precoTotal"],

  data() {
    return {
      IconeMenos,
      IconeMais,
      IconeLixeira,
      srcCenoura,
      srcBatata,
      srcMercearia,
      listaProdutos: listBasket
    };
  },

  methods: {
    calculaPrecoTotal() {
      let total = this.listaProdutos.reduce(element => {
        return (parseFloat(element.price) * element.quantity).toFixed(2);
      }, 0.0);
      this.precoTotal = total;
      console.log(total);
    },

    excluirProduto() {
      console.log("Entrou aqui");
    }
  }
};
</script>

<style scoped>
ul .container-list {
  list-style: none;
}

.container-list {
  display: flex;
  flex-flow: column;
}

.container-element {
  display: flex;
  width: 100%;
  margin-bottom: 1em;
  border-style: solid;
  border-color: #000000;
  border-width: 1px;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
}

.produto-img {
  width: 20%;
  margin-right: 1em;
  height: max-content;
  border-radius: 5px;
}

.quantidade-produto {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 20%;
  margin: 0 0.5em;
}

.icone-menos {
  width: 10%;
}

.icone-menos:hover {
  cursor: pointer;
}

.icone-mais {
  width: 10%;
}

.icone-mais:hover {
  cursor: pointer;
}

.icone-lixeira {
  width: 3%;
  margin: 0 2em;
  padding: 0.5em;
  background-color: #f05945;
  border-radius: 5px;
}

.icone-lixeira:hover {
  cursor: pointer;
}
</style>
