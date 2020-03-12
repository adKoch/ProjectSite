<template>
    <div>
        <v-container class="text-center">
            <h1>{{$t('pageHeader')}}</h1>
            <h3>{{$t('pageSubheader')}}</h3>
            <v-text-field rounded filled clearable outlined solo
                          class="ma-5"
                          v-model="messageTitle"
                          :label="$t('contactTopicLabel')"
                          :hint="$t('contactTopicPlaceholder')"/>
            <v-textarea auto-grow rounded filled clearable outlined solo
                        class="ma-5"
                        v-model="messageContent"
                        :label="$t('contactTextAreaLabel')"
                        :hint="$t('contactTextAreaPlaceholder')"/>
            <v-text-field rounded filled clearable outlined solo
                          class="ma-5"
                          v-model="messageAuthor"
                          :label="$t('contactAuthorLabel')"
                          :hint="$t('contactAuthorPlaceholder')"/>
            <mail-sender :title="messageTitle" :content="messageContent" :sign="messageAuthor"/>
        </v-container>
    </div>
</template>

<script lang="ts">

  import MailSender from '@/components/MailSender.vue';
  export default {
    name: 'Contact',
    components: {MailSender},
    data: () => ({
      messageTitle: '',
      messageContent: '',
      messageAuthor: '',
    }),
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
    "contactAuthorLabel":"Signature",
    "contactAuthorPlaceholder":"Write here your contact information"
    },
    "pl": {
    "pageHeader": "Nawiąż kontakt",
    "pageSubheader": "Wyślij wiadomość poprzez wypełnienie poniższych pól",
    "contactTopicLabel": "Temat",
    "contactTopicPlaceholder": "Wpisz temat wiadomości",
    "contactTextAreaLabel": "Treść",
    "contactTextAreaPlaceholder": "Wpisz tutaj treść wiadomości",
    "contactAuthorLabel":"Podpis",
    "contactAuthorPlaceholder":"Zawrzyj tutaj"
    }
    }
</i18n>
