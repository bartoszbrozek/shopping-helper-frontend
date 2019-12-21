import axios from 'axios'
import store from '..'
// 
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
export default {
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
                store.dispatch("SET_DATA")
            })

            return loginPromise;
        },
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

                            store.commit("setUserData", data)
                        }
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
    },
}