<template>
    <div>
        <v-row align="center" justify="center">
            <vue-recaptcha sitekey="6LebfuAUAAAAAJI5unWoZ4IZnvMP9bqi5cSyS6Iw" class="justify-center"/>
        </v-row>
        <v-btn rounded
               class="ma-5"
               :disabled="title==='' || content==='' || sign===''"
               @click="sendMail(title, content, sign,
               () => {successSnackbarVisibility = true},
               () => {errorSnackbarVisibility = true})">
            {{$t('sendButtonLabel')}}
        </v-btn>
        <v-snackbar v-model="successSnackbarVisibility">
            {{$t('successfullySent')}}
            <v-btn color="primary"
                   text
                   @click="successSnackbarVisibility = false">
                {{$t('closeSnackbar')}}
            </v-btn>
        </v-snackbar>
        <v-snackbar v-model="errorSnackbarVisibility">
            {{$t('errorOnSent')}}
            <v-btn color="primary"
                    text
                    @click="errorSnackbarVisibility = false">
                {{$t('closeSnackbar')}}
            </v-btn>
        </v-snackbar>
    </div>
</template>

<script lang="ts">

import VueRecaptcha from 'vue-recaptcha';
import {sendMail, initMail} from '@/core/EmailSending';

export default {
  name: 'MailSender',
  props: ['title', 'content', 'sign'],
  components: {
    VueRecaptcha,
  },
  data: () => ({
    successSnackbarVisibility: false,
    errorSnackbarVisibility: false,
  }),
  methods: {
    sendMail,
  },
  mounted(): void {
    initMail();
  },
};
</script>

<i18n>
    {
    "en": {
    "sendButtonLabel":"Send",
    "successfullySent":"Successfully sent!",
    "errorOnSent":"Error sending your message. Try again later...",
    "closeSnackbar":"Close"
    },
    "pl": {
    "sendButtonLabel":"Wyślij",
    "successfullySent":"Pomyślnie wysłano!",
    "errorOnSent":"Wystąpił problem podczas wysyłania twojej wiadomości. Spróbuj ponownie później...",
    "closeSnackbar":"Zamknij"
    }
    }
</i18n>
