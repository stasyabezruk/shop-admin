<template>
    <v-container fluid>
      <h1>Categories</h1>
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
              <tr v-for="category in categories" :key="category.id">
                <td>{{ category.id }}</td>
                <td>{{ category.name }}</td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'Categories',
  computed: {
    categories () {
      return this.$store.state.categories.all
    }
  }
}
</script>

<style scoped>

</style>
