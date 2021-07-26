<template>
  <v-app>
    <v-container grid-list>
      <v-layout row wrap justify-center>
        <v-flex md6>
          <Home />
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: "App",
  components: {
    Home
  },
  data: () => ({
    //
  }),
};
</script>
