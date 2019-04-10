import axios from 'axios'

const state = {
  forecasts: [],
  total: 0
}

const getters = {}

const mutations = {
  SET_FORECASTS (state, payload) {
    state.forecasts = payload
  },
  SET_TOTAL (state, payload) {
    state.total = payload
  }
}

const actions = {
  async fetchForecasts ({ commit }, options) {
    let { from, to } = options
    await axios.get(`/api/weather/forecasts?from=${from}&to=${to}`)
      .then(res => {
        let { forecasts, total } = res.data
        commit('SET_FORECASTS', forecasts)
        commit('SET_TOTAL', total)
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
