// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入vue框架
import Vue from 'vue'
// 引入element组件
import ElementUI from 'element-ui'
// 引入element组件样式表
import 'element-ui/lib/theme-chalk/index.css'
// 引入根组件App.vue
import App from './App'
// 引入路由设置
import router from './router'

// 关闭生产模式下给出的提示
Vue.config.productionTip = false

Vue.use(ElementUI)// 添加Vue对ElementUI的依赖

// 定义实例
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
// 在main.js中可以看到创建了一个vue实例，并加载了模板组件App.vue，在再App.vue组件中看到模板加入来了一个图片和一个自定义的
// router-view标签，这个标签是在vue-router模块中定义的，因为在main.js创建vue实例时已经添加了router，这里可以直接使用，
// router-view标签里的内容可以通过src\router\index.js中查看，在第三行看到import Hello from 'components/Hello'，
// 引入了components下的Hello文件，并且在routes使用到了这个组件，这就是router-view标签加载（渲染）的内容，
// 在Hello.vue文件中看到了浏览器显示的出logo一外的算有元素，界面上显示的所有内容都找到了，
// 再通过output输出到界面上整个过程就执行完了。
