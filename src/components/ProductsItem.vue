<template>
  <tr>
    <td>{{ product.id }}</td>
    <td>{{ product.name }}</td>
    <td>{{ product.brand }}</td>
    <td>{{ product.price }}</td>
    <td>{{ rating }}</td>
  </tr>
</template>

<script>
export default {
  name: 'ProductsItem',
  props: [ 'product' ],
  computed: {
    rating () {
      let rate = this.product.fields.filter(item => item.label === 'rating')[0]
      return rate.value
    }
  }
}
</script>

<style scoped>

</style>
