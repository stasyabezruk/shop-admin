<template>
  <div>
    <v-select
      v-model="filter.selectCategory"
      :items="categories"
      item-text="name"
      item-value="id"
    />

    <select v-model="filter.selectBrand">
      <option value="0">All brands</option>
      <option v-for="(brand, index) in brands" :key="`brand-${index}`" :value="brand">{{ brand }}</option>
    </select>

    <label>Filter by price</label>
    <input v-model.number="filter.minPrice" type="number" />
    <input v-model.number="filter.maxPrice" type="number" />

    <input v-model.trim="filter.inputSearch" type="text" placeholder="Seach by product name" />

    <select v-model="filter.selectSort">
      <option v-for="rule in sortRules" :key="rule.key" :value="rule.key">{{ rule.title }}</option>
    </select>

    <button @click="clear" class="primary small">Reset filters</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ProductsFilters',
  data () {
    return {
      sortRules: [
        { key: 'id:asc', title: 'Order' },
        { key: 'rating:desc', title: 'Rating' },
        { key: 'price:asc', title: 'The cheapest' },
        { key: 'price:desc', title: 'The most expensive' }
      ],
      filter: {
        inputSearch: '',
        selectCategory: '0',
        selectBrand: '0',
        minPrice: 0,
        maxPrice: 0,
        selectSort: 'id:asc'
      }
    }
  },
  computed: {
    categories () {
      let allCategoriesObj = {
        id: '0',
        name: 'All categories'
      }
      let newArr = [...this.$store.state.categories.all, allCategoriesObj]
      return newArr
    },
    brands () {
      return this.$store.state.brands.all
    },
    products () {
      return this.$store.state.products.all
    },
    ...mapGetters('products', {
      minPriceAll: 'minPrice',
      maxPriceAll: 'maxPrice'
    })
  },
  watch: {
    products () {
      this.filter.minPrice = this.minPriceAll
      this.filter.maxPrice = this.maxPriceAll
    },
    filter: {
      handler (newFilter) {
        this.$emit('filter', newFilter)
      },
      deep: true
    }
  },
  methods: {
    clear () {
      this.filter = {
        inputSearch: '',
        selectCategory: '0',
        selectBrand: '0',
        minPrice: this.minPriceAll,
        maxPrice: this.maxPriceAll,
        selectSort: 'id:asc'
      }
    }
  }
}
</script>

<style scoped>

</style>
