<template>
  <v-alert type="error" class="alert">
    {{ text }}
  </v-alert>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: () => 'Not Found'
    }
  }
}
</script>

<style scoped>
.alert {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
