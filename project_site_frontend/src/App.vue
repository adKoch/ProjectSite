<template>
    <div id="app">
        <v-app>
            <TopBar/>
            <v-content v-if="!$vuetify.theme.dark" class="content-light">
                <router-view/>
            </v-content>
            <v-content v-if="$vuetify.theme.dark" class="content-dark">
                <router-view/>
            </v-content>
            <PageFooter/>
        </v-app>
    </div>
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

<style scoped>
    .content-light {
        background: url('assets/mtn_light.svg');
        background-size: auto;
        width: 100%;
        height: 100%;
        opacity: 100%;
    }
    .content-dark {
        background: url('assets/mtn_dark.png');
        background-size: auto;
        width: 100%;
        height: 100%;
        opacity: 100%;
    }
</style>
