<template>
<div>
  
  <v-data-table
    dense
    :items="getDatosPersonas"
    :headers="header_datos_persona"
    :hide-default-header="true"
    hide-default-footer
    class="elevation-1"
  >
    <template v-slot:header="{ props: { headers } }">
      <thead>
        <tr>
          <th class="subtitle-4" v-for="obj in headers" :key="obj">
            <spam class="verde_oscuro--text">{{ obj.text.toUpperCase() }}</spam>
          </th>
        </tr>
      </thead>
    </template>
    <template v-slot:item="{ item }">
      <tr>
        <td class="pa-2 font-weight-light caption">{{ item.nombre }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.apellidoPaterno }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.apellidoMaterno }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.apellidoDeCasada }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.sexo }}</td>
         <td class="pa-2 font-weight-light caption">{{ item.fechaDeNacimiento }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.correoElectronico }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.estadoCivil }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.nacionalidad }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.redesSociales }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.cantidadHijos }}</td>

        <td class="pa-2 font-weight-light caption">{{ item.ingresoPesos }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.nivelIngresos }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.nivelEducacion }}</td>



<td class="pa-2 font-weight-light caption">{{ item.discapacitado }}</td>
<td class="pa-2 font-weight-light caption">{{ item.tipoDeVivienda }}</td>
<td class="pa-2 font-weight-light caption ">  {{ item.porcentajeCreditoAsumido }}</td>

<td class="pa-2 font-weight-light caption "> 

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
        <v-list-item  >

              <div>
                  <span class="caption"><b>Nombre: </b> {{item.informacionDelConyuge.nombre}}</span>
                  <br> 
                  <span class="caption"><b>Apellido Paterno: </b> {{item.informacionDelConyuge.apellidoPaterno}}</span>
                  <br> 
                  <span class="caption"><b>Apellido Materno: </b> {{item.informacionDelConyuge.apellidoMaterno}}</span>
                  <br> 
                  <span class="caption"><b>Apellido Casado: </b> {{item.informacionDelConyuge.apellidoDeCasada}}</span>
                  <br> 
                  <span class="caption"><b>Sexo: </b> {{item.informacionDelConyuge.sexo}}</span>
                  <br> 
                  <span class="caption"><b>Fecha de Nacimiento: </b> {{item.informacionDelConyuge.fechaDeNacimiento}}</span>
                  <br> 
                  <span class="caption"><b>Correo Electrónico: </b> {{item.informacionDelConyuge.correoElectronico}}</span>
                
         
        </div>

</v-list-item>

            </v-list>
    </v-menu>

</td>
<td class="pa-2 font-weight-light caption ">  {{ item.porcentajeCreditoAsumido }}</td>
<td class="pa-2 font-weight-light caption ">  {{ item.porcentajeCreditoAsumido }}</td>


   
       
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

      header_datos_persona: [
        { text: "Nombre", value: "nombre" },
        { text: "Apellido Paterno", value: "apellidoPaterno" },
        { text: "Apellido Materno ", value: "apellidoMaterno" },
        { text: "Apellido Casada ", value: "apellidoDeCasada" },
        { text: "Sexo ", value: "sexo" },
        { text: "Fecha de Nac. ", value: "fechaDeNacimiento" },
        { text: "Correo Electrónico ", value: "correoElectronico" },
        { text: "Estado Civil ", value: "estadoCivil" },
        { text: "Nacionalidad ", value: "nacionalidad" },
        { text: "Redes Sociales ", value: "redesSociales" },
        { text: "Cantidad Hijos ", value: "cantidadHijos" },
        { text: "Ingresos Pesos ", value: "ingresoPesos" },
        { text: "Nivel de Ingresos ", value: "nivelIngresos" },
        { text: "Nivel de Educación ", value: "nivelEducacion" },
        { text: "Discapacitado ", value: "discapacitado" },
        { text: "Tipo de Vivienda ", value: "tipoDeVivienda" },
        { text: "Porcentaje Crédito Asumido ", value: "porcentajeCreditoAsumido" },
        { text: "Información Conyuge ", value: "informacionDelConyuge" },
        { text: "Información Residencia ", value: "informacionDeResidencia" },
        { text: "Información Laboral ", value: "informacionLaboral" },
        { text: "Referencias ", value: "referencias" }
      ],
    };
  },
  computed: {
    ...mapGetters("api_banco", ["getDatosPersonas"]),
  },
  methods: {
    ...mapActions("api_banco", [
    ]),

  
  }

};
</script>