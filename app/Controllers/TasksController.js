import { ProxyState } from "../AppState.js"
import { tasksService } from "../Services/TasksService.js"

function _drawTasks() {
  let tasks = ProxyState.tasks
  let template = ''
  tasks.forEach(task => {
    template += task.Template
  })
  document.getElementById('task').innerHTML = template
}


export default class TasksController {
  constructor() {
    ProxyState.on("tasks", _drawTasks)
    _drawTasks()
  }


  createTask(listId) {
    window.event.preventDefault()
    let form = window.event.target
    let newTask = {
      // @ts-ignore
      name: form.taskName.value,
      listId: listId
    }
    tasksService.createTask(newTask)

    // @ts-ignore
    form.reset()
  }

  delete(taskId) {
    tasksService.delete(taskId)
  }
}