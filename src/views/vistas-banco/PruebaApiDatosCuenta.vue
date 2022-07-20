<template>
    <div>
<datosCuentaComponent></datosCuentaComponent>
    </div>
</template>
<script>
import {  mapActions, mapMutations } from "vuex";
import datosCuentaComponent from '@/components/componentes-banco/DatosCuentaComponent.vue'
export default{
    components:{
    datosCuentaComponent
  },
    data() {
        return{

        }
    },
}
</script>
