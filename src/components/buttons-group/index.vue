<script setup>
import { useCounter } from "@/store/counter";
const counterStore = useCounter();
</script>
<template>
  <button
    type="button"
    @click.left="counterStore.increment()"
    style="background-color: green">
    Increment
  </button>
  <button
    v-if="counterStore.counter != 0"
    type="button"
    @click.left="counterStore.reset()"
    style="background-color: gray">
    Reset
  </button>
  <button
    type="button"
    @click.right.prevent="counterStore.decrement()"
    style="background-color: red">
    Decrement
  </button>
</template>
<style scoped>
button {
  padding: 0.5rem;
  margin: 0;
  border: 1px solid gray;
  border-radius: none;
  font-size: 1rem;
  font-weight: bold;
  color: whitesmoke;
}
.buttons-group {
  display: inline-flex;
  border-radius: 6px;
  overflow: hidden;
}
</style>
