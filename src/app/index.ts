import { createApp } from 'vue'

import App from './index.vue'
import { router } from './providers';

import '@/assets/index.scss'

const app = createApp(App)

app.use(router)

export { app };
