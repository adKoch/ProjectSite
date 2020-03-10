<template>
    <div>
        <v-container class="text-center">
            <h1>{{$t('pageHeader')}}</h1>
            <h3>{{$t('pageSubheader')}}</h3>
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
                {{$t('sendButtonLabel')}}
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

<i18n>
    {
    "en": {
    "pageHeader": "Get In Touch",
    "pageSubheader": "Send a message by filling forms below",
    "contactTopicLabel":  "Subject",
    "contactTopicPlaceholder": "Type in subject of your message",
    "contactTextAreaLabel" : "Message",
    "contactTextAreaPlaceholder" : "Type in your message content here",
    "sendButtonLabel": "Send"
    },
    "pl": {
    "pageHeader": "Nawiąż kontakt",
    "pageSubheader": "Wyślij wiadomość poprzez wypełnienie poniższych pól",
    "contactTopicLabel": "Temat",
    "contactTopicPlaceholder": "Wpisz temat wiadomości",
    "contactTextAreaLabel": "Treść",
    "contactTextAreaPlaceholder": "Wpisz tutaj treść wiadomości",
    "sendButtonLabel": "Wyślij"
    }
    }
</i18n>
