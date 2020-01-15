<template>
  <v-row>
    <v-dialog v-model="dialog" max-width="290">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Add category</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">New Category</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="newCategory"
            label="Category"
            :error-messages="newCategoryErrors"
            required
            @input="$v.newCategory.$touch()"
            @blur="$v.newCategory.$touch()"
          />
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
import { required, maxLength } from 'vuelidate/lib/validators'
export default {
  name: 'CategoriesNew',
  data () {
    return {
      dialog: false,
      newCategory: ''
    }
  },
  validations: {
    newCategory: {
      required,
      maxLength: maxLength(20)
    }
  },
  computed: {
    newCategoryErrors () {
      const errors = []
      if (!this.$v.newCategory.$dirty) return errors
      !this.$v.newCategory.maxLength && errors.push('New category must be at most 20 characters long')
      !this.$v.newCategory.required && errors.push('New category is required.')
      return errors
    }
  },
  methods: {
    addCategory () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('categories/addCategory', this.newCategory)
        this.dialog = false
      }
    }
  }
}
</script>

<style scoped>

</style>
