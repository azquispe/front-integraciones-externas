<template>
  <div>
    <v-card elevation="4" class="ma-5">
      <div class="pa-5">
        <v-container>
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
             <v-col cols="12" sm="6" md="3">
                 <span class="font-weight-thin">Algunos ejemplos de nro de solicitud:<br> 26655,  26809   ,25873, 25924</span>
             </v-col>
          </v-row></v-container
        >
      </div>
    </v-card>
    
    <div v-show="Object.entries(objDatosFinancieros).length != 0">
      <datosFinancierosMultipleComponent
        :objDatosFinancieros="objDatosFinancieros"
      ></datosFinancierosMultipleComponent>
      <datosPersonaMultipleComponent
        :lstDeudores="objDatosFinancieros.deudores"
      ></datosPersonaMultipleComponent>
    </div>
    <div v-if="smsError!=''">
        <v-alert dense text type="error">
              {{ smsError }}
            </v-alert>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import datosFinancierosMultipleComponent from "@/components/componentes-banco/DatosFinancierosMultipleComponent.vue";
import datosPersonaMultipleComponent from "@/components/componentes-banco/DatosPersonaMultipleComponent.vue";
export default {
  components: {
    datosFinancierosMultipleComponent,
    datosPersonaMultipleComponent,
    

  },
  data() {
    return {
      vNroSolicitud: 25873,
      objDatosFinancieros: {},
      smsError: ""
    };
  },
  methods: {
    ...mapMutations("api_banco", ["setDialogProgress"]),
    ...mapActions("api_banco", ["obtenerDatosFinancieros"]),
    async clickObtenerDatosFinanciero() {
      this.smsError="";
      this.objDatosFinancieros = {};
      this.setDialogProgress({
        mostrar: true,
        sms: "Verificando Datos Financieros, espere...",
      });
      let r = await this.obtenerDatosFinancieros(this.vNroSolicitud);
       if (r.data && r.data.statusCode) {
        this.smsError = "statusCode=>"+ r.data.statusCode+" message:=>"+r.data.message
        this.setDialogProgress({mostrar:false,sms:''});
        return;
      }


      this.objDatosFinancieros = r.data;
      this.setDialogProgress({ mostrar: false, sms: "" });
    },
  },
};
</script>
