import './assets/scss/main.scss'
import '@splidejs/vue-splide/css'
import 'vue-final-modal/style.css'

import { createApp } from 'vue'
import VueSplide from '@splidejs/vue-splide'
import { createVfm } from 'vue-final-modal'
import Popper from "vue3-popper";

import App from './App.vue'

const app = createApp(App)
const vfm = createVfm()

app.component("Popper", Popper);

app
  .use(vfm)
  .use(VueSplide)
  .mount('#app')
