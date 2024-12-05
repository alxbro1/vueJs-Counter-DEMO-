import { defineStore } from "pinia";

export const useCounter = defineStore("counter", {
  state: () => {
    return { counter: 0 };
  },
  getters: {
    countU(state) {
      return state.counter;
    },
  },
  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    reset(){
        this.counter = 0
    },
    inputSet(val){
        this.counter = val
    }
  },
});
