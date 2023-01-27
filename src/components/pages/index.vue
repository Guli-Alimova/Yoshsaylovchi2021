<template>
<div class="intro">
    <Header :pages="pages"/>  
  <Intro/>
</div>
  <About/>
  <Video/>
  <tab-new/>
  <election-regester/>
  <hero-map/>
  <statistic/>  
  <app-store/>
  <Footer :pages="pages"/>
</template>


<script>
import Header from "../block/Header.vue"
import Intro from "../block/Intro.vue"
import About from "../block/About.vue"
import Video from "../block/Video.vue"
import TabNew from "../block/TabNew.vue"
import ElectionRegester from "../block/ElectionRegester.vue"
import HeroMap from "../block/HeroMap.vue"
import Statistic from "../block/Statistic.vue"
import AppStore from "../block/AppStore.vue"
import Footer from "../block/Footer.vue"

export default {
  components:{
    Header,
    Intro,
    About,
    Video,
    TabNew,
    ElectionRegester,
    HeroMap,
    Statistic,
    AppStore,
    Footer,
    
  },

  data() {
        return {
            pages: [{
                    link: 'Loyiha haqida',
                    href: "loyiha haqida"
                },
                {
                    link: "O'quv bazasi",
                    href: "o'quv bazasi"
                },
                {
                    link: 'Saylov uchastkasi',
                    href: "saylov uchastkasi"
                },
                {
                    link: 'yosh saylovchi',
                    href: "yosh saylovchi"
                },

            ]
        }
    },
}
</script>


<style scoped>
.intro {
    background-image: url(../../assets/img/introBg.32b3c0cc.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}


</style>
