export default {
  SET_TASK(state, task) {
    state.task = task
  },
  CREATE_TASK(state, taskName) {
    const theLastListTaskID = state.listTask[state.listTask.length - 1].id;
    const newListTask = [...state.listTask, {id: theLastListTaskID + 1, name: taskName}]
    state.listTask = newListTask;
  },
  EDIT_TASK(state, task) {
    const listTask = [...state.listTask];
    const taskRemove = listTask.findIndex(tsk => tsk.id === task.id)
    state.listTask.splice(taskRemove, 1, task)
  },
  REMOVE_TASK(state, task) {
    const listTask = [...state.listTask];
    const taskRemove = listTask.findIndex(tsk => tsk.id === task.id)
    state.listTask.splice(taskRemove, 1)
  },
}
