import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import i18n, { loadLanguageAsync } from './i18n-lazy';
import router from './router';
import store from './store';

loadLanguageAsync('zh-tw');

createApp(App).use(i18n).use(store).use(router).mount('#app');
