<template>
    <div>
        hola soy inicio
    </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
export default {
 
  data() {
    return {
    };
  },
  methods:{
       ...mapActions("api_banco", [
      "pruebaSsl"
    ]),
  }
}
</script>

pruebaSsl
