<template>
  <div class="div-input">
    <form class="form-busca">
      <input type="text" placeholder="Procurar produtos..." /><button
        type="submit"
        class="btn-procurar"
      >
        Buscar
      </button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.div-input {
  width: 70%;
}

@import url("https://fonts.googleapis.com/css2?family=Tillana:wght@500&display=swap");
.form-busca {
  margin-left: 2em;
}

input {
  font-family: "Tillana", Arial, Helvetica, sans-serif;
  margin: 1em 0;
  padding: 0.5em 0.5em;
  font-size: 16px;
  border-color: #8aae92;
  border-radius: 5px;
  border-style: solid;
  width: 60%;
}

.btn-procurar {
  font-family: "Tillana", Arial, Helvetica, sans-serif;
  width: 15%;
  margin: 1em 0;
  padding: 0.6em 0em;
  flex-grow: 0;
  background-color: #8aae92;
  color: #ffffff;
  font-size: 16px;
  border-style: solid;
  border-color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
}

@media screen and (min-width: 1200px) {
  .form-busca {
    margin-left: 5em;
  }
}

@media screen and (max-width: 871px) {
  .div-input {
    width: 90%;
  }
  input {
    margin: 2em 0;
    width: 70%;
  }

  .btn-procurar {
    width: 22%;
  }
}
</style>
