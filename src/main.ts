import { createApp } from 'vue';
import Oruga from '@oruga-ui/oruga-next';
import { createI18n } from 'vue-i18n';
import { bulmaConfig } from '@oruga-ui/theme-bulma';
import App from './App.vue';
import router from './router';
import store from './store';
import messages from './messages';
import '@oruga-ui/theme-bulma/style.css';

const app = createApp(App);

const i18n = createI18n({
  legacy: false,
  locale: 'en', // set locale
  fallbackLocale: 'en',
  messages, // set locale messages
});

const customBulmaConfig = {
  ...bulmaConfig,
  iconPack: 'fas',
}

app.use(router);
app.use(store);
app.use(i18n);
app.use(Oruga, customBulmaConfig);

app.mount('#app');
