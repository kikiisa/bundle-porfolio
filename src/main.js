import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'mosha-vue-toastify/dist/style.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
createApp(App).use(store).use(router).mount('#app')
import "bootstrap/dist/js/bootstrap.js"