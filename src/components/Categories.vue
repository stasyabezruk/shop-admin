<template>
  <div>
    <h1>Categories</h1>
    <div class="table">
      <div class="table__header">
        <div>Id</div>
        <div>Category</div>
      </div>
      <div class="table__content">
        <div></div>
      </div>

    </div>
    <ul>
      <li v-for="category in categories" :key="category.id">{{ category.name }}</li>
    </ul>
  </div>

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
