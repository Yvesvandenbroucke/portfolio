<template>
  <app-header></app-header>
  <main>
    <AppFrontPage></AppFrontPage>
    <AppIntroductionSection/>
  </main>
  <app-footer></app-footer>
</template>

<script setup >


import AppFrontPage from "@/components/organisms/AppFrontPage.vue";
import AppIntroductionSection from "@/components/molecules/AppIntroductionSection.vue";
import AppHeader from "@/components/molecules/AppHeader.vue";
import AppFooter from "@/components/molecules/AppFooter.vue";
</script>

<style scoped>
</style>
