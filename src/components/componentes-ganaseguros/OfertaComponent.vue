<template>
  <div>
    <v-card elevation="4" class="ma-5">
      <v-toolbar dense flat>
        <v-toolbar-title>
          <span class="verde_53A808--text">
            REGISTRAR OFERTA PARA MOVIL</span></v-toolbar-title>
      </v-toolbar>
      <div class="pa-5">
        <v-row align="center">
          <v-col cols="12" sm="6" md="3">
            <v-text-field v-model="vTitutlo" outlined dense label="Titulo" hide-details clearable></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field v-model="vContenido" outlined dense label="Contenido" clearable hide-details></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field v-model="vEnlaceOferta" outlined dense label="Enlace de Imagen (Oferta)" clearable
              hide-details></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-autocomplete v-model="vAplicacion" :items="lstAplicacion" item-value="value" item-text="text" outlined
              dense label="Aplicación" hide-details clearable></v-autocomplete>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-chip class="ma-2" color="primary" text-color="white" @click="clickRegistrarOferta()">
              Registrar Oferta
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

      <template>


        <v-card
        class="mx-auto pa-10"
    max-width="100%"
    outlined
        >
          <v-data-table :headers="headers" :items="lstOfertas" class="elevation-1" >
            <template v-slot:item.titulo="{ item }">
                 <span class="caption" > {{item.titulo}}</span>
            </template>
            <template v-slot:item.contenido="{ item }">
                 <span class="caption" > {{item.contenido}}</span>
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
            <v-btn class="mx-2" fab dark x-small color="pink" @click="clickEliminarOferta(item.ofertaSliderId)">
              <v-icon dark>
                mdi-delete
              </v-icon>
            </v-btn>
          </template>
        </v-data-table>
        </v-card>
        

      </template>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      vTitutlo: "",
      vContenido: "",
      vEnlaceOferta: "",
      smsError: "",
      headers: [
        { text: "Titulo", value: "titulo" },
        { text: "Contenido", value: "contenido" },
        { text: "Imagen", value: "enlace" },
        { text: "Aplicación", value: "aplicacionId" },
        { text: "accion", value: "accion" }
      ],
      lstOfertas: [],
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
    this.ObtenerOfertasTodos();
  },
  methods: {
    ...mapActions("api_ganaseguros", [
      "registrarOferta",
      "obtenerOfertasTodos",
      "eliminarOferta"
    ]),
    ...mapMutations("utils", ["setDialogProgress"]),

    async clickRegistrarOferta() {
      this.smsError = "";
      let param = {
        titulo: this.vTitutlo,
        contenido: this.vContenido,
        enlace: this.vEnlaceOferta,
        aplicacionId: this.vAplicacion,
      };
      this.setDialogProgress({
        mostrar: true,
        sms: "Registrar Oferta, espere...",
      });
      let r = await this.registrarOferta(param);
      // existe mensaje, mostrra error
      if (r.data.codigoMensaje == "CODMW1000") {
        
        /*this.$notify({
          title: "MENSAJE",
          text: "Oferta registrado con Exito",
          duration: 5000,
          type: "succes",
        });*/
        this.setDialogProgress({ mostrar: false, sms: "" });
        //this.$swal('Oferta Creado Exitosamente');
        this.$swal.fire(
          'Mensaje',
          'Oferta creado exitosamente',
          'success'
        )

        
      }
      this.ObtenerOfertasTodos();
    },
    async ObtenerOfertasTodos() {
      console.log("OBTENER OFERTAS TODOS");
      let r = await this.obtenerOfertasTodos();
      console.log(r);
      this.lstOfertas = r.data.ofertas;
    },
    async clickEliminarOferta(pId) {
      this.setDialogProgress({ mostrar: true, sms: "" });
      await this.eliminarOferta(pId);
      this.ObtenerOfertasTodos();
      this.setDialogProgress({ mostrar: false, sms: "" });
      this.$swal.fire(
          'Mensaje',
          'Oferta elminado Exitosamente',
          'success'
        )
      
    },
  },
};
</script>
  