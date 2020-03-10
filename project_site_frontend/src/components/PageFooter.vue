<template>
    <v-footer padless>
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
                <v-divider/>
                <v-card-text>
                    Background image by <a
                        href="https://pixabay.com/users/vectronom-9756089/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4270800">Vectronom
                    Studios</a> from <a
                        href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4270800">Pixabay</a>
                </v-card-text>
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
