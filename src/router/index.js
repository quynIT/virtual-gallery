import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../page/NotFound.vue';
import ProductImage from '@/components/ProductImage.vue';
import App from '@/App.vue';
import NavbarAnimation from '@/components/NavbarAnimation.vue';
import LayoutPage from '@/page/LayoutPage.vue';

const routes = [
  {
    path: '/',
    component: LayoutPage,
  },
  {
    path: '/product',
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
