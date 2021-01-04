import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor({ name, listId, id, isChecked }) {
    this.name = name
    this.id = id || generateId(),
      this.listId = listId,
      this.isChecked = false || isChecked

  }
  get Template() {
    return /*html*/`
  
    <div class = "col-6">
    <label class="form-check-label">
                <h4>
                <input class="form-check-input text-strong" type="checkbox" name="taskName" id="${this.id}" value="checkedValue" ${this.isChecked ? 'checked' : ''} onclick = "app.tasksController.checkBox('${this.id}','${this.listId}')">${this.name}</h4>
            </label>
    <i class="fa fa-times-circle text-danger cursor-pointer p-2" onclick="app.tasksController.delete('${this.id}')" aria-hidden="true"></i>
    
</div>
           
        
        `
  }
}
