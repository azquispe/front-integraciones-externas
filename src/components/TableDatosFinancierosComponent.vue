<template>
<div>
  <v-data-table
    dense
    :items="getLugares"
    :headers="header_lugar"
    :hide-default-header="true"
    class="elevation-1"
  >
    <template v-slot:header="{ props: { headers } }">
      <thead>
        <tr>
          <th class="subtitle-2" v-for="obj in headers" :key="obj.comercianteId">
            <spam class="primary--text">{{ obj.text.toUpperCase() }}</spam>
          </th>
        </tr>
      </thead>
    </template>
    <template v-slot:item="{ item }">
      <tr>
        <td class="pa-2 font-weight-light caption">{{ item.comercianteId }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.departamentoId }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.direccion }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.latitud }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.longitud }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.nombreNegocio }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.descripcionNegocio }}</td>
        <td class="pa-2 font-weight-light caption">{{ item.estadoPuntoventaId }}</td>
        <td>
          <v-icon small @click="anularLugar(item)"> fas fa-trash-alt </v-icon>
          <v-icon class="ml-4" small @click="editarLugar(item)"
            >fas fa-pencil-alt
          </v-icon>
        </td>
      </tr>
    </template>
  </v-data-table>
</div>
</template>
<script>
import {  mapActions, mapMutations, mapGetters } from "vuex";
export default {
  props:["comercianteId"],
  data() {
    return {

      header_lugar: [
        { text: "Comerciante", value: "comercianteId" },
        { text: "Departamento", value: "departamentoId" },
        { text: "Dirección ", value: "direccion" },
        { text: "Latitud ", value: "latitud" },
        { text: "Longitud ", value: "longitud" },
        { text: "Nombre ", value: "nombreNegocio" },
        { text: "Descripción ", value: "descripcionNegocio" }
      ],
    };
  },
  computed: {
    ...mapGetters("lugar", ["getLugares"]),
  },
  methods: {
    ...mapActions("lugar", [
      "obtenerLugaresByComercianteId",
      "eliminarLugar",
    ]),
    ...mapMutations("lugar", ["setLugar"]),
    ...mapMutations(["openDialog"]),

    editarLugar(item) {
      this.setLugar(item);
      this.openDialog();
    },
    async anularLugar(item) {
      let lugarId = item.lugarId;
      await this.eliminarLugar(lugarId);
      this.obtenerLugaresByComercianteId(this.comercianteId);
    },
  },
  mounted() {
    this.obtenerLugaresByComercianteId(this.comercianteId);
  },
};
</script>