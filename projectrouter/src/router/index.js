 //配置路由相关配置
 import VueRouter from 'vue=router'
import Vue from 'vue'


 //导入组件
 import Home from'../components/Home'
 import About from'../components/About'

 //通过vue.use(插件)安装插件
 Vue.use(VueRouter)
 //创建VueRouter对象
 const routes=[
  {
   path:'/home',
component: Home
   // redirect:'/home'
  },
  {
   path:'/about',
   component:About
  }

 ]
 const router=new VueRouter({
     //配置路由和组件之间的应用关系
     routes
 })
 //将router对象传入到vue实例