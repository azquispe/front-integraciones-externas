<template>
  <v-card elevation="4" class="ma-5">
    <v-toolbar dense flat>
      <v-toolbar-title>
        <span class="verde_53A808--text">
          Datos Financieros </span
        ></v-toolbar-title
      >
    </v-toolbar>
    <div class="pa-5">
      <v-row>
        <v-row cols="12" sm="6" md="3">
          <v-switch
            class="pl-8"
            dense
            v-model="vTipoDoc"
            color="primary"
            label="CI"
            value="CI"
          ></v-switch>

          <v-switch
            class="pl-8"
            dense
            v-model="vTipoDoc"
            color="primary"
            label="NIT"
            value="NIT"
          ></v-switch>
        </v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="vNroDoc"
            outlined
            dense
            label="Número Documento"
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3" v-if="this.vTipoDoc === 'CI'">
          <v-autocomplete
            v-model="vExtencion"
            :items="lstExtencion"
            outlined
            dense
            label="Extensión"
            hide-details
            clearable
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-chip
            class="ma-2"
            color="primary"
            text-color="white"
            @click="clickObtenerDatosCuenta()"
          >
            Verificar
          </v-chip>
        </v-col>
        <v-row v-if="smsError != ''">
          <v-col cols="12">
            <h3>Mensaje de Error</h3>
            <v-alert dense text type="error">
              {{ smsError }}
            </v-alert>
          </v-col>
        </v-row>
      </v-row>
      <v-card
        outlined
        class="ma-2 pa-2"
        max-width="279"
        v-if="lstDatosCuenta.length > 0"
      >
        <span class="title rosa_FFB695--text">DATOS CUENTA</span>
        
          <div v-for="obj in lstDatosCuenta" :key="obj" class="pa-0">
            <div>
              <span class="font-weight-regular">ID: </span>
              <span class="font-weight-thin"> {{ obj.id }}</span>
            </div>
            <div>
              <span class="font-weight-regular">Cuenta: </span>
              <span class="font-weight-thin"> {{ obj.cuenta }}</span>
            </div>
            <div>
              <span class="font-weight-regular">Moneda: </span>
              <span class="font-weight-thin"> {{ obj.moneda }}</span>
            </div>
            <div>
              <span class="font-weight-regular">Tipo de Producto: </span>
              <span class="font-weight-thin"> {{ obj.tipoProducto }}</span>
            </div>
            <div>
              <span class="font-weight-regular">Estado: </span>
              <span class="font-weight-thin"> {{ obj.estado }}</span>
            </div>
            <v-divider></v-divider>
          </div>
        
      </v-card>
    </div>
  </v-card>
</template>
<script>
import { mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      vExtencion: "",
      vNroDoc: "",
      vTipoDoc: "CI",

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
      lstDatosCuenta: [],

      smsError: "",
    };
  },
  methods: {
    ...mapActions("api_banco", ["obtieneDatosCuenta"]),
    ...mapMutations("api_banco", ["setDialogProgress"]),

    async clickObtenerDatosCuenta() {
      this.setDialogProgress({
        mostrar: true,
        sms: "Verificando Datos Cuentas, espere...",
      });
      this.lstDatosCuenta = [];
      this.smsError = "";

      let obj = {
        tipoDocumento: this.vTipoDoc,
        extension: this.vTipoDoc.trim() === "NIT" ? "  " : this.vExtencion,
        numeroDocumento: this.vNroDoc,
      };
      let r = await this.obtieneDatosCuenta(obj);
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

      this.lstDatosCuenta = r.data;
      this.$notify({
        title: "Mensaje",
        text: "Busqueda Exitosa",
        duration: 2000,
        type: "success",
      });
      this.setDialogProgress({ mostrar: false, sms: "" });
    },
  },
};
</script>
