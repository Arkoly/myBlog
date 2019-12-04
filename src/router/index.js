import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/components/template'
import blog from '@/components/views/blog' /* 默认能引入的src/components/views/blog/index.vue文件*/
import home from '@/components/views/home'
import doc from '@/components/views/doc'

/*childdenList下的组件当做template组件的子路由嵌套*/
let childdenList = [
  { path :'', component: home, name: 'home'},
  { path :'blog', component: blog, name: 'blog'},
  { path :'doc', component: doc, name: 'doc'},
]

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'index',
      component: index,
      children: childdenList
    }
  ]
})
