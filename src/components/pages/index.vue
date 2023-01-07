<template>
<div class="intro">
    <Header/>  
  <Intro/>
</div>
  <About/>
  <Video/>
  <tab-new/>
  <election-regester/>
</template>


<script>
import Header from "../block/Header.vue"
import Intro from "../block/Intro.vue"
import About from "../block/About.vue"
import Video from "../block/Video.vue"
import TabNew from "../block/TabNew.vue"
import ElectionRegester from "../block/ElectionRegester.vue"

export default {
  components:{
    Header,
    Intro,
    About,
    Video,
    TabNew,
    ElectionRegester
    
  }
}
</script>


<style scoped>
.intro {
    background-image: url(../../assets/img/introBg.32b3c0cc.png);
    background-repeat: no-repeat;
}


</style>
