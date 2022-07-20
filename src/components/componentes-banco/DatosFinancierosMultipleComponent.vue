<template>
  <div>
    <v-card elevation="4" class="ma-5">
      <v-toolbar dense flat>
        <v-toolbar-title>
          <span class="plomo_868686--text">
            <strong> OBTIENE DATOS FINANCIEROS DE UNA PERSONA</strong></span
          ></v-toolbar-title
        >
      </v-toolbar>
      <div class="pa-5">
       

        <v-container
          fluid
          row
          v-if="Object.entries(objDatosFinancieros).length != 0"
        >
          <v-card outlined class="ma-2"  max-width="300">
            <v-card-title>DATOS GENERALES</v-card-title>
            <v-card-text>
              <div class="font-weight-normal">
                <strong>Tipo de Producto: </strong>
                {{ objDatosFinancieros.tipoDeProducto }}
              </div>
              <div class="font-weight-normal">
                <strong>Moneda Solicitado: </strong>
                {{ objDatosFinancieros.monedaSolicitado }}
              </div>
              <div class="font-weight-normal">
                <strong>Monto Solicitado: </strong>
                {{ objDatosFinancieros.montoSolicitado }}
              </div>
              <div class="font-weight-normal">
                <strong>Plazo de Crédito: </strong>
                {{ objDatosFinancieros.plazoCredito }}
              </div>
              <div class="font-weight-normal">
                <strong>Departamento: </strong>
                {{ objDatosFinancieros.departamento }}
              </div>
              <div class="font-weight-normal">
                <strong>Ciudad: </strong> {{ objDatosFinancieros.ciudad }}
              </div>
            </v-card-text>
          </v-card>
          <v-card outlined class="ma-2"  max-width="300">
            <v-card-title>Línea de Crédito</v-card-title>
            <v-card-text>
              <div class="font-weight-normal">
                <strong>Número: </strong>
                {{ objDatosFinancieros.lineaDeCredito.numero }}
              </div>
              <div class="font-weight-normal">
                <strong>Moneda Aprobada: </strong>
                {{ objDatosFinancieros.lineaDeCredito.monedaAprobada }}
              </div>
              <div class="font-weight-normal">
                <strong>Monto Aprobado: </strong>
                {{ objDatosFinancieros.lineaDeCredito.montoAprobado }}
              </div>
              <div class="font-weight-normal">
                <strong>Fecha de vigencia : </strong>
                {{ objDatosFinancieros.lineaDeCredito.fechaDeVigencia }}
              </div>
            </v-card-text>
          </v-card>
          <v-card outlined class="ma-2"  max-width="300">
            <v-card-title>Deudores</v-card-title>
            <v-card-text>
              <div v-for="obj in objDatosFinancieros.deudores" :key="obj">
                <div class="font-weight-normal">
                  <strong>Tipo de Identificación : </strong>
                  {{ obj.tipoIdentificacion }}
                </div>
                <div class="font-weight-normal">
                  <strong>Número de Identificación : </strong>
                  {{ obj.numerodeIdentifiacion }}
                </div>
                <div class="font-weight-normal">
                  <strong>Complemento Identificación : </strong>
                  {{ obj.complementoIdentificacion }}
                </div>
                <div class="font-weight-normal">
                  <strong>Extensión Identificación : </strong>
                  {{ obj.extensionIdentificacion }}
                </div>
                <div class="font-weight-normal">
                  <strong>Tipo de Deudor : </strong>
                  <v-chip class="ma-2" color="primary" outlined pill small>
                    {{ obj.tipoDeDeudor }}
                  </v-chip>
                </div>
                <v-divider></v-divider>
              </div>
            </v-card-text>
          </v-card>
        </v-container>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  props:["objDatosFinancieros"],
  data() {
    return {
      vNroSolicitud: "",
      smsError: ""
    };
  },

};
</script>