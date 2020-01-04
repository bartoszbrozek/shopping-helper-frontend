import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@/assets/overrides.scss';
import VueRouter from "vue-router";
import axios from "axios";
import store from "./store";

// Components
import App from './App.vue'
import Container from '@/components/Container.vue'
import Dashboard from '@/components/Dashboard.vue'
import Products from '@/components/Products.vue'
import ShoppingLists from '@/components/ShoppingLists/ShoppingLists.vue'
import ShoppingListsEdit from '@/components/ShoppingLists/ShoppingListsEdit.vue'
import Login from '@/components/User/Login.vue'
import Logout from '@/components/User/Logout.vue'
import Register from '@/components/User/Register.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

axios.defaults.baseURL = "http://localhost/";
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
  return config;
});

// Router
const routes = [
  {
    path: "/",
    component: Container,
    children: [
      {
        path: '',
        component: Dashboard
      },
      {
        path: 'products',
        component: Products
      },
      {
        path: 'shoppinglists',
        component: ShoppingLists
      },
      {
        path: 'shoppinglists/edit',
        component: ShoppingListsEdit
      },
    ]
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/logout",
    component: Logout
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
