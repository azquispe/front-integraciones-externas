<template>
  <div class="home pa-10" >
    <pruebaApiBanco />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import pruebaApiBanco from '@/components/prueba-api-banco.vue'

export default {
  name: 'Home',
  components: {
    pruebaApiBanco
  }
}
</script>
