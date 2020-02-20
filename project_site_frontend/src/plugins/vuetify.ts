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
        primary: colors.green.lighten4,
        secondary: colors.purple.lighten2,
        accent: colors.green.darken3,
      },
    },
  },
};

export default new Vuetify(opts);
