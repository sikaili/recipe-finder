import Vue from 'vue';
import store from '@/store';
import router from '@/router';
import vueDebounce from 'vue-debounce';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(vueDebounce, {
  listenTo: 'input',
  defaultTime: '700ms',
});

Vue.config.productionTip = false;

window.vm = new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
