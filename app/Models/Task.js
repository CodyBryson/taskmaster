import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor({ name, listId, id }) {
    this.name = name
    this.id = id || generateId()
    this.listId = listId
  }
  get Template() {
    return /*html*/`
  
  
            <label class="form-check-label">
                <input class="form-check-input text-strong" type="checkbox" name="taskName" id="taskName" value="checkedValue">${this.name}
            </label>
        
        `
  }
}