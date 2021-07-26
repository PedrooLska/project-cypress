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
            <tr v-for="task in listAllTask()" :key="task.id">
                <th>{{ task.id }}</th>
                <th>{{ task.name }}</th>
                <th>
                    <v-btn></v-btn>
                    <v-btn></v-btn>
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
            return $store.getters["todoList/listAllTask"]
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