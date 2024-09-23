<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { defineProps } from "vue";

defineProps({ icon: Array, title: String });

</script>

<template>
  <div class="card">
    <div class="front">
      <font-awesome-icon :icon="icon" class="icon" />
    </div>
    <div class="back">
      <h2 class="title">{{title}}</h2>
      <p><slot></slot></p>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;
  text-align: center;
  width:100%;
  color: var(--white);
  position: relative;
  overflow: hidden;

}
.card .front h2, .card .back h2{
  font-size: 100%;
}
.card .back p{
  font-size: 60%;
  line-height: 1.1rem;
}

.card > .front, .card > .back {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
}

.icon {
  font-size: 4rem;
}

.title {
  font-family: 'FEAR Dynamic', sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
}

</style>
