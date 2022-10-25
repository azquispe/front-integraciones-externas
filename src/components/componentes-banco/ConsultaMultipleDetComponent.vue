<template>
  <v-container fluid row>
    <v-card outlined class="ma-2 pa-2" max-width="270">
      <span class="title rosa_FFB695--text">DATOS GENERALES</span><br />

      <div>
        <span class="font-weight-regular primary--text"
          ><b>{{ objDatosTodosPersona.tipoDoc + ": " }}</b>
        </span>

        <span class="font-weight-regular primary--text"
          ><b>{{ objDatosTodosPersona.nroDoc }}</b></span
        >
        <span class="font-weight-regular primary--text"
          ><b>{{ " " + objDatosTodosPersona.extencion }}</b></span
        >
        <v-chip class="ma-2" color="primary" outlined pill small>
          <span class="font-weight-thin">
            {{ objDatosTodosPersona.tipoDeDeudor }}</span
          >
        </v-chip>
      </div>

      <div>
        <span class="font-weight-regular">Nombre: </span>
        <span class="font-weight-thin">{{ objDatosTodosPersona.nombre }}</span>
      </div>
      <div>
        <span class="font-weight-regular">Apellido Paterno: </span>
        <span class="font-weight-thin">{{
          objDatosTodosPersona.apellidoPaterno
        }}</span>
      </div>
      <div>
        <span class="font-weight-regular">Apellido Materno: </span>
        <span class="font-weight-thin">
          {{ objDatosTodosPersona.apellidoMaterno }}</span
        >
      </div>
      <div>
        <span class="font-weight-regular">Apellido de Casado: </span>
        <span class="font-weight-thin">{{
          objDatosTodosPersona.apellidoDeCasada
        }}</span>
      </div>
      <div>
        <span class="font-weight-regular">Sexo: </span>
        <span class="font-weight-thin">{{ objDatosTodosPersona.sexo }}</span>
      </div>
      <div>
        <span class="font-weight-regular">Fecha de Nacimiento: </span>
        <span class="font-weight-thin">{{
          objDatosTodosPersona.fechaDeNacimiento
        }}</span>
      </div>
      <div>
        <span class="font-weight-regular">Correo Electrónico: </span>
        <span class="font-weight-thin">{{
          objDatosTodosPersona.correoElectronico
        }}</span>
      </div>
      <div>
        <span class="font-weight-regular">Estado Civil: </span>
        <span class="font-weight-thin">
          {{ objDatosTodosPersona.estadoCivil }}</span
        >
      </div>
      <div>
        <span class="font-weight-regular">Nacionalidad: </span>
        <span class="font-weight-thin">
          {{ objDatosTodosPersona.nacionalidad }}</span
        >
      </div>
      <div>
        <span class="font-weight-regular">Redes Sociales: </span>
        <span class="font-weight-thin">
          {{ objDatosTodosPersona.redesSociales }}</span
        >
      </div>
      <div>
        <span class="font-weight-regular">Cantidad Hijos: </span>
        <span class="font-weight-thin">
          {{ objDatosTodosPersona.cantidadHijos }}</span
        >
      </div>
      <div>
        <span class="font-weight-regular">Ingreso Pesos: </span>
        <span class="font-weight-thin">
          {{ objDatosTodosPersona.ingresoPesos }}</span
        >
      </div>
      <div>
        <span class="font-weight-regular">Nivel Ingreso: </span>
        <span class="font-weight-thin">{{
          objDatosTodosPersona.nivelIngresos
        }}</span>
      </div>
      <div>
        <span class="font-weight-regular">Nivel Educación: </span>
        <span class="font-weight-thin">{{
          objDatosTodosPersona.nivelEducacion
        }}</span>
      </div>
      <div>
        <span class="font-weight-regular">Discapacitado: </span>
        <span class="font-weight-thin">
          {{ objDatosTodosPersona.discapacitado }}</span
        >
      </div>
      <div>
        <span class="font-weight-regular">Tipo de Vivienda: </span>
        <span class="font-weight-thin">{{
          objDatosTodosPersona.tipoDeVivienda
        }}</span>
      </div>
      <div>
        <span class="font-weight-regular">Porcentaje Crédito Asumido: </span>
        <span class="font-weight-thin">
          {{ objDatosTodosPersona.porcentajeCreditoAsumido }}</span
        >
      </div>
    </v-card>
    <v-card outlined class="ma-2 pa-2" max-width="270">
      <span class="title rosa_FFB695--text">INFORMACIÓN CONYUGUE</span><br />

      <div>
        <span class="font-weight-regular">Nombre: </span>
        <span class="font-weight-thin">{{
          objDatosTodosPersona.informacionDelConyuge.nombre
        }}</span>
      </div>
      <div>
        <span class="font-weight-regular">Apellido Paterno: </span>
        <span class="font-weight-thin">
          {{ objDatosTodosPersona.informacionDelConyuge.apellidoPaterno }}</span
        >
      </div>
      <div>
        <span class="font-weight-regular">Apellido Materno:</span>
        <span class="font-weight-thin">{{
          objDatosTodosPersona.informacionDelConyuge.apellidoMaterno
        }}</span>
      </div>
      <div>
        <span class="font-weight-regular">Apellido de Casado: </span>
        <span class="font-weight-thin">
          {{
            objDatosTodosPersona.informacionDelConyuge.apellidoDeCasada
          }}</span
        >
      </div>
      <div>
        <span class="font-weight-regular">Sexo: </span>
        <span class="font-weight-thin">{{
          objDatosTodosPersona.informacionDelConyuge.sexo
        }}</span>
      </div>
      <div>
        <span class="font-weight-regular">Fecha de Nacimiento: </span>
        <span class="font-weight-thin">
          {{
            objDatosTodosPersona.informacionDelConyuge.fechaDeNacimiento
          }}</span
        >
      </div>
      <div>
        <span class="font-weight-regular">Correo Electrónico: </span>
        <span class="font-weight-thin">
          {{
            objDatosTodosPersona.informacionDelConyuge.correoElectronico
          }}</span
        >
      </div>
    </v-card>
    <v-card outlined class="ma-2 pa-2" max-width="270">
      <span class="title rosa_FFB695--text">INFORMACIÓN DE RESIDENCIA</span
      ><br />

      <div>
        <span class="font-weight-regular">Pais de Residencia: </span>
        <span class="font-weight-thin">{{
          objDatosTodosPersona.informacionDeResidencia.paisDeResidencia
        }}</span>
      </div>
      <div>
        <span class="font-weight-regular">Dirección: </span>
        <span class="font-weight-thin">{{
          objDatosTodosPersona.informacionDeResidencia.direccion
        }}</span>
      </div>
      <div>
        <span class="font-weight-regular">Departamento: </span>
        <span class="font-weight-thin">{{
          objDatosTodosPersona.informacionDeResidencia.departamento
        }}</span>
      </div>
      <div>
        <span class="font-weight-regular">Ciudad: </span>
        <span class="font-weight-thin">{{
          objDatosTodosPersona.informacionDeResidencia.ciudad
        }}</span>
      </div>
      <div>
        <span class="font-weight-regular">Teléfono: </span>
        <span class="font-weight-thin">{{
          objDatosTodosPersona.informacionDeResidencia.telefono
        }}</span>
      </div>
      <div>
        <span class="font-weight-regular">Celular: </span>
        <span class="font-weight-thin">{{
          objDatosTodosPersona.informacionDeResidencia.celular
        }}</span>
      </div>
    </v-card>
    <v-card outlined class="ma-2 pa-2" max-width="270">
      <span class="title rosa_FFB695--text">INFORMACIÓN LABORAL</span><br />

      <div>
        <span class="font-weight-regular">Lugar de Trabajo: </span>
        <span class="font-weight-thin">
          {{ objDatosTodosPersona.informacionLaboral.lugarDeTrabajo }}</span
        >
      </div>
      <div>
        <span class="font-weight-regular">Cargo: </span>
        <span class="font-weight-thin">
          {{ objDatosTodosPersona.informacionLaboral.cargo }}</span
        >
      </div>
      <div>
        <span class="font-weight-regular">Profesión: </span>
        <span class="font-weight-thin">
          {{ objDatosTodosPersona.informacionLaboral.profesion }}</span
        >
      </div>
      <div>
        <span class="font-weight-regular">Actividad Económica: </span>
        <span class="font-weight-thin">{{
          objDatosTodosPersona.informacionLaboral.actividadEconomica
        }}</span>
      </div>
      <div>
        <span class="font-weight-regular">Fecha de ingreso a Trabajo: </span>
        <span class="font-weight-thin">{{
          objDatosTodosPersona.informacionLaboral.fechaDeIngresoAlTrabajo
        }}</span>
      </div>
      <div>
        <span class="font-weight-regular">Domicilio Comercial: </span>
        <span class="font-weight-thin">
          {{ objDatosTodosPersona.informacionLaboral.domicilioComercial }}</span
        >
      </div>
      <div>
        <span class="font-weight-regular">Departamento: </span>
        <span class="font-weight-thin">
          {{ objDatosTodosPersona.informacionLaboral.departamento }}</span
        >
      </div>
      <div>
        <span class="font-weight-regular">Ciudad: </span>
        <span class="font-weight-thin">{{
          objDatosTodosPersona.informacionLaboral.ciudad
        }}</span>
      </div>
      <div>
        <span class="font-weight-regular">Telefóno: </span>
        <span class="font-weight-thin">{{
          objDatosTodosPersona.informacionLaboral.telefono
        }}</span>
      </div>
      <div>
        <span class="font-weight-regular">Correo Electrónico: </span>
        <span class="font-weight-thin">{{
          objDatosTodosPersona.informacionLaboral.correoElectronico
        }}</span>
      </div>
    </v-card>

    <v-card outlined class="ma-2 pa-2" max-width="279">
      <span class="title rosa_FFB695--text">DATOS CUENTA</span><br />

      <div v-for="obj in objDatosTodosPersona.lstDatosCuenta" :key="obj">
        <div>
          <span class="font-weight-regular">ID: </span>
          <span class="font-weight-thin"> {{ obj.id }}</span>
        </div>
        <div>
          <span class="font-weight-regular">Cuenta: </span>
          <span class="font-weight-thin"> {{ obj.cuenta }}</span>
        </div>
        <div>
          <span class="font-weight-regular">Moneda: </span>
          <span class="font-weight-thin"> {{ obj.moneda }}</span>
        </div>
        <div>
          <span class="font-weight-regular">Tipo de Producto: </span>
          <span class="font-weight-thin"> {{ obj.tipoProducto }}</span>
        </div>
        <div>
          <span class="font-weight-regular">Estado: </span>
          <span class="font-weight-thin"> {{ obj.estado }}</span>
        </div>
        <v-divider></v-divider>
      </div>
    </v-card>
    <v-card outlined class="ma-2 pa-2" max-width="279">
      <span class="title rosa_FFB695--text">LISTA NEGRA</span><br />

      <div>
        <span class="font-weight-regular">Nombre Verificado: </span>
        <span class="font-weight-thin">
          {{ objDatosTodosPersona.objListaNegra.nombreCompleto }}</span
        >
      </div>
      <v-alert dense text type="success">
        <span class="font-weight-thin">
          {{ objDatosTodosPersona.objListaNegra.mensajeEjecucion }}</span
        >
      </v-alert>
    </v-card>
    <v-card outlined class="ma-2 pa-2" max-width="279">
      <span class="title rosa_FFB695--text">CÚMULO</span><br />

      <div class="pa-3">
        <v-row cols="12" sm="6" md="3">
          <v-switch
            class="pl-8"
            dense
            v-model="objDatosTodosPersona.tipoDoc"
            color="primary"
            label="CI"
            value="CI"
            @keyup.tab.native="$refs.refNroDoc.focus()"
          ></v-switch>

          <v-switch
            class="pl-8"
            dense
            v-model="objDatosTodosPersona.tipoDoc"
            color="primary"
            label="NIT"
            value="NIT"
            @keyup.tab.native="$refs.refNroDoc.focus()"
          ></v-switch>
        </v-row>
        <v-row cols="12" sm="6" md="3">
          
          <v-text-field
            v-model="objDatosTodosPersona.nroDoc"
            ref="refNroDoc"
            @keyup.tab.native="$refs.refComDoc.focus()"
            outlined
            dense
            label="Nro Documento"
            hide-details
            clearable
          ></v-text-field>
        </v-row>
        <v-row  cols="12" sm="6" md="3" class="pt-3">

           <v-text-field
            ref="refComDoc"
            v-model="objDatosTodosPersona.complementoIdentificacion"
            maxlength="3"
            outlined
            dense
            label="Complemento"
            clearable
            hide-details
            @keyup.tab.native="$refs.refExtencion.focus()"
          ></v-text-field>

        </v-row>
        <v-row cols="12" sm="6" md="3" class="pt-3">
          <v-autocomplete
            ref="refExtencion"
            @keyup.tab.native="$refs.refTipoProducto.focus()"
            v-model="objDatosTodosPersona.extencion"
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
            ref="refTipoProducto"
            @keyup.tab.native="$refs.refTipoOperacion.focus()"
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
            ref="refTipoOperacion"
            @keyup.tab.native="$refs.refJts.focus()"
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
            ref="refJts"
            @keyup.tab.native="$refs.refTipoMoneda.focus()"
            v-model="vNroOperacionCancelar"
            outlined
            dense
            label="Número Operación Cancelar"
            hide-details
          ></v-text-field>
        </v-row>
        <v-row cols="12" sm="6" md="3" class="pt-3">
         
          <v-autocomplete
            ref="refTipoMoneda"
            v-model="vTipoMoneda"
            :items="lstTipoMoneda"
            item-value="value"
            item-text="text"
            outlined
            dense
            label="Tipo de Moneda"
            hide-details
            clearable
            @keyup.tab.native="$refs.refBtnObtenerDatosCumulo.focus()"
          ></v-autocomplete>
        
        </v-row>
        
        <v-row cols="12" sm="6" md="3" class="pt-3">
          <v-chip
            ref="refBtnObtenerDatosCumulo"
            class="ma-2 pa-2"
            color="primary"
            text-color="white"
            @click="clickObtenerDatosCumulo()"
          >
            Verificar
          </v-chip>
        </v-row>

        <v-col v-if="vCumulo != ''">
          <h3>Cúmulo</h3>
          <br />
          <v-row cols="12">
            <v-alert dense text type="success">
              {{ vCumulo }}
            </v-alert>
          </v-row>
        </v-col>
        <v-row v-if="smsErrorCumulo != ''">
          <v-col cols="12">
            <h3>Mensaje de Error</h3>
            <v-alert dense text type="error">
              {{ smsErrorCumulo }}
            </v-alert>
          </v-col>
        </v-row>
      </div>
    </v-card>
    <v-card outlined class="ma-2 pa-2" max-width="279">
      <span class="title rosa_FFB695--text">REFERENCIAS</span><br />

      <div v-for="obj in objDatosTodosPersona.referencias" :key="obj">
        <div>
          <span class="font-weight-regular">Tipo: </span>
          <span class="font-weight-thin"> {{ obj.tipo }}</span>
        </div>
        <div>
          <span class="font-weight-regular">Nombre: </span>
          <span class="font-weight-thin">{{ obj.nombre }}</span>
        </div>
        <div>
          <span class="font-weight-regular">Apellido Paterno: </span>
          <span class="font-weight-thin"> {{ obj.apellidoPaterno }}</span>
        </div>
        <div>
          <span class="font-weight-regular">Apellido Materno: </span>
          <span class="font-weight-thin">{{ obj.apellidoMaterno }}</span>
        </div>
        <div>
          <span class="font-weight-regular">Apellido Casado: </span>
          <span class="font-weight-thin">{{ obj.apellidoDeCasada }}</span>
        </div>
        <div>
          <span class="font-weight-regular">Relación: </span>
          <span class="font-weight-thin">{{ obj.relacion }}</span>
        </div>
        <div>
          <span class="font-weight-regular">Teléfono: </span>
          <span class="font-weight-thin">{{ obj.telefono }}</span>
        </div>
        <div>
          <span class="font-weight-regular">Correo Electrónico: </span>
          <span class="font-weight-thin"> {{ obj.correoElectronico }}</span>
        </div>
        <div>
          <span class="font-weight-regular">Entidad: </span>
          <span class="font-weight-thin"> {{ obj.entidad }}</span>
        </div>
        <v-divider></v-divider>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  props: ["objDatosTodosPersona"],
  data() {
    return {
      //vExtencion: "",
      //vNroDoc: "",
      //vTipoDoc: "CI",
      vTipoProducto: "",
      vTipoOperacion: "",
      vNroOperacionCancelar: 0,
      vTipoMoneda: "0",
      lstTipoMoneda: [
        {
          value: "0",
          text: "Bolivianos (0)",
        },
        {
          value: "2225",
          text: "Dolares (2225)",
        },
      ],
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
          text: "Regulada (R)",
        },
        {
          value: "N",
          text: "No Regulada (N)",
        },
      ],
      lstTipoOperacion: [
        {
          value: "O",
          text: "Préstamo Nuevo (O)",
        },
        {
          value: "P",
          text: "Préstamo Reprogramado (P)",
        },
        {
          value: "OR",
          text: "Préstamo Refinanciado (OR)",
        },
        {
          value: "T",
          text: "Tarjetas (T)",
        },
        {
          value: "A",
          text: "Líneas (A)",
        },
      ],
      vCumulo: "",
      smsErrorCumulo: "",
    };
  },
  methods: {
    ...mapActions("api_banco", ["obtenerCumulo"]),
    ...mapMutations("utils", ["setDialogProgress"]),
    async clickObtenerDatosCumulo() {
      this.smsErrorCumulo = "";
      this.vCumulo = "";
      let param = {
        tipoDocumento: this.objDatosTodosPersona.tipoDoc,
        extension: this.objDatosTodosPersona.extencion,
        numeroDocumento: this.objDatosTodosPersona.nroDoc,
        extDuplicado : this.objDatosTodosPersona.complementoIdentificacion.trim(),
        tipoproducto: this.vTipoProducto,
        nroOperacionCancelar: this.vNroOperacionCancelar,
        tipooperacion: this.vTipoOperacion,
        codmoneda:this.vTipoMoneda
      };
      this.setDialogProgress({
        mostrar: true,
        sms: "Verificando Cúmulo, espere...",
      });
      let r = await this.obtenerCumulo(param);

      // existe mensaje, mostrra error
      if (r.data && r.data.statusCode) {
        this.smsErrorCumulo = r.data.message;
        this.setDialogProgress({ mostrar: false, sms: "" });
        return;
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
      this.setDialogProgress({ mostrar: false, sms: "" });
    },
  },
};
</script>
