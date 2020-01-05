<template>
  <div>
    <h1>Brands</h1>
    <ul>
      <li v-for="(brand, index) in brands" :key="`brand-${index}`">{{ brand }}</li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'Brands',
  computed: {
    brands () {
      return this.$store.state.brands.all
    }
  }
}
</script>

<style scoped>

</style>
