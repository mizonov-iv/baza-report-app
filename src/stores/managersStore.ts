import { defineStore } from 'pinia'

export const useManagersStore = defineStore('managersStore', {
    state: () => {
        return {
            selectedManager: "",
        }
    },
    actions: {
        logIn() {
        }
    }
})