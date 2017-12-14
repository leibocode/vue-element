// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'
import Vuex from 'vuex'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
    if( to.path ==='/login'){
       sessionStorage.removeItem('user')
    }
    let user =JSON.parse(sessionStorage.getItem('user'))
    if(!user && to.path !=="/login") {
      next({path:'/login'})
    }else {
      next()
    }
} )
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
