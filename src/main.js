// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import store from './vuex/store'
import axios from 'axios'
// 全局的 axios 默认url前缀
// axios.defaults.baseURL = 'http://www.easy-mock.com/mock/59b8deb0e0dc663341a84ff3/document/';

// 在vue原型中添加$http方法等于axios,所有组件都可以使用
Vue.prototype.$http = axios;



Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
