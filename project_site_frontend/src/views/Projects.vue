<template>
    <v-expansion-panels tile class="pa-5">
        <v-expansion-panel>
            <v-expansion-panel-header>
                <h2 class="text-center">
                    {{$t('busflowTitle')}}
                </h2>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <busflow/>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script lang="ts">

  export default {
    name: 'Projects',
    components: {
      Busflow: () => import('@/views/content/projects/Busflow.vue'),
    },
  };
</script>

<style scoped>

</style>
