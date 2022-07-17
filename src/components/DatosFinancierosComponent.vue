<template>
  <div>
    <v-container fluid>
      <h3>OBTIENE DATOS FINANCIEROS DE UNA PERSONA</h3>
      <br />
      <v-row align="center">
        <v-col cols="3">
          <v-text-field
            v-model="vNroSolicitud"
            outlined
            dense
            label="Nro Solicitud"
            hide-details
            type="number"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
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
    </v-container>

    <v-container
      fluid
      row
      v-if="Object.entries(getDatosFinancieros).length != 0"
    >
      <v-card elevation="2" class="ma-2">
        <v-card-title>&nbsp;</v-card-title>
        <v-card-text>
          <div class="font-weight-normal">
            <strong>Tipo de Producto: </strong>
            {{ getDatosFinancieros.tipoDeProducto }}
          </div>
          <div class="font-weight-normal">
            <strong>Moneda Solicitado: </strong>
            {{ getDatosFinancieros.monedaSolicitado }}
          </div>
          <div class="font-weight-normal">
            <strong>Monto Solicitado: </strong>
            {{ getDatosFinancieros.montoSolicitado }}
          </div>
          <div class="font-weight-normal">
            <strong>Plazo de Crédito: </strong>
            {{ getDatosFinancieros.plazoCredito }}
          </div>
          <div class="font-weight-normal">
            <strong>Departamento: </strong>
            {{ getDatosFinancieros.departamento }}
          </div>
          <div class="font-weight-normal">
            <strong>Ciudad: </strong> {{ getDatosFinancieros.ciudad }}
          </div>
        </v-card-text>
      </v-card>
      <v-card elevation="2" class="ma-2">
        <v-card-title>Línea de Crédito</v-card-title>
        <v-card-text>
          <div class="font-weight-normal">
            <strong>Número: </strong>
            {{ getDatosFinancieros.lineaDeCredito.numero }}
          </div>
          <div class="font-weight-normal">
            <strong>Moneda Aprobada: </strong>
            {{ getDatosFinancieros.lineaDeCredito.monedaAprobada }}
          </div>
          <div class="font-weight-normal">
            <strong>Monto Aprobado: </strong>
            {{ getDatosFinancieros.lineaDeCredito.montoAprobado }}
          </div>
          <div class="font-weight-normal">
            <strong>Fecha de vigencia : </strong>
            {{ getDatosFinancieros.lineaDeCredito.fechaDeVigencia }}
          </div>
        </v-card-text>
      </v-card>
      <v-card elevation="2" class="ma-2">
        <v-card-title>Deudores</v-card-title>
        <v-card-text>
          <div v-for="obj in getDatosFinancieros.deudores" :key="obj">
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
              <strong>Fecha de vigencia : </strong>
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
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      vNroSolicitud: 0,

      smsError: "",
    };
  },
  computed: {
    ...mapGetters("api_banco", ["getDatosFinancieros"]),
  },
  methods: {
    ...mapMutations("api_banco", ["setDialogProgress", "setDatosFinancieros"]),
    ...mapActions("api_banco", ["obtenerDatosFinancieros"]),
    async clickObtenerDatosFinanciero() {
      this.smsError = "";
      this.setDatosFinancieros([]);

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
      }

      this.setDialogProgress(false);
    },
  },
};
</script>