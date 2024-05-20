import './assets/style.css'
import 'aos/dist/aos.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from 'vue3-apexcharts'
import AOS from 'aos'

AOS.init()

const app = createApp(App)

app.use(VueApexCharts)
app.use(router)
app.mount('#app')
