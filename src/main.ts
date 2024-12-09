import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// TODO: replace hardfix
// @ts-ignore:next-line
import vuetify from './plugins/vuetify'
import router from './router'

createApp(App)
    .use(vuetify)
    .use(router)
    .mount('#app')
