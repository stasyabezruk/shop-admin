<template>
    <v-container fluid>
      <v-row>
        <h1>Categories</h1>
      </v-row>
      <CategoriesNew/>
      <v-row>
        <v-col cols="12">
          <v-simple-table>
            <template v-slot:default>
              <thead>
              <tr>
                <th class="text-left">Id</th>
                <th class="text-left">Category</th>
              </tr>
              </thead>
              <tbody>
              <tr is="CategoriesItem" v-for="category in categories" :category="category" :key="category.id"/>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import CategoriesItem from './CategoriesItem'
import CategoriesNew from './CategoriesNew'
export default {
  name: 'Categories',
  components: {
    CategoriesItem,
    CategoriesNew
  },
  computed: {
    categories () {
      return this.$store.state.categories.all
    }
  }
}
</script>

<style scoped>

</style>
