import { createApp } from 'vue';
import App from './App.vue';
import i18n, { loadLanguageAsync } from './i18n-lazy';
import router from './router';
import store from './store';
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/assets/style/len99/default/css.scss';

loadLanguageAsync('zh-tw');

createApp(App).use(i18n).use(store).use(router).use(Vant).mount('#app');
