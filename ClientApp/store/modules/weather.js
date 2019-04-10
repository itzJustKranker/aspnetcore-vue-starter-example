import axios from 'axios'

const state = {
  forecasts: []
}

const getters = {}

const mutations = {
  SET_FORECASTS (state, payload) {
    state.forecasts = payload
  }
}

const actions = {
  async fetchForecasts ({ commit }, options) {
    let { from, to } = options
    await axios.get(`/api/weather/forecasts?from=${from}&to=${to}`)
      .then(res => {
        let { forecasts } = res.data
        commit('SET_FORECASTS', forecasts)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
