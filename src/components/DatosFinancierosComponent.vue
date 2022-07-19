<template>
  <div>
    <v-card elevation="4" class="ma-5">
      <v-toolbar dense flat>
        <v-toolbar-title>
          <span class="plomo_868686--text">
            <strong> OBTIENE DATOS FINANCIEROS DE UNA PERSONA</strong></span
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
            <v-card-title>&nbsp;</v-card-title>
            <v-card-text>
              <div class="font-weight-normal">
                <strong>Tipo de Producto: </strong>
                {{ objDatosFinancieros.tipoDeProducto }}
              </div>
              <div class="font-weight-normal">
                <strong>Moneda Solicitado: </strong>
                {{ objDatosFinancieros.monedaSolicitado }}
              </div>
              <div class="font-weight-normal">
                <strong>Monto Solicitado: </strong>
                {{ objDatosFinancieros.montoSolicitado }}
              </div>
              <div class="font-weight-normal">
                <strong>Plazo de Crédito: </strong>
                {{ objDatosFinancieros.plazoCredito }}
              </div>
              <div class="font-weight-normal">
                <strong>Departamento: </strong>
                {{ objDatosFinancieros.departamento }}
              </div>
              <div class="font-weight-normal">
                <strong>Ciudad: </strong> {{ objDatosFinancieros.ciudad }}
              </div>
            </v-card-text>
          </v-card>
          <v-card outlined class="ma-2"  max-width="300">
            <v-card-title>Línea de Crédito</v-card-title>
            <v-card-text>
              <div class="font-weight-normal">
                <strong>Número: </strong>
                {{ objDatosFinancieros.lineaDeCredito.numero }}
              </div>
              <div class="font-weight-normal">
                <strong>Moneda Aprobada: </strong>
                {{ objDatosFinancieros.lineaDeCredito.monedaAprobada }}
              </div>
              <div class="font-weight-normal">
                <strong>Monto Aprobado: </strong>
                {{ objDatosFinancieros.lineaDeCredito.montoAprobado }}
              </div>
              <div class="font-weight-normal">
                <strong>Fecha de vigencia : </strong>
                {{ objDatosFinancieros.lineaDeCredito.fechaDeVigencia }}
              </div>
            </v-card-text>
          </v-card>
          <v-card outlined class="ma-2"  max-width="300">
            <v-card-title>Deudores</v-card-title>
            <v-card-text>
              <div v-for="obj in objDatosFinancieros.deudores" :key="obj">
                <div class="font-weight-normal">
                  <strong>Tipo de Identificación : </strong>
                  {{ obj.tipoIdentificacion }}
                </div>
                <div class="font-weight-normal">
                  <strong>Número de Identificación : </strong>
                  {{ obj.numerodeIdentifiacion }}
                </div>
                <div class="font-weight-normal">
                  <strong>Complemento Identificación : </strong>
                  {{ obj.complementoIdentificacion }}
                </div>
                <div class="font-weight-normal">
                  <strong>Extensión Identificación : </strong>
                  {{ obj.extensionIdentificacion }}
                </div>
                <div class="font-weight-normal">
                  <strong>Tipo de Deudor : </strong>
                  <v-chip class="ma-2" color="primary" outlined pill small>
                    {{ obj.tipoDeDeudor }}
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

      this.setDialogProgress(true);

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
        this.setDialogProgress(false);
        return;
      }

      
      this.objDatosFinancieros = r.data
      this.setDialogProgress(false);
    },
  },
};
</script>