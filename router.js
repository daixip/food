import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import menuDetail from './views/menuDetail.vue'
import menuList from './views/menuList.vue'
import dairy from './views/dairy.vue'
import articleList from './views/articleList.vue'
import article from './views/article.vue'
import stars from './views/stars.vue'
import starsMore from './views/starsMore.vue'
import userCollection from './views/userCollection.vue'
import mealslist from './views/mealslist.vue'
import menu_two from './views/menu_two.vue'
import user from './views/user.vue'
import hometown from './components/hometown.vue'
import indexClass from './components/home/indexClass.vue'
import poster from './components/poster.vue'

Vue.use(Router)

export default new Router({
  
  routes: [
    {path: '/',component: Home},
    {path: '/menuDetail/:mid',component: menuDetail,props:true},
    {path: '/menuList',component: menuList},
    {path: '/dairy',component: dairy},
    {path: '/articleList',component: articleList},
    {path: '/article/:lcId',component: article,props:true},
    {path: '/starsMore',component: stars},
    {path: '/stars/:slwId',component: starsMore,props:true},
    {path: '/userCollection',component: userCollection},
    {path: '/mealslist/:dayId',component: mealslist,props:true},
    {path: '/menu_two',component: menu_two},
    {path: '/user',component: user},
    {path: '/hometown',component: hometown},
    {path: '/indexClass',component: indexClass},
    {path: '/poster',component: poster}

  ]
})
