<script setup>
import { ref, onMounted } from 'vue';
import AppBluePrintCard from "@/components/organisms/AppBluePrintCard.vue";
import AppDisplay from "@/components/molecules/AppDisplay.vue";

// Reactive refs
const items = ref([]);
const itemActive = ref(0);

// Function to handle the next slide
function next() {
  itemActive.value = (itemActive.value + 1) % items.value.length;
}

// Function to handle the previous slide
function prev() {
  itemActive.value = (itemActive.value - 1 + items.value.length) % items.value.length;
}
function goTo(index) {
  itemActive.value = index;
}

// Function to activate the new slide (no manual class toggling needed with Vue)
function isActive(index) {
  return index === itemActive.value;
}

// Mounted hook to initialize items
onMounted(() => {
  // Populate items once DOM is mounted (if necessary for other logic)
  items.value = document.querySelectorAll('.appSlider .list .item');
  console.log(items.value.length)
});
</script>



<template>
<div class="appSlider">

  <div class="list">

    <app-blue-print-card  :class="['item', {'active': isActive(0)}]" text-color="var(--primary-color)" background-gradient="linear-gradient(135deg, #d4d1de, #d4d1de, var(--luiknatie-rood), #d4d1de)"  phone-gradient="linear-gradient(180deg, #d4d1de, #d4d1de, #d4d1de, var(--luiknatie-rood), #d4d1de)">
      <template v-slot:text>
        <h2 style="color: var(--luiknatie-rood)">Driver App</h2>
<p>This freelance Android app simplifies truck drivers' workloads for a major company. Built with React Native (frontend) and Laravel (backend), it includes live maps, real-time tracking, WebSockets, and API calls. Our agile team of three delivers efficient code and a user-friendly interface</p>
        <div class="code-lang">
          <p style="--color-code-lang: var(--luiknatie-rood)">React Native</p>
          <p style="--color-code-lang: var(--luiknatie-rood)" >Laravel</p>
          <p style="--color-code-lang: var(--luiknatie-rood)" >Agile</p>
        </div>

      </template>
      <template v-slot:display>
        <AppDisplay class="card-items">
          <img  src="../../images/phone_1.png" alt="Image of Luiknatie app on phone" class="slider__img">
          <img  src="../../images/phone_2.png" alt="Image of Luiknatie app on phone" class="slider__img">
          <img  src="../../images/phone_3.png" alt="Image of Luiknatie app on phone" class="slider__img">
        </AppDisplay>
      </template>
    </app-blue-print-card>

    <app-blue-print-card  :class="['item', {'active': isActive(1)}]" text-color="var(--primary-color)" background-gradient="linear-gradient(135deg, #d4d1de, #d4d1de, var(--briefcase-blue), #d4d1de)" phone-gradient="linear-gradient(180deg, #d4d1de, #d4d1de, var(--briefcase-blue), #d4d1de)">
      <template v-slot:text>
        <h2 style="color: var(--briefcase-blue)">BriefCase</h2>
        <p>Briefcase is a personal project website built with Vue and Laravel, hosted on a Plesk server. It features a sleek, user-friendly UI and a secure, robust backend. The site includes a random color palette generator, designed to test my skills and push me out of my comfort zone.</p>
        <div class="code-lang">
          <p style="--color-code-lang: var(--briefcase-blue)">Vue3</p>
          <p style="--color-code-lang: var(--briefcase-blue)" >Laravel</p>
          <p style="--color-code-lang: var(--briefcase-blue)" >Security</p>
        </div>
      </template>
      <template v-slot:display>
        <AppDisplay class="card-items">
          <img  src="../../images/briefcase_1.png" alt="Image of BriefCase website on pc" class="slider__img">
          <img  src="../../images/briefcase_2.png" alt="Image of BriefCase website on pc" class="slider__img">
          <img  src="../../images/briefcase_3.png" alt="Image of BriefCase website on pc" class="slider__img">
        </AppDisplay>
      </template>
    </app-blue-print-card>

    <app-blue-print-card  :class="['item', {'active': isActive(2)}]" text-color="var(--primary-color)" background-gradient="linear-gradient(135deg, #d4d1de, #d4d1de, var(--primary-color), #d4d1de)" phone-gradient="linear-gradient(180deg, #d4d1de, #d4d1de, var(--primary-color), #d4d1de)">
      <template v-slot:text>
        <h2 style="color: var(--primary-color)">Shotz</h2>
        <p>Shotz is a personal project app, inspired by BeReal, built with Flutter and Firebase for both Android and iOS. It’s designed to capture memories from a night out with friends without keeping users glued to their phones. The app focuses on a simple yet modern design with a social media-style interface.</p>
        <div class="code-lang">
          <p style="--color-code-lang: var(--primary-color)">Flutter</p>
          <p style="--color-code-lang: var(--primary-color)" >Firebase</p>
          <p style="--color-code-lang: var(--primary-color)" >Android</p>
          <p style="--color-code-lang: var(--primary-color)" >iOS</p>
        </div>
      </template>
      <template v-slot:display>
        <AppDisplay class="card-items">
          <img  src="../../images/shotz_1.png" alt="Image of shotz app on phone" class="slider__img">
          <img  src="../../images/shotz_2.png" alt="Image of shotz app on phone" class="slider__img">
          <img  src="../../images/shotz_3.png" alt="Image of shotz app on phone" class="slider__img">
        </AppDisplay>
      </template>
    </app-blue-print-card>



  </div>

  <div class="arrows">
    <button @click="prev()" id="prev" aria-label="Previous Slide" title="Previous Slide">
      &lt;
    </button>
    <button @click="next()" id="next" aria-label="Next Slide" title="Next Slide">></button>
  </div>
  <div class="buttonNav" style="--quantity: 3">
    <div
        v-for="(item, index) in items"
        :key="index"
        :class="['round', { active: isActive(index) }]"
        @click="goTo(index)"
    >
    </div>
  </div>
</div>

</template>

<style scoped>

.appSlider{
  min-height: 30rem;
  position: relative;
  overflow: hidden;
  padding: 2rem;
}
.appSlider .list {
  position: relative;
  width: 100%;
  height: 100%;
}
.appSlider .list .item {
  position: absolute;
  inset: 0 0 0 0;
  overflow: hidden;
  opacity: 0;
  transition: 0.5s;
}
.appSlider .list .item img{
  object-fit: contain;
  height: 100%;
  width: 100%;
}
.appSlider .list .item.active{
  opacity: 1;
  z-index: 1;
}

@keyframes showContent {
  to{
    transform: translateY(0);
    filter: blur(0);
  }
}
.arrows{
  position: absolute;
  inset: 0 0 0 0;
  transform: translateY(50%);
  display: flex;
  justify-content: space-between;
  z-index: 10;
  width: 100%;
}
.arrows button{
  background-color: #eee5;
  border: none;
  font-family: 'Poppins', sans-serif;
  color: var(--white);
  width: 2.5rem;
  height: 2.5rem;
  font-size:x-large;
  border-radius: 0.5rem;
  transition: .5s;
}
.arrows button:hover{
  background-color: var(--white);
  color: var(--primary-color)
}
.buttonNav{
  position: absolute;
  bottom: 5%;
  display: flex;
  z-index: 10;
  gap: 0.5rem;
  height: 0.6rem;
  left: calc(50% - (0.5rem * var(--quantity)));
  box-sizing: border-box;
}
.buttonNav .round{
  margin-top: 1rem;
  content: "";
  width: 0.5rem;
  height: 0.5rem;
  background-color: #eee5;
  transition: .5s;
  border-radius: 50%;
}
.buttonNav .round:hover, .buttonNav .active{
  background-color: var(--white);
  scale: 1.05;
}
@media (max-width: 43.75rem){
  .appSlider{
    min-height: 45rem;
  }
}

</style>