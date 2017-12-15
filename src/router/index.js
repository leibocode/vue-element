import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Table from '../components/Table'
import Main from '../components/Main'
import User from '../components/User'
import Char from '../components/Char'

Vue.use(Router)



export default new Router({
  routes: [
    {
      path:'/login',
      component:Login,
      hidden:true,
     
    },
    {
      path: '/',
      component: Home,
      name: '数据管理',
      iconCls: 'el-icon-tickets',//图标样式class
      children: [
          { path: '/main', component: Main, name: 'Home',},
          { path: '/char', component: Char, name: '首页' },
          {path:'/table',component:Table,name:'table'}
      ]
    },
    {
      path:'/',
      component:Home,
      name:'权限管理',
      iconCls:'fa fa-id-card-o',
      children:[
        {path:'/user',component:User,name:'用户管理'}
      ]
    },
    {
      path:'/',
      component:Home,
      name:'订单管理',
      iconCls:'fa fa-id-card-o'
    },
    {
      path:'/',
      component:Home,
      name:'微信管理'
    }
  ]
})
