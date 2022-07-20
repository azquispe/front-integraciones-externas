<template>
  <div>
    <v-card elevation="4" class="ma-5">
      <v-toolbar dense flat>
        <v-toolbar-title>
          <span class="plomo_868686--text">
            <strong> INFORMACIÓN DETALLADA DE LOS DEUDORES</strong></span
          ></v-toolbar-title
        >
      </v-toolbar>
      <div v-for="objDatosTodosPersona in lstDatosPersonas" :key="objDatosTodosPersona">
        <v-divider></v-divider>
        <div style="border-top: 3px solid #868686"></div>
        <datosPersonaMultipleDetalleComponent
          :objDatosTodosPersona="objDatosTodosPersona"
        ></datosPersonaMultipleDetalleComponent>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import datosPersonaMultipleDetalleComponent from "@/components/componentes-banco/DatosPersonaMultipleDetalleComponent.vue";

export default {
  props: ["lstDeudores"],
  components: {
    datosPersonaMultipleDetalleComponent,
  },
  data() {
    return {
      lstDatosPersonas: [],
    };
  },
  watch: {
    lstDeudores(newLstDeudores, oldLstDeudores) {
      this.lstDatosPersonas = [];
      this.obtenerPersonas(newLstDeudores);
      
    },
  },

  methods: {
    ...mapMutations("api_banco", ["setDialogProgress"]),
    ...mapActions("api_banco", ["obtenerDatosPersona","obtieneDatosCuenta","verificarListaNegra"]),
    async obtenerPersonas(listaDeudores) {
      listaDeudores.forEach(async (deudores) => {
        let obj = {
          tipoDocumento: deudores.tipoIdentificacion,
          extension: deudores.extensionIdentificacion,
          numeroDocumento: deudores.numerodeIdentifiacion,
        };

        let tipoDoc = deudores.tipoIdentificacion;
        let nroDoc = deudores.numerodeIdentifiacion +" " +deudores.extensionIdentificacion;

        let r = await this.obtenerDatosPersona(obj);
        let objDatosTodosPersona = r.data;
        objDatosTodosPersona.tipoDoc = tipoDoc;
        objDatosTodosPersona.nroDoc = nroDoc;

        let rr = await this.obtieneDatosCuenta(obj);
        objDatosTodosPersona.lstDatosCuenta = rr.data;



        let nombreCompleto = objDatosTodosPersona.nombre+" "+objDatosTodosPersona.apellidoPaterno+" "+objDatosTodosPersona.apellidoMaterno;
        let respListaNegra = await this.verificarListaNegra(nombreCompleto);
        objDatosTodosPersona.objListaNegra = respListaNegra.data;
        objDatosTodosPersona.objListaNegra.nombreCompleto = nombreCompleto;


        this.lstDatosPersonas.push(objDatosTodosPersona);

      });
    },
  },
};
</script>
