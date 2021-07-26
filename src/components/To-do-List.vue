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
            <tr v-for="item in $store.state.listTask" :key="item.id">
                <th class="text-left">
                    {{item.id}}
                </th>
                <th class="text-left">
                    {{item.name}}
                </th>
                <th class="text-right">
                    <v-btn small m-8 class="primary mr-2"><v-icon>$vuetify.icons.edit</v-icon></v-btn>
                    <v-btn small class="error"><v-icon>$vuetify.icons.remove</v-icon></v-btn>
                </th>
            </tr>
        </tbody>
        </template>
    </v-simple-table>
</template>

<style lang="scss">  
  tbody {
     tr:hover {
        background-color: transparent !important;
     }
  }
</style>