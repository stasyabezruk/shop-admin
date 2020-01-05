import axios from 'axios'
import _ from 'lodash'
import URL from '../constants/URL'

const state = {
  all: []
}

const mutations = {
  SET_PRODUCTS (state, products) {
    state.all = products
  }
}

const getters = {
  minPrice: (state) => {
    return state.all.length
      ? Number(_.minBy(state.all, 'price').price)
      : 0
  },
  maxPrice: (state) => {
    return state.all.length
      ? Number(_.maxBy(state.all, 'price').price)
      : 0
  },
  getProductsByFilter: state => filter => {
    // Filter by
    let filtered = state.all
      // categories
      .filter(product => {
        return filter.selectCategory === '0' || product.categories[0].id === filter.selectCategory
      })

      // brands
      .filter(product => {
        return filter.selectBrand === '0' || product.brand === filter.selectBrand
      })

      // Price
      .filter(product => {
        return Number(product.price) >= filter.minPrice && Number(product.price) <= filter.maxPrice
      })

      // Search name
      .filter(product => {
        return filter.inputSearch === '' || product.name.toLowerCase().indexOf(filter.inputSearch.toLowerCase()) !== -1
      })

    // Sort
    let sortKey = filter.selectSort.split(':')[0]
    let sortDir = filter.selectSort.split(':')[1]

    if (sortKey === 'rating') {
      filtered.map(product => {
        let rate = product.fields.filter(item => item.label === 'rating')[0]
        product['rating'] = rate.value
      })
    }
    let sorted = _.sortBy(filtered, product => {
      return Number(product[filter.sortKey])
    })

    // Reverse sort
    if (sortDir === 'desc') {
      sorted = sorted.reverse()
    }

    return sorted
  }
}

const actions = {
  getProducts (context) {
    axios
      .get(URL.PRODUCTS)
      .then(response => {
        let products = response.data.map(item => item.product)
        context.commit('SET_PRODUCTS', products)
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
