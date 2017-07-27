import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import { store } from './store'
import VueResource from 'vue-resource'

import Vuefire from 'vuefire';
//import Vuetify from 'vuetify'
import Ripple from 'vue-ripple-directive'



Vue.use(VueRouter);
Vue.use(VueResource);

Vue.directive('ripple', Ripple);
Vue.use(Vuefire);




//Vue.use(Vuetify);

Vue.http.options.root='https://bus-app-de937.firebaseio.com/';



const router = new VueRouter({
  routes,
  mode : 'history'
});

var vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
