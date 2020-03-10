// src/plugins/vuetify.js

import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {
      light: {
        primary: colors.lightBlue.lighten3,
        secondary: colors.green.lighten5,
        accent: colors.green.lighten5,
      },
      dark: {
        primary: colors.lightBlue.darken4,
        secondary: colors.blueGrey.darken2,
        accent: colors.blueGrey.lighten5,
      },
    },
  },
};

export default new Vuetify(opts);
