<template>
  <header class="sticky">
    <v-tabs>
      <v-tab
        v-for="tab in tabs"
        :key="tab.component"
        class="button"
        @click="$emit('change-tab', tab)">
        {{tab.title}}
      </v-tab>
    </v-tabs>

  </header>
</template>

<script>
export default {
  props: ['tabs']
}
</script>

<style scoped>

</style>
