import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/facaseucadastro',
    name: 'facaseucadastro',
    component: () => import(/* webpackChunkName: "contato" */ '../views/CadastroView.vue')
  },
  {
    path: '/caneta',
    name: 'caneta',
    component: () => import(/* webpackChunkName: "contato" */ '../views/CanetaView.vue')
  },
  {
    path: '/lapis',
    name: 'lapis',
    component: () => import(/* webpackChunkName: "contato" */ '../views/LapisView.vue')
  },
  {
    path: '/caderno',
    name: 'caderno',
    component: () => import(/* webpackChunkName: "contato" */ '../views/CadernosView.vue')
  },
  {
    path: '/portacaneta',
    name: 'portacaneta',
    component: () => import(/* webpackChunkName: "contato" */ '../views/PortaCanetaView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "contato" */ '../views/LoginView.vue')
  },
  {
    path: '/detalheproduto/:id',
    name: 'detalheproduto',
    component: () => import(/* webpackChunkName: "contato" */ '../views/DetalheView.vue')
  },
  {
    path: '/carrinho/:id',
    name: 'carrinho',
    component: () => import(/* webpackChunkName: "contato" */ '../views/CarrinhoView.vue')
    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
