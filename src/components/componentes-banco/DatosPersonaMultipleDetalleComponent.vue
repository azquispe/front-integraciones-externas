<template>
  <v-container fluid row>
    <v-card outlined class="ma-2" max-width="270">
      <v-card-title>DATOS GENERALES</v-card-title>
      <v-card-text>
        <div class="font-weight-normal">
          <strong>{{ objDatosTodosPersona.tipoDoc + ": " }} </strong>

          {{ objDatosTodosPersona.nroDoc }}
        </div>

        <div class="font-weight-normal">
          <strong>Nombre: </strong>
          {{ objDatosTodosPersona.nombre }}
        </div>
        <div class="font-weight-normal">
          <strong>Apellido Paterno: </strong>
          {{ objDatosTodosPersona.apellidoPaterno }}
        </div>
        <div class="font-weight-normal">
          <strong>Apellido Materno: </strong>
          {{ objDatosTodosPersona.apellidoMaterno }}
        </div>
        <div class="font-weight-normal">
          <strong>Apellido de Casado: </strong>
          {{ objDatosTodosPersona.apellidoDeCasada }}
        </div>
        <div class="font-weight-normal">
          <strong>Sexo: </strong>
          {{ objDatosTodosPersona.sexo }}
        </div>
        <div class="font-weight-normal">
          <strong>Fecha de Nacimiento: </strong>
          {{ objDatosTodosPersona.fechaDeNacimiento }}
        </div>
        <div class="font-weight-normal">
          <strong>Correo Electrónico: </strong>
          {{ objDatosTodosPersona.correoElectronico }}
        </div>
        <div class="font-weight-normal">
          <strong>Estado Civil: </strong>
          {{ objDatosTodosPersona.estadoCivil }}
        </div>
        <div class="font-weight-normal">
          <strong>Nacionalidad: </strong>
          {{ objDatosTodosPersona.nacionalidad }}
        </div>
        <div class="font-weight-normal">
          <strong>Redes Sociales: </strong>
          {{ objDatosTodosPersona.redesSociales }}
        </div>
        <div class="font-weight-normal">
          <strong>Cantidad Hijos: </strong>
          {{ objDatosTodosPersona.cantidadHijos }}
        </div>
        <div class="font-weight-normal">
          <strong>Ingreso Pesos: </strong>
          {{ objDatosTodosPersona.ingresoPesos }}
        </div>
        <div class="font-weight-normal">
          <strong>Nivel Ingreso: </strong>
          {{ objDatosTodosPersona.nivelIngresos }}
        </div>
        <div class="font-weight-normal">
          <strong>Nivel Educación: </strong>
          {{ objDatosTodosPersona.nivelEducacion }}
        </div>
        <div class="font-weight-normal">
          <strong>Discapacitado: </strong>
          {{ objDatosTodosPersona.discapacitado }}
        </div>
        <div class="font-weight-normal">
          <strong>Tipo de Vivienda: </strong>
          {{ objDatosTodosPersona.tipoDeVivienda }}
        </div>
        <div class="font-weight-normal">
          <strong>Porcentaje Crédito Asumido: </strong>
          {{ objDatosTodosPersona.porcentajeCreditoAsumido }}
        </div>
      </v-card-text>
    </v-card>
    <v-card outlined class="ma-2" max-width="270">
      <v-card-title>INFORMACIÓN CONYUGUE</v-card-title>
      <v-card-text>
        <div class="font-weight-normal">
          <strong>Nombre: </strong>
          {{ objDatosTodosPersona.informacionDelConyuge.nombre }}
        </div>
        <div class="font-weight-normal">
          <strong>Apellido Paterno: </strong>
          {{ objDatosTodosPersona.informacionDelConyuge.apellidoPaterno }}
        </div>
        <div class="font-weight-normal">
          <strong>Apellido Materno: </strong>
          {{ objDatosTodosPersona.informacionDelConyuge.apellidoMaterno }}
        </div>
        <div class="font-weight-normal">
          <strong>Apellido de Casado: </strong>
          {{ objDatosTodosPersona.informacionDelConyuge.apellidoDeCasada }}
        </div>
        <div class="font-weight-normal">
          <strong>Sexo: </strong>
          {{ objDatosTodosPersona.informacionDelConyuge.sexo }}
        </div>
        <div class="font-weight-normal">
          <strong>Fecha de Nacimiento: </strong>
          {{ objDatosTodosPersona.informacionDelConyuge.fechaDeNacimiento }}
        </div>
        <div class="font-weight-normal">
          <strong>Correo Electrónico: </strong>
          {{ objDatosTodosPersona.informacionDelConyuge.correoElectronico }}
        </div>
      </v-card-text>
    </v-card>
    <v-card outlined class="ma-2" max-width="270">
      <v-card-title>INFORMACIÓN DE RESIDENCIA</v-card-title>
      <v-card-text>
        <div class="font-weight-normal">
          <strong>Pais de Residencia: </strong>
          {{ objDatosTodosPersona.informacionDeResidencia.paisDeResidencia }}
        </div>
        <div class="font-weight-normal">
          <strong>Dirección: </strong>
          {{ objDatosTodosPersona.informacionDeResidencia.direccion }}
        </div>
        <div class="font-weight-normal">
          <strong>Departamento: </strong>
          {{ objDatosTodosPersona.informacionDeResidencia.departamento }}
        </div>
        <div class="font-weight-normal">
          <strong>Ciudad: </strong>
          {{ objDatosTodosPersona.informacionDeResidencia.ciudad }}
        </div>
        <div class="font-weight-normal">
          <strong>Teléfono: </strong>
          {{ objDatosTodosPersona.informacionDeResidencia.telefono }}
        </div>
        <div class="font-weight-normal">
          <strong>Celular: </strong>
          {{ objDatosTodosPersona.informacionDeResidencia.celular }}
        </div>
      </v-card-text>
    </v-card>
    <v-card outlined class="ma-2" max-width="270">
      <v-card-title>INFORMACIÓN LABORAL</v-card-title>
      <v-card-text>
        <div class="font-weight-normal">
          <strong>Lugar de Trabajo: </strong>
          {{ objDatosTodosPersona.informacionLaboral.lugarDeTrabajo }}
        </div>
        <div class="font-weight-normal">
          <strong>Cargo: </strong>
          {{ objDatosTodosPersona.informacionLaboral.cargo }}
        </div>
        <div class="font-weight-normal">
          <strong>Profesión: </strong>
          {{ objDatosTodosPersona.informacionLaboral.profesion }}
        </div>
        <div class="font-weight-normal">
          <strong>Actividad Económica: </strong>
          {{ objDatosTodosPersona.informacionLaboral.actividadEconomica }}
        </div>
        <div class="font-weight-normal">
          <strong>Fecha de ingreso a Trabajo: </strong>
          {{ objDatosTodosPersona.informacionLaboral.fechaDeIngresoAlTrabajo }}
        </div>
        <div class="font-weight-normal">
          <strong>Domicilio Comercial: </strong>
          {{ objDatosTodosPersona.informacionLaboral.domicilioComercial }}
        </div>
        <div class="font-weight-normal">
          <strong>Departamento: </strong>
          {{ objDatosTodosPersona.informacionLaboral.departamento }}
        </div>
        <div class="font-weight-normal">
          <strong>Ciudad: </strong>
          {{ objDatosTodosPersona.informacionLaboral.ciudad }}
        </div>
        <div class="font-weight-normal">
          <strong>Telefóno: </strong>
          {{ objDatosTodosPersona.informacionLaboral.telefono }}
        </div>
        <div class="font-weight-normal">
          <strong>Correo Electrónico: </strong>
          {{ objDatosTodosPersona.informacionLaboral.correoElectronico }}
        </div>
      </v-card-text>
    </v-card>
    <v-card outlined class="ma-2" max-width="279">
      <v-card-title>REFERENCIAS</v-card-title>
      <v-card-text>
        <div v-for="obj in objDatosTodosPersona.referencias" :key="obj">
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
    <v-card outlined class="ma-2" max-width="279">
      <v-card-title>DATOS CUENTA</v-card-title>
      <v-card-text>
        <div v-for="obj in objDatosTodosPersona.lstDatosCuenta" :key="obj">
          <div class="font-weight-normal">
            <strong>ID: </strong>
            {{ obj.id }}
          </div>
          <div class="font-weight-normal">
            <strong>Cuenta: </strong>
            {{ obj.cuenta }}
          </div>
          <div class="font-weight-normal">
            <strong>Moneda: </strong>
            {{ obj.moneda }}
          </div>
          <div class="font-weight-normal">
            <strong>Tipo de Producto: </strong>
            {{ obj.tipoProducto }}
          </div>
          <div class="font-weight-normal">
            <strong>Estado: </strong>
            {{ obj.estado }}
          </div>
          <v-divider></v-divider>
        </div>
      </v-card-text>
    </v-card>
     <v-card outlined class="ma-2" max-width="279">
      <v-card-title>LISTA NEGRA</v-card-title>
      <v-card-text>
        <div class="font-weight-normal">
            <strong>Nombre Verificado: </strong>
            {{ objDatosTodosPersona.objListaNegra.nombreCompleto }}
          </div>
         <v-alert dense text type="success">
            {{ objDatosTodosPersona.objListaNegra.mensajeEjecucion }}
          </v-alert>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["objDatosTodosPersona"],
};
</script>
