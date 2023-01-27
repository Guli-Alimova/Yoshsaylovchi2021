import { createApp } from 'vue'
import App from './App.vue'
import router from "@/components/router/router"
import "../index.css"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createI18n } from 'vue-i18n'
import VueLottiePlayer from "vue-lottie-player";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Vuelidate from "vuelidate";
import Vue from "vue";

const app = createApp(App)
const i18n = createI18n({
   
  })

app.use(router)
app.use(ElementPlus)
app.use(VueLottiePlayer);
app.use(i18n)
app.use(AOS.init())
app.use(Vuelidate)

.mount('#app')