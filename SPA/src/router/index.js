import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '../containers/login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },{
      path:'/',
      beforeEnter:(to,from,next) =>{
        next({path:"/login"})
      }

    }
  ]
})
function isLogin(){

}
