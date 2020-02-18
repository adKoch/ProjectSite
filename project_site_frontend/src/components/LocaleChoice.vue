<template>
    <div>
        <v-row class="ms-2">
            <v-btn icon rounded :outlined="getCurrentLocale()==='en'" @click="setLocale('en')" color="secondary">
                <v-img src='../assets/usa_rnd.svg' aspect-ratio="1" width="30" class="ma-2">
                </v-img>
            </v-btn>
            <v-btn icon rounded :outlined="getCurrentLocale()==='pl'" @click="setLocale('pl')" color="secondary">
                <v-img src='../assets/pl_rnd.svg' aspect-ratio="1" width="30" class="ma-2">
                </v-img>
            </v-btn>
        </v-row>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'LocaleChoice',
    data: () => ({
        availableLanguages: ['en', 'pl'],
    }),
    methods:{
      setLocale(locale:string){
        this.$i18n.locale=locale;
      },
      getCurrentLocale():string {
        return this.$i18n.locale;
      },
    },
  });
</script>
