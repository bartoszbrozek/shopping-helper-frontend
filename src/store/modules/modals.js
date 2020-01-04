/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
export default {
    namespaced: true,
    state: {
        editShoppingList: false,
        deleteShoppingList: false,
        data: {}
    },
    getters: {
        EDIT_SHOPPING_LIST: (state) => {
            return state.editShoppingList
        },
        DELETE_SHOPPING_LIST: (state) => {
            return state.deleteShoppingList
        },
        GET_DATA: (state) => {
            return state.data
        }
    },
    mutations: {
        SHOW_MODAL(state, payload) {
            const { name, data } = payload
            state.data[name] = data
            state[name] = true
        },
        HIDE_MODAL(state, name) {
            state[name] = false
            state.data[name] = {}
        },
    },
}