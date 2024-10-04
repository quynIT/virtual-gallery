import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../page/NotFound.vue';
import HomePage from '../page/HomePage.vue';
import ProductImage from '@/components/ProductImage.vue';
import App from '@/App.vue';

const routes = [
  {
    path: '/',
    component: App,
  },
  {
    path: '/product',
    component: ProductImage,
  },{
    path: '/home',
    component: HomePage,
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
