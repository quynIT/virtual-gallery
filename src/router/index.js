import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../page/NotFound.vue';
import ProductImage from '@/components/ProductImage.vue';
import AddImage from '../page/AddImage.vue'

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
  {
    path: '/add-image', 
    name: 'AddImage',
    component: AddImage,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes,
});

  
export default router;
