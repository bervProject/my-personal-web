import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Buefy from 'buefy';
import App from './App.vue';
import router from './router';
import store from './store';
import messages from './messages';

Vue.config.productionTip = false;

Vue.use(Buefy, {
  defaultIconPack: 'fa',
});

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en',
  messages, // set locale messages
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
