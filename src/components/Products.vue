<template>
  <div>
    <h1>List products</h1>
    <products-filters @filter="filter"/>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr is="ProductsItem" v-for="product in filteredProducts" :product="product" :key="product.id"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import ProductsItem from './ProductsItem'
import ProductsFilters from './ProductsFilters'
export default {
  name: 'Products',
  components: {
    ProductsFilters,
    ProductsItem
  },
  data () {
    return {
      filteredProducts: []
    }
  },
  methods: {
    filter (filter) {
      this.filteredProducts = this.$store.getters['products/getProductsByFilter'](filter)
    }
  }
}
</script>

<style scoped>
    table:not(.horizontal) {
        max-height: 1000px;
    }
</style>
