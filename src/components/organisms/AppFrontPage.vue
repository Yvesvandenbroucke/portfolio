<script setup>

</script>

<template>
<div class="banner" id="Home">
  <div class="AppSlider" style="--quantity: 9">
    <div class="item" style="--position: 1">
      <font-awesome-icon class="icon" :icon="['fab', 'react']" />
    </div>
    <div class="item" style="--position: 2"><font-awesome-icon class="icon" :icon="['fab', 'vuejs']" /></div>
    <div class="item" style="--position: 3"><font-awesome-icon class="icon" :icon="['fab', 'flutter']" /></div>
    <div class="item" style="--position: 4"><font-awesome-icon class="icon" :icon="['fab', 'html5']" /></div>
    <div class="item" style="--position: 5"> <font-awesome-icon class="icon" :icon="['fab', 'js']" /> </div>
    <div class="item" style="--position: 6"> <font-awesome-icon class="icon"  :icon="['fab', 'laravel']" /> </div>
    <div class="item" style="--position: 7"><font-awesome-icon class="icon" :icon="['fas', 'cloud']" /></div>
    <div class="item" style="--position: 8"> <div class="icon c"><font-awesome-icon :icon="['fas', 'c']" /> <p>#</p></div>  </div>
    <div class="item" style="--position: 9"><font-awesome-icon class="icon" :icon="['fab', 'css3']" /></div>
  </div>
  <div class="content">
      <h1 data-content="Vanden Broucke Yves">Vanden Broucke Yves</h1>

    <div class="author">
      <p class="semi-title">Full Stack Developer</p>
      <a href="#Contact" class="button-a">Contact me</a>
    </div>
    <div class="model">

    </div>
  </div>
</div>
</template>

<style scoped>

@import url('https://fonts.cdnfonts.com/css/poppins');


.c {
  display: flex;
  gap: 3px;
  align-items: center;
  font-size: 4rem;
}
.c p{
  font-size: 4rem;
}
.banner{
  width: 100%;
  height: 100vh;
  text-align: center;
  overflow: hidden;
  position: relative;
}
.AppSlider{
  position: absolute;
  width: 12.5rem;
  height: 13rem;
  top: 20%;
  left: calc(50% - 6.25rem);
  transform-style: preserve-3d;
  transform: perspective(62rem);
  animation: infiniteRun 40s linear infinite;
  z-index: 2;
}
@keyframes infiniteRun {
  from{
    transform: perspective(80rem) rotateX(-16deg) rotateY(0);
  }to{
       transform: perspective(80rem) rotateX(-16deg) rotateY(360deg);
     }
}
.item{
  position: absolute;
  inset: 0 0 0 0;
  color: var(--orange);
  /* formula => (position - 1) * (360 deg / quantity)*/
  transform:
      rotateY(calc((var(--position) - 1) * 360 / var(--quantity) * 1deg))
      translateZ(34rem);
}
.item .icon {
  height: 50%;
  width: 50%;
}
.content{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(87.5rem, 100vw);
  height: max-content;
  padding: 0 1rem 6.25rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.content h1{
  font-family: 'FEAR Dynamic', sans-serif;
  line-height: 1em;
  color: var(--white);
  position: relative;
}
.content h1::after{
  position: absolute;
  inset: 0 0 0 0;
  content: attr(data-content);
  z-index: 3;
  -webkit-text-stroke: 1px var(--white);
  color: transparent;

}
.semi-title{
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.content .author{
  font-family: 'Poppins', sans-serif;
  text-align: right;
  max-width: 13rem;
  z-index: 2;
}

.content .model{
  background-image: url("../../images/depiction-human-brain-intellect.png");
  width: 100%;
  height: 90vh;
  position: absolute;
  bottom: 0;
  background-size: auto 130%;
  left: 0;
  background-repeat: no-repeat;
  background-position: top center;
}

@media (max-width: 48.625rem){
  .item .icon {
    height: 25%;
    width: 25%;
  }
  .c {
    font-size: 2rem;
  }
  .c p{
    font-size: 2rem;
  }
  .content .author{
    font-family: 'Poppins', sans-serif;
    text-align: left;
    max-width: 13rem;
    z-index: 2;
  }
  .content{
    text-align: left;
  }
}
</style>