<template>
  <v-app>
    <TopBar/>
    <PageFooter/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import TopBar from '@/components/TopBar.vue';
import PageFooter from '@/components/PageFooter.vue';

export default Vue.extend({
  name: 'App',

  components: {
    TopBar,
    PageFooter,
  },

  data: () => ({}),
});
</script>
<style>

</style>
