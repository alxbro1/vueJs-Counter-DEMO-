<script setup>
import ButtonsGroup from '@/components/buttons-group/index.vue'
import { useCounter } from "@/store/counter";
const counterStore = useCounter()

const updateCounter = (event) => {
  const value = parseInt(event.target.value, 10);
  if (!isNaN(value)) {
    counterStore.inputSet(value);
  }
};

</script>
<template>
  <h1>Single counder - DEMO</h1>
  <h2
    :class="{ 'negative-value': counterStore.counter < 0, 'positive-value': counterStore.counter > 0 }"
    class="counter">
    {{ counterStore.counter }}
  </h2>
  <section class="buttons-group">
    <ButtonsGroup/>
  </section>
  <section class="input-section">
    <h3>Select Manual Value:</h3>
    <input type="number" :value="counterStore.counter" @input="updateCounter" min="0" max="100" />
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

</style>
