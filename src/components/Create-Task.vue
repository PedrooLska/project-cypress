<template>
  <v-container>
    <v-row>
      <v-text-field label="Create Task" v-model="teste" />
      <v-btn class="primary mt-3" @click="createTask"
        ><v-icon>$add</v-icon></v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState({ taskNameFromStore: 'todoList/taskName' }),
    teste: {
      get() {
        return this.taskNameFromStore
      },
      set(value) {
        this.updateTaskName(value)
      }
    }
  },
  methods: {
    ...mapActions(
      { createTask: 'todoList/CREATE_TASK' },
    ),
    ...mapMutations({ updateTaskName: 'todoList/UPDATE_TASKNAME' })
  }
}
</script>
