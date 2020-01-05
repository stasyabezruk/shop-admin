import axios from 'axios'
import URL from '../constants/URL'

const state = {
  all: []
}

const mutations = {
  SET_BRANDS (state, brands) {
    state.all = brands
  }
}

const getters = {

}

const actions = {
  getBrands (context) {
    axios.get(URL.PRODUCTS)
      .then(response => {
        let brands = [...new Set(response.data
          .map(item => item.product.brand)
          .filter(brand => brand !== null)
        )]
        context.commit('SET_BRANDS', brands)
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
