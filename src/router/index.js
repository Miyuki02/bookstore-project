// Import các phần cần thiết từ thư viện Vue Router.
import { createRouter, createWebHistory } from 'vue-router'

// Import các component Vue đã tạo hoặc sẽ sử dụng.
import Home from '../views/ShopIndex.vue'

// Tạo một instance của Router sử dụng createRouter.
const router = createRouter({
  // Sử dụng createWebHistory để tạo router sử dụng HTML5 History API.
  history: createWebHistory(import.meta.env.BASE_URL),

  // Định nghĩa các route của ứng dụng.
  routes: [
    {
      // Địa chỉ URL mặc định (gốc) của trang.
      path: '/',
      // Sử dụng component Home khi địa chỉ này được truy cập.
      component: Home,
      // Đặt tên cho route, dễ dàng sử dụng trong code khác.
      name: 'ShopIndex'
    },
    {
      // Địa chỉ URL không khớp với bất kỳ route nào ở trên.
      // Thường được sử dụng để xử lý trang 404 (Không tìm thấy).
      path: '/:pathMatch(.*)*',
      // Đặt tên cho route "notfound".
      name: 'notfound',
      // Sử dụng component NotFound khi địa chỉ không khớp với bất kỳ route nào.
      component: () => import('../views/NotFound.vue')
    }
  ]
})

// Xuất router để sử dụng trong ứng dụng Vue.
export default router
