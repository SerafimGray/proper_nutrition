<template>
  <v-btn @click="save" :disabled="!valid">
    <v-icon>mdi-content-save</v-icon>
  </v-btn>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import CloseProductDialog from '@/mixins/CloseProductDialog'

export default {
  computed: {
    ...mapState(['editedProduct', 'selectedDate', 'settings'])
  },

  methods: {
    ...mapActions(['editRation', 'setRation']),

    save () {
      const ration = {
        product_id: this.editedProduct.product_id,
        user_id: this.settings.userID,
        date: this.selectedDate,
        mass: +this.editedProduct.mass
      }
      if (this.editedProduct.id) {
        ration.id = this.editedProduct.id
      }
      this.editRation(ration)
      this.close()
      this.setRation(this.selectedDate)
    }
  },

  mixins: [CloseProductDialog],

  props: ['valid']
}
</script>

<style></style>
