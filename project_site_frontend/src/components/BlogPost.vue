<template>
    <v-card outlined flat>
        <v-card-text class="ma-5">
            <v-container>
                <v-runtime-template :template="content">
                </v-runtime-template>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<<script lang="ts">
  import Vue from 'vue';
  import VRuntimeTemplate from 'v-runtime-template';

  export default Vue.extend({
    name: 'BlogPost',
    components: {
      VRuntimeTemplate,
    },
    props: ['content'],
  });
</script>
