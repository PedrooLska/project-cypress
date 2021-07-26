<template>
  <v-main>
    <CreateTask />
    <TodoList />
    <Alert v-if="erro" :text="erro" />
  </v-main>
</template>

<script>
import CreateTask from '../components/Create-Task.vue'
import TodoList from '../components/To-do-List'
import Alert from '../components/Alert.vue'

export default {
  name: 'Home',
  components: {
    CreateTask,
    TodoList,
    Alert
  },
  computed: {
    erro() {
      return this.$store.state.todoList.erro
    }
  }
}
</script>
