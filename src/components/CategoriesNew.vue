<template>
  <v-row>
    <v-dialog v-model="dialog" max-width="290">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Add category</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">New Category</v-card-title>
        <v-card-text>
          <v-text-field v-model="newCategory" label="Category"/>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="blue darken-1" text @click="addCategory">Add</v-btn>
          <v-btn color="red darken-1" text @click="dialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'CategoriesNew',
  data () {
    return {
      dialog: false,
      newCategory: ''
    }
  },
  methods: {
    addCategory () {
      this.$store.dispatch('categories/addCategory', this.newCategory)
      this.dialog = false
    }
  }
}
</script>

<style scoped>

</style>
