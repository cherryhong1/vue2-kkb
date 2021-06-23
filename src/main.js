import create from './utils/create'
import Vue from 'vue'
import App from './App.vue'
import router from './krouter'
import store from './store'

console.log(router)
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false
Vue.prototype.$create = create
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
