import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../page/NotFound.vue';
import ProductImage from '@/components/ProductImage.vue';


const routes = [
  {
    path: '/',
    component: ProductImage,
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
