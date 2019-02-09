import View from '../view.js'
let friend = {}
const resultsEl = document.querySelector('#results');

export default {
  setData(data) {
    friend = data;
  },

  render() {
    resultsEl.innerHTML = View.render('friend', friend)
  }
}

