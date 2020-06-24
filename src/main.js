import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import './registerServiceWorker';

import ApiService from './common/api.service';

import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
Vue.use(Element, { locale });

Vue.config.productionTip = false;

ApiService.init();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
