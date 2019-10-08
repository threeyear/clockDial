import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import 'lib-flexible'

// 引入axios
import axios from 'axios';
Vue.prototype.$http=axios;//将axios改写到vue原型属性,调用方式例如this.$http.post(xxx)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')