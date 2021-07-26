export default {
  CREATE_TASK({ commit }, task) {
    commit('CREATE_TASK', task)
  },
  EDIT_TASK({ commit }, task) {
    commit('EDIT_TASK', task)
  },
  REMOVE_TASK({ commit }, task) {
    commit('REMOVE_TASK', task)
  }
}
