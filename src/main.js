import { createApp } from 'vue'
import App from './App.vue'
import router from "@/components/router/router"
import "../index.css"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createI18n } from 'vue-i18n'
import VueLottiePlayer from "vue-lottie-player";

const app = createApp(App)
const i18n = createI18n({
   
  })

app.use(router)
app.use(ElementPlus)
app.use(VueLottiePlayer);
app.use(i18n)
.mount('#app')