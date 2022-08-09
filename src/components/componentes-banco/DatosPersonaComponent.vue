<template>
  <div>
    <v-card elevation="4" class="ma-5">
      <v-toolbar dense flat>
        <v-toolbar-title>
          <span class="title verde_53A808--text">
            OBTIENE DATOS PERSONA</span
          ></v-toolbar-title
        >
      </v-toolbar>
      <div class="pa-5">
        <v-row>
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
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              ref="refNroDoc"
              @keyup.tab.native="$refs.refComDoc.focus()"
              v-model="vNroDoc"
              outlined
              dense
              label="Número Documento"
              clearable
              hide-details
            ></v-text-field>
          </v-col>
           <v-col cols="12" sm="6" md="3" v-if="this.vTipoDoc === 'CI'">
            <v-text-field
              ref="refComDoc"
              @keyup.tab.native="$refs.refExtencion.focus()"
              v-model="vComplemento"
              maxlength="3"
              outlined
              dense
              label="Complemento"
              clearable
              hide-details
            ></v-text-field>
           </v-col>
          <v-col cols="12" sm="6" md="3" v-if="this.vTipoDoc === 'CI'">
            <v-autocomplete
              ref="refExtencion"
              @keyup.tab.native="$refs.refBtnObtenerDatosPersona.focus()"
              v-model="vExtencion"
              :items="lstExtencion"
               item-value="value"
              item-text="text"
              outlined
              dense
              label="Extensión"
              hide-details
              clearable
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-chip
              ref="refBtnObtenerDatosPersona"
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
        <v-card outlined class="ma-2 pa-2" max-width="300">
          <span class="title rosa_FFB695--text">DATOS GENERALES</span>
          <br />
          <div>
            <span class="font-weight-regular">Nombre: </span>
            <span class="font-weight-thin">{{ objDatosPersona.nombre }} </span>
          </div>
          <div>
            <span class="font-weight-regular">Apellido Paterno: </span>
            <span class="font-weight-thin"
              >{{ objDatosPersona.apellidoPaterno }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Apellido Materno: </span>
            <span class="font-weight-thin"
              >{{ objDatosPersona.apellidoMaterno }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Apellido de Casado: </span>
            <span class="font-weight-thin"
              >{{ objDatosPersona.apellidoDeCasada }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Sexo: </span>
            <span class="font-weight-thin">{{ objDatosPersona.sexo }} </span>
          </div>
          <div>
            <span class="font-weight-regular">Fecha de Nacimiento: </span>
            <span class="font-weight-thin"
              >{{ objDatosPersona.fechaDeNacimiento }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Correo Electrónico: </span>
            <span class="font-weight-thin"
              >{{ objDatosPersona.correoElectronico }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Estado Civil: </span>
            <span class="font-weight-thin"
              >{{ objDatosPersona.estadoCivil }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Nacionalidad: </span>
            <span class="font-weight-thin"
              >{{ objDatosPersona.nacionalidad }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Redes Sociales: </span>
            <span class="font-weight-thin"
              >{{ objDatosPersona.redesSociales }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Cantidad Hijos: </span>
            <span class="font-weight-thin"
              >{{ objDatosPersona.cantidadHijos }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Ingreso Pesos: </span>
            <span class="font-weight-thin"
              >{{ objDatosPersona.ingresoPesos }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Nivel Ingreso: </span>
            <span class="font-weight-thin"
              >{{ objDatosPersona.nivelIngresos }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Nivel Educación: </span>
            <span class="font-weight-thin"
              >{{ objDatosPersona.nivelEducacion }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Discapacitado: </span>
            <span class="font-weight-thin"
              >{{ objDatosPersona.discapacitado }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Tipo de Vivienda: </span>
            <span class="font-weight-thin"
              >{{ objDatosPersona.tipoDeVivienda }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular"
              >Porcentaje Crédito Asumido:
            </span>
            <span class="font-weight-thin"
              >{{ objDatosPersona.porcentajeCreditoAsumido }}
            </span>
          </div>
        </v-card>
        <v-card outlined class="ma-2 pa-2" max-width="300">
          <span class="title rosa_FFB695--text">INFORMACIÓN CONYUGUE</span>
          <br />
          <div>
            <span class="font-weight-regular">Nombre: </span>
            <span class="font-weight-thin"
              >{{ objDatosPersona.informacionDelConyuge.nombre }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Apellido Paterno: </span>
            <span class="font-weight-thin"
              >{{ objDatosPersona.informacionDelConyuge.apellidoPaterno }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Apellido Materno: </span>
            <span class="font-weight-thin"
              >{{ objDatosPersona.informacionDelConyuge.apellidoMaterno }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Apellido de Casado: </span>
            <span class="font-weight-thin">
              {{ objDatosPersona.informacionDelConyuge.apellidoDeCasada }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Sexo: </span>
            <span class="font-weight-thin">
              {{ objDatosPersona.informacionDelConyuge.sexo }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Fecha de Nacimiento: </span>
            <span class="font-weight-thin">
              {{ objDatosPersona.informacionDelConyuge.fechaDeNacimiento }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Correo Electrónico: </span>
            <span class="font-weight-thin"
              >{{ objDatosPersona.informacionDelConyuge.correoElectronico }}
            </span>
          </div>
        </v-card>
        <v-card outlined class="ma-2 pa-2" max-width="300">
          <span class="title rosa_FFB695--text">INFORMACIÓN DE RESIDENCIA</span>
          <br />
          <div>
            <span class="font-weight-regular">Pais de Residencia: </span>
            <span class="font-weight-thin">
              {{ objDatosPersona.informacionDeResidencia.paisDeResidencia }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Dirección: </span>
            <span class="font-weight-thin">
              {{ objDatosPersona.informacionDeResidencia.direccion }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Departamento: </span>
            <span class="font-weight-thin">
              {{ objDatosPersona.informacionDeResidencia.departamento }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Ciudad: </span>
            <span class="font-weight-thin">
              {{ objDatosPersona.informacionDeResidencia.ciudad }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Teléfono: </span>
            <span class="font-weight-thin"
              >{{ objDatosPersona.informacionDeResidencia.telefono }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Celular: </span>
            <span class="font-weight-thin"
              >{{ objDatosPersona.informacionDeResidencia.celular }}
            </span>
          </div>
        </v-card>
        <v-card outlined class="ma-2 pa-2" max-width="300">
          <span class="title rosa_FFB695--text">INFORMACIÓN LABORAL</span>
          <br />
          <div>
            <span class="font-weight-regular">Lugar de Trabajo: </span>
            <span class="font-weight-thin"
              >{{ objDatosPersona.informacionLaboral.lugarDeTrabajo }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Cargo: </span>
            <span class="font-weight-thin">
              {{ objDatosPersona.informacionLaboral.cargo }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Profesión: </span>
            <span class="font-weight-thin">
              {{ objDatosPersona.informacionLaboral.profesion }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Actividad Económica: </span>
            <span class="font-weight-thin"
              >{{ objDatosPersona.informacionLaboral.actividadEconomica }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular"
              >Fecha de ingreso a Trabajo:
            </span>
            <span class="font-weight-thin">
              {{ objDatosPersona.informacionLaboral.fechaDeIngresoAlTrabajo }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Domicilio Comercial: </span>
            <span class="font-weight-thin">
              {{ objDatosPersona.informacionLaboral.domicilioComercial }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Departamento: </span>
            <span class="font-weight-thin">
              {{ objDatosPersona.informacionLaboral.departamento }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Ciudad: </span>
            <span class="font-weight-thin">
              {{ objDatosPersona.informacionLaboral.ciudad }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Telefóno: </span>
            <span class="font-weight-thin">
              {{ objDatosPersona.informacionLaboral.telefono }}
            </span>
          </div>
          <div>
            <span class="font-weight-regular">Correo Electrónico: </span>
            <span class="font-weight-thin">
              {{ objDatosPersona.informacionLaboral.correoElectronico }}
            </span>
          </div>
        </v-card>
        <v-card outlined class="ma-2 pa-2" max-width="300">
          <span class="title rosa_FFB695--text">REFERENCIAS</span>
          <br />
          <div
            v-for="obj in objDatosPersona.referencias"
            :key="obj"
            class="pa-0"
          >
            <div>
              <span class="font-weight-regular">Tipo: </span>
              <span class="font-weight-thin">{{ obj.tipo }} </span>
            </div>
            <div>
              <span class="font-weight-regular">Nombre: </span>
              <span class="font-weight-thin">{{ obj.nombre }} </span>
            </div>
            <div>
              <span class="font-weight-regular">Apellido Paterno: </span>
              <span class="font-weight-thin">{{ obj.apellidoPaterno }} </span>
            </div>
            <div>
              <span class="font-weight-regular">Apellido Materno: </span>
              <span class="font-weight-thin">{{ obj.apellidoMaterno }} </span>
            </div>
            <div>
              <span class="font-weight-regular">Apellido Casado: </span>
              <span class="font-weight-thin">{{ obj.apellidoDeCasada }} </span>
            </div>
            <div>
              <span class="font-weight-regular">Relación: </span>
              <span class="font-weight-thin">{{ obj.relacion }} </span>
            </div>
            <div>
              <span class="font-weight-regular">Teléfono: </span>
              <span class="font-weight-thin">{{ obj.telefono }} </span>
            </div>
            <div>
              <span class="font-weight-regular">Correo Electrónico: </span>
              <span class="font-weight-thin">
                {{ obj.correoElectronico }}
              </span>
            </div>
            <div>
              <span class="font-weight-regular">Entidad: </span>
              <span class="font-weight-thin">{{ obj.entidad }} </span>
            </div>
            <v-divider></v-divider>
          </div>
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
      vComplemento: "",
      vTipoDoc: "CI",
      //lstTipoDocumento: ["CI", "NIT"],
      lstExtencion: [
        {
          value: " ",
          text: "Sin Extensión",
        },
        {
          value: "SC",
          text: "SC",
        },
        {
          value: "LP",
          text: "LP",
        },
        {
          value: "CB",
          text: "CB",
        },
        {
          value: "OR",
          text: "OR",
        },
        {
          value: "TJ",
          text: "TJ",
        },
        {
          value: "BE",
          text: "BE",
        },
        {
          value: "CH",
          text: "CH",
        },
        {
          value: "PO",
          text: "PO",
        },
        {
          value: "PA",
          text: "PA",
        },
        {
          value: "PE",
          text: "PE",
        },
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
    ...mapMutations("utils", ["setDialogProgress"]),
    ...mapActions("api_banco", ["obtenerDatosPersona"]),

    async clickObtenerDatosPersona() {
      this.smsError = "";
      this.setDialogProgress({
        mostrar: true,
        sms: "Verificando Datos Personas, espere...",
      });
      this.objDatosPersona = {};

      let obj = {
        tipoDocumento: this.vTipoDoc.trim(),
        extension: this.vTipoDoc.trim() === "NIT" ? "  " : this.vExtencion,
        numeroDocumento: this.vNroDoc.trim(),
        extDuplicado:this.vComplemento.trim()
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
        this.setDialogProgress({ mostrar: false, sms: "" });
        return;
      }

      this.objDatosPersona = r.data;
      this.$notify({
        title: "Mensaje",
        text: "Busqueda Exitosa",
        duration: 2000,
        type: "success",
      });
      this.setDialogProgress({ mostrar: false, sms: "" });
    },
  },
};
</script>
