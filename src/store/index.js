import Vue from 'vue'
import Vuex from 'vuex'

import storeTodoList from './modules/todoList/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todoList: storeTodoList
  }
})
