export default [
    {
      path: '/auth',
      component: () => import('./Auth.vue'), // Lazy-loaded
      children: [
        {
          path: 'login',
          component: () => import('./pages/Login.vue'), // Lazy-loaded
          name: 'Login'
        },
        // signup
        // forgot pwd
        // ...
      ]
    },
];