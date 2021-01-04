import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js";

export default class List {
  constructor({ name, color, id }) {
    this.name = name
    this.color = color
    this.id = id || generateId()
  }

  get Template() {
    return /*html*/`
    <div class="card col-md-4 col-6" style= "border: 5px double ${this.color}">
<div class="card-body m-2 p-2">
    <h2 class="card-title text-center text-light" style="background-color: ${this.color}"><b>${this.name}</b></h2>
      <div class = "row flex-column p-3">
      ${this.Tasks}
      </div>
        <div class = "row justify-content-between align-items-end">
        <div class="text-left">
        <form onsubmit="app.tasksController.createTask('${this.id}')">
        <div class="form-group mx-sm-3 mb-2">
          <label for="newTask" class="sr-only">Add New Task</label>
          <input type="text" minlength="3" maxlength="50" class="form-control" id="taskName" placeholder="Add new task" required>
        </div>
        <button type="submit" class="btn btn-success mb-2 mx-3">Add Task</button>
      </form>
        </div>
        <div class="text-right">
        <button type="button" class="btn btn-danger mx-4" onclick="app.listsController.deleteList('${this.id}')">Delete List</button>
        </div>
        </div>
</div>
</div>
    `
  }

  get Tasks() {
    let template = ""
    let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
    tasks.forEach(t => template += t.Template)
    return template
  }
}

//let taskTotal = 
//let taskCurrent = 
//ProxyState.tasks = ProxyState.tasks.filter(t => t.listId != checked)
//return ProxyState.tasks
//taskCurrent = ProxyState.tasks