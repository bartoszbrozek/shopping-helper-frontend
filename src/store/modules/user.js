import axios from 'axios'
import store from '..'
// 
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
export default {
    namespaced: true,
    state: {
        userData: null
    },
    getters: {
        getData: (state) => {
            return state.userData
        }
    },
    mutations: {
        setUserData(state, userData) {
            state.userData = userData
        }
    },
    actions: {
        LOGIN: ({ commit }, payload) => {
            const loginPromise = new Promise((resolve, reject) => {
                axios.post(`login_check`, payload)
                    .then(({ data, status }) => {
                        if (status === 200) {
                            resolve(true)
                        }
                    })
                    .catch(error => {
                        reject(error)
                    })
            })

            loginPromise.then(() => {
                // Set user in store
                store.dispatch("user/SET_DATA")
            })

            return loginPromise;
        },
        // LOGOUT: ({ commit }, payload) => {
        //     const loginPromise = new Promise((resolve, reject) => {
        //         axios.post(`logout`, payload)
        //             .then(({ data, status }) => {
        //                 if (status === 200) {
        //                     resolve(true)
        //                 }
        //             })
        //             .catch(error => {
        //                 reject(error)
        //             })
        //     })

        //     return loginPromise;
        // },
        REGISTER: ({ commit }, payload) => {
            return new Promise((resolve, reject) => {
                axios.post(`register`, payload)
                    .then(({ data, status }) => {
                        if (status >= 200 && status < 300) {
                            resolve(true)
                        }
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        SET_DATA: ({ commit }, payload) => {
            return new Promise((resolve, reject) => {
                axios.get(`user`)
                    .then(({ data, status }) => {
                        if (status === 200) {
                            resolve(true)

                            store.commit("user/setUserData", data)
                        }
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
    },
}