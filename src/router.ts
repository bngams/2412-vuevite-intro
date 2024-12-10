import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Welcome from './pages/Welcome.vue';
import NotFound from './pages/NotFound.vue';
import ProductRoutes from './modules/products/router';

// Define the routes (we'll connect these to nav items later)
const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' }, // Default redirect to /home
  { path: '/home', name: 'Home', component: Welcome },
  { path: '/about', name: 'About', component: () => import('./pages/About.vue') },
  ...ProductRoutes,
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

// Guards
router.beforeEach((to, from) => {
  if(to.meta?.authRequired){
    // is user logged in ? 
    // redirect to login page
    alert('Not authorized');
    return false;
  } 
  return true;
})

export default router;
