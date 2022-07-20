<template>
  <v-container fluid row>
    <v-card outlined class="ma-2" max-width="270">
      <v-card-title class=" rosa_FFB695--text">DATOS GENERALES</v-card-title>
      <v-card-text>
        <div >
           <span class="font-weight-regular">{{ objDatosTodosPersona.tipoDoc + ": " }} </span>

          <span class="font-weight-thin">{{ objDatosTodosPersona.nroDoc }}</span>
        </div>

        <div >
           <span class="font-weight-regular">Nombre: </span>
          <span class="font-weight-thin">{{ objDatosTodosPersona.nombre }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Apellido Paterno: </span>
          <span class="font-weight-thin">{{ objDatosTodosPersona.apellidoPaterno }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Apellido Materno: </span>
         <span class="font-weight-thin"> {{ objDatosTodosPersona.apellidoMaterno }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Apellido de Casado: </span>
          <span class="font-weight-thin">{{ objDatosTodosPersona.apellidoDeCasada }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Sexo: </span>
          <span class="font-weight-thin">{{ objDatosTodosPersona.sexo }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Fecha de Nacimiento: </span>
          <span class="font-weight-thin">{{ objDatosTodosPersona.fechaDeNacimiento }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Correo Electrónico: </span>
          <span class="font-weight-thin">{{ objDatosTodosPersona.correoElectronico }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Estado Civil: </span>
         <span class="font-weight-thin"> {{ objDatosTodosPersona.estadoCivil }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Nacionalidad: </span>
         <span class="font-weight-thin"> {{ objDatosTodosPersona.nacionalidad }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Redes Sociales: </span>
         <span class="font-weight-thin"> {{ objDatosTodosPersona.redesSociales }}</span>
        </div>
        <div>
           <span class="font-weight-regular">Cantidad Hijos: </span>
         <span class="font-weight-thin"> {{ objDatosTodosPersona.cantidadHijos }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Ingreso Pesos: </span>
         <span class="font-weight-thin"> {{ objDatosTodosPersona.ingresoPesos }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Nivel Ingreso: </span>
          <span class="font-weight-thin">{{ objDatosTodosPersona.nivelIngresos }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Nivel Educación: </span>
          <span class="font-weight-thin">{{ objDatosTodosPersona.nivelEducacion }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Discapacitado: </span>
         <span class="font-weight-thin"> {{ objDatosTodosPersona.discapacitado }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Tipo de Vivienda: </span>
          <span class="font-weight-thin">{{ objDatosTodosPersona.tipoDeVivienda }}</span>
        </div>
        <div>
           <span class="font-weight-regular">Porcentaje Crédito Asumido: </span>
         <span class="font-weight-thin"> {{ objDatosTodosPersona.porcentajeCreditoAsumido }}</span>
        </div>
      </v-card-text>
    </v-card>
    <v-card outlined class="ma-2" max-width="270">
      <v-card-title class=" rosa_FFB695--text">INFORMACIÓN CONYUGUE</v-card-title>
      <v-card-text>
        <div >
          <span class="font-weight-regular">Nombre: </span>
          <span class="font-weight-thin">{{ objDatosTodosPersona.informacionDelConyuge.nombre }}</span>
        </div>
        <div >
          <span class="font-weight-regular">Apellido Paterno: </span>
         <span class="font-weight-thin"> {{ objDatosTodosPersona.informacionDelConyuge.apellidoPaterno }}</span>
        </div>
        <div >
          <span class="font-weight-regular">Apellido Materno:</span>
          <span class="font-weight-thin">{{ objDatosTodosPersona.informacionDelConyuge.apellidoMaterno }}</span>
        </div>
        <div >
          <span class="font-weight-regular">Apellido de Casado: </span>
         <span class="font-weight-thin"> {{ objDatosTodosPersona.informacionDelConyuge.apellidoDeCasada }}</span>
        </div>
        <div >
          <span class="font-weight-regular">Sexo: </span>
          <span class="font-weight-thin">{{ objDatosTodosPersona.informacionDelConyuge.sexo }}</span>
        </div>
        <div >
          <span class="font-weight-regular">Fecha de Nacimiento: </span>
        <span class="font-weight-thin">  {{ objDatosTodosPersona.informacionDelConyuge.fechaDeNacimiento }}</span>
        </div>
        <div >
          <span class="font-weight-regular">Correo Electrónico: </span>
         <span class="font-weight-thin"> {{ objDatosTodosPersona.informacionDelConyuge.correoElectronico }}</span>
        </div>
      </v-card-text>
    </v-card>
    <v-card outlined class="ma-2" max-width="270">
      <v-card-title class=" rosa_FFB695--text">INFORMACIÓN DE RESIDENCIA</v-card-title>
      <v-card-text>
        <div >
           <span class="font-weight-regular">Pais de Residencia: </span>
           <span class="font-weight-thin">{{ objDatosTodosPersona.informacionDeResidencia.paisDeResidencia }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Dirección: </span>
           <span class="font-weight-thin">{{ objDatosTodosPersona.informacionDeResidencia.direccion }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Departamento: </span>
           <span class="font-weight-thin">{{ objDatosTodosPersona.informacionDeResidencia.departamento }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Ciudad: </span>
           <span class="font-weight-thin">{{ objDatosTodosPersona.informacionDeResidencia.ciudad }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Teléfono: </span>
           <span class="font-weight-thin">{{ objDatosTodosPersona.informacionDeResidencia.telefono }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Celular: </span>
           <span class="font-weight-thin">{{ objDatosTodosPersona.informacionDeResidencia.celular }}</span>
        </div>
      </v-card-text>
    </v-card>
    <v-card outlined class="ma-2" max-width="270">
      <v-card-title class=" rosa_FFB695--text">INFORMACIÓN LABORAL</v-card-title>
      <v-card-text>
        <div >
           <span class="font-weight-regular">Lugar de Trabajo: </span>
         <span class="font-weight-thin"> {{ objDatosTodosPersona.informacionLaboral.lugarDeTrabajo }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Cargo: </span>
         <span class="font-weight-thin"> {{ objDatosTodosPersona.informacionLaboral.cargo }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Profesión: </span>
        <span class="font-weight-thin">  {{ objDatosTodosPersona.informacionLaboral.profesion }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Actividad Económica: </span>
          <span class="font-weight-thin">{{ objDatosTodosPersona.informacionLaboral.actividadEconomica }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Fecha de ingreso a Trabajo: </span>
          <span class="font-weight-thin">{{ objDatosTodosPersona.informacionLaboral.fechaDeIngresoAlTrabajo }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Domicilio Comercial: </span>
         <span class="font-weight-thin"> {{ objDatosTodosPersona.informacionLaboral.domicilioComercial }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Departamento: </span>
         <span class="font-weight-thin"> {{ objDatosTodosPersona.informacionLaboral.departamento }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Ciudad: </span>
          <span class="font-weight-thin">{{ objDatosTodosPersona.informacionLaboral.ciudad }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Telefóno: </span>
          <span class="font-weight-thin">{{ objDatosTodosPersona.informacionLaboral.telefono }}</span>
        </div>
        <div >
           <span class="font-weight-regular">Correo Electrónico: </span>
          <span class="font-weight-thin">{{ objDatosTodosPersona.informacionLaboral.correoElectronico }}</span>
        </div>
      </v-card-text>
    </v-card>
    <v-card outlined class="ma-2" max-width="279">
      <v-card-title class=" rosa_FFB695--text">REFERENCIAS</v-card-title>
      <v-card-text>
        <div v-for="obj in objDatosTodosPersona.referencias" :key="obj">
          <div >
             <span class="font-weight-regular">Tipo: </span>
            <span class="font-weight-thin"> {{ obj.tipo }}</span>
          </div>
          <div >
             <span class="font-weight-regular">Nombre: </span>
            <span class="font-weight-thin">{{ obj.nombre }}</span>
          </div>
          <div >
             <span class="font-weight-regular">Apellido Paterno: </span>
           <span class="font-weight-thin"> {{ obj.apellidoPaterno }}</span>
          </div>
          <div >
             <span class="font-weight-regular">Apellido Materno: </span>
            <span class="font-weight-thin">{{ obj.apellidoMaterno }}</span>
          </div>
          <div >
             <span class="font-weight-regular">Apellido Casado: </span>
            <span class="font-weight-thin">{{ obj.apellidoDeCasada }}</span>
          </div>
          <div >
             <span class="font-weight-regular">Relación: </span>
            <span class="font-weight-thin">{{ obj.relacion }}</span>
          </div>
          <div >
             <span class="font-weight-regular">Teléfono: </span>
            <span class="font-weight-thin">{{ obj.telefono }}</span>
          </div>
          <div >
             <span class="font-weight-regular">Correo Electrónico: </span>
           <span class="font-weight-thin"> {{ obj.correoElectronico }}</span>
          </div>
          <div >
             <span class="font-weight-regular">Entidad: </span>
           <span class="font-weight-thin"> {{ obj.entidad }}</span>
          </div>
          <v-divider></v-divider>
        </div>
      </v-card-text>
    </v-card>
    <v-card outlined class="ma-2" max-width="279">
      <v-card-title class=" rosa_FFB695--text">DATOS CUENTA</v-card-title>
      <v-card-text>
        <div v-for="obj in objDatosTodosPersona.lstDatosCuenta" :key="obj">
          <div >
             <span class="font-weight-regular">ID: </span>
           <span class="font-weight-thin"> {{ obj.id }}</span>
          </div>
          <div >
             <span class="font-weight-regular">Cuenta: </span>
           <span class="font-weight-thin"> {{ obj.cuenta }}</span>
          </div>
          <div >
             <span class="font-weight-regular">Moneda: </span>
           <span class="font-weight-thin"> {{ obj.moneda }}</span>
          </div>
          <div >
             <span class="font-weight-regular">Tipo de Producto: </span>
          <span class="font-weight-thin">  {{ obj.tipoProducto }}</span>
          </div>
          <div >
             <span class="font-weight-regular">Estado: </span>
           <span class="font-weight-thin"> {{ obj.estado }}</span>
          </div>
          <v-divider></v-divider>
        </div>
      </v-card-text>
    </v-card>
    <v-card outlined class="ma-2" max-width="279">
      <v-card-title class=" rosa_FFB695--text">LISTA NEGRA</v-card-title>
      <v-card-text>
        <div >
           <span class="font-weight-regular">Nombre Verificado: </span>
            <span class="font-weight-thin">  {{ objDatosTodosPersona.objListaNegra.nombreCompleto }}</span>
        </div>
        <v-alert dense text type="success">
             <span class="font-weight-thin"> {{ objDatosTodosPersona.objListaNegra.mensajeEjecucion }}</span>
        </v-alert>
      </v-card-text>
    </v-card>
    <v-card outlined class="ma-2" max-width="279">
      <v-card-title class=" rosa_FFB695--text">CÚMULO</v-card-title>
      <v-card-text>
        <div >
          <v-row cols="12" sm="6" md="3">
            <v-switch
              class="pl-8"
              dense
              v-model="vTipoDoc"
              color="primary"
              label="CI"
              value="CI"
            ></v-switch>

            <v-switch
              class="pl-8"
              dense
              v-model="vTipoDoc"
              color="primary"
              label="NIT"
              value="NIT"
            ></v-switch>
          </v-row>
          <v-row cols="12" sm="6" md="3">
            <v-text-field
              v-model="vNroDoc"
              outlined
              dense
              label="Nro Documento"
              hide-details
              clearable
            ></v-text-field>
          </v-row>
          <v-row cols="12" sm="6" md="3" class="pt-3">
            <v-autocomplete
              v-model="vExtencion"
              :items="lstExtencion"
              outlined
              dense
              label="Extensión"
              hide-details
              clearable
            ></v-autocomplete>
          </v-row>
          <v-row cols="12" sm="6" md="3" class="pt-3">
            <v-autocomplete
              v-model="vTipoProducto"
              :items="lstTipoProducto"
              item-value="value"
              item-text="text"
              outlined
              dense
              label="Tipo de Producto"
              hide-details
              clearable
            ></v-autocomplete>
          </v-row>
          <v-row cols="12" sm="6" md="3" class="pt-3">
            <v-autocomplete
              v-model="vTipoOperacion"
              :items="lstTipoOperacion"
              item-value="value"
              item-text="text"
              outlined
              dense
              label="Tipo de Operación"
              hide-details
              clearable
            ></v-autocomplete>
          </v-row>
          <v-row cols="12" sm="6" md="3" class="pt-3">
            <v-text-field
              v-model="vJts"
              outlined
              dense
              label="JTS"
              hide-details
            ></v-text-field>
          </v-row>
          <v-row cols="12" sm="6" md="3" class="pt-3">
            <v-chip
              class="ma-2"
              color="primary"
              text-color="white"
              @click="clickObtenerDatosCumulo()"
            >
              Verificar
            </v-chip>
          </v-row>
           <v-row v-if="vCumulo != ''">
          <v-row cols="12">
            <h3>Cúmulo</h3>
            <v-alert dense text type="success">
              {{ vCumulo }}
            </v-alert>
          </v-row>
        </v-row>
        <v-row v-if="smsErrorCumulo != ''">
          <v-col cols="12">
            <h3>Mensaje de Error</h3>
            <v-alert dense text type="error">
              {{ smsErrorCumulo }}
            </v-alert>
          </v-col>
        </v-row>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  props: ["objDatosTodosPersona"],
  data() {
    return {
      vExtencion: "",
      vNroDoc: "",
      vTipoDoc: "CI",
       vTipoProducto: "",
      vTipoOperacion: "",
      vJts: 0,

      //lstTipoDocumento: ["CI", "NIT"],
      lstExtencion: [
        "SC",
        "LP",
        "CB",
        "OR",
        "TJ",
        "BE",
        "CH",
        "PO",
        "PA",
        "PE",
      ],
      lstTipoProducto: [
        {
          value: "R",
          text: "Regulada",
        },
        {
          value: "N",
          text: "No Regulada",
        },
      ],
      lstTipoOperacion: [
        {
          value: "O",
          text: "Préstamo Nuevo",
        },
        {
          value: "P",
          text: "Préstamo Reprogramado",
        },
        {
          value: "OR",
          text: "Préstamo Refinanciado",
        },
      ],
      vCumulo: "",
      smsErrorCumulo: "",
    };
  },
  methods: {
    ...mapActions("api_banco", ["obtenerCumulo"]),
    ...mapMutations("api_banco", ["setDialogProgress"]),
    async clickObtenerDatosCumulo() {
      this.smsErrorCumulo = "";
      this.vCumulo = "";
      let param = {
        tipoDocumento: this.vTipoDoc,
        extension: this.vExtencion,
        numeroDocumento: this.vNroDoc,
        tipoproducto: this.vTipoProducto,
        jts: this.vJts,
        tipooperacion: this.vTipoOperacion,
      };
      this.setDialogProgress({mostrar:true,sms:'Verificando Cúmulo, espere...'});
      let r = await this.obtenerCumulo(param);

      // existe mensaje, mostrra error
      if (r.data && r.data.statusCode) {
        this.$notify({
          title: "RESPUESTA DEL SERVICIO",
          text:
            "<b>statusCode</b>: " +
            r.data.statusCode +
            "<br> <b>Message:</b> " +
            r.data.message,
          duration: 5000,
          type: "error",
        });
        this.smsErrorCumulo = r.data.message;
        this.setDialogProgress({mostrar:false,sms:''});
      }

      this.vCumulo = r.data.cumulo;
      if (this.vCumulo == 0) {
        this.$notify({
          title: "MENSAJE",
          text: "Cumulo devolvio Cero",
          duration: 5000,
          type: "error",
        });
      } else {
        this.$notify({
          title: "MENSAJE",
          text: "Cumulo devolvio " + this.vCumulo,
          duration: 5000,
          type: "success",
        });
      }
      this.setDialogProgress({mostrar:false,sms:''});
    },
  },
};
</script>
