<template>
  <v-app>
    <v-dialog v-model="getDialogProgress.mostrar" persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          {{ getDialogProgress.sms }}
          <v-progress-linear indeterminate color="white" class="mb-0">
          </v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <!-- <v-list-item>

          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>-->

        <v-list-group :value="true" prepend-icon="mdi-cloud-outline">
          <template v-slot:activator>
            <v-list-item-title
              >Integraciones<br />
              Banco</v-list-item-title
            >
          </template>

          <v-list-group :value="true" no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Consultas Generales</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item link :to="{ name: 'pruebaApisMultiple' }">
              <span class="caption" v-text="'Consultas Múltiples'"></span>
            </v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Consultas Individuales</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item link :to="{ name: 'pruebaApiDatosPersona' }">
              <span class="caption" v-text="'Datos Persona'"></span>
            </v-list-item>
            <v-list-item link :to="{ name: 'pruebaApiDatosCuenta' }">
              <span class="caption" v-text="'Datos Cuenta'"></span>
            </v-list-item>
            <v-list-item link :to="{ name: 'pruebaApiListaNegra' }">
              <span class="caption" v-text="'Listas Negras'"></span>
            </v-list-item>
            <v-list-item link :to="{ name: 'pruebaApiDatosFinancieros' }">
              <span class="caption" v-text="'Datos Financiero'"></span>
            </v-list-item>
            <v-list-item link :to="{ name: 'pruebaApiCumulo' }">
              <span class="caption" v-text="'Cúmulo'"></span>
            </v-list-item>
            <v-list-item link :to="{ name: 'pruebaApiDatosLinea' }">
              <span class="caption" v-text="'Datos Línea'"></span>
            </v-list-item>
          </v-list-group>
        </v-list-group>

        <v-list-group :value="true" prepend-icon="mdi-cloud-outline">
          <template v-slot:activator>
            <v-list-item-title
              >Integraciones<br />
              Ganatech</v-list-item-title
            >
          </template>
          <v-list-item link :to="{ name: 'pruebaApiConsultaSegip' }">
            <v-list-item-title
              class="pl-12"
              v-text="'Segip'"
            ></v-list-item-title>
          </v-list-item>
        </v-list-group>
    <!--<v-list-group :value="true" prepend-icon="mdi-cloud-outline">
          <template v-slot:activator>
            <v-list-item-title
              >Integraciones<br />
              Ganaseguros</v-list-item-title
            >
          </template>
          <v-list-item link :to="{ name: 'formAviso' }">
            <v-list-item-title
              class="pl-12"
              v-text="'Registrar Aviso'"
            ></v-list-item-title>
          </v-list-item>
          <v-list-item link :to="{ name: 'formOferta' }">
            <v-list-item-title
              class="pl-12"
              v-text="'Registrar Oferta'"
            ></v-list-item-title>
          </v-list-item>
        </v-list-group>-->
      </v-list>
    </v-navigation-drawer>

    <notifications position="bottom right" />
    <v-app-bar
      dense
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
    >
      <v-app-bar-nav-icon
        dark
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <!--<v-img alt="Vuetify Logo" class="shrink mr-2" contain src="https://prodbgwebportal.blob.core.windows.net/assets/logo-banco-ganadero-verde.png" transition="scale-transition" width="200" />-->
        <img src="./assets/logo_ganaseguros3.jpg" height="40" width="200" />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main style="background-color: #eceff1">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",

  data: () => ({
    drawer: null,
  }),
  computed: {
    ...mapGetters("utils", ["getDialogProgress"]),
  },
  methods: {},
};
</script>
<style scoped>
</style>
