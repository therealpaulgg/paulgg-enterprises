import { AxiosError } from "axios"
import { createStore } from "vuex"

import createPersistedState from "vuex-persistedstate"

interface FeedbackData {
    active: boolean
    amount: number
    variant?: string
    text: string
    timeout?: number
}

// const feedbackStore =

export default createStore({
    plugins: [
        createPersistedState({
            key: "paul-portfolio",
            paths: ["theme"],
        }),
    ],
    state: {
        theme: window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light",
    },
    mutations: {
        toggleTheme(state) {
            state.theme = state.theme === "light" ? "dark" : "light"
        },
    },
    actions: {},
    modules: {
        feedbackStore: {
            state: {
                feedback: [] as FeedbackData[],
            },
            mutations: {
                incrementElement(state, index: number) {
                    state.feedback[index].amount += 0.0025
                },
                setElementStatus(
                    state,
                    { index, status }: { index: number; status: boolean }
                ) {
                    state.feedback[index].active = status
                },
                addItem(state, newItem: FeedbackData) {
                    state.feedback.push(newItem)
                },
            },
            actions: {
                incrementUntilStop({ commit, dispatch, state }, index: number) {
                    const element = state.feedback[index]
                    if (element.active) {
                        commit("incrementElement", index)
                        if (element.amount >= 1) {
                            commit("setElementStatus", { index, status: false })
                        } else {
                            setTimeout(
                                () => dispatch("incrementUntilStop", index),
                                element.timeout ? element.timeout : 5000 / 400
                            )
                        }
                    }
                },
                addItem({ commit, dispatch, state }, newItem: FeedbackData) {
                    commit("addItem", newItem)
                    const index = state.feedback.length - 1
                    const element = state.feedback[index]
                    if (element.amount !== -1) {
                        dispatch("incrementUntilStop", index)
                    }
                },
                handleError({ dispatch }, err: AxiosError) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    let information: any | string
                    if (err.response) {
                        if (err.response.status === 401) return
                        information = err.response.data
                    } else {
                        information = err.message
                    }
                    dispatch("addItem", {
                        text: information,
                        variant: "error",
                        active: true,
                        amount: -1,
                    })
                },
                addFeedback(
                    { dispatch },
                    { msg, variant }: { msg: string; variant: string }
                ) {
                    dispatch("addItem", {
                        text: msg,
                        variant,
                        active: true,
                        amount: 0,
                    })
                },
            },
        },
    },
})
