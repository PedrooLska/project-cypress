<template>
  <v-main>
    <CreateTask />
    <TodoList />
  </v-main>
</template>

<script>
import CreateTask from '../components/Create-Task.vue'
import TodoList from "../components/To-do-List";

export default {
  name: "Home",

  components: {
    CreateTask,
    TodoList
  },
};
</script>
