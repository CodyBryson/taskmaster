import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";

class ListsService {

  deleteList(id) {
    ProxyState.lists = ProxyState.lists.filter(list => list.id != id)
  }
  createList(newList) {
    let list = new List(newList)
    ProxyState.lists = [...ProxyState.lists, list]
  }
}

export const listsService = new ListsService();