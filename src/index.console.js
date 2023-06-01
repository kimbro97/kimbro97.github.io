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
                    primary: "#00C471",
                    secondary: "#FFCDD2"
                }
            }
        }
    }
})

app.component('SvgIcon', SvgIcon)

app.use(router)
app.use(vuetify)

app.mount('#app')
