import Home from "./components/pages/home/Home.vue";
import Cadastro from "./components/pages/cadastro/Cadastro.vue";
import NossosProdutos from "./components/pages/nossosProdutos/NossosProdutos.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/cadastro", component: Cadastro },
  { path: "/nossos-produtos", component: NossosProdutos }
];
