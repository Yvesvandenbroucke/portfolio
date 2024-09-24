<script setup>

</script>

<script setup>

</script>

<template>
  <footer id="Contact">
    <div>
      <h2>Like What You See?</h2>
      <p>Contact me anyway you like!</p>
      <br>
      <p class="phone">Phone: <a href="tel:+320468251117">+32 0468 25 11 17</a></p>
      <p class="email">Email: <a href="mailto:vandenbrouckeyves@hotmail.com">vandenbrouckeyves@hotmail.com</a></p>
    </div>

    <div class="socials">
      <div class="social">
        <a aria-label="linkedIn link" href="https://www.linkedin.com/in/yves-vanden-broucke-93a56727b"> <font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon></a>
        <a aria-label="linkedIn link" href="https://www.linkedin.com/in/yves-vanden-broucke-93a56727b"> LinkedIn</a>

      </div>
      <div class="social">
        <a aria-label="instagram link" href="https://www.instagram.com/vandenbroucke_yves/"><font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon></a>
        <a aria-label="instagram link" href="https://www.instagram.com/vandenbroucke_yves/"> Instagram</a>

      </div>
      <div class="social">
        <a  aria-label="facebook link"  href="https://www.facebook.com/yves.vandenbroucke.9">  <font-awesome-icon :icon="['fab', 'facebook']"></font-awesome-icon></a>
        <a  aria-label="facebook link"  href="https://www.facebook.com/yves.vandenbroucke.9"> Facebook</a>
      </div>
      <div class="social">
        <a  aria-label="github link"  href="https://github.com/Yvesvandenbroucke">  <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon></a>
        <a  aria-label="github link"  href="https://github.com/Yvesvandenbroucke">  Github</a>
      </div>

    </div>

  </footer>
</template>

<style scoped>
footer{
  background-size: cover;
  padding: 2rem;
  display: flex;
  flex-direction: row;
}
footer > div{
  flex: 1;
}
.socials{
  display: flex;
  flex-direction: row;
  gap: 10%;
  justify-content: end;
  align-self: end;
}
.socials .social{
  display: inline-block;
  border-radius: 3.125rem;
  height: 3rem;
  width: 3rem;
  background-color: var(--white);
  text-align: left;
  color: var(--primary-color);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.socials .social:hover {
  width: 12rem;
}
.socials .social a:first-child{
  display: inline-block;
  height: 3rem;
  width: 3rem;
  border-radius: 3.125rem;
  text-align: center;
  color: var(--primary-color);
  box-sizing: border-box;
  line-height: 3rem;
  font-size: 1.5rem;
}
.socials .social a:nth-child(2){
  font-size: 1.5rem;
  font-weight: bold;
  text-align: start;
  line-height: 3rem;

}
.socials .social:nth-child(1):hover a{
  color: #0a65c0;
}
.socials .social:nth-child(1):hover{
  width: 10rem;
}

.socials .social:nth-child(2):hover a{
  color: #c33588;
}
.socials .social:nth-child(3):hover a{
  color: #0865fd;
}
.socials .social:nth-child(4):hover a{
  color: #55237f;
}
.socials .social:nth-child(4):hover{
  width: 9rem;
}
@media (max-width: 34.375rem) {
  footer{
    flex-direction: column;
    gap: 1rem;
  }
  .socials{
    display: flex;
    flex-direction: row;
    gap: 10%;
    justify-content: center;
    align-self: center;
    width: 100%;
  }
  .socials .social:hover {
    width: 3rem;
  }
}
</style>