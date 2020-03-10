<template>
    <div>
        <v-container class="text-center">
            <h1>{{$t('contactHeader')}}</h1>
            <h3>{{$t('contactSubheader')}}</h3>
            <v-text-field rounded filled clearable outlined solo
                          class="ma-5"
                          :label="$t('contactTopicLabel')"
                          :hint="$t('contactTopicPlaceholder')">>

            </v-text-field>
            <v-textarea auto-grow rounded filled clearable outlined solo
                        class="ma-5"
                        v-model="htmlText"
                        :label="$t('contactTextAreaLabel')"
                        :hint="$t('contactTextAreaPlaceholder')">
            </v-textarea>
            <v-btn rounded outlined
                   class="ma-5">
                {{$t('send')}}
            </v-btn>
        </v-container>
    </div>
</template>

<script lang="ts">

  export default {
    name: 'Contact',
    components: {},
  };
</script>
