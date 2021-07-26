export default {
  REMOVE_TASK({ state }, task) {
    const listTask = [...state.listTask];
    const taskRemove = listTask.findIndex(tsk => tsk.id === task.id)
    state.listTask.splice(taskRemove, 1)
  }
}