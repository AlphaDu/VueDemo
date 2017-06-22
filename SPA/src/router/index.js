import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '../containers/login.vue'
import E404 from '../containers/404'
import Mainpage from '../containers/mainpage.vue'
import Components from '../containers/components.vue'
import Trees from '../containers/trees.vue'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      beforeEnter: (to, from, next) => {
        next({path: "/login"})
      },
    },
    {
      path:'/mainpage',
      component:Mainpage,
      children:[
        {
          path:'/components',
          component:Components
        },
        {
          path:'/tree',
          component:Trees
        }
      ]
    },

    {
      path:'/*',
      component:E404
    },


  ]
})
function isLogin () {

}
