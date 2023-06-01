import { createApp } from 'vue'
import App from '@/app.console.vue'
import router from '@/router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/lib/util/colors'

// SvgIcon
import SvgIcon from '@jamescoyle/vue-icon'

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: colors.blue.darken3,
                    secondary: '#414c60',
                    accent: colors.blue.lighten1,
                    "app-bar": '#2a3141',
                    content: "#EDF0F5",
                    anchor: '#333',
                }
            }
        }
    }
})

app.component('SvgIcon', SvgIcon)

app.use(router)
app.use(vuetify)

app.mount('#app')
