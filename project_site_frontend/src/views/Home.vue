<template>
    <v-row align="center" justify="center">
        <about-me class="ma-5"/>
    </v-row>
</template>

<script lang="ts">
  import AboutMe from '@/views/content/AboutMe.vue';

  export default {
    name: 'Home',
    components: {
      AboutMe,
    },
  };
</script>
