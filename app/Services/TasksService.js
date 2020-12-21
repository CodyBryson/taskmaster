import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"
import { saveState } from "../Utils/LocalStorage.js"



class TasksService {
  delete(taskId) {
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != taskId)
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