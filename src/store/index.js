import Vue from "vue";
import Vuex from "vuex";

import User from "./modules/user";
import ShoppingList from "./modules/shoppingList";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user: User,
        shoppingList: ShoppingList
    }
});
