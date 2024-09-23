<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const activeItem = ref(null);
const sections = ['Home', 'Intro', 'Traits', 'Crafts']; // Section IDs

// Helper function to set active navbar item based on section ID
const setActiveNavItem = (id) => {
  const list = document.querySelectorAll('.navbar-item');

  list.forEach((item) => {
    const href = item.querySelector('a').getAttribute('href').substring(1);

    if (href === id) {
      if (activeItem.value) {
        activeItem.value.classList.remove('active');
      }
      item.classList.add('active');
      activeItem.value = item;

      // Update translateX position
      const index = sections.indexOf(id);
      const newTranslateX = index * (item.offsetWidth + 32); // Assuming 32px gap (2rem)
      document.querySelector('.navbar-list').style.setProperty('--translateX', `${newTranslateX}px`);
    }
  });
};

// Intersection Observer Setup
onMounted(() => {
  const observerOptions = {
    root: null,
    threshold: 0.5, // 50% of the section must be visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        setActiveNavItem(sectionId);
      }
    });
  }, observerOptions);

  // Observe all sections
  sections.forEach((section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      observer.observe(sectionElement);
    }
  });

  // Clean up observer on unmount
  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>


<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item"><a href="#Home"> <img src="../../images/file.png" alt="pictogram of me"></a></li>
      <li class="navbar-item">
        <a href="#Intro">Intro</a>
        </li>
      <li class="navbar-item"> <a href="#Traits">Traits</a></li>
      <li class="navbar-item"> <a href="#Crafts">Crafts</a></li>
    </ul>
  </nav>
</template>

<style scoped>

.navbar-list{
  position: relative;
  border-radius: 0.5rem;
  margin: 0;
  padding: 0.5rem;
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  background-color: rgba(250, 250, 250, 0.48);
}
.navbar-item a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 2rem;
  border-radius: 0.5rem;
}
.navbar-item a img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.navbar-item{
  height: 2rem;
  width: 4rem;
  border-radius: 0.5rem;
  z-index: 1;
}
.navbar-list:before{
  position: absolute;
  inset: 0 0 0 0;
  width: 3rem;
  height: 2rem;
  content: "";
  background-color: var(--primary-color);
  border-radius: 0.5rem;
  padding: 0 0.5rem;
  margin: 0 0.5rem;
  align-self: center;
  transform: translateX(var(--translateX, 0));
  transition: transform 0.3s ease-in-out;
}

.navbar{
  position: sticky;
  padding:1rem;
  width: 100%;
  display: flex;
  z-index: 1000;
  text-align: center;
  justify-content: center;
  top: 0;
}

</style>