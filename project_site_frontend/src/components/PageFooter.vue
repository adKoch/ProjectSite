<template>
    <v-footer absolute padless>
        <v-container fluid class="pa-0">
            <v-card flat tile class="text-center" color="secondary">
                <v-card-text class="text-center">
                    <MediaLinks/>
                </v-card-text>
                <v-card-text class="pt-0">
                    {{$t('hello')}}
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text>
                    {{$t('iconMadeBy')}}<a href="https://www.flaticon.com/authors/freepik"
                                           title="Freepik">Freepik</a>{{$t('from')}}<a
                        href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </v-card-text>
                <v-divider></v-divider>

                <v-card-text>
                    {{ new Date().getFullYear() }} — <strong>{{$t('appTitle')}}</strong>
                </v-card-text>
            </v-card>
        </v-container>
    </v-footer>
</template>

<script lang="ts">
  import Vue from 'vue';
  import MediaLinks from '@/components/MediaLinks.vue';

  export default Vue.extend({
    name: 'PageFooter',
    data: () => ({}),
    components: {
      MediaLinks,
    },
  });
</script>
