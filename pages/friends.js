import View from '../view.js'
import * as settings from "../settings.js";
import * as utils from "../utils.js";

let items = []
const resultsEl = document.querySelector('#results');
let sortValue = settings.getSortValue()

export default {
  setData(data) {
    items = data;
  },

  render() {
    if (sortValue === 'name') {
      utils.sortByName(items)
    } else if (sortValue === 'bday') {
      utils.sortByBDay(items)
    }

    resultsEl.innerHTML = View.render('friends', { list: items })

    const sortEl = resultsEl.querySelector('[data-role="sort"]');

    sortEl.addEventListener("change", ({target}) => {
      settings.setSortValue(target.value)
    })
  },
}