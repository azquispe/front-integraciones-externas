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
  },
  {
    path: '/prueba-api-cumulo',
    name: 'pruebaApiCumulo',
    component: () => import('../views/PruebaApiCumulo.vue')
  },
  
  {
    path: '/prueba-api-listanegra',
    name: 'pruebaApiListaNegra',
    component: () => import('../views/PruebaApiListaNegra.vue')
  },
  {
    path: '/prueba-api-datos-financieros',
    name: 'pruebaApiDatosFinancieros',
    component: () => import('../views/PruebaApiDatosFinancieros.vue')

  },
  {
    path: '/prueba-api-datos-cuenta',
    name: 'pruebaApiDatosCuenta',
    component: () => import('../views/PruebaApiDatosCuenta.vue')

  }


  
  



  
]

const router = new VueRouter({
  //mode: 'history',
  history: createMemoryHistory(),
  base: process.env.BASE_URL,
  routes
})

export default router
