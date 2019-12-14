import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'sweetalert2/dist/sweetalert2.min.css';
import '@/assets/overrides.scss';
import VueSweetalert2 from 'vue-sweetalert2';
import VueRouter from "vue-router";
import axios from "axios";
import store from "./store";

// Components
import App from './App.vue'
import Dashboard from '@/components/Dashboard.vue'
import Login from '@/components/User/Login.vue'
import Register from '@/components/User/Register.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueSweetalert2, {
  position: "top-end",
  showConfirmButton: false,
  timer: 3000
});

axios.defaults.baseURL = "http://localhost:8000/";
// axios.defaults.withCredentials = true;

// Router
const routes = [
  {
    path: "/",
    component: Dashboard
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: Register
  },
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
