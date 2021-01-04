import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";


function _draw() {
  let template = ""
  ProxyState.lists.forEach(l => template += l.Template)
  document.getElementById('list').innerHTML = template

}

export default class ListsController {
  constructor() {
    ProxyState.on("lists", _draw)
    ProxyState.on("tasks", _draw)
    _draw()
  }

  createList() {
    window.event.preventDefault()
    let form = window.event.target
    let newList = {
      name: form['name'].value,
      color: form['color'].value

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