/* eslint-disable import/prefer-default-export */
import { store } from '@/shared/config';
import { createApp } from 'vue';

import App from './index.vue';
import './assets/index.scss';

const app = createApp(App);

app.use(store);

export { app };
