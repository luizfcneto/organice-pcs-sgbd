<template>
  <button :type="type" :class="setBtnClass" class="btn">
    {{ valor }}
  </button>
</template>

<script>
export default {
  props: {
    type: {
      required: true,
      type: String
    },
    estilo: String,
    valor: {
      required: true,
      type: String
    }
  },

  computed: {
    setBtnClass() {
      return this.estilo;
    }
  },

  methods: {
    customFuction() {
      // this.$emit("onSubmit", "value");
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Tillana:wght@500&display=swap");
.btn {
  margin: 1.5em;
  padding: 0.7em;
  font-size: 16px;
  font-family: "Tillana", Arial, Helvetica, sans-serif;
  border-style: solid;
  border-color: #ffffff;
  border-radius: 10px;
  color: #000000;
}

.btn:hover {
  background-color: #8aae92;
  color: #ffffff;
  cursor: pointer;
}

.btn-sm {
  margin: 1.5em auto;
  padding: 0.3em 2em;
}

.btn-sm:hover {
  background-color: #8aae92;
  color: #ffffff;
  cursor: pointer;
}

.btn-enviar-msg {
  background-color: #c4e3cb;
  border-color: #ffffff;
  color: #ffffff;
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
  cursor: pointer;
  width: 66%;
}

.btn-enviar-msg:hover {
  background-color: #8aae92;
}

.btn-form {
  width: 20%;
  margin: 1.5em;
  padding: 0.7em 0em;
  flex-grow: 0;
  background-color: #8aae92;
  color: #ffffff;
  font-size: 16px;
  border-style: solid;
  border-color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
}

.btn-form:hover {
  background-color: #6b8a72;
}

.cancelar {
  background-color: #f05945;
}

.cancelar:hover {
  background-color: #af4436;
}

@media screen and (min-width: 1200px) {
  .btn-sm {
    padding: 0.1em 2em;
  }

  .btn-enviar-msg {
    width: 50%;
  }

  .btn-form {
    width: 20%;
    padding: 0.5em 0em;
  }
}

@media screen and (max-width: 871px) {
  .btn-form {
    width: 30%;
    padding: 0.5em 0em;
  }
}

@media screen and (max-width: 830px) {
  .btn-sm {
    padding: 0.4em 1.5em;
  }

  .btn-enviar-msg {
    width: 60%;
  }
}
</style>
