const generatedID = (state) =>
  state.listTask.length ? state.listTask[state.listTask.length - 1].id + 1 : 1

export default {
  UPDATE_TASKNAME(state, task) {
    state.taskName = task
  },
  CREATE_TASK(state, taskName) {
    if (taskName) {
      const incrementID = generatedID(state)
      const newListTask = [
        ...state.listTask,
        { id: incrementID, name: taskName }
      ]
      state.listTask = newListTask
    } else {
      state.erro =
        'Please fill in the field to create the activity.'
    }

    state.taskName = ""

    setTimeout(() => {
      state.erro = ""
    }, 3000)
  },
  EDIT_TASK(state, task) {
    const listTask = [...state.listTask]
    const taskRemove = listTask.findIndex((tsk) => tsk.id === task.id)
    state.listTask.splice(taskRemove, 1, task)
  },
  REMOVE_TASK(state, task) {
    const listTask = [...state.listTask]
    const taskRemove = listTask.findIndex((tsk) => tsk.id === task.id)
    state.listTask.splice(taskRemove, 1)
  },
}
