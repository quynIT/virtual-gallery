import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import TheWelcome from '../components/TheWelcome.vue';
import NotFound from '../page/NotFound.vue';

const routes = [
  {
    path: '/',
    component: HelloWorld,
  },
  {
    path: '/welcome',
    component: TheWelcome,
  },
  {
    path: '/:pathMatch(.*)*', 
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes,
});

  
export default router;
