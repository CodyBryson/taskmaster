import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor({ name, listId, id }) {
    this.name = name
    this.id = id || generateId(),
      this.listId = listId
  }
  get Template() {
    return /*html*/`
  
    <div class = "col-6">
    <label class="form-check-label">
                <h4>
                <input class="form-check-input text-strong" type="checkbox" name="taskName" id="taskName" value="checkedValue">${this.name}</h4>
            </label>
    <i class="fa fa-times-circle text-danger cursor-pointer p-2" onclick="app.tasksController.delete('${this.id}')" aria-hidden="true"></i>
    
</div>
           
        
        `
  }
}