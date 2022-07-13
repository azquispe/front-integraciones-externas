<template>
  <v-app>


     <v-navigation-drawer
        dark
        v-model="drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        app
        color="primary"
      >
        <v-list dense>
          <template>
            <v-list-item :to="{ name: 'inicio' }">
              <v-list-item-action>
                <v-icon dark small color="verde"> mdi-home </v-icon>
              </v-list-item-action>
              <v-list-item-title>Inicio</v-list-item-title>
            </v-list-item>
            <v-list-item :to="{ name: 'pruebaApiFinancieroPersonasCumulo' }">
              <v-list-item-action>
                <v-icon dark small color="verde">mdi-send </v-icon>
              </v-list-item-action>
              <v-list-item-title >Datos Financiero,<br> Personas y Cúmulo</v-list-item-title>
            </v-list-item>
              <v-list-item :to="{ name: 'pruebaApiDatosPersona' }">
              <v-list-item-action>
                <v-icon dark small color="verde">mdi-send  </v-icon>
              </v-list-item-action>
              <v-list-item-title>Obtiene Datos Persona</v-list-item-title>
            </v-list-item>
            <v-list-item :to="{ name: 'negocioLugares' }">
              <v-list-item-action>
                <v-icon dark small color="verde"> mdi-send  </v-icon>
              </v-list-item-action>
              <v-list-item-title> Obtiene Datos Cuentas</v-list-item-title>
            </v-list-item>
               <v-list-item :to="{ name: 'negocioLugares' }">
              <v-list-item-action>
                <v-icon dark small color="verde"> mdi-send  </v-icon>
              </v-list-item-action>
              <v-list-item-title> Valida Listas Negras</v-list-item-title>
            </v-list-item>
               <v-list-item :to="{ name: 'negocioLugares' }">
              <v-list-item-action>
                <v-icon dark small color="verde"> mdi-send  </v-icon>
              </v-list-item-action>
              <v-list-item-title> Obtiene Datos Financiero</v-list-item-title>
            </v-list-item>
               <v-list-item :to="{ name: 'negocioLugares' }">
              <v-list-item-action>
                <v-icon dark small color="verde"> mdi-send  </v-icon>
              </v-list-item-action>
              <v-list-item-title> Obtiene Cúmulo de Persona</v-list-item-title>
            </v-list-item>

          </template>
        </v-list>
      </v-navigation-drawer>

    <notifications position="bottom right" />
    <v-app-bar
  

         dense
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        color="primary"
        dark

    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://prodbgwebportal.blob.core.windows.net/assets/logo-banco-ganadero-verde.png"
          transition="scale-transition"
          width="200"
        />

      
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Cerrar Sessión</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
     drawer: null,
  }),
};
</script>

