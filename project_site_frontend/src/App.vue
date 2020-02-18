<template>
  <v-app>
    <TopBar/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import TopBar from '@/components/TopBar.vue';

export default Vue.extend({
  name: 'App',

  components: {
    TopBar,
  },

  data: () => ({
    //
  }),
});
</script>
<style>

</style>
