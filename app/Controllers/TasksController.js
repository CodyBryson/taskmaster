import { tasksService } from "../Services/TasksService.js"

export default class TasksController {



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