<template>
  <div>
    <v-card elevation="4" class="ma-5">
      <v-toolbar dense flat>
        <v-toolbar-title>
          <span class="verde_53A808--text">
            OBTIENE CÚMULO DE UNA PERSONA</span
          ></v-toolbar-title
        >
      </v-toolbar>
      <div class="pa-5">
        <v-row align="center">
          <v-row cols="12" sm="6" md="3">
            <!--<v-autocomplete
              v-model="vTipoDocumento"
              :items="lstTipoDocumento"
              outlined
              dense
              chips
              small-chips
              label="Tipo de Documento"
              hide-details
              clearable
            ></v-autocomplete>-->

            <v-switch
              class="pl-8"
              dense
              v-model="vTipoDocumento"
              color="primary"
              label="CI"
              value="CI"
            ></v-switch>

            <v-switch
              class="pl-8"
              dense
              v-model="vTipoDocumento"
              color="primary"
              label="NIT"
              value="NIT"
            ></v-switch>
          </v-row>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              ref="refNroDocumento"
              v-model="vNroDocumento"
              outlined
              dense
              label="Nro Documento"
              hide-details
              clearable
              @keyup.tab.native="$refs.refComDoc.focus()"
            ></v-text-field>
          </v-col>
           <v-col cols="12" sm="6" md="3" v-if="this.vTipoDocumento === 'CI'">
          <v-text-field
            ref="refComDoc"
            v-model="vComplemento"
            maxlength="3"
            outlined
            dense
            label="Complemento"
            clearable
            hide-details
            @keyup.tab.native="$refs.refExtencion.focus()"
          ></v-text-field>
        </v-col>
          <v-col cols="12" sm="6" md="3" v-if="this.vTipoDocumento === 'CI'">
            <v-autocomplete
              ref="refExtencion"
              v-model="vExtencion"
              :items="lstExtencion"
              item-value="value"
              item-text="text"
              outlined
              dense
              label="Extensión"
              hide-details
              clearable
              @keyup.tab.native="$refs.refTipoProducto.focus()"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-autocomplete
              ref="refTipoProducto"
              v-model="vTipoProducto"
              :items="lstTipoProducto"
              item-value="value"
              item-text="text"
              outlined
              dense
              label="Tipo de Producto"
              hide-details
              clearable
              @keyup.tab.native="$refs.refTipoOperacion.focus()"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-autocomplete
              ref="refTipoOperacion"
              v-model="vTipoOperacion"
              :items="lstTipoOperacion"
              item-value="value"
              item-text="text"
              outlined
              dense
              label="Tipo de Operación"
              hide-details
              clearable
              @keyup.tab.native="$refs.refJts.focus()"
            ></v-autocomplete>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-text-field
              ref="refJts"
              v-model="vNroOperacionCancelar"
              outlined
              dense
              label="Número Operación Cancelar"
              hide-details
              @keyup.tab.native="$refs.refTipoMoneda.focus()"
            ></v-text-field>
          </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-autocomplete
              ref="refTipoMoneda"
              v-model="vTipoMoneda"
              :items="lstTipoMoneda"
              item-value="value"
              item-text="text"
              outlined
              dense
              label="Tipo de Moneda"
              hide-details
              clearable
              @keyup.tab.native="$refs.refBtnObtenerCumulo.focus()"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-chip
              ref="refBtnObtenerCumulo"
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
          <h3>Cúmulo</h3>
          <v-col cols="12">
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
      </div>
    </v-card>
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      vTipoDocumento: "CI",
      vTipoProducto: "",
      vTipoMoneda: "0",
      vTipoOperacion: "",
      vNroOperacionCancelar:0,
      vNroDocumento: "",
      vComplemento:"",
      vExtencion: "",
      lstExtencion: [
     {
          value: " ",
          text: "Sin Extensión",
        },
        {
          value: "SC",
          text: "SC",
        },
        {
          value: "LP",
          text: "LP",
        },
        {
          value: "CB",
          text: "CB",
        },
        {
          value: "OR",
          text: "OR",
        },
        {
          value: "TJ",
          text: "TJ",
        },
        {
          value: "BE",
          text: "BE",
        },
        {
          value: "CH",
          text: "CH",
        },
        {
          value: "PO",
          text: "PO",
        },
        {
          value: "PA",
          text: "PA",
        },
        {
          value: "PE",
          text: "PE",
        },
      ],

      //lstTipoDocumento: ["CI", "NIT"],
      lstTipoProducto: [
        {
          value: "R",
          text: "Regulada (R)",
        },
        {
          value: "N",
          text: "No Regulada (N)",
        },
      ],
         lstTipoMoneda: [
        {
          value: "0",
          text: "Bolivianos (0)",
        },
        {
          value: "2225",
          text: "Dolares (2225)",
        },
      ],
      lstTipoOperacion: [
        {
          value: "O",
          text: "Préstamo Nuevo (O)",
        },
        {
          value: "P",
          text: "Préstamo Reprogramado (P)",
        },
        {
          value: "OR",
          text: "Préstamo Refinanciado (OR)",
        },
        {
          value: "T",
          text: "Tarjetas (T)",
        },
        {
          value: "A",
          text: "Líneas (A)",
        },
      ],
      vCumulo: "",
      smsError: "",
    };
  },

  methods: {
    ...mapActions("api_banco", ["obtenerCumulo"]),
    ...mapMutations("utils", ["setDialogProgress"]),

    async clickObtenerDatosCumulo() {
      this.smsError = "";
      this.vCumulo = "";
      let param = {
        tipoDocumento: this.vTipoDocumento,
        extension: this.vTipoDocumento.trim() === "NIT" ? "  " : this.vExtencion,
        numeroDocumento: this.vNroDocumento,
        extDuplicado:this.vComplemento.trim(),
        tipoproducto: this.vTipoProducto,
        nroOperacionCancelar: this.vNroOperacionCancelar,
        tipooperacion: this.vTipoOperacion,
        codmoneda:this.vTipoMoneda
      };
      this.setDialogProgress({
        mostrar: true,
        sms: "Verificando Cúmulo, espere...",
      });
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
        this.setDialogProgress({ mostrar: false, sms: "" });
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
      this.setDialogProgress({ mostrar: false, sms: "" });
    },
  },
};
</script>
