<template>
    <v-simple-table>
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
            <tr v-for="task in listAllTask" :key="task.id">
                <th class="text-left">{{ task.id }}</th>
                <th class="text-left">{{ task.name }}</th>
                <th class="text-right">
                    <v-btn class="primary mr-1"><v-icon>$edit</v-icon></v-btn>
                    <v-btn class="error"><v-icon>$edit</v-icon></v-btn>
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
