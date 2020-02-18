<template>
    <v-app-bar app fixed color="primary">
        <v-toolbar-title>
            {{appTitle}}
        </v-toolbar-title>
        <LocaleChoice/>
        <v-spacer/>
        <v-btn text @click="$router.push('Contact')">
            {{$t('contactPageTitle')}}
        </v-btn>
        <v-btn text @click="$router.push('Projects')">
            {{$t('projectsPageTitle')}}
        </v-btn>
    </v-app-bar>
</template>
<script lang="ts">
  import Vue from 'vue';
  import LocaleChoice from '@/components/LocaleChoice.vue';

  export default Vue.extend({
    name: 'TopBar',

    data: () => ({
      appTitle: 'Adam Kochański',
    }),
    components: {
      LocaleChoice,
    },
  });
</script>
<style scoped>

</style>
