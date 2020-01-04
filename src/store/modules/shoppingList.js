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
        ADD_SHOPPING_LIST: (({ commit }, payload) => {
            return new Promise((resolve, reject) => {
                axios.post(`shoppings`, payload)
                    .then(({ data, status }) => {
                        if (status >= 200 && status < 300) {
                            resolve(true)
                        }
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        }),
        EDIT_SHOPPING_LIST: (({ commit }, payload) => {
            return new Promise((resolve, reject) => {
                const id = payload.id

                axios.patch(`shoppings/${id}`, payload)
                    .then(({ data, status }) => {
                        if (status >= 200 && status < 300) {
                            resolve(true)
                        }
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        }),
        DELETE_SHOPPING_LIST: (({ commit }, payload) => {
            return new Promise((resolve, reject) => {
                const id = payload.id

                axios.delete(`shoppings/${id}`, payload)
                    .then(({ data, status }) => {
                        if (status >= 200 && status < 300) {
                            resolve(true)
                        }
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        })
    },
}