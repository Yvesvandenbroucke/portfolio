<script setup>

import AppAttrCard from "@/components/atoms/AppAttrCard.vue";
import AppRotateProjects from "@/components/organisms/AppCardSlider.vue";
</script>

<template>
<div class="grid">
  <div class="images grid-item grid-item-1">
    <img src="../../images/bright-dragonfly-with-neon-shades.png" alt="Bright dragonfly with neon shades">
    <img src="../../images/bright-dragonfly-with-neon-shades.png" alt="Bright dragonfly with neon shades">
  </div>
  <div id="Intro" class="text grid-item grid-item-2">
    <h2>Introduction</h2>
    <p>I'm Yves Vanden Broucke, a passionate and recently graduated Full Stack Developer from Belgium. With a solid foundation in <b>Software & Web development</b> (graduating Cum Laude), I've honed my skills in <b> app development </b>, <b>frontend</b> and <b>backend</b> technologies through real-world projects. Whether collaborating on building mobile apps or fine-tuning user experiences,
      I thrive in team environments and am committed to delivering top-quality solutions. Explore my work and see how I bring ideas to life through code!</p>
  </div>
  <div class="grid-item grid-item-3">
    <!--<img src="../../images/central-computer-processor-with-neon-lights-integrated-microchip-circuit-board-server.jpg" alt="Image by svstudioart on Freepik">-->
    <img src="../../images/file.png" alt="cartoon me">
  </div>
  <div class="grid-item grid-item-4">
    <img src="../../images/surreal-neon-tropical-flowers.png" alt="Surreal neon tropical flowers">
  </div>
  <div id="Traits" class="grid-item grid-item-5">
    <div class="grid2">
      <app-attr-card :icon="['far', 'face-grin-beam']" title="Outgoing">I'm highly social and thrive in collaborative environments, always ready to assist my team. Strong interpersonal skills help me communicate effectively and build positive relationships.</app-attr-card>
      <app-attr-card :icon="['fas', 'crown']" title="Responsible">Responsible and reliable, I take ownership of tasks and confidently step up to challenges, ensuring outcomes are met with integrity and focus</app-attr-card>
      <app-attr-card :icon="['fas', 'code']" title="Curious"> I am dedicated to continuous learning and growth. I eagerly embrace new challenges and opportunities to expand my knowledge, always striving to improve and adapt.</app-attr-card>
      <app-attr-card :icon="['fas', 'star']" title="Meticulous">I am dedicated to achieving perfection in every project, focusing on high-quality results and attention to detail to ensure the best outcome.</app-attr-card>

    </div>

  </div>
  <div id="Crafts" class="grid-item grid-item-7">
    <h2>Blueprints</h2>
  </div>
  <div class="grid-item grid-item-8">
    <AppRotateProjects>
    </AppRotateProjects>
  </div>

  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
</div>
</template>

<style scoped>
b {
  color: var(--yellow-color);
  text-decoration: underline;
}
.grid{
  display: grid;
  width: 100%;
  grid-template-rows: repeat(5, 20rem);
  grid-template-columns: repeat(2, 50%);
}
.grid-item{
  padding: 2rem;
  margin-bottom: 2rem;
  min-height: 10rem;
  position: relative;
  width: 100%;
}
.grid-item-1{
  grid-column: 1 / 3 ;
}
.images{
  position: relative;
  display: flex;
  justify-content: space-between;
 }
.images > img{
  width: 40vw;
  object-fit: cover;
}
.images > img:first-child{
  transform:rotateZ(30deg);
}
.images > img:last-child{
  transform: rotateZ(-30deg);
}
.text > h2{
  text-align: right;
  color:var(--yellow-color) ;
}
.text > p{
  padding-top: 1rem;
}
.grid-item-3 > img{
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 20%;
}
.grid-item-3{
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2;
}

.grid-item-4{
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1;
  grid-row: 3 / 6;
}
.grid-item-4 > img{
  width: 100%;
  border-radius: 50%;
}
.grid-item-5{
  width: 100%;
  gap: 1rem;
  grid-column: 2;
  grid-row: 3 / 6;
  text-align: center;
  align-content: center;

}
.grid-item-5 .grid2{
 display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, 50%);
  gap: 1rem;
  justify-items: center;
  align-items: center;
  z-index: 10;
}

.grid-item-5 > h2{
  color: var(--pink-color)
}

.grid-item-8{
  grid-column: 1/ 3;
  grid-row:7;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
}


.grid-item-7{
  text-align: center;
  width: 100%;
  grid-row: 6;
  grid-column: 1 /3;
  color: var(--baby-blue);
  align-content: end;
  margin-bottom: 0;
  padding-top: 1rem;
}

@media (max-width: 48.625rem){
 .grid-item-5 .grid2{
    display: flex;
    flex-direction: column;
  }
}
@media (max-width: 34.375rem) {
  .grid{
    display: flex;
    flex-direction: column;
  }
  
}
</style>