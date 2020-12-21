import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";


function _drawLists() {
  let lists = ProxyState.lists
  let template = ''
  lists.forEach(list => {
    template += list.Template
  })
  document.getElementById('list').innerHTML = template
}

export default class ListsController {
  constructor() {
    ProxyState.on("lists", _drawLists)
    _drawLists()
  }

  createList() {
    window.event.preventDefault()
    let form = window.event.target
    let newList = {
      name: form['name'].value,
      task: form['task'].value
    }
    listsService.createList(newList)
    // @ts-ignore
    form.reset()
    //@ts-ignore
    $("#new-list-modal").modal('hide');
  }

  deleteList(id) {
    listsService.deleteList(id)
  }
}