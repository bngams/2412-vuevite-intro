import { createApp, markRaw } from 'vue'
import './style.css'
import App from './App.vue'
// TODO: replace hardfix
// @ts-ignore:next-line
import vuetify from './plugins/vuetify'
import router from './router'
import { createPinia } from 'pinia'

const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router)
})

createApp(App)
    .use(pinia)
    .use(vuetify)
    .use(router)
    .mount('#app')
