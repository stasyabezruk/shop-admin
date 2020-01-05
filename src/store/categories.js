import axios from 'axios'
import URL from '../constants/URL'

const state = {
  all: []
}

const mutations = {
  SET_CATEGORIES (state, categories) {
    state.all = categories
  }
}

const getters = {
}

const actions = {
  getCategories (context) {
    axios.get(URL.CATEGORIES).then(response => {
      let categories = response.data.map(item => item.category)
      context.commit('SET_CATEGORIES', categories)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
