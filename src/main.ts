import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { firebaseConfig } from './firebase/config'
import { initializeApp } from 'firebase/app'
import './assets/main.css'

initializeApp(firebaseConfig);




const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
