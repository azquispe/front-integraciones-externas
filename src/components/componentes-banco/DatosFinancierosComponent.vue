<template>
  <div>
    <v-card elevation="4" class="ma-5">
      <v-toolbar dense flat>
        <v-toolbar-title>
          <span class="plomo_868686--text">
            <span class="font-weight-regular"> OBTIENE DATOS FINANCIEROS DE UNA PERSONA</span></span
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
              @click="clickObtenerDatosFinanciero()"
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

        <v-container
          fluid
          row
          v-if="Object.entries(objDatosFinancieros).length != 0"
        >
          <v-card outlined class="ma-2"  max-width="300">
            <v-card-title class=" rosa_FFB695--text">DATOS GENERALES</v-card-title>
            <v-card-text>
              <div >
                <span class="font-weight-regular">Tipo de Producto: </span>
                <span class="font-weight-thin">{{ objDatosFinancieros.tipoDeProducto }}</span>
              </div>
              <div >
                <span class="font-weight-regular">Moneda Solicitado: </span>
                <span class="font-weight-thin">{{ objDatosFinancieros.monedaSolicitado }}</span>
              </div>
              <div >
                <span class="font-weight-regular">Monto Solicitado: </span>
                <span class="font-weight-thin">{{ objDatosFinancieros.montoSolicitado }}</span>
              </div>
              <div >
                <span class="font-weight-regular">Plazo de Crédito: </span>
                <span class="font-weight-thin">{{ objDatosFinancieros.plazoCredito }}</span>
              </div>
              <div >
                <span class="font-weight-regular">Departamento: </span>
                <span class="font-weight-thin">{{ objDatosFinancieros.departamento }}</span>
              </div>
              <div >
                <span class="font-weight-regular">Ciudad: </span> <span class="font-weight-thin">{{ objDatosFinancieros.ciudad }}</span>
              </div>
            </v-card-text>
          </v-card>
          <v-card outlined class="ma-2"  max-width="300">
            <v-card-title class=" rosa_FFB695--text">LÍNEA DE CRÉDITO</v-card-title>
            <v-card-text>
              <div >
                <span class="font-weight-regular">Número: </span>
                <span class="font-weight-thin">{{ objDatosFinancieros.lineaDeCredito.numero }}</span>
              </div>
              <div >
                <span class="font-weight-regular">Moneda Aprobada: </span>
               <span class="font-weight-thin"> {{ objDatosFinancieros.lineaDeCredito.monedaAprobada }}</span>
              </div>
              <div >
                <span class="font-weight-regular">Monto Aprobado: </span>
               <span class="font-weight-thin"> {{ objDatosFinancieros.lineaDeCredito.montoAprobado }}</span>
              </div>
              <div >
                <span class="font-weight-regular">Fecha de vigencia : </span>
               <span class="font-weight-thin"> {{ objDatosFinancieros.lineaDeCredito.fechaDeVigencia }}</span>
              </div>
            </v-card-text>
          </v-card>
          <v-card outlined class="ma-2"  max-width="300">
            <v-card-title class=" rosa_FFB695--text">DEUDORES</v-card-title>
            <v-card-text>
              <div v-for="obj in objDatosFinancieros.deudores" :key="obj">
                <div >
                  <span class="font-weight-regular">Tipo de Identificación : </span>
                 <span class="font-weight-thin"> {{ obj.tipoIdentificacion }}</span>
                </div>
                <div >
                  <span class="font-weight-regular">Número de Identificación : </span>
                 <span class="font-weight-thin"> {{ obj.numerodeIdentifiacion }}</span>
                </div>
                <div >
                  <span class="font-weight-regular">Complemento Identificación : </span>
                 <span class="font-weight-thin"> {{ obj.complementoIdentificacion }}</span>
                </div>
                <div >
                  <span class="font-weight-regular">Extensión Identificación : </span>
                 <span class="font-weight-thin"> {{ obj.extensionIdentificacion }}</span>
                </div>
                <div >
                  <span class="font-weight-regular">Tipo de Deudor : </span>
                  <v-chip class="ma-2" color="primary" outlined pill small>
                   <span class="font-weight-thin"> {{ obj.tipoDeDeudor }}</span>
                  </v-chip>
                </div>
                <v-divider></v-divider>
              </div>
            </v-card-text>
          </v-card>
        </v-container>
      </div>
    </v-card>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      vNroSolicitud: "",
      objDatosFinancieros:{},
      smsError: ""
    };
  },
  computed: {
    ...mapGetters("api_banco", ["getDatosFinancieros"]),
  },
  methods: {
    ...mapMutations("api_banco", ["setDialogProgress"]),
    ...mapActions("api_banco", ["obtenerDatosFinancieros"]),
    async clickObtenerDatosFinanciero() {
      this.smsError = "";
      this.objDatosFinancieros={};

      this.setDialogProgress({mostrar:true,sms:'Verificando Datos Financieros, espere...'});

      let r = await this.obtenerDatosFinancieros(this.vNroSolicitud);
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

      
      this.objDatosFinancieros = r.data
      this.setDialogProgress({mostrar:false,sms:''});
    },
  },
};
</script>