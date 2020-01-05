<template>
  <header class="sticky">
    <a href="/" class="logo">Home</a>
    <button
      v-for="tab in tabs"
      :key="tab.component"
      class="button"
      @click="$emit('change-tab', tab)">
      {{tab.title}}
    </button>
  </header>
</template>

<script>
export default {
  props: ['tabs']
}
</script>

<style scoped>

</style>
