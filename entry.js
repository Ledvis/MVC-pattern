import Model from "./model.js"
import View from "./view.js"
import Router from './router.js'

(async function() {
  const headerEl = document.querySelector("#header")

  await Model.login(6819369, 2 | 8192)

  const [me] = await Model.getUser({
    name_case: 'gen'
  });

  headerEl.innerHTML = View.render('header', me)

  Router.init()
})();

