import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Buefy, {
  defaultIconPack: 'fa'
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
