<template>
    <div>
            <v-container fluid>
      <v-row
        align="center"
      >
       
     
            <v-col cols="3">
              <v-text-field
            v-model="vNombreCompleto"
            outlined
            dense
            label="Nombre Completo"
            hide-details
          ></v-text-field>
         </v-col>
          <v-col cols="12" sm="6" md="3">
          <v-chip
            class="ma-2"
            color="primary"
            text-color="white"
            @click="clickVerificarListaNegra()"
          >
            Buscar en lista Negra
          </v-chip>
        </v-col>
      </v-row>
      <v-row v-if="vRespuesta!=''">
         <v-col cols="12">
              <v-text-field
              readonly
            v-model="vRespuesta"
            outlined
            dense
            label="Resultado"
            hide-details
          ></v-text-field>
         </v-col>
      </v-row>
    </v-container>
    </div>
</template>
<script>

import {  mapActions, mapMutations } from "vuex";

export default {

  data() {
    return {
      vNombreCompleto: 'EVARISTO',
      vRespuesta:''
    
    };
  },
    
  methods: {
     ...mapActions("api_banco", ["verificarListaNegra"
    ]),
      ...mapMutations("api_banco",["setDialogProgress"]),

    async clickVerificarListaNegra() {

   this.vRespuesta = '';

    if(this.vNombreCompleto.trim()===''){
       this.$notify({
            title: "Mensaje",
            text: "Nombre completo es requerido",
            duration: 2000,
            type: "error",
          });
          return;
    }

   this.setDialogProgress(true);
    let r = await  this.verificarListaNegra(this.vNombreCompleto);
    this.vRespuesta = r.data.mensajeEjecucion;
    if(r.data.resultadoEjecucion>0 || r.data.resultadoEjecucion<0 ){
            this.$notify({
            title: "Mensaje",
            text: r.data.mensajeEjecucion,
            duration: 2000,
            type: "error",
          });
          
    }else{
          this.$notify({
            title: "Mensaje",
            text: r.data.mensajeEjecucion,
            duration: 2000,
            type: "success",
          });
    }
     this.setDialogProgress(false);
    }
  },
};
</script>
