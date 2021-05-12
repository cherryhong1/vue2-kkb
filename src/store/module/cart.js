var cart = {
  namespaced: true,
  state: () => (
    {
      shop: []
    }
  ),
  actions: {
    updateValue ({ commit }, payload) {
      commit('updateValue', payload)
    }
  },
  mutations: {
    updateValue (state, payload) {
      state.shop.push(payload)
    }
  }
}
export default cart
