import { generateId } from "../Utils/GenerateId.js";

export default class List {
  constructor({ name, task }) {
    this.id = generateId()
    this.name = name
    this.task = task

  }

  get Template() {
    return `
    <div class="card col-md-4 col-6">
<div class="card-body m-2 p-2">
    <h4 class="card-title text-center"><b>${this.name}</b></h4>
    <div class="form-check form-check-inline"id="task">
            <label class="form-check-label">
                <input class="form-check-input text-strong" type="checkbox" name="taskName" id="taskName" value="checkedValue">${this.task}
            </label>
        </div>
        <div class = "row justify-content-between align-items-end">
        <div class="text-left">
        <form class="form-inline"onsubmit="app.tasksController.createTask()">
        <div class="form-group mx-sm-3 mb-2">
          <label for="newTask" class="sr-only">Add New Task</label>
          <input type="newTask" class="form-control" id="taskName" placeholder="Add new task">
        </div>
        <button type="submit" class="btn btn-success mb-2">Add Task</button>
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
}
