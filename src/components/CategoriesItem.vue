<template>
  <tr>
    <td>{{ category.id }}</td>
    <td>{{ category.name }}</td>
  </tr>
</template>

<script>
export default {
  name: 'CategoriesItem',
  props: [ 'category' ]
}
</script>

<style scoped>

</style>
