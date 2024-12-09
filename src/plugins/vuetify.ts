// Vuetify conf
// TODO: replace hardfix
// @ts-ignore:next-line
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'light',
    },
    icons: {
        defaultSet: 'mdi', // Use Material Design Icons (mdi)
    },
})

export default vuetify;