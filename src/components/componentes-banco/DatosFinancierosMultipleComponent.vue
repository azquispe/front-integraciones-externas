<template>
  <div>
    <v-card elevation="4" class="ma-5">
      <v-toolbar dense flat>
        <v-toolbar-title>
          <span class="verde_53A808--text">
            <strong
              ><u>DATOS FINANCIEROS</u></strong
            ></span
          ></v-toolbar-title
        >
      </v-toolbar>
      <div class="pa-5">
        <v-container
          fluid
          row
          v-if="Object.entries(objDatosFinancieros).length != 0"
        >
          <v-card outlined class="ma-2 pa-2" max-width="300">
            <span class="title rosa_FFB695--text">DATOS GENERALES</span><br>
            
              <div>
                <span class="font-weight-regular"> Tipo de Producto:</span>
                <span class="font-weight-thin">
                  {{ objDatosFinancieros.tipoDeProducto }}
                </span>
              </div>
              <div>
                <span class="font-weight-regular">Moneda Solicitado: </span>
                <span class="font-weight-thin">
                  {{ objDatosFinancieros.monedaSolicitado }}
                </span>
              </div>
              <div >
                <span class="font-weight-regular">Monto Solicitado: </span>
                 <span class="font-weight-thin">{{ objDatosFinancieros.montoSolicitado }}</span>
              </div>
              <div>
                <span class="font-weight-regular">Plazo de Crédito: </span>
                <span class="font-weight-thin"> {{ objDatosFinancieros.plazoCredito }}</span>
              </div>
              <div>
                <span class="font-weight-regular">Departamento: </span>
                <span class="font-weight-thin"> {{ objDatosFinancieros.departamento }}</span>
              </div>
              <div >
                 <span class="font-weight-regular">Ciudad: </span> <span class="font-weight-thin"> {{ objDatosFinancieros.ciudad }}</span>
              </div>
            
          </v-card>
          <v-card outlined class="ma-2 pa-2" max-width="300">
            <span class="title rosa_FFB695--text">LÍNEA DE CRÉDITO</span><br>
            
              <div >
                 <span class="font-weight-regular"> Número: </span>
                <span class="font-weight-thin">{{ objDatosFinancieros.lineaDeCredito.numero }}</span>
              </div>
              <div >
                 <span class="font-weight-regular">Moneda Aprobada: </span>
                <span class="font-weight-thin">{{ objDatosFinancieros.lineaDeCredito.monedaAprobada }}</span>
              </div>
              <div >
                 <span class="font-weight-regular">Monto Aprobado: </span>
                <span class="font-weight-thin">{{ objDatosFinancieros.lineaDeCredito.montoAprobado }}</span>
              </div>
              <div >
                 <span class="font-weight-regular">Fecha de vigencia : </span>
                <span class="font-weight-thin">{{ objDatosFinancieros.lineaDeCredito.fechaDeVigencia }}</span>
              </div>
            
          </v-card>
          <v-card outlined class="ma-2 pa-2" max-width="300">
             <span class="title rosa_FFB695--text">DEUDORES</span><br>


            
              <div v-for="obj in objDatosFinancieros.deudores" :key="obj">
                <div >
                  <span class="font-weight-regular">Tipo de Identificación : </span>
                  <span class="font-weight-thin">{{ obj.tipoIdentificacion }}</span>
                </div>
                <div >
                  <span class="font-weight-regular">Número de Identificación : </span>
                  <span class="font-weight-thin">{{ obj.numerodeIdentifiacion }}</span>
                </div>
                <div>
                    <span class="font-weight-regular">Complemento Identificación : </span>
                  <span class="font-weight-thin">{{ obj.complementoIdentificacion }}</span>
                </div>
                <div >
                    <span class="font-weight-regular">Extensión Identificación : </span>
                  <span class="font-weight-thin">{{ obj.extensionIdentificacion }}</span>
                </div>
                <div >
                 <span class="font-weight-regular">Tipo de Deudor : </span>
                  <v-chip class="ma-2" color="primary" outlined pill small>
                    <span class="font-weight-thin">{{ obj.tipoDeDeudor }}</span>
                  </v-chip>
                </div>
                <v-divider></v-divider>
              </div>
            
          </v-card>
        </v-container>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  props: ["objDatosFinancieros"],
  data() {
    return {
      vNroSolicitud: "",
      smsError: "",
    };
  },
};
</script>