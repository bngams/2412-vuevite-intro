import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Welcome from './pages/Welcome.vue';
import About from './pages/About.vue';
import NotFound from './pages/NotFound.vue';

// Define the routes (we'll connect these to nav items later)
const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' }, // Default redirect to /home
  { path: '/home', name: 'Home', component: Welcome },
  { path: '/about', name: 'About', component: About },
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

export default router;
