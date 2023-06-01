import '@/assets/app-main.css'

import { createApp } from 'vue'
import App from '@/app.client.vue'
import router from '@/router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// SvgIcon
import SvgIcon from '@jamescoyle/vue-icon'

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
})

app.component('SvgIcon', SvgIcon)

app.use(router)
app.use(vuetify)

app.mount('#app')
