<template>
    <div>
        <v-row align="center" justify="center">
            <v-checkbox v-model="gdprAgreement" :label="$t('gdprAgreement')"/>
        </v-row>
        <v-row align="center" justify="center">
            <vue-recaptcha @verify="(response) => recaptchaResponse=response" sitekey="6LebfuAUAAAAAJI5unWoZ4IZnvMP9bqi5cSyS6Iw" class="justify-center"/>
        </v-row>
        <v-btn rounded
               class="ma-5"
               :disabled="title==='' || content==='' || sign==='' || recaptchaResponse==='' || !gdprAgreement"
               @click="sendMail(title, content, sign, recaptchaResponse,
               () => successSnackbarVisibility = true,
               () => errorSnackbarVisibility = true)">
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
    recaptchaResponse: '',
    gdprAgreement: false,
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
    "closeSnackbar":"Close",
    "gdprAgreement":"I consent to having this website store my submitted information so they can respond to my inquiry."
    },
    "pl": {
    "sendButtonLabel":"Wyślij",
    "successfullySent":"Pomyślnie wysłano!",
    "errorOnSent":"Wystąpił problem podczas wysyłania twojej wiadomości. Spróbuj ponownie później...",
    "closeSnackbar":"Zamknij",
    "gdprAgreement":"Wyrażam zgodę na przechowywanie przez stronę internetową zapisanych w powyższym formularzu informacji w celu odpowiedzi na wysłaną wiadomość."
    }
    }
</i18n>
