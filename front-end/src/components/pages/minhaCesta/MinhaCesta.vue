<template>
  <div class="">
    <h2 class="titulo-centralizado">Minha Cesta:</h2>
    <ListaProdutosCesta class="listaProdutos" :precoTotal="precoTotal" />

    <div class="container-calcula-cep">
      <input type="text" class="input-cep" placeholder="CEP" />
      <Botao type="submit" estilo="" valor="Calcular Frete" />
      <p>Preço Total:</p>
    </div>
    <div class="container-btn-compra">
      <Botao
        type="submit"
        estilo=""
        valor="Efetuar Compra"
        @click.prevent="efetuaCompra($event)"
      />
    </div>
  </div>
</template>

<script>
import ListaProdutosCesta from "../../shared/listaProdutosCesta/ListaProdutosCesta.vue";
import Botao from "../../shared/botao/Botao.vue";

export default {
  components: {
    ListaProdutosCesta,
    Botao
  },

  data() {
    return {
      precoTotal: ""
    };
  },

  methods: {
    efetuaCompra(event) {
      console.log("Efetuar Compra");
    }
  }
};
</script>

<style scoped>
.titulo-centralizado {
  margin: 1em 0;
}

.listaProdutos {
  width: 80%;
  margin: 1em auto;
}

.input-cep {
  font-size: 16px;
  padding: 0.7em 0;
  margin-right: -1.5em;
}

.container-calcula-cep {
  width: 80%;
  display: flex;
  margin: 0 auto;
  align-items: center;
}

.container-btn-compra {
  display: flex;
  width: 70%;
  margin: 0 auto;
  justify-content: flex-start;
}
</style>
