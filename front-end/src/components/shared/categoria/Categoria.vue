<template>
  <span class="category-span" :id="cor"> {{ nome }} </span>
</template>

<script>
export default {
  props: ["nome", "cor"],

  methods: {
    setClassColor: function(cor) {
      let categoryEl = document.querySelector(".category-span");
      categoryEl.classList.add(cor);
      console.log(categoryEl);
    }
  }
};
</script>

<style scoped>
.category-span {
  margin: 0.5em 0em;
  padding: 0.3em;
  width: 40%;
  border-style: solid;
  border-color: #000000;
  border-radius: 20px;
  background-color: #616161;
  text-align: center;
  color: #ffffff;
}

#green {
  background-color: #8aae92;
  color: #ffffff;
}

#brown {
  background-color: #616161;
  color: #ffffff;
}

#yellow {
  background-color: #f8c957;
  color: #000000;
}

#blue {
  background-color: #7194d1;
  color: #ffffff;
}
</style>
