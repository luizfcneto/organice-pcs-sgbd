import Home from "./components/pages/home/Home.vue";
import Cadastro from "./components/pages/cadastro/Cadastro.vue";
import NossosProdutos from "./components/pages/nossosProdutos/NossosProdutos.vue";
import Perfil from "./components/pages/perfil/Perfil.vue";
import MinhaCesta from "./components/pages/minhaCesta/MinhaCesta.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/cadastro", component: Cadastro },
  { path: "/nossos-produtos", component: NossosProdutos },
  { path: "/perfil", component: Perfil },
  { path: "/minha-cesta", component: MinhaCesta }
];
