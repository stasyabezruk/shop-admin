import Vue from 'vue'
import Vuex from 'vuex'
import categories from './categories'
import brands from './brands'
import products from './products'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    categories,
    brands,
    products
  }
})
