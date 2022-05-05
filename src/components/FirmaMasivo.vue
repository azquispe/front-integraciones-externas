<template>
  <v-expansion-panels v-model="panel" multiple>
    <v-expansion-panel>
      <v-expansion-panel-header>Lote de Usuarios</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="3">
              <v-chip
                class="ma-2"
                color="green"
                text-color="white"
                @click="agregrarUsuarios()"
              >
                Agregar Usuaro
              </v-chip>
              <v-chip
                class="ma-2"
                color="green"
                text-color="white"
                @click="lstUsuariosFirmantes = []"
              >
                Limpiar
              </v-chip>

              <v-text-field
                v-model="userName"
                outlined
                dense
                label="Nombre Usuario"
              ></v-text-field>

              <v-text-field
                outlined
                dense
                v-model="pin"
                label="Nombre Usuario"
              ></v-text-field>

              <div>
                <ol type="”A”">
                  <li v-for="user in lstUsuariosFirmantes" :key="user">
                    {{ "usuario => " + user.userName + "  pin => " + user.pin }}
                  </li>
                </ol>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-chip
                class="ma-2"
                color="green"
                text-color="white"
                @click="agregrarArchivo()"
              >
                Agregar Archivo
              </v-chip>
              <v-chip
                class="ma-2"
                color="green"
                text-color="white"
                @click="base64 = ''"
              >
                Limpiar
              </v-chip>

              <v-file-input
                label="Archivo"
                outlined
                dense
                hide-details
                v-model="file"
              ></v-file-input>
              <br />
              <v-textarea
                outlined
                v-model="base64"
                name="input-7-4"
                label="Archivo Base 64"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-btn depressed color="blue" dark @click="firmarLoteUsuarios()">
            Firmar un PDF con varios Usuarios
          </v-btn>
        </v-container>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header>Lote de Archivos</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="3">
              <v-chip
                class="ma-2"
                color="green"
                text-color="white"
                @click="agregrarArchivoMasivo()"
              >
                Agregar Archivo
              </v-chip>
              <v-chip
                class="ma-2"
                color="green"
                text-color="white"
                @click="lstArchivosFirmar = []"
              >
                Limpiar
              </v-chip>
              <br />
              <v-file-input
                label="Archivo"
                outlined
                dense
                hide-details
                v-model="file"
              ></v-file-input>
              <br />
              <div v-for="file in lstArchivosFirmar" :key="file">
                <v-textarea
                  outlined
                  :value="file"
                  name="input-7-4"
                  label="Archivo Base 64"
                ></v-textarea>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-chip
                class="ma-2"
                color="green"
                text-color="white"
                @click="(userName = ''), (pin = '')"
              >
                Limpiar
              </v-chip>

              <v-text-field
                v-model="userName"
                outlined
                dense
                label="Nombre Usuario"
              ></v-text-field>

              <v-text-field
                outlined
                dense
                v-model="pin"
                label="Nombre Usuario"
              ></v-text-field>
              <v-btn depressed color="blue" dark @click="firmarLoteArchivos()" > Firmar Varios PDFs </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>
import Vue from "vue";
export default {
  data() {
    return {
      lstUsuariosFirmantes: [],
      lstArchivosFirmar: [],
      base64: null,
      userName: null,
      pin: null,
      file: null,
    };
  },
  methods: {
    agregrarUsuarios() {
      let usuario = {
        userName: this.userName,
        pin: this.pin,
      };
      this.lstUsuariosFirmantes.push(usuario);
    },
    async agregrarArchivo() {
      this.base64 = await this.convertBase64(this.file);
      this.base64 = this.base64.split(",")[1];
    },
    firmarLoteUsuarios() {
        //para firma automatico ejemplo ABEL
        //this.lstUsuariosFirmantes.push({userName:'ABEL',pin:'Asdasd123'})

      Vue.axios
        .post("/firmar-lote-usuarios", {
          lstUsuarioFirmantes: this.lstUsuariosFirmantes,
          pdfBase64: this.base64,
        })
        .then((r) => {
          this.generarPDF(r.data.pdf_firmado, "docFirmado.pdf");

          this.$notify({
            title: "Firmado de Documento",
            text: r.data.mensaje,
            duration: 2000,
            type: "success",
          });
        });
    },
    firmarLoteArchivos() {
        console.log("holaaa")
      Vue.axios
        .post("/firmar-lote-archivos", {
          pdfBase64: this.lstArchivosFirmar,
          userName: this.userName,
          pin:      this.pin
        })
        .then((r) => {
          this.generarVariosPDF(r.data.pdfs_firmados);

          this.$notify({
            title: "Firmado de Documento",
            text: r.data.mensaje,
            duration: 2000,
            type: "success",
          });
        });
    },
    async agregrarArchivoMasivo() {
      this.base64 = await this.convertBase64(this.file);
      this.lstArchivosFirmar.push(this.base64.split(",")[1]);
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
    generarPDF(base64, nombreArchivo) {
      var a = document.createElement("a"); //Create <a>
      a.href = "data:application/pdf;base64," + base64;
      a.download = nombreArchivo; //File name Here
      a.click(); //Downloaded file
    },
    generarVariosPDF(lstBase64){
        let i=1;
        for(let base64 of lstBase64){
            this.generarPDF(base64,"docFirmado_"+i+".pdf")
            i++;
        }
    }
  },
};
</script>