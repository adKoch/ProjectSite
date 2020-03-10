<template>
    <div>
        <v-btn icon rounded color="secondary" class="ma-1">
            <a :href="links.github">
                <v-img src='../assets/github.svg' aspect-ratio="1" width="30" class="ma-2">
                </v-img>
            </a>
        </v-btn>
        <v-btn icon rounded color="secondary" class="ma-1">
            <a :href="links.linkedin">
                <v-img src='../assets/linkedin.svg' aspect-ratio="1" width="30" class="ma-2"></v-img>
            </a>
        </v-btn>
        <v-btn icon rounded color="secondary" class="ma-1">
            <a :href="links.facebook">
                <v-img src='../assets/facebook.svg' aspect-ratio="1" width="30" class="ma-2"></v-img>
            </a>
        </v-btn>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import links from '@/core/MediaSiteLinks';

  export default Vue.extend({
    name: 'MediaLinks',

    data: () => ({
      links,
    }),
  });
</script>
