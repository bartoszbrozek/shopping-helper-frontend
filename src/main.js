import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import VueRouter from "vue-router";
import axios from "axios";
import store from "./store";

// Components
import App from './App.vue'
import Dashboard from '@/components/Dashboard.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.withCredentials = true;

// Router
const routes = [
  {
    path: "/",
    component: Dashboard
  }
]

const router = new VueRouter({
  mode: "history",
  routes,
  base: "/"
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
