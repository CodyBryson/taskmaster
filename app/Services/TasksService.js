import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"
import { saveState } from "../Utils/LocalStorage.js"



class TasksService {
  delete(taskId) {
    var result = confirm("Are you sure you want to delete this task?");
    if (result) {
      ProxyState.tasks = ProxyState.tasks.filter(t => t.id != taskId)
    }
  }
  createTask(newTask) {
    let tasks = ProxyState.tasks
    tasks.push(new Task(newTask))
    ProxyState.tasks = tasks
  }
  constructor() {
    ProxyState.on("tasks", saveState)
  }
}
export const tasksService = new TasksService