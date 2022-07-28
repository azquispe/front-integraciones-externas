<template>
  <div>
    <v-card elevation="4" class="ma-5">
      <v-toolbar dense flat>
        <v-toolbar-title>
          <span class="verde_53A808--text">
            <strong><u>CONSULTA SEGIP</u></strong></span
          ></v-toolbar-title
        >
      </v-toolbar>
      <div class="pa-5">
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              v-model="vNroDoc"
              outlined
              dense
              label="Número Documento"
              clearable
              @keyup.tab.native="$refs.refExtencion.focus()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
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
              @keyup.tab.native="$refs.refConsultasSegip.focus()"
            ></v-autocomplete>
          </v-col>

          <v-col cols="12" sm="6" md="3">
           <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
            dense
            clearable
            outlined
              v-model="dateFormatted"
              label="Fecha de Nacimiento"
              hint="DD/MM/YYYY"
              persistent-hint
              
              v-bind="attrs"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            @input="menu1 = false"
          ></v-date-picker>
        </v-menu>
       <!-- <p>Date in ISO format: <strong>{{ date }}</strong></p>-->
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-chip
              ref="refConsultasSegip"
              class="ma-2"
              color="primary"
              text-color="white"
              @click="clickConsultasSegip()"
            >
              Verificar
            </v-chip>
          </v-col>
          <v-col v-if="smsError != ''" cols="12">
            <v-alert dense text type="error">
              {{ smsError }}
            </v-alert>
          </v-col>
        </v-row>
        <v-card
          outlined
          class="ma-2 pa-2"
          max-width="279"
          v-if="Object.entries(objDatosPersona).length != 0"
        >
          <span class="title rosa_FFB695--text">DATOS CONSULTA SEGIP</span>

          <div>
            <span class="font-weight-regular"
              >Documento de Identidad (CI):
            </span>
            <span class="font-weight-thin">
              {{ objDatosPersona.documentNumber }}</span
            >
          </div>
          <div>
            <span class="font-weight-regular">Apellido Paterno: </span>
            <span class="font-weight-thin">
              {{ objDatosPersona.lastName }}</span
            >
          </div>
          <div>
            <span class="font-weight-regular">Apellido Materno: </span>
            <span class="font-weight-thin">
              {{ objDatosPersona.motherName }}</span
            >
          </div>
          <div>
            <span class="font-weight-regular">Nombre Completo: </span>
            <span class="font-weight-thin">
              {{ objDatosPersona.firstName }}</span
            >
          </div>
          <div>
            <span class="font-weight-regular">Fecha de Nacimiento: </span>
            <span class="font-weight-thin">
              {{ objDatosPersona.birthdate }}</span
            >
          </div>
          <div>
            <span class="font-weight-regular">Domicilio: </span>
            <span class="font-weight-thin"> {{ objDatosPersona.address }}</span>
          </div>
          <div>
            <span class="font-weight-regular">Profesión / Ocupación: </span>
            <span class="font-weight-thin"> {{ objDatosPersona.job }}</span>
          </div>
          <div>
            <span class="font-weight-regular">Estado Civil: </span>
            <span class="font-weight-thin">
              {{ objDatosPersona.maritalStatus }}</span
            >
          </div>
          <div>
            <span class="font-weight-regular">País: </span>
            <span class="font-weight-thin">
              {{ objDatosPersona.birthCountry }}</span
            >
          </div>
          <div>
            <span class="font-weight-regular">Departamento: </span>
            <span class="font-weight-thin">
              {{ objDatosPersona.birhtCity }}</span
            >
          </div>
          <div>
            <span class="font-weight-regular">Provincia: </span>
            <span class="font-weight-thin">
              {{ objDatosPersona.birthArea }}</span
            >
          </div>
          <div>
            <span class="font-weight-regular">Ciudad: </span>
            <span class="font-weight-thin">
              {{ objDatosPersona.birthState }}</span
            >
          </div>
        </v-card>
      </div>
    </v-card>
  </div>
</template>


<script>
import { mapActions, mapMutations } from "vuex";
export default {
  data: (vm) => ({

      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
      menu1: false,



    vExtencion: "CI",
    vNroDoc: "",
    objDatosPersona: {},
    smsError: "",
    lstExtencion: [
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
  }),
    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },
     watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      },
    },
  methods: {
    ...mapActions("api_heroku", ["consultaSegip"]),
    ...mapMutations("utils", ["setDialogProgress"]),
    async clickConsultasSegip() {
      this.setDialogProgress({
        mostrar: true,
        sms: "Verificando Segip, espere...",
      });
      this.objDatosPersona = {};
      this.smsError = "";
      let request = {
        ci: this.vNroDoc,
        documentCity: this.vExtencion,
        birthdate: this.dateFormatted,
      };
      let r = await this.consultaSegip(request);

      if (r.data && r.data.errMsg) {
        this.setDialogProgress({ mostrar: false, sms: "" });
        this.smsError = r.data.errMsg;
        return;
      }

      this.objDatosPersona = r.data;
      this.setDialogProgress({ mostrar: false, sms: "" });
    },
     formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [day,month , year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
  },
};
</script>