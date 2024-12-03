<script setup>
import { ref } from "vue";

const counter = ref(0);

const onLeftClick = () => {
  counter.value++;
};
const onRightClick = () => {
  counter.value--;
};
const onResetCounter = () => {
  counter.value = 0;
};
</script>
<template>
  <h1>Single counder - DEMO</h1>
  <h2
    :class="{ 'negative-value': counter < 0, 'positive-value': counter > 0 }"
    class="counter">
    {{ counter }}
  </h2>
  <section class="buttons-group">
    <button
      type="button"
      @click.left="onLeftClick()"
      style="background-color: green;">
      Increment
    </button>
    <button
      v-if="counter != 0"
      type="button"
      @click.left="onResetCounter()"
      style="background-color: gray;">
      Reset
    </button>
    <button
      type="button"
      @click.right.prevent="onRightClick()"
      style="background-color: red;">
      Decrement
    </button>
  </section>
  <section class="input-section">
    <h3>Select Manual Value:</h3>
    <input type="number" v-model.number="counter" min="0" max="100" />
  </section>
</template>
<style scoped>
.input-section{
  width: 100%;
  display: flex;
  justify-content: start;
  margin: 1rem;

  h3{
    margin-right: 1rem;
    font-weight: bold;
  }

  input{
    text-align: center;
  }
}
.buttons-group {
  display: inline-flex;
  border-radius: 6px;
  overflow: hidden; 
}
.counter{
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
}
.negative-value {
  color: red;
  text-decoration: underline;
}
.positive-value {
  color: green;
  text-decoration: none;
}
button {
  padding: 0.5rem;
  margin: 0;
  border: 1px solid gray;
  border-radius: none;
  font-size: 1rem;
  font-weight: bold;
  color:whitesmoke
}

section{

}
</style>
