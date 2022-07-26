<template>
  <div>
    <v-card elevation="4" class="ma-5">
      <v-toolbar dense flat>
        <v-toolbar-title>
          <span class="verde_53A808--text">
            VALIDA LISTAS NEGRAS DE UNA PERSONA</span
          ></v-toolbar-title
        >
      </v-toolbar>
      <div class="pa-5">
        <v-row align="center">
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              v-model="vNombreCompleto"
              outlined
              dense
              label="Nombre Completo"
              hide-details
              clearable
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-chip
              class="ma-2"
              color="primary"
              text-color="white"
              @click="clickVerificarListaNegra()"
            >
              Verificar
            </v-chip>
          </v-col>
        </v-row>
        <v-row v-if="vRespuesta != '' && vResultadoEjecucion == 0">
          <v-col cols="12">
            
            <v-alert dense text type="success">
              {{ vRespuesta }}
            </v-alert>
          </v-col>
        </v-row>
            <v-row v-if="vRespuesta != '' && vResultadoEjecucion === -1">
          <v-col cols="12">
            
            <v-alert dense text type="error">
              {{ vRespuesta }}
            </v-alert>
          </v-col>
        </v-row>
        <v-row v-if="vRespuesta != '' && vResultadoEjecucion > 0">
          <v-col cols="12">
            
            <v-alert dense text type="warning">
              {{ vRespuesta }}
            </v-alert>
          </v-col>
        </v-row>
    
      </div>
    </v-card>
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      vNombreCompleto: "",
      vRespuesta: "",
      vResultadoEjecucion: 0,
    };
  },

  methods: {
    ...mapActions("api_banco", ["verificarListaNegra"]),
    ...mapMutations("utils", ["setDialogProgress"]),

    async clickVerificarListaNegra() {
      try {
        this.vRespuesta = "";

        if (this.vNombreCompleto.trim() === "") {
          this.$notify({
            title: "Mensaje",
            text: "Nombre completo es requerido",
            duration: 2000,
            type: "error",
          });
          return;
        }

        this.setDialogProgress({
          mostrar: true,
          sms: "Verificando Listas Negras, espere...",
        });
        let r = await this.verificarListaNegra(this.vNombreCompleto);
        this.vRespuesta = r.data.mensajeEjecucion;
        this.vResultadoEjecucion = r.data.resultadoEjecucion;

        if (r.data.resultadoEjecucion > 0 || r.data.resultadoEjecucion < 0) {
          this.$notify({
            title: "Mensaje",
            text: r.data.mensajeEjecucion,
            duration: 2000,
            type: "error",
          });
        } else {
          this.$notify({
            title: "Mensaje",
            text: r.data.mensajeEjecucion,
            duration: 2000,
            type: "success",
          });
        }

        this.setDialogProgress({ mostrar: false, sms: "" });
      } catch (error) {
        this.$notify({
          title: "Mensaje",
          text: error,
          duration: 2000,
          type: "error",
        });
      }
    },
  },
};
</script>
