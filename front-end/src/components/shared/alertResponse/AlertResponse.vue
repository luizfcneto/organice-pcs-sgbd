<template>
  <p class="alert-response" :class="status">{{ mensagem }}</p>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      required: true
    },
    mensagem: {
      trype: String,
      required: true
    }
  }
};
</script>

<style scoped>
.alert-response {
  width: 25%;
  padding: 0.5em 0.7em;
  margin: 2em auto;
  font-size: 16px;
  border-style: solid;
  border-width: 3px;
  border-color: #000000;
  border-radius: 5px;
  text-align: center;
}

.sucesso {
  border-color: #596c68;
  background-color: #95a792;
  font-weight: bold;
  color: #ffffff;
}

.falha {
  border-color: #ff6701;
  background-color: #da7f8f;
  color: #000000;
  font-weight: bold;
}
</style>
