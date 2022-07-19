<template>
  <div>
    <v-card elevation="4" class="ma-5">
      <v-toolbar dense flat>
        <v-toolbar-title>
          <span class="plomo_868686--text">
            <strong> OBTIENE DATOS PERSONA</strong></span
          ></v-toolbar-title
        >
      </v-toolbar>
      <div class="pa-5">
        <v-row>
          <v-row cols="12" sm="6" md="3">
            <!--<v-autocomplete
              v-model="vTipoDoc"
              :items="lstTipoDocumento"
              outlined
              dense
              label="Tipo de Documento"
              hide-details
              clearable
            ></v-autocomplete>-->

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
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              v-model="vNroDoc"
              outlined
              dense
              label="Número Documento"
              clearable
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3" v-if="this.vTipoDoc === 'CI'">
            <v-autocomplete
              v-model="vExtencion"
              :items="lstExtencion"
              outlined
              dense
              label="Extensión"
              hide-details
              clearable
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-chip
              class="ma-2"
              color="primary"
              text-color="white"
              @click="clickObtenerDatosPersona()"
            >
              Verificar
            </v-chip>
          </v-col>
        </v-row>
        <v-row v-if="smsError != ''">
          <v-col cols="12">
            <h3>Mensaje de Error</h3>
            <v-alert dense text type="error">
              {{ smsError }}
            </v-alert>
          </v-col>
        </v-row>
      </div>
      <v-container fluid row v-if="Object.entries(objDatosPersona).length != 0">
        <v-card outlined class="ma-2" max-width="300">
          <v-card-title>&nbsp;</v-card-title>
          <v-card-text>
            <div class="font-weight-normal">
              <strong>Nombre: </strong>
              {{ objDatosPersona.nombre }}
            </div>
            <div class="font-weight-normal">
              <strong>Apellido Paterno: </strong>
              {{ objDatosPersona.apellidoPaterno }}
            </div>
            <div class="font-weight-normal">
              <strong>Apellido Materno: </strong>
              {{ objDatosPersona.apellidoMaterno }}
            </div>
            <div class="font-weight-normal">
              <strong>Apellido de Casado: </strong>
              {{ objDatosPersona.apellidoDeCasada }}
            </div>
            <div class="font-weight-normal">
              <strong>Sexo: </strong>
              {{ objDatosPersona.sexo }}
            </div>
            <div class="font-weight-normal">
              <strong>Fecha de Nacimiento: </strong>
              {{ objDatosPersona.fechaDeNacimiento }}
            </div>
            <div class="font-weight-normal">
              <strong>Correo Electrónico: </strong>
              {{ objDatosPersona.correoElectronico }}
            </div>
            <div class="font-weight-normal">
              <strong>Estado Civil: </strong>
              {{ objDatosPersona.estadoCivil }}
            </div>
            <div class="font-weight-normal">
              <strong>Nacionalidad: </strong>
              {{ objDatosPersona.nacionalidad }}
            </div>
            <div class="font-weight-normal">
              <strong>Redes Sociales: </strong>
              {{ objDatosPersona.redesSociales }}
            </div>
            <div class="font-weight-normal">
              <strong>Cantidad Hijos: </strong>
              {{ objDatosPersona.cantidadHijos }}
            </div>
            <div class="font-weight-normal">
              <strong>Ingreso Pesos: </strong>
              {{ objDatosPersona.ingresoPesos }}
            </div>
            <div class="font-weight-normal">
              <strong>Nivel Ingreso: </strong>
              {{ objDatosPersona.nivelIngresos }}
            </div>
            <div class="font-weight-normal">
              <strong>Nivel Educación: </strong>
              {{ objDatosPersona.nivelEducacion }}
            </div>
            <div class="font-weight-normal">
              <strong>Discapacitado: </strong>
              {{ objDatosPersona.discapacitado }}
            </div>
            <div class="font-weight-normal">
              <strong>Tipo de Vivienda: </strong>
              {{ objDatosPersona.tipoDeVivienda }}
            </div>
            <div class="font-weight-normal">
              <strong>Porcentaje Crédito Asumido: </strong>
              {{ objDatosPersona.porcentajeCreditoAsumido }}
            </div>
          </v-card-text>
        </v-card>
        <v-card outlined class="ma-2" max-width="300">
          <v-card-title>INFORMACIÓN CONYUGUE</v-card-title>
          <v-card-text>
            <div class="font-weight-normal">
              <strong>Nombre: </strong>
              {{ objDatosPersona.informacionDelConyuge.nombre }}
            </div>
            <div class="font-weight-normal">
              <strong>Apellido Paterno: </strong>
              {{ objDatosPersona.informacionDelConyuge.apellidoPaterno }}
            </div>
            <div class="font-weight-normal">
              <strong>Apellido Materno: </strong>
              {{ objDatosPersona.informacionDelConyuge.apellidoMaterno }}
            </div>
            <div class="font-weight-normal">
              <strong>Apellido de Casado: </strong>
              {{ objDatosPersona.informacionDelConyuge.apellidoDeCasada }}
            </div>
            <div class="font-weight-normal">
              <strong>Sexo: </strong>
              {{ objDatosPersona.informacionDelConyuge.sexo }}
            </div>
            <div class="font-weight-normal">
              <strong>Fecha de Nacimiento: </strong>
              {{ objDatosPersona.informacionDelConyuge.fechaDeNacimiento }}
            </div>
            <div class="font-weight-normal">
              <strong>Correo Electrónico: </strong>
              {{ objDatosPersona.informacionDelConyuge.correoElectronico }}
            </div>
          </v-card-text>
        </v-card>
        <v-card outlined class="ma-2" max-width="300">
          <v-card-title>INFORMACIÓN DE RESIDENCIA</v-card-title>
          <v-card-text>
            <div class="font-weight-normal">
              <strong>Pais de Residencia: </strong>
              {{ objDatosPersona.informacionDeResidencia.paisDeResidencia }}
            </div>
            <div class="font-weight-normal">
              <strong>Dirección: </strong>
              {{ objDatosPersona.informacionDeResidencia.direccion }}
            </div>
            <div class="font-weight-normal">
              <strong>Departamento: </strong>
              {{ objDatosPersona.informacionDeResidencia.departamento }}
            </div>
            <div class="font-weight-normal">
              <strong>Ciudad: </strong>
              {{ objDatosPersona.informacionDeResidencia.ciudad }}
            </div>
            <div class="font-weight-normal">
              <strong>Teléfono: </strong>
              {{ objDatosPersona.informacionDeResidencia.telefono }}
            </div>
            <div class="font-weight-normal">
              <strong>Celular: </strong>
              {{ objDatosPersona.informacionDeResidencia.celular }}
            </div>
          </v-card-text>
        </v-card>
        <v-card outlined class="ma-2" max-width="300">
          <v-card-title>INFORMACIÓN LABORAL</v-card-title>
          <v-card-text>
            <div class="font-weight-normal">
              <strong>Lugar de Trabajo: </strong>
              {{ objDatosPersona.informacionLaboral.lugarDeTrabajo }}
            </div>
            <div class="font-weight-normal">
              <strong>Cargo: </strong>
              {{ objDatosPersona.informacionLaboral.cargo }}
            </div>
            <div class="font-weight-normal">
              <strong>Profesión: </strong>
              {{ objDatosPersona.informacionLaboral.profesion }}
            </div>
            <div class="font-weight-normal">
              <strong>Actividad Económica: </strong>
              {{ objDatosPersona.informacionLaboral.actividadEconomica }}
            </div>
            <div class="font-weight-normal">
              <strong>Fecha de ingreso a Trabajo: </strong>
              {{ objDatosPersona.informacionLaboral.fechaDeIngresoAlTrabajo }}
            </div>
            <div class="font-weight-normal">
              <strong>Domicilio Comercial: </strong>
              {{ objDatosPersona.informacionLaboral.domicilioComercial }}
            </div>
            <div class="font-weight-normal">
              <strong>Departamento: </strong>
              {{ objDatosPersona.informacionLaboral.departamento }}
            </div>
            <div class="font-weight-normal">
              <strong>Ciudad: </strong>
              {{ objDatosPersona.informacionLaboral.ciudad }}
            </div>
            <div class="font-weight-normal">
              <strong>Telefóno: </strong>
              {{ objDatosPersona.informacionLaboral.telefono }}
            </div>
            <div class="font-weight-normal">
              <strong>Correo Electrónico: </strong>
              {{ objDatosPersona.informacionLaboral.correoElectronico }}
            </div>
          </v-card-text>
        </v-card>
        <v-card outlined class="ma-2" max-width="300">
          <v-card-title>REFERENCIAS</v-card-title>
          <v-card-text>
            <div v-for="obj in objDatosPersona.referencias" :key="obj">
              <div class="font-weight-normal">
                <strong>Tipo: </strong>
                {{ obj.tipo }}
              </div>
              <div class="font-weight-normal">
                <strong>Nombre: </strong>
                {{ obj.nombre }}
              </div>
              <div class="font-weight-normal">
                <strong>Apellido Paterno: </strong>
                {{ obj.apellidoPaterno }}
              </div>
              <div class="font-weight-normal">
                <strong>Apellido Materno: </strong>
                {{ obj.apellidoMaterno }}
              </div>
              <div class="font-weight-normal">
                <strong>Apellido Casado: </strong>
                {{ obj.apellidoDeCasada }}
              </div>
              <div class="font-weight-normal">
                <strong>Relación: </strong>
                {{ obj.relacion }}
              </div>
              <div class="font-weight-normal">
                <strong>Teléfono: </strong>
                {{ obj.telefono }}
              </div>
              <div class="font-weight-normal">
                <strong>Correo Electrónico: </strong>
                {{ obj.correoElectronico }}
              </div>
              <div class="font-weight-normal">
                <strong>Entidad: </strong>
                {{ obj.entidad }}
              </div>
              <v-divider></v-divider>
            </div>
          </v-card-text>
        </v-card>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      smsError: "",
      vExtencion: "",
      vNroDoc: "",
      vTipoDoc: "CI",
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
      objDatosPersona: {},
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
        {
          text: "Porcentaje Crédito Asumido ",
          value: "porcentajeCreditoAsumido",
        },
        { text: "Información Conyuge ", value: "informacionDelConyuge" },
        { text: "Información Residencia ", value: "informacionDeResidencia" },
        { text: "Información Laboral ", value: "informacionLaboral" },
        { text: "Referencias ", value: "referencias" },
      ],
    };
  },
  methods: {
    ...mapMutations("api_banco", ["setDialogProgress"]),
    ...mapActions("api_banco", ["obtenerDatosPersona"]),

    async clickObtenerDatosPersona() {
      this.smsError = "";
      this.setDialogProgress(true);
      this.objDatosPersona = {};

      let obj = {
        tipoDocumento: this.vTipoDoc.trim(),
        extension: this.vExtencion,
        numeroDocumento: this.vNroDoc.trim(),
      };
      let r = await this.obtenerDatosPersona(obj);
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
        this.smsError = r.data.message;
        this.setDialogProgress(false);
        return;
      }

      this.objDatosPersona = r.data;
      this.$notify({
        title: "Mensaje",
        text: "Busqueda Exitosa",
        duration: 2000,
        type: "success",
      });
      this.setDialogProgress(false);
    },
  },
};
</script>
