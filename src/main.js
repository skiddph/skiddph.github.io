import { createApp } from 'vue'
import router from './plugins/router'
import tuos from './plugins/tuos'

import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(tuos, {
  host: 'http://localhost:8080/api/v1',
})
app.mount('#app')
