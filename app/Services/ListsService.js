import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js"

class ListsService {

  deleteList(id) {
    var result = confirm("Are you sure you want to delete this list?");
    if (result) {
      ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
      ProxyState.tasks = ProxyState.tasks.filter(t => t.listId != id)
    }
  }
  createList(newList) {
    let list = new List(newList)
    let lists = ProxyState.lists
    lists.push(list)

    ProxyState.lists = lists
  }
  constructor() {
    ProxyState.on("lists", saveState)
  }
}

export const listsService = new ListsService();