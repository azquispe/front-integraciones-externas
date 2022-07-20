<template>
  <v-container>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-col cols="12" v-if="editedIndex < 0">
              {{ pFila }}
              <v-file-input
                label="Archivo"
                outlined
                dense
                hide-details
                v-model="pFila"
              ></v-file-input>
            </v-col>
            <v-col cols="12">
              <v-textarea
                outlined
                label="Descripción"
                hide-details
                v-model="objDocumento.descripcion"
              ></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-text-field
                outlined
                label="Fojas"
                hide-details
                v-model="objDocumento.fojas"
              ></v-text-field>
            </v-col>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close"> Cancelar </v-btn>
          <v-btn color="blue darken-1" text @click="guardarDocumentos">
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- DIALOGO PARA VALIDACION DE FIRMAS -->
    <v-dialog v-model="dialogValidarFirmas" width="500">
      
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          DETALLE DE VALIDACIÓN
        </v-card-title>

        <v-card-text>
          <div  v-for="valid in lstDatosDeValidacion" :key="valid">
<table class="default">
          <tr>
            <td><b>Documento Autentico</b></td>
            <td v-if="valid.noModificado" >El documento no ha sido modificado después de la firma</td>
            <td v-else>El documento fue modificado</td>
          </tr>
          <tr>
            <td><b>Cadena de confianza</b></td>
            <td v-if="valid.cadenaConfianza" >La cadena de confianza es Valida</td>
            <td v-else >La cadena de confianza no está bajo la Infraestructura de Clave Pública del Estado Plurinacional de Bolivia, y por lo tanto no tiene valor legal</td>
          </tr>
             <tr>
            <td><b>Periodo de vigencia</b></td>
            <td>La firma fue realizada dentro del periodo
               comprendido entre {{valid.certificado.inicioValidez}} y {{valid.certificado.finValidez}}.</td>
          </tr>
             <tr>
            <td><b>Revocado</b></td>
            <td v-if="valid.firmadoAntesRevocacion" >El documento fue firmado con un certificado no revocado.</td>
            <td v-else >El documento fue firmado con un certificado  revocado.</td>
          </tr>
      
        </table>
        <v-divider></v-divider>
          </div>
        

        </v-card-text>

        

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialogValidarFirmas = false">
            Aceptar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          src="https://firmadigital.bo/img/logo-firmadigital.png"
          class="my-3"
          contain
          height="100"
        />
      </v-col>
    </v-row>
    <v-btn
      color="green"
      outlined
      dark
      class="mb-2"
      @click="nuevoDocumento"
      small
    >
      NUEVO DOCUMENTO
    </v-btn>
    <v-data-table
      :headers="headers"
      :items="lstDocumentos"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:item.firmar="{ item }">
        <v-chip
          class="ma-2"
          color="green"
          label
          outlined
          @click="firmarDocumento(item)"
        >
          Firmar
        </v-chip>
        <v-chip
          class="ma-2"
          color="green"
          label
          outlined
          @click="validarFirma(item.base64)"
        >
          Verificar Firma
        </v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editarDocumento(item)" color="pink">
          mdi-pencil
        </v-icon>
        <v-icon small @click="eliminarDocumento(item)" color="teal">
          mdi-delete
        </v-icon>
       

        <v-icon small 
        @click="generarPDF(item.base64, 'firmado.pdf')"
        color="teal">
          mdi-download
        </v-icon>
      </template>
      <template v-slot:no-data> No existe Documentos </template>
    </v-data-table>
  </v-container>
</template>

<script>
import Vue from "vue";

export default {
  data: () => ({
    dialog: false,

    headers: [
      {
        text: "Nombre de Documento",
        align: "start",
        sortable: false,
        value: "nombreDocumento",
      },
      { text: "Descripción", value: "descripcion" },
      { text: "Fecha Documento", value: "fechaDocumento" },
      { text: "Fojas", value: "fojas" },
      { text: "Firmar", value: "firmar" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    lstDocumentos: [],
    lstDatosDeValidacion:[],
    esNuevo: false,
    objDocumento: {
      nombreDocumento: "",
      descripcion: 0,
      fechaDocumento: 0,
      fojas: 0,
      base64: "",
    },
    pFila: null,
    dialogValidarFirmas: false,
  }),
  watch: {
    async pFila(archivo) {
      let base = await this.convertBase64(archivo);
      console.log("primer splip: " + base);
      this.objDocumento.base64 = base.split(",")[1];
      console.log("segundo splip: " + this.objDocumento.base64);
    },
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Documento" : "Editar Documento";
    },
  },

  methods: {
    validarFirma(base64) {
      
      Vue.axios
        .post("validar_pdf", {
          pdf: base64,
        })
        .then((res) => {
           //this.dialogValidarFirmas = true;
          if (res.data.datos.firmas.length > 0) {
            this.$notify({
              title: "Validando Firma",
              text: "El documento ya cuenta con firmas",
              duration: 2000,
              type: "success",
            });

            this.dialogValidarFirmas = true;
            this.lstDatosDeValidacion = res.data.datos.firmas;

          } else {
            this.$notify({
              title: "Validando Firma",
              text: "El documento no contiene firmas",
              duration: 2000,
              type: "error",
            });
          }

          console.log("documento validado:  " + res);
        });
    },
    firmarDocumento( item) {
      this.editedIndex = this.lstDocumentos.indexOf(item);
      console.log("firmando");
      Vue.axios.get("token/connected").then((r) => {
        console.log(r);
        let vSlot = r.data.datos.tokens[0].slot;
        let vPin = "xxxxx";
        Vue.axios.post("token/data", { slot: vSlot, pin: vPin }).then((rr) => {
          Vue.axios
            .post("token/firmar_pdf", {
              slot: vSlot,
              pin: "xxxx",
              alias: "ADSIB",
              pdf: item.base64,
            })
            .then((rrr) => {
              //actualizar archivo

              item.base64 = rrr.data.datos.pdf_firmado; // nueva Base 64
              this.lstDocumentos[this.editedIndex] = item; // actualizar la lista

              this.$notify({
                title: "Firmado de Documento",
                text: rrr.data.datos.mensaje,
                duration: 2000,
                type: "success",
              });
            });
        });
      });
    },
    convertBase64(file) {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
          resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    },
    async onFileChanged(e) {
      console.log("HOLA");
      console.log(e);

      this.objDocumento.nombreDocumento = e.target.files[0];

      //const base64 = await convertBase64(file);
    },
    nuevoDocumento() {
      this.dialog = true;
      this.objDocumento = {};
      this.editedIndex = -1;
    },

    editarDocumento(item) {
      this.objDocumento = {};
      this.editedIndex = this.lstDocumentos.indexOf(item);
      this.objDocumento = Object.assign({}, item);
      this.dialog = true;
    },

    eliminarDocumento(item) {
      this.editedIndex = this.lstDocumentos.indexOf(item);
      this.lstDocumentos.splice(this.editedIndex, 1);
    },

    close() {
      this.dialog = false;
    },

    guardarDocumentos() {
      console.log("index: " + this.editedIndex);
      if (this.editedIndex > -1) {
        Object.assign(this.lstDocumentos[this.editedIndex], this.objDocumento);
      } else {
        this.lstDocumentos.push(this.objDocumento);
      }
      this.close();
    },
    generarPDF(base64, nombreArchivo){
    
      var a = document.createElement("a"); //Create <a>
      a.href = 'data:application/pdf;base64,'+base64;
      a.download = nombreArchivo; //File name Here
      a.click(); //Downloaded file

    }
  },
};
</script>