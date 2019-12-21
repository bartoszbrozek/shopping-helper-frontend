// 
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
export default {
    state: {
        isVisible: false,
        color: '',
        text: '',
    },
    getters: {
        isVisible: (state) => {
            return state.snack
        },
        color: (state) => {
            return state.color
        },
        text: (state) => {
            return state.text
        },
    },
    mutations: {
        showSnack(state, snack) {
            state.isVisible = true
            state.color = snack.color
            state.text = snack.text

            setTimeout(() => {
                state.isVisible = false
            }, 3000)
        },
        hideSnack(state) {
            state.isVisible = false
            state.color = ''
            state.text = ''
        }
    },
}