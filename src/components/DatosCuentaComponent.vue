<template>
  <v-card elevation="4" class="ma-5">
    <v-toolbar dense flat>
      <v-toolbar-title>
        <span class="plomo_868686--text">
          <strong> Datos Financieros </strong></span
        ></v-toolbar-title
      >
    </v-toolbar>
    <div class="pa-5">
      <v-row>
        <v-row cols="12" sm="6" md="3" >
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
      <v-data-table
        v-if="lstDatosCuenta.length > 0"
        dense
        :items="lstDatosCuenta"
        :headers="header_datos_cuenta"
        :hide-default-header="true"
        hide-default-footer
        class="elevation-1"
      >
        <template v-slot:header="{ props: { headers } }">
          <thead>
            <tr class="verde_53A808">
              <th class="subtitle-4" v-for="obj in headers" :key="obj">
                <spam class="white--text">{{ obj.text.toUpperCase() }}</spam>
              </th>
            </tr>
          </thead>
        </template>
        <template v-slot:item="{ item }">
          <tr>
            <td class="pa-2 pl-4 font-weight-light caption">
              {{ item.id }}
            </td>
            <td class="pa-2 pl-4 font-weight-light caption">
              {{ item.cuenta }}
            </td>
            <td class="pa-2 pl-4 font-weight-light caption">
              {{ item.moneda }}
            </td>
            <td class="pa-2 pl-4 font-weight-light caption">
              {{ item.tipoProducto }}
            </td>
            <td class="pa-2 pl-4 font-weight-light caption">
              {{ item.estado }}
            </td>
          </tr>
        </template>
      </v-data-table>
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
      //lstTipoDocumento: ["CI", "NIT"],
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
      header_datos_cuenta: [
        { text: "ID", value: "id" },
        { text: "Cuenta", value: "cuenta" },
        { text: "Moneda ", value: "moneda" },
        { text: "Tipo de Producto ", value: "tipoProducto" },
        { text: "Estado ", value: "estado" },
      ],
      smsError: "",
    };
  },
  methods: {
    ...mapActions("api_banco", ["obtieneDatosCuenta"]),
    ...mapMutations("api_banco", ["setDialogProgress"]),

    async clickObtenerDatosCuenta() {
      this.setDialogProgress(true);
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
        this.setDialogProgress(false);
        return;
      }

      this.lstDatosCuenta = r.data;
      this.$notify({
        title: "Mensaje",
        text: "Busqueda Exitosa",
        duration: 2000,
        type: "success",
      });
      this.setDialogProgress(false);
    },
  },
};
</script>
