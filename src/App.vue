<template>
  <v-app>
    <Navigation />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

import Navigation from '@/components/navigation/Navigation'

export default {
  components: {
    Navigation
  },

  created: function () {
    this.initData()
  },

  methods: {
    ...mapActions(['initData'])
  },

  name: 'App'
}
</script>
