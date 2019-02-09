import View from '../view.js'

const resultsEl = document.querySelector('#results');
let items = []

export default {
  setData(data) {
    items = data;
  },

  render() {
    results.innerHTML = View.render('news', { list: items })
  }
}