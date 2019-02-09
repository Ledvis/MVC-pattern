import Controller from './controller.js'

function getRoute() {
  const hash = location.hash ? location.hash.slice(1) : ''
  const [name, id] = hash.split("/")

  return {
    name,
    params: {
      id
    }
  };
}

function onHashChange() {
  const { name, params } = getRoute();

  if (name) {
    const routeName = name + 'Route'

    Controller[routeName](params);
  }

}

export default {
  init() {
    addEventListener('hashchange', onHashChange);
    onHashChange()
  }
}