<template>
  <v-container>
    <v-row>
      <v-text-field
        label="Create Task"
        v-model="taskName"
      ></v-text-field>

      <v-btn class="primary mt-3" @click="createTask()"><v-icon>$add</v-icon></v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    taskName: ""
  }),
  methods: {
    createTask() {
      this.$store.dispatch("todoList/CREATE_TASK", this.taskName)
    }
  }
}
</script>
