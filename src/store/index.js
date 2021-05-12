import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
import cart from './module/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { user, cart },
  strict: true
})
