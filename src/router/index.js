import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../page/NotFound.vue';
import ProductImage from '@/components/ProductImage.vue';
import AddImage from '../page/AddImage.vue';

// Giả lập hàm kiểm tra người dùng đăng nhập
function isUserLoggedIn() {
  // Logic kiểm tra người dùng đăng nhập
  return localStorage.getItem('userLoggedIn') === 'true';
}

const routes = [
  {
    path: '/',
    component: ProductImage,
  },
  {
    path: '/add-image', 
    name: 'AddImage',
    component: AddImage,
  },
  {
    path: '/:pathMatch(.*)*', 
    name: 'NotFound',
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes,
});

// Thêm Navigation Guard
router.beforeEach((to, from, next) => {
  // Không chặn người dùng truy cập vào các link trực tiếp
  next();
});

export default router;
