<template>
    <div>
            <v-container fluid>
      <v-row
        align="center"
      >
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
          ></v-autocomplete>
        </v-col>
         <v-col cols="3">
              <v-text-field
            v-model="vNroDocumento"
            outlined
            dense
            label="Nro Documento"
            hide-details
          ></v-text-field>
         </v-col>
          <v-col cols="3">
              
       <v-autocomplete
            v-model="vExtencion"
            :items="lstExtencion"
            outlined
            dense
            label="Tipo de Documento"
            hide-details
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
            Buscar Cúmuo
          </v-chip>
        </v-col>
      </v-row>
      <v-row>
         <v-col cols="3">
              <v-text-field
              readonly
            v-model="vCumulo"
            outlined
            dense
            label="Cúmulo"
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
      vTipoDocumento: 'CI',
      vTipoProducto: 'R',
      vTipoOperacion:'O',
      vJts:0,
      vNroDocumento:'7678534',
      vExtencion:'SC',
       lstExtencion:['SC','LP','CB','OR','TJ','BE','CH','PO','PA','PE'],

      lstTipoDocumento:['CI','NIT'],
      lstTipoProducto:['R','N'],
      lstTipoOperacion:['O','P','OR','T','A'],
      vCumulo:0
    };
  },
    
  methods: {
     ...mapActions("api_banco", ["obtenerCumulo"
    ]),
     ...mapMutations("api_banco",["setDialogProgress"]),

    async clickObtenerDatosCumulo() {

        if(this.vJts<0 || this.vNroDocumento.trim()==='' ){
             this.$notify({
                        title: "Mensaje",
                        text: "JTS y Nro de Documento es requerido",
                        duration: 2000,
                        type: "error",
                    });
                return ;
        }

        this.vCumulo=null;
        let param={
            tipoDocumento:this.vTipoDocumento.trim(),
            extension:this.vExtencion.trim(),
            numeroDocumento:this.vNroDocumento.trim(),
            tipoproducto:this.vTipoProducto.trim(),
            jts:this.vJts,
            tipooperacion:this.vTipoOperacion.trim()
        };
        this.setDialogProgress(true);
    let r = await  this.obtenerCumulo(param);
    if(r.data.message){
        this.$notify({
                        title: "Mensaje",
                        text: r.data.message,
                        duration: 4000,
                        type: "error",
                    });
                    this.setDialogProgress(false);
                return ;
    }

    console.log("respuesta")
    console.log(r);

    this.vCumulo = r.data.cumulo;
    if(this.vCumulo==0){
            this.$notify({
            title: "Mensaje",
            text: "Cumulo devolvio Cero",
            duration: 2000,
            type: "error",
          });
    }else{
          this.$notify({
            title: "Mensaje",
            text: "Cumulo devolvio "+this.vCumulo,
            duration: 2000,
            type: "success",
          });
    }
       this.setDialogProgress(false);
    }
  },
};
</script>
