import './assets/style.css'
import 'aos/dist/aos.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from 'vue3-apexcharts'
import AOS from 'aos'
import VueLazyload from 'vue-lazyload'

AOS.init()

const app = createApp(App)

app.use(VueApexCharts, {
  preLoad: 1.3,
  attempt: 1
})
app.use(VueLazyload)
app.use(router)
app.mount('#app')
