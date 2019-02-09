import Model from './model.js'
import newsPage from './pages/news.js'
import friendsPage from './pages/friends.js'
import friendPage from './pages/friend.js'

const friendsTabEl = document.querySelector('[data-role="nav-friends"]');
const newsTabEl = document.querySelector('[data-role="nav-news"]');
let activeEl = null;

function setActiveTab(el) {
  if (activeEl) {
    activeEl.classList.remove('active')
  }

  activeEl = el;
  activeEl.classList.add('active')
}

export default {
  async friendsRoute(params) {
    if (params.id) {
      const [friend] = await Model.getUser({
        user_ids: params.id,
        fields: 'photo_100,city,country,bdate'
      });

      friendPage.setData(friend)
      friendPage.render()
    } else {
      const friends = await Model.getFriends({
        fields: 'photo_100,bdate'
      })

      friendsPage.setData(friends.items);
      friendsPage.render();
    }

    setActiveTab(friendsTabEl);
  },

  async newsRoute() {
    const news = await Model.getNews({
      filters: 'post',
      count: 20
    })

    newsPage.setData(news.items);
    newsPage.render();

    setActiveTab(newsTabEl);
  }
}