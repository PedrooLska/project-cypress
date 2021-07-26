const generatedID = (state) =>
  state.listTask.length ? state.listTask[state.listTask.length - 1].id + 1 : 1

export default {
  UPDATE_TASKNAME(state, task) {
    state.taskName = task
  },
  CREATE_TASK(state) {
    console.log(state.taskName)
    if (state.taskName) {
      const incrementID = generatedID(state)
      const newListTask = [
        ...state.listTask,
        { id: incrementID, name: state.taskName }
      ]
      state.listTask = newListTask
    } else {
      state.erro =
        'Não foi possível criar uma atividade, por favor, preencha o campo.'
    }
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
  INCREMENT_ID(state) {
    return state.listTask.length
      ? state.listTask[state.listTask.length - 1].id + 1
      : 1
  }
}
