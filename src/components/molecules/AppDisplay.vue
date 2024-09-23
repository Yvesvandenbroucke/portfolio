<script setup>
import {onMounted} from "vue";

onMounted(() => {
  const images = document.querySelectorAll('.appDisplay img');

  const handleMouseOver = () => {
    images.forEach(image => {
      image.style.animationPlayState = 'paused';
    });
  };

  const handleMouseOut = () => {
    images.forEach(image => {
      image.style.animationPlayState = 'running';
    });
  };

  // Add event listeners to each image
  images.forEach(image => {
    image.addEventListener('mouseover', handleMouseOver);
    image.addEventListener('mouseout', handleMouseOut);
  });

  // Clean up event listeners when component is unmounted
  return () => {
    images.forEach(image => {
      image.removeEventListener('mouseover', handleMouseOver);
      image.removeEventListener('mouseout', handleMouseOut);
    });
  };
})
</script>

<template>
<div class="appDisplay">
  <slot></slot>
</div>
</template>

<style>
.appDisplay{
  position: relative;
  overflow: hidden;
  justify-content: center;
  display: flex;
  transition: animation-play-state 0.3s;
}
.appDisplay > img {
  position: absolute;
  height: 100%;
  opacity: 0;
  animation: fade 9s infinite;
  object-fit: cover;
  z-index: 20;
}

.appDisplay > img:nth-child(1) {
  animation-delay: 0s;
}

.appDisplay > img:nth-child(2) {
  animation-delay: 3s;
}

.appDisplay > img:nth-child(3) {
  animation-delay: 6s;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  30% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@media (min-width: 60rem) {

}
</style>