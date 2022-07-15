<template>
    <div>
<v-container>
      <v-row>
        <v-col cols="12" sm="6" md="3">
             
               <v-autocomplete
            v-model="vTipoDoc"
            :items="lstTipoDocumento"
            outlined
            dense
            label="Tipo de Documento"
            hide-details
          ></v-autocomplete>

        </v-col>
             <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="vNroDoc"
            outlined
            dense
            label="Número Documento"
          ></v-text-field>
        </v-col>
             <v-col cols="12" sm="6" md="3"   v-if="this.vTipoDoc==='CI'">
                      <v-autocomplete
            v-model="vExtencion"
            :items="lstExtencion"
            outlined
            dense
            label="Tipo de Documento"
            hide-details
          ></v-autocomplete>

        

          

        </v-col>
             <v-col cols="12" sm="6" md="3">
          <v-chip
            class="ma-2"
            color="primary"
            text-color="white"
            @click="clickObtenerDatosCuenta()"
          >
            Buscar datos Cuenta
          </v-chip>
        </v-col>
</v-row>
</v-container>
  <v-data-table
  v-if="lstDatosCuenta.length>0"
    dense
    :items="lstDatosCuenta"
    :headers="header_datos_cuenta"
    :hide-default-header="true"
    hide-default-footer
    class="elevation-1"
  >
    <template v-slot:header="{ props: { headers } }">
      <thead>
        <tr>
          <th class="subtitle-4" v-for="obj in headers" :key="obj">
            <spam class="primary--text">{{ obj.text.toUpperCase() }}</spam>
          </th>
        </tr>
      </thead>
    </template>
    <template v-slot:item="{ item }">
      <tr>
        <td class="pa-2 font-weight-light caption">{{ item.id }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.cuenta }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.moneda }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.tipoProducto }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.estado }}</td>
        
      </tr>
    </template>
  </v-data-table>
    </div>
</template>
<script>
import {  mapActions, mapMutations } from "vuex";

export default {
    data() {
        return{
            vExtencion:'',
            vNroDoc:'',
            vTipoDoc:'CI',
            lstTipoDocumento:['CI','NIT'],
            lstExtencion:['SC','LP','CB','OR','TJ','BE','CH','PO','PA','PE'],
            lstDatosCuenta : [],
             header_datos_cuenta: [
        { text: "ID", value: "id" },
        { text: "Cuenta", value: "cuenta" },
        { text: "Moneda ", value: "moneda" },
        { text: "Tipo de Producto ", value: "tipoProducto" },
        { text: "Estado ", value: "estado" }
        ]
        }
    },
     methods: {
          ...mapActions("api_banco", ["obtieneDatosCuenta"
    ]),
    ...mapMutations("api_banco",["setDialogProgress"]),

        async clickObtenerDatosCuenta(){

            if(this.vTipoDoc.trim()==='' || this.vNroDoc.trim()==='' ){
                  this.$notify({
                        title: "Mensaje",
                        text: "Tipo Documento y Número Documento son requeridos",
                        duration: 2000,
                        type: "error",
                    });
                return ;
            }
            if(this.vTipoDoc.trim()==='CI' && this.vExtencion.trim()===''){
                this.$notify({
                        title: "Mensaje",
                        text: "Cuando es CI debe registrar Extención",
                        duration: 2000,
                        type: "error",
                    });
                return ;
            }

            this.setDialogProgress(true);
            this.lstDatosCuenta=[];
           
             
                  let obj = {  
                tipoDocumento:this.vTipoDoc.trim(),
                extension:this.vTipoDoc.trim()==='NIT'?'  ':this.vExtencion.trim(),
                numeroDocumento:  this.vNroDoc.trim()
                
                }
                let r = await  this.obtieneDatosCuenta(obj);
                this.lstDatosCuenta = r.data;
                   this.$notify({
                        title: "Mensaje",
                        text: "Busqueda Exitosa",
                        duration: 2000,
                        type: "success",
                    });
                    this.setDialogProgress(false);
            
          
        }
     }
}
</script>
