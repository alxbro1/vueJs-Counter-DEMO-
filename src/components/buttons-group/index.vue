<script>
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
<template >
  <section class="buttons-group">
    <button
      type="button"
      @click.left="onLeftClick()"
      style="background-color: green">
      Increment
    </button>
    <button
      v-if="counter != 0"
      type="button"
      @click.left="onResetCounter()"
      style="background-color: gray">
      Reset
    </button>
    <button
      type="button"
      @click.right.prevent="onRightClick()"
      style="background-color: red">
      Decrement
    </button>
  </section>
</template>
<style></style>
