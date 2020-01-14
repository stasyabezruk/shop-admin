import axios from 'axios'
import URL from '../constants/URL'

const state = {
  all: []
}

const mutations = {
  SET_CATEGORIES (state, categories) {
    state.all = categories
  },
  ADD_CATEGORY (state, category) {
    state.all.push(category)
  },
  REMOVE_CATEGORY (state, categoryId) {
    state.all = state.all.filter(category => category.id !== categoryId)
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
  },
  addCategory (context, newCategory) {
    let data = {
      'category': {
        name: newCategory
      }
    }
    axios.post(URL.CATEGORIES, data).then(response => {
      context.commit('ADD_CATEGORY', response.data.category)
    })
  },
  removeCategory (context, categoryId) {
    axios.delete(URL.CATEGORY(categoryId)).then(response => {
      context.commit('REMOVE_CATEGORY', categoryId)
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
