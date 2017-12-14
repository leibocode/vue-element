import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Table from '../components/Table'
import Main from '../components/Main'
import User from '../components/User'

Vue.use(Router)



export default new Router({
  routes: [
    {
      path:'/login',
      component:Login,
      hidden:true,
      name:''
    },
    {
      path: '/',
      component: Home,
      name: '导航一',
      iconCls: 'el-icon-message',//图标样式class
      children: [
          { path: '/main', component: Main, name: '主页', hidden: true },
          { path: '/table', component: Table, name: 'Table' },
          { path: '/form', component: Form, name: 'Form' },
          { path: '/user', component: user, name: '列表' },
      ]
    }
  ]
})
