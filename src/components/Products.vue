<template>
  <v-container fluid>
    <h1>List products</h1>
    <products-filters @filter="filter"/>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Id</th>
            <th class="text-left">Name</th>
            <th class="text-left">Brand</th>
            <th class="text-left">Price</th>
            <th class="text-left">Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr is="ProductsItem" v-for="product in filteredProducts" :product="product" :key="product.id"/>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
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
