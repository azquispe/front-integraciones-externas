<template>
  <div>
    <v-container fluid>
      <h3>OBTIENE CÚMULO DE UNA PERSONA</h3>
      <br />
      <v-row align="center">
        <v-col cols="3">
          <v-autocomplete
            v-model="vTipoDocumento"
            :items="lstTipoDocumento"
            outlined
            dense
            chips
            small-chips
            label="Tipo de Documento"
            hide-details
            clearable
          ></v-autocomplete>
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-model="vNroDocumento"
            outlined
            dense
            label="Nro Documento"
            hide-details
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-autocomplete
            v-model="vExtencion"
            :items="lstExtencion"
            outlined
            dense
            label="Extención"
            hide-details
            clearable
          ></v-autocomplete>
        </v-col>
        <v-col cols="3">
          <v-autocomplete
            v-model="vTipoProducto"
            :items="lstTipoProducto"
            outlined
            dense
            chips
            small-chips
            label="Tipo de Producto"
            hide-details
            clearable
          ></v-autocomplete>
        </v-col>
        <v-col cols="3">
          <v-autocomplete
            v-model="vTipoOperacion"
            :items="lstTipoOperacion"
            outlined
            dense
            chips
            small-chips
            label="Tipo de Operación"
            hide-details
            clearable
          ></v-autocomplete>
        </v-col>

        <v-col cols="3">
          <v-text-field
            v-model="vJts"
            outlined
            dense
            label="JTS"
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-chip
            class="ma-2"
            color="primary"
            text-color="white"
            @click="clickObtenerDatosCumulo()"
          >
            Verificar 
          </v-chip>
        </v-col>
      </v-row>
      <v-row v-if="vCumulo != ''">
        <v-col cols="12">
          <h3>Cúmulo</h3>
          <v-alert dense text type="success">
            {{ vCumulo }}
          </v-alert>
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
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      vTipoDocumento: "CI",
      vTipoProducto: "R",
      vTipoOperacion: "O",
      vJts: 0,
      vNroDocumento: "7678534",
      vExtencion: "SC",
      lstExtencion: [
        "SC",
        "LP",
        "CB",
        "OR",
        "TJ",
        "BE",
        "CH",
        "PO",
        "PA",
        "PE",
      ],

      lstTipoDocumento: ["CI", "NIT"],
      lstTipoProducto: ["R", "N"],
      lstTipoOperacion: ["O", "P", "OR", "T", "A"],
      vCumulo: "",
      smsError: "",
    };
  },

  methods: {
    ...mapActions("api_banco", ["obtenerCumulo"]),
    ...mapMutations("api_banco", ["setDialogProgress"]),

    async clickObtenerDatosCumulo() {
      this.smsError = "";
      this.vCumulo = "";
      let param = {
        tipoDocumento: this.vTipoDocumento,
        extension: this.vExtencion,
        numeroDocumento: this.vNroDocumento,
        tipoproducto: this.vTipoProducto,
        jts: this.vJts,
        tipooperacion: this.vTipoOperacion,
      };
      this.setDialogProgress(true);
      let r = await this.obtenerCumulo(param);

      // existe mensaje, mostrra error
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

      this.vCumulo = r.data.cumulo;
      if (this.vCumulo == 0) {
        this.$notify({
          title: "MENSAJE",
          text: "Cumulo devolvio Cero",
          duration: 5000,
          type: "error",
        });
      } else {
        this.$notify({
          title: "MENSAJE",
          text: "Cumulo devolvio " + this.vCumulo,
          duration: 5000,
          type: "success",
        });
      }
      this.setDialogProgress(false);
    },
  },
};
</script>
