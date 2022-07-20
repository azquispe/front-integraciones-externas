<template>
  <div>
    <v-row align="center">
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          v-model="vNroSolicitud"
          outlined
          dense
          label="Nro Solicitud"
          hide-details
          type="number"
          clearable
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-chip
          class="ma-2"
          color="primary"
          text-color="white"
          @click="clickObtenerDatosFinanciero()"
        >
          Verificar
        </v-chip>
      </v-col>
    </v-row>
   
    <datosFinancierosMultipleComponent :objDatosFinancieros="objDatosFinancieros"></datosFinancierosMultipleComponent>
    <datosPersonaMultipleComponent :lstDeudores = "objDatosFinancieros.deudores" ></datosPersonaMultipleComponent>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import datosFinancierosMultipleComponent from "@/components/componentes-banco/DatosFinancierosMultipleComponent.vue";
import datosPersonaMultipleComponent from "@/components/componentes-banco/DatosPersonaMultipleComponent.vue";
export default {
  components: {
    datosFinancierosMultipleComponent,
    datosPersonaMultipleComponent,
  },
  data() {
    return {
      vNroSolicitud: 25873,
      objDatosFinancieros:{}
    };
  },
  methods: {
    ...mapMutations("api_banco", ["setDialogProgress"]),
    ...mapActions("api_banco", ["obtenerDatosFinancieros"]),
    async clickObtenerDatosFinanciero() {
      this.objDatosFinancieros={};
      let r = await this.obtenerDatosFinancieros(this.vNroSolicitud);
      this.objDatosFinancieros = r.data;
    },
  },
};
</script>
