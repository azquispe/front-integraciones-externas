<template>
  <div>
   <datosPersonaComponent></datosPersonaComponent>
   </div>
</template>
<script>

import {  mapActions, mapMutations } from "vuex";
import datosPersonaComponent from '@/components/DatosPersonaComponent.vue'
export default {
  components:{
    datosPersonaComponent
  },
  data() {
    return {
      nroSolicitud: 26655,
      lstDatosFinancieros: [],
    };
  },
    
  methods: {
  
  },
};
</script>