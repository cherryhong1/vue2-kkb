var user = {
  namespaced: true,
  state: () => ({
    isLogin: false,
    userName: ''
  }),
  mutations: {
    login (state, payload) {
      // console.log(payload)
      state.userName = payload
      state.isLogin = true
    },
    logOut (state) {
      state.isLogin = false
    }
  },
  actions: {
    login ({ commit }, payload) {
      commit('login', payload)
    },
    logout ({ commit }) {
      commit('logOut')
    }
  },
  getters: {
    welcome (state) {
      return state.userName + '，欢迎进入我的世界'
    }
  }
}
export default user
