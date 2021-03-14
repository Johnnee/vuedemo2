import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './res/stylesheets/flags32.css'
import './res/stylesheets/flags16.css'

createApp(App).use(router).mount('#app')
