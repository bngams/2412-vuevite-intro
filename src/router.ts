import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Welcome from './pages/Welcome.vue';
import NotFound from './pages/NotFound.vue';
import ProductRoutes from './modules/products/router';
import AuthRoutes from './modules/auth/router';
import { useAuthStore } from './modules/auth/stores/auth-store';

// Define the routes (we'll connect these to nav items later)
const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' }, // Default redirect to /home
  { path: '/home', name: 'Home', component: Welcome },
  { path: '/about', name: 'About', meta: { preload: true }, component: () => import('./pages/About.vue') },
  ...ProductRoutes,
  ...AuthRoutes,
  {
    path: '/:pathMatch(.*)*', // Catch-all for undefined routes /\!
    name: 'NotFound',
    component: NotFound,
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// TODO: Preload strategy => load some part when app starts (on App.vue)
// export function preloadRoutes() { 
// routes.forEach(route => {
//  if(route.meta?.preload) {
//   route.component()
//  } 
// })
// }

// Guards
router.beforeEach((to, from) => {
  if(to.meta?.authRequired){
    // is user logged in ? 
    const authStore = useAuthStore();
    if(authStore.isLoggedIn) {
      return true;
    } else {
      // redirect to login page
      return false;
    }
  } 
  return true;
})

export default router;
