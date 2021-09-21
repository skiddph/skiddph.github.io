import { createApp } from 'vue'
import router from './router.js'
import tuos from './tuos.js'

import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(tuos, {
  host: 'http://tuos.azurewebsites.net/api/v1',
})
app.mount('#app')
