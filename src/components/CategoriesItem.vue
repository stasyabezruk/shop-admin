<template>
  <tr>
    <td>{{ category.id }}</td>
    <td>{{ category.name }}</td>
    <td>
      <v-btn color="red darken-1" @click="remove(category.id)">Remove</v-btn>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'CategoriesItem',
  props: [ 'category' ],
  methods: {
    remove (id) {
      this.$store.dispatch('categories/removeCategory', id)
    }
  }
}
</script>

<style scoped>

</style>
