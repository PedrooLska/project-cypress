<template>
  <v-simple-table class="mt-5">
    <template>
      <thead>
        <tr>
          <th class="text-left">
              #
          </th>
          <th class="text-left">
              Task
          </th>
          <th class="text-right">
              Edit/Remove
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-show="listAllTask.length" v-for="task in listAllTask" :key="task.id">
          <th class="text-left">{{ task.id }}</th>
          <th class="text-left">{{ task.name }}</th>
          <th class="text-right">
              <v-btn class="info mr-1"><v-icon>$edit</v-icon></v-btn>
              <v-btn class="error" @click="removeTask(task)"><v-icon>$remove</v-icon></v-btn>
          </th>
        </tr>

        <tr v-show="!listAllTask.length">
          <th class="text-center" :colspan="3">
            No have tasks created
          </th>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  computed: {
    listAllTask() {
      return this.$store.getters["todoList/listAllTask"]
    }
  },
  methods: {
    removeTask(task) {
      this.$store.dispatch("todoList/REMOVE_TASK", task)
    }
  }
}
</script>

<style lang="scss">
  tbody {
    tr:hover {
        background-color: transparent !important;
    }
  }
</style>
