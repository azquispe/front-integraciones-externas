<template>
  <div >
    <v-container>
      <v-row>
        
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="nroSolicitud"
            outlined
            dense
            label="Ingrese Nro de Solicitud"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-chip
            class="ma-2"
            color="primary"
            text-color="white"
            @click="clickObtenerDatosFinancieros()"
          >
            Buscar Datos
          </v-chip>
        </v-col>
      </v-row>
    </v-container>
  <div class=" pa-4">
      <h3 ><u>Datos Financieros</u></h3><br>

<datosFinancierosComponent/><br>
<h3><u>Datos Persona</u></h3><br>
<tableDatosPersonaComponent/>
  </div>
  
  </div>
</template>
<script>

import {  mapActions, mapMutations } from "vuex";
import datosFinancierosComponent from '@/components/TableDatosFinancierosComponent.vue'
import tableDatosPersonaComponent from '@/components/TableDatosPersonaComponent.vue'
export default {
  components:{
    datosFinancierosComponent,
    tableDatosPersonaComponent
  },
  data() {
    return {
      nroSolicitud: 25873,
      lstDatosFinancieros: [],
    };
  },
    
  methods: {
     ...mapActions("api_banco", [
      "obtenerDatosFinancieros",
      "obtenerDatosPersona"
    ]),
    ...mapMutations("api_banco",[
      "setDatosPersonas"
    ]),

    async clickObtenerDatosFinancieros() {
      let r = await this.obtenerDatosFinancieros(this.nroSolicitud);

     console.log("dsdsd: "+r.data.deudores);
      let lstDeudores = []
     
        for (const deudor of r.data.deudores) {
        console.log(deudor);
        if(deudor.extensionIdentificacion.trim()!=""){
           

          let rr =  await    this.obtenerDatosPersona({tipoDocumento:deudor.tipoIdentificacion,
         extension:deudor.extensionIdentificacion,numeroDocumento:deudor.numerodeIdentifiacion});
        lstDeudores.push(rr.data);

        }
          
      };
this.setDatosPersonas(lstDeudores);

    }
  },
};
</script>