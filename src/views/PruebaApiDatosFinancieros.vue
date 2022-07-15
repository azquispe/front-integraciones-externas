<template>
    <div>
<datosFinancierosComponent></datosFinancierosComponent>
    </div>
</template>
<script>
import {  mapActions, mapMutations } from "vuex";
import datosFinancierosComponent from '@/components/DatosFinancierosComponent.vue'
export default{
    components:{
    datosFinancierosComponent
  },
    data() {
        return{

        }
    },
}
</script>
