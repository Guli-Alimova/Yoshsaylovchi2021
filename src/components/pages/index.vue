<template>
<div class="intro">
    <Header/>  
  <Intro/>
</div>

  <About/>
</template>


<script>
import Header from "../block/Header.vue"
import Intro from "../block/Intro.vue"
import About from "../block/About.vue"

export default {
  components:{
    Header,
    Intro,
    About

  }
}
</script>


<style scoped>
.intro {
    background-image: url(../../assets/img/introBg.32b3c0cc.png);
    background-repeat: no-repeat;
}
</style>
