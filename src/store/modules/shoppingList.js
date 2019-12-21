import axios from 'axios'
// 
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
export default {
    state: {
        shoppingLists: []
    },
    getters: {
        shoppingLists: (state) => {
            return state.shoppingLists
        }
    },
    mutations: {
        setShoppingLists(state, shoppingLists) {
            state.shoppingLists = shoppingLists
        }
    },
    actions: {
        GET_SHOPPING_LISTS: async ({ commit }, payload) => {
            let { data } = await axios.get("/shoppings")

            commit("setShoppingLists", data)
        },
    },
}