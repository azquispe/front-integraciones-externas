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
    </v-container>
    <div class="pa-4">

      <v-card class="mx-auto" max-width="95%">
        <v-toolbar dense flat>
          <v-toolbar-title>Datos Financieros</v-toolbar-title>
        </v-toolbar>
        <div class="pa-5">
          <datosFinancierosComponent />
        </div>
      </v-card>

      
    </div>
    <div class="pa-4">
        <v-card class="mx-auto" max-width="95%">
        <v-toolbar dense flat>
          <v-toolbar-title>Datos de los Deudores</v-toolbar-title>
        </v-toolbar>
        <div class="pa-5">
          <tableDatosPersonaComponent />
        </div>
      </v-card>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
import datosFinancierosComponent from "@/components/TableDatosFinancierosComponent.vue";
import tableDatosPersonaComponent from "@/components/TableDatosPersonaComponent.vue";
export default {
  components: {
    datosFinancierosComponent,
    tableDatosPersonaComponent,
  },
  data() {
    return {
      nroSolicitud: 25873,
      lstDatosFinancieros: [],
    };
  },

  methods: {
    ...mapActions("api_banco", [
      "obtenerDatosFinancieros",
      "obtenerDatosPersona",
    ]),
    ...mapMutations("api_banco", ["setDatosPersonas"]),

    async clickObtenerDatosFinancieros() {
      let r = await this.obtenerDatosFinancieros(this.nroSolicitud);

      console.log("ver pruebas");
      console.log(r);

      let lstDeudores = [];

      for (const deudor of r[0].deudores) {
        console.log("holas");
        console.log("deudor:  " + deudor);

        let rr = await this.obtenerDatosPersona({
          tipoDocumento: deudor.tipoIdentificacion,
          extension: deudor.extensionIdentificacion,
          numeroDocumento: deudor.numerodeIdentifiacion,
        });
        lstDeudores.push(rr.data);
      }

      console.log("respuesta ");
      console.log(lstDeudores);
      this.setDatosPersonas(lstDeudores);
    },
  },
};
</script>