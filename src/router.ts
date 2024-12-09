import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Welcome from './pages/Welcome.vue';
import About from './pages/About.vue';

// Define the routes (we'll connect these to nav items later)
const routes: RouteRecordRaw[] = [
  { path: '/home', name: 'Home', component: Welcome },
  { path: '/about', name: 'About', component: About },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
