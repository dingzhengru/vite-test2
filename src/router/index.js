import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  //len99
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    name: '設定',
    path: '/set',
    component: () => import('@/views/len99/set.vue'),
  },
  {
    name: 'jocker',
    path: '/jocker',
    component: () => import('@/views/len99/game/jocker.vue'),
  },
  {
    name: 'modalNews',
    path: '/modalNews',
    component: () => import('@/views/len99/modal/modal-news.vue'),
  },

  //common
  {
    name: 'chat',
    path: '/chat',
    component: () => import('@/views/common/chat.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
