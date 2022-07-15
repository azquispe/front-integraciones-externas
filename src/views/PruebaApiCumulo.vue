<template>
<cumuloComponent/>
</template>
<script>

import {  mapActions, mapMutations } from "vuex";
import cumuloComponent from '@/components/CumuloComponent.vue'
export default {
  components:{
    cumuloComponent
  },
  data() {
    return {
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