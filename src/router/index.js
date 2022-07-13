import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'inicio',
    component: () => import('../views/Inicio.vue')
  },
  {
    path: '/prueba-api-financiero-personas-cumulo',
    name: 'pruebaApiFinancieroPersonasCumulo',
    component: () => import('../views/PruebaApiDatosFinancierosPersonasCumulo.vue')
  },
  {
    path: '/prueba-api-datos-persona',
    name: 'pruebaApiDatosPersona',
    component: () => import('../views/PruebaApiDatosPersona.vue')
  }


  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
