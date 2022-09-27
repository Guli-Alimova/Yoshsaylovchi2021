<template>
<div class="intro">
    <Header/>  
  <Intro/>
</div>
  <About/>
  <Video/>
</template>


<script>
import Header from "../block/Header.vue"
import Intro from "../block/Intro.vue"
import About from "../block/About.vue"
import Video from "../block/Video.vue"
export default {
  components:{
    Header,
    Intro,
    About,
    Video
    

  }
}
</script>


<style scoped>
.intro {
    background-image: url(../../assets/img/introBg.32b3c0cc.png);
    background-repeat: no-repeat;
}
</style>
