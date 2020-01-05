<template>
  <v-app>
    <header
        is="TheHeader"
        :tabs="tabs"
        @change-tab="changeTab"
      />
    <v-content>
      <div class="row">
        <div class="col-sm-1"></div>

        <keep-alive>
          <component
            :is="currentTab"
            class="col-sm-10"
          />
        </keep-alive>

        <div class="col-sm-1"></div>
      </div>
    </v-content>
    <v-footer>Footer</v-footer>
  </v-app>
</template>

<script>
import TheFooter from './components/layout/TheFooter'
import TheHeader from './components/layout/TheHeader'
import Products from './components/Products'
import Brands from './components/Brands'
import Categories from './components/Categories'

export default {
  name: 'app',
  components: {
    TheHeader,
    TheFooter,
    Products,
    Brands,
    Categories
  },
  data () {
    return {
      currentTab: 'Products',
      tabs: [{
        component: 'Products',
        title: 'Products'
      }, {
        component: 'Categories',
        title: 'Categories'
      }, {
        component: 'Brands',
        title: 'Brands'
      }]
    }
  },
  methods: {
    changeTab (tab) {
      this.currentTab = tab.component
    }
  },
  created () {
    this.$store.dispatch('categories/getCategories')
    this.$store.dispatch('brands/getBrands')
    this.$store.dispatch('products/getProducts')
  }
}
</script>
