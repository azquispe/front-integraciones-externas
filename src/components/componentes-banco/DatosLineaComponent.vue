<template>
  <div>
    <v-card elevation="4" class="ma-5">
      <v-toolbar dense flat>
        <v-toolbar-title>
         <span class="verde_53A808--text">
             OBTIENE DATOS LÍNEA</span
          ></v-toolbar-title
        >
      </v-toolbar>
      <div class="pa-5">
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
              @click="clickObtenerDatosLinea()"
            >
              Verificar
            </v-chip>
          </v-col>
        </v-row>
        <v-row v-if="smsError != ''">
          <v-col cols="12">
            <h3>Mensaje de Error</h3>

            <v-alert dense text type="error">
              {{ smsError }}
            </v-alert>
          </v-col>
        </v-row>

        <v-container fluid row v-if="Object.entries(objDatosLinea).length != 0">
          <v-card outlined class="ma-2" max-width="300">
            <v-card-title class="rosa_FFB695--text">DATOS GENERALES</v-card-title>
            <v-card-text>
              <div >
                <span class="font-weight-regular">Tipo de Producto: </span>
                {{ objDatosLinea.tipoproducto }}
              </div>
              <div >
                <span class="font-weight-regular">Moneda Solicitado: </span>
                {{ objDatosLinea.monedasolicitado }}
              </div>
              <div >
                <span class="font-weight-regular">Monto Solicitado: </span>
                {{ objDatosLinea.montosolicitado }}
              </div>
              <div >
                <span class="font-weight-regular">Plazo : </span>
                {{ objDatosLinea.plazo }}
              </div>
              <div >
                <span class="font-weight-regular">Unidad Plazo: </span>
                {{ objDatosLinea.unidadPlazo }}
              </div>
              
            </v-card-text>
          </v-card>
        </v-container>
      </div>
    </v-card>
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      vNroSolicitud: "",
      objDatosLinea: {},
      smsError: "",
    };
  },

  methods: {
    ...mapActions("api_banco", ["obtenerDatosLinea"]),
    ...mapMutations("utils", ["setDialogProgress"]),

    async clickObtenerDatosLinea() {
      this.smsError = "";
      this.objDatosLinea = {};

      //this.setDialogProgress(true);
      this.setDialogProgress({mostrar:true,sms:'Verificando Datos Línea, espere...'});
      let r = await this.obtenerDatosLinea(this.vNroSolicitud);
      if (r.data && r.data.statusCode) {
        this.$notify({
          title: "RESPUESTA DEL SERVICIO",
          text:
            "<b>statusCode</b>: " +
            r.data.statusCode +
            "<br> <b>Message:</b> " +
            r.data.message,
          duration: 5000,
          type: "error",
        });
        this.smsError = r.data.message;
        this.setDialogProgress({mostrar:false,sms:''});
        return;
      }

      this.objDatosLinea = r.data;
      this.setDialogProgress({mostrar:false,sms:''});
      //this.setDialogProgress(false);
    },
  },
};
</script>