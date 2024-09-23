<script setup>
import { defineProps } from "vue";

defineProps({
  textColor: {
    type: String,
    default: 'black',
  },
  backgroundGradient: {
    type: String,
  },
  phoneGradient: {
    type: String
  }
});
</script>

<template>
  <div class="card">
    <div class="card-items">
      <slot name="text"></slot>
    </div>
    <slot name="display"></slot>
  </div>
</template>

<style scoped>
.card{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 1rem 2rem;
  background: v-bind(backgroundGradient);
  border-radius: 1rem;
  min-height: 25rem;
  color: v-bind(textColor);
  position: relative;
  box-shadow: 1px 2px 10px 2px #d4d1de;
}
@media (max-width: 43.75rem) {

.card {
  flex-direction: column;
  gap: 2rem;
  min-height: 40rem;
}
}
@media (max-width: 30.375rem){
  .card{
    font-size: 0.8rem;
    background: v-bind(phoneGradient);
  }
  .card .card-items h2{
    font-size: 1.3rem;
  }
}



</style>