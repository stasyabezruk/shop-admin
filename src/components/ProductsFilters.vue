<template>
  <v-container fluid>
    <v-row align-content="space-around">
      <v-col class="d-flex" cols="4" xs="12" sm="4" md="4">
        <v-select
          v-model="filter.selectCategory"
          :items="categories"
          item-text="name"
          item-value="id"
          solo
          dense
        />
      </v-col>
      <v-col class="d-flex" cols="4" xs="12" sm="4" md="4">
        <v-select
          v-model="filter.selectBrand"
          :items="brands"
          item-text="name"
          item-value="id"
          solo
          dense
        />
      </v-col>
      <v-col class="d-flex" cols="4" xs="12" sm="4" md="4">
        <v-select
          v-model="filter.selectSort"
          :items="sortRules"
          item-text="title"
          item-value="key"
          solo
          dense
        />
      </v-col>
    </v-row>
    <v-row align-content="space-around">
      <v-col class="d-flex" cols="4">
        <label>Filter by price</label>
        <input v-model.number="filter.minPrice" type="number" />
        <input v-model.number="filter.maxPrice" type="number" />
      </v-col>
      <v-col class="d-flex" cols="4">
        <input v-model.trim="filter.inputSearch" type="text" placeholder="Seach by product name" />
      </v-col>
      <v-col class="d-flex" cols="4">
        <v-btn @click="clear" class="primary" block>Reset filters</v-btn>
      </v-col>
    </v-row>
  </v-container>
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
      return [...this.$store.state.categories.all, allCategoriesObj]
    },
    brands () {
      let allBrands = {
        id: '0',
        name: 'All brands'
      }
      return [...this.$store.state.brands.all, allBrands]
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
