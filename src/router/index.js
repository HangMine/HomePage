import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HomeComponents/Home'
import ArticleMenu from '@/components/ArticleComponents/ArticleMenu'
import ArticleContent from '@/components/ArticleComponents/ArticleContent'
import ArticleContent2 from '@/components/ArticleComponents/ArticleContent2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Article',
      name: 'Article',
      component: ArticleMenu,
      children: [
        {
          path: '/',
          component: ArticleContent
        }
      ]
    },
    {
      path: '/Article',
      name: 'Article',
      component: ArticleMenu,
      children: [
        {
          path: '/ArticleContent2',
          component: ArticleContent2
        }
      ]
    }
  ]
})
