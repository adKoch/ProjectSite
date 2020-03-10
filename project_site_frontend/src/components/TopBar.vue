<template>
    <v-app-bar app fixed color="primary">
        <v-toolbar-title>
            {{$t('appTitle')}}
        </v-toolbar-title>
        <LocaleChoice/>
        <v-spacer/>
        <router-link to="home">
            <v-btn text>
                {{$t('homePageTitle')}}
            </v-btn>
        </router-link>
        <router-link to="contact">
            <v-btn text>
                {{$t('contactPageTitle')}}
            </v-btn>
        </router-link>
        <router-link to="projects">
            <v-btn text>
                {{$t('projectsPageTitle')}}
            </v-btn>
        </router-link>
        <v-switch color="accent"
                  v-model="$vuetify.theme.dark"
                  append-icon="mdi-brightness-4"
                  prepend-icon="mdi-brightness-6"/>
    </v-app-bar>
</template>
<script lang="ts">
  import Vue from 'vue';
  import LocaleChoice from '@/components/LocaleChoice.vue';

  export default Vue.extend({
    name: 'TopBar',

    data: () => ({}),
    components: {
      LocaleChoice,
    },
  });
</script>
<style scoped>

</style>
