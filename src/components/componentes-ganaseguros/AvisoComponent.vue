<template>
  <div>
    <v-card elevation="4" class="ma-5">
      <v-toolbar dense flat>
        <v-toolbar-title>
          <span class="verde_53A808--text">
            REGISTRAR AVISO PARA MOVIL</span></v-toolbar-title>
      </v-toolbar>
      <div class="pa-5">
        <v-row align="center">
          <v-row cols="12" sm="6" md="3">
            <v-switch class="pl-8" dense v-model="vAvisoComoImagen" color="primary"
              label="Aviso como Imagen?"></v-switch>
          </v-row>

          <v-col cols="12" sm="6" md="3" v-if="!vAvisoComoImagen">
            <v-text-field v-model="vTitutlo" outlined dense label="Titulo" hide-details clearable></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field v-if="!vAvisoComoImagen" v-model="vContenido" outlined dense label="Contenido" clearable
              hide-details></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field v-if="vAvisoComoImagen" v-model="vEnlaceAviso" outlined dense label="Enlace de Imagen"
              clearable hide-details></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-autocomplete v-model="vAplicacion" :items="lstAplicacion" item-value="value" item-text="text" outlined
              dense label="Aplicación" hide-details clearable></v-autocomplete>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-chip class="ma-2" color="primary" text-color="white" @click="clickRegistrarAviso()">
              Registrar Aviso
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
    </v-card>

    <v-card class="mx-auto pa-10" max-width="100%" outlined>
      <v-data-table :headers="headers" :items="lstAvisos" class="elevation-1">
        <template v-slot:item.titulo="{ item }">
          <span class="caption"> {{ item.titulo }}</span>
        </template>
        <template v-slot:item.contenido="{ item }">
          <span class="caption"> {{ item.contenido }}</span>
        </template>
        <template v-slot:item.enlace="{ item }">

          <img v-if="item.enlace" class="pa-2" :src="item.enlace" style="width:100px;height:70px;">
          <span v-else>sin imagen</span>
        </template>
        <template v-slot:item.aplicacionId="{ item }">

          <span v-if="item.aplicacionId === 1002">WEB</span>
          <span v-if="item.aplicacionId === 1003">MOVIL</span>


        </template>

        <template v-slot:item.accion="{ item }">
          <v-btn class="mx-2" fab dark x-small color="pink" @click="clickEliminarAviso(item.avisoId)">
            <v-icon dark>
              mdi-delete
            </v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      vAvisoComoImagen: false,
      vTitutlo: "",
      vContenido: "",
      vEnlaceAviso: "",
      smsError: "",
      headers: [
        { text: "Titulo", value: "titulo" },
        { text: "Contenido", value: "contenido" },
        { text: "Imagen", value: "enlace" },
        { text: "Aplicación", value: "aplicacionId" },

        { text: "accion", value: "accion" }
      ],
      lstAvisos: [],
      vAplicacion: 1003,
      lstAplicacion: [
        {
          value: "1002",
          text: "Web",
        },
        {
          value: "1003",
          text: "Móvil",
        }
      ],
    };
  },
  mounted() {
    this.ObtenerAvisosTodos();
  },
  methods: {
    ...mapActions("api_ganaseguros", ["registrarAviso", "obtenerAvisosTodos", "eliminarAviso"]),
    ...mapMutations("utils", ["setDialogProgress"]),

    async clickRegistrarAviso() {
      this.smsError = "";
      let param = {
        titulo: this.vAvisoComoImagen ? "" : this.vTitutlo,
        contenido: this.vAvisoComoImagen ? "" : this.vContenido,
        enlace: this.vAvisoComoImagen ? this.vEnlaceAviso : "",
        aplicacionId: this.vAplicacion
      };
      this.setDialogProgress({
        mostrar: true,
        sms: "Registrar Aviso, espere...",
      });
      let r = await this.registrarAviso(param);

      // existe mensaje, mostrra error
      if (r.data.codigoMensaje == "CODMW1000") {
        this.$notify({
          title: "MENSAJE",
          text: "Aviso registrado con Exito",
          duration: 5000,
          type: "succes",
        });
        this.setDialogProgress({ mostrar: false, sms: "" });
  
      }
      this.ObtenerAvisosTodos();
    },
    async ObtenerAvisosTodos() {
      console.log("OBTENER AVISOS TODOS");
      let r = await this.obtenerAvisosTodos();
      console.log(r);
      this.lstAvisos = r.data.avisos;
    },
    async clickEliminarAviso(pId) {
      this.setDialogProgress({ mostrar: true, sms: "" });
      await this.eliminarAviso(pId);
      this.ObtenerAvisosTodos();
      this.setDialogProgress({ mostrar: false, sms: "" });
      this.$swal.fire(
        'Mensaje',
        'Aviso elminado Exitosamente',
        'success'
      )
    }
  },
};
</script>
  