<template>
  <div>
    <v-chip
      ref="refConsultasSegip"
      class="ma-2"
      color="primary"
      text-color="white"
      @click="clickConsultasSegip()"
    >
      Verificar
    </v-chip>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions("api_ganatech", ["autenticacion", "consultaSegip"]),
    ...mapMutations("api_ganatech", ["setDialogProgress"]),
    async clickConsultasSegip() {
      console.log("ALASKA");
      let r = this.autenticacion();
      console.log("RESPUESTA DE SEGIP");
      console.log(r.data);
    },
  },
};
</script>
