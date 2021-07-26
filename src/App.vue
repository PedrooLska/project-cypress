<template>
  <v-app>
    <v-container>
      <Home />
    </v-container>
  </v-app>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  },
  data: () => ({
    //
  })
}
</script>
