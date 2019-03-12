/*
 * MSCEIS 2019
 * Author: Akhmad Maulana Akbar
 * Date: 5 March 2019
 * Vue 2.6.6
 * Vue router 3.0.1
 * Vuetify 1.3.0
 */

import Vue from "vue";
import './plugins/axios'
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
