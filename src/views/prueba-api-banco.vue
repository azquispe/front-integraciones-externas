<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="nroSolicitud"
            outlined
            dense
            label="Ingrese Nro de Solicitud"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-chip
            class="ma-2"
            color="primary"
            text-color="white"
            @click="clickObtenerDatosFinancieros()"
          >
            Buscar Datos
          </v-chip>
        </v-col>
      </v-row>
      <v-row>
        
      </v-row>
    </v-container>

    <v-expansion-panels  multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>Lote de Usuarios</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container> <datosFinancierosComponent/></datosFinancierosComponent> </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Lote de Archivos</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container> asdsas </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>

import {  mapActions, mapMutations } from "vuex";
import datosFinancierosComponent from '@/components/TableDatosFinancierosComponent.vue'
export default {
  components:{
    datosFinancierosComponent
  },
  data() {
    return {
      nroSolicitud: 26655,
      lstDatosFinancieros: [],
    };
  },
    
  methods: {
     ...mapActions("api_banco", [
      "obtenerDatosFinancieros"
    ]),
    ...mapMutations("api_banco",[
      "setDatosFinancieros"
    ]),

    async clickObtenerDatosFinancieros() {
      this.setDatosFinancieros({});
      this.obtenerDatosFinancieros(this.nroSolicitud);


         /* const url =  "https://msganaseguros.dev.bg.com.bo/ganaseguros/v1/datos-financieros/obtener?numerosolicitud=26655";
          await Vue.axios.get(url, {
            auth: {
              username: "TOP1",
              password: "SYSTEMS1",
            },
            headers: {
              "Topaz-User": "TOP1",
              "Topaz-Branch": "701",
              "Topaz-Company": "1",
              "Topaz-Channel": "1",
            },
          });*/


    },
  },
};
</script>