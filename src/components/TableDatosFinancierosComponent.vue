<template>
<div>
  
  <v-data-table
    dense
    :items="getDatosFinancieros"
    :headers="header_datos_financieros"
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
        <td class="pa-2 font-weight-light caption">{{ item.tipoDeProducto }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.monedaSolicitado }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.montoSolicitado }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.plazoCredito }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.departamento }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.ciudad }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.lineaDeCredito.numero }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.lineaDeCredito.monedaAprobada }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.lineaDeCredito.montoAprobado }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.lineaDeCredito.fechaDeVigencia }}</td>
        <td class="pa-2 font-weight-light caption">
          <v-menu
      bottom
      origin="center center"
      transition="scale-transition"
    >
      <template v-slot:activator="{ on, attrs }">
     
        
    <v-chip
    
      color="primary"
        v-bind="attrs"
          v-on="on"
          outlined
          small
    >
      Ver mas...
    </v-chip>

      </template>

      <v-list>
        <v-list-item v-for="deudor in item.deudores" :key="deudor"
        >
        <div>
           <span class="caption"><b>{{deudor.tipoIdentificacion}}:</b> {{deudor.numerodeIdentifiacion+" "+deudor.complementoIdentificacion+" "+deudor.extensionIdentificacion }}</span>
           <br> <span class="caption"><b>Tipo Deudor:</b> {{deudor.tipoDeDeudor}}</span>
           <v-divider></v-divider>
        </div>
        
        </v-list-item>
      </v-list>
    </v-menu>


        </td>
        <td>
          <v-icon small @click="anularLugar(item)"> fas fa-trash-alt </v-icon>
          <v-icon class="ml-4" small @click="editarLugar(item)"
            >fas fa-pencil-alt
          </v-icon>
        </td>
      </tr>
    </template>
  </v-data-table>
</div>
</template>
<script>
import {  mapActions, mapGetters } from "vuex";
export default {
 
  data() {
    return {

      header_datos_financieros: [
        { text: "Tipo de Producto", value: "tipoDeProducto" },
        { text: "Moneda Solicitado", value: "monedaSolicitado" },
        { text: "Monto Solicitado ", value: "montoSolicitado" },
        { text: "Plazo de Crédito ", value: "plazoCredito" },
        { text: "Departamento ", value: "departamento" },
        { text: "Ciudad ", value: "ciudad" },
        { text: "Línea Crédito - Número ", value: "lineaDeCredito.numero" },
        { text: "Línea Crédito - Moneda Aprobado ", value: "lineaDeCredito.monedaAprobada" },
        { text: "Línea Crédito - Monto Aprobado ", value: "lineaDeCredito.montoAprobado" },
        { text: "Línea Crédito - Fecha Vigencia ", value: "lineaDeCredito.fechaDeVigencia" },
        { text: "Deudores ", value: "" }
      ],
    };
  },
  computed: {
    ...mapGetters("api_banco", ["getDatosFinancieros"]),
  },
  methods: {
    ...mapActions("api_banco", [
    ]),

  
  }

};
</script>