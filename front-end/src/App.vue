<template>
  <div id="app">
    <Header :auth="false" :user="user" />
    <NavigationBar />
    <router-view> </router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/shared/header/Header.vue";
import NavigationBar from "./components/shared/navigationBar/NavigationBar.vue";
import Footer from "./components/shared/footer/Footer.vue";

export default {
  name: "app",
  data() {
    return {
      user: "Exemplo"
    };
  },
  components: {
    Header,
    NavigationBar,
    Footer
  }
};
</script>

<style>
/* Reset CSS */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
b,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* font Tillana */
@import url("https://fonts.googleapis.com/css2?family=Tillana:wght@500&display=swap");

#app {
  font-family: "Tillana", Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.titulo-centralizado {
  text-align: center;
  font-size: 36px;
}
</style>
