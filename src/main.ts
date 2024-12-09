import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// TODO: replace hardfix
// @ts-ignore:next-line
import vuetify from './plugins/vuetify'

createApp(App).use(vuetify).mount('#app')
