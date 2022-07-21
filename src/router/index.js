import Vue from 'vue'
import VueRouter from 'vue-router'
//import { VueRouter,createRouter, createWebHistory } from 'vue-router'


Vue.use(VueRouter)

const routes = [
  
  /*{
    path: '/',
    name: 'inicio',
    component: () => import('../views/Inicio.vue')
  },*/
  {
    path: '/prueba-apis-multiple',
    name: 'pruebaApisMultiple',
    component: () => import('../views/vistas-banco/PruebaApisMultiple.vue')
  },
  {
    path: '/prueba-api-datos-persona',
    name: 'pruebaApiDatosPersona',
    component: () => import('../views/vistas-banco/PruebaApiDatosPersona.vue')
  },
  {
    path: '/prueba-api-cumulo',
    name: 'pruebaApiCumulo',
    component: () => import('../views/vistas-banco/PruebaApiCumulo.vue')
  },
  
  {
    path: '/prueba-api-listanegra',
    name: 'pruebaApiListaNegra',
    component: () => import('../views/vistas-banco/PruebaApiListaNegra.vue')
  },
  {
    path: '/prueba-api-datos-financieros',
    name: 'pruebaApiDatosFinancieros',
    component: () => import('../views/vistas-banco/PruebaApiDatosFinancieros.vue')

  },
  {
    path: '/prueba-api-datos-cuenta',
    name: 'pruebaApiDatosCuenta',
    component: () => import('../views/vistas-banco/PruebaApiDatosCuenta.vue')

  },
  {
    path: '/prueba-api-datos-linea',
    name: 'pruebaApiDatosLinea',
    component: () => import('../views/vistas-banco/PruebaApiDatosLinea.vue')

  }
  ,
  {
    path: '/prueba-api-consulta-segip',
    name: 'pruebaApiConsultaSegip',
    component: () => import('../views/vistas-banco/PruebaApiConsultaSegip.vue')

  }



  
  
  
  



  
]

const router = new VueRouter({
  mode: 'history',
  //history: createWebHistory(),
  base: process.env.BASE_URL,
  routes
})

export default router
