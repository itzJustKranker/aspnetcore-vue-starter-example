const state = {
  counter: 1
}

const getters = {}

const mutations = {
  SET_COUNTER (state, payload) {
    state.counter = payload
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
