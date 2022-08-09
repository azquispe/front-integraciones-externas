<template>
  <div>
    <v-card elevation="4" class="ma-5">
      <v-toolbar dense flat>
        <v-toolbar-title>
          <strong class="verde_53A808--text">
            INFORMACIÓN DETALLADA DE LOS DEUDORES</strong
          ></v-toolbar-title
        >
      </v-toolbar>
      <div v-if="smsError != ''">
        <v-alert dense text type="error">
          {{ smsError }}
        </v-alert>
      </div>
      <div
        v-for="objDatosTodosPersona in lstDatosPersonas"
        :key="objDatosTodosPersona"
      >
        <v-divider></v-divider>
        <div style="border-top: 5px solid #53A808"></div>


        <consultaMultipleDetComponent
          :objDatosTodosPersona="objDatosTodosPersona"
        ></consultaMultipleDetComponent>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import consultaMultipleDetComponent from "@/components/componentes-banco/ConsultaMultipleDetComponent.vue";

export default {
  props: ["lstDeudores"],
  components: {
    consultaMultipleDetComponent,
  },
  data() {
    return {
      lstDatosPersonas: [],
      servicios: "",
      smsError: "",
    };
  },
  watch: {
    lstDeudores(newLstDeudores, oldLstDeudores) {
      this.lstDatosPersonas = [];
      this.obtenerPersonas(newLstDeudores);
    },
  },

  methods: {
    ...mapMutations("utils", ["setDialogProgress"]),
    ...mapActions("api_banco", [
      "obtenerDatosPersona",
      "obtieneDatosCuenta",
      "verificarListaNegra",
    ]),
    async obtenerPersonas(listaDeudores) {
      this.smsError="";
      try {
        listaDeudores.forEach(async (deudores) => {
         
          let obj = {
            tipoDocumento: deudores.tipoIdentificacion,
            extension: deudores.extensionIdentificacion,
            numeroDocumento: deudores.numerodeIdentifiacion,
            extDuplicado: deudores.complementoIdentificacion.trim()
          };

          let tipoDoc = deudores.tipoIdentificacion;
          let nroDoc = deudores.numerodeIdentifiacion;
          let extencion = deudores.extensionIdentificacion;
          let tipoDeDeudor = deudores.tipoDeDeudor;
          this.setDialogProgress({
            mostrar: true,
            sms: "Verificando Datos Personas, espere...",
          });
          this.servicios = "Obtener Datos Personas";
          let r = await this.obtenerDatosPersona(obj);
          let objDatosTodosPersona = r.data;
          objDatosTodosPersona.tipoDoc = tipoDoc;
          objDatosTodosPersona.nroDoc = nroDoc;
          objDatosTodosPersona.complementoIdentificacion = deudores.complementoIdentificacion.trim();
          objDatosTodosPersona.extencion = extencion;
          objDatosTodosPersona.tipoDeDeudor = tipoDeDeudor;
          
          this.setDialogProgress({
            mostrar: true,
            sms: "Verificando Datos Cuenta, espere...",
          });
          this.servicios = "Obtener Datos Cuenta";
          let rr = await this.obtieneDatosCuenta(obj);
          objDatosTodosPersona.lstDatosCuenta = rr.data;

          let nombreCompleto =
            objDatosTodosPersona.nombre +
            " " +
            objDatosTodosPersona.apellidoPaterno +
            " " +
            objDatosTodosPersona.apellidoMaterno;
          this.setDialogProgress({
            mostrar: true,
            sms: "Verificando Listas Negras, espere...",
          });
          this.servicios = "Obtener Lista Negra";
          let respListaNegra = await this.verificarListaNegra(nombreCompleto);
          objDatosTodosPersona.objListaNegra = respListaNegra.data;
          objDatosTodosPersona.objListaNegra.nombreCompleto = nombreCompleto;

          this.setDialogProgress({ mostrar: false, sms: "" });
          this.lstDatosPersonas.push(objDatosTodosPersona);
        });
      } catch (er) {
        this.smsError =
          "Error en al consumir los servicios: " +
          this.servicios +
          " para el deudor con nro de identificación : " +
          this.deudores.tipoIdentificacion +
          " " +
          deudores.numerodeIdentifiacion +
          " " +
          deudores.extensionIdentificacion;
          
        this.setDialogProgress({ mostrar: false, sms: "" });
      }
    },
  },
};
</script>
