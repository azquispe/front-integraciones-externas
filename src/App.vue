<template>
  <v-app>
    <v-dialog v-model="getDialogProgress" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Procesando espere...
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-navigation-drawer dark v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app color="primary">
      <v-list dense>
        <template>
          <v-list-item :to="{ name: 'inicio' }">
            <v-list-item-action>
              <v-icon dark small > mdi-home </v-icon>
            </v-list-item-action>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'pruebaApiFinancieroPersonasCumulo' }">
            <v-list-item-action>
              <v-icon dark small >mdi-send </v-icon>
            </v-list-item-action>
            <v-list-item-title>Datos Financiero,<br> Personas y Cúmulo</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'pruebaApiDatosPersona' }">
            <v-list-item-action>
              <v-icon dark small >mdi-send </v-icon>
            </v-list-item-action>
            <v-list-item-title>Obtiene Datos Persona</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'pruebaApiDatosCuenta' }">
            <v-list-item-action>
              <v-icon dark small > mdi-send </v-icon>
            </v-list-item-action>
            <v-list-item-title> Obtiene Datos Cuentas</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'pruebaApiListaNegra' }">
            <v-list-item-action>
              <v-icon dark small > mdi-send </v-icon>
            </v-list-item-action>
            <v-list-item-title> Valida Listas Negras</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'pruebaApiDatosFinancieros' }">
            <v-list-item-action>
              <v-icon dark small > mdi-send </v-icon>
            </v-list-item-action>
            <v-list-item-title> Obtiene Datos Financiero</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'pruebaApiCumulo' }">
            <v-list-item-action>
              <v-icon dark small > mdi-send </v-icon>
            </v-list-item-action>
            <v-list-item-title> Obtiene Cúmulo de Persona</v-list-item-title>
          </v-list-item>

        </template>
      </v-list>
    </v-navigation-drawer>

    <notifications position="bottom right" />
    <v-app-bar dense :clipped-left="$vuetify.breakpoint.lgAndUp" app color="primary">
      <v-app-bar-nav-icon dark @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <!--<v-img alt="Vuetify Logo" class="shrink mr-2" contain src="https://prodbgwebportal.blob.core.windows.net/assets/logo-banco-ganadero-verde.png" transition="scale-transition" width="200" />-->
         <img src="./assets/logo_ganaseguros3.jpg" height="40" width="200" />


      </div>

      <v-spacer></v-spacer>

      <!--<v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Cerrar Sessión</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>-->
    </v-app-bar>

    <v-main  style="background-color: #ECEFF1" >
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'App',

  data: () => ({
    drawer: null,
  }),
  computed: {
    ...mapGetters("api_banco", ["getDialogProgress"]),
  },
  methods: {
  }
};
</script>
<style scoped>
</style>
