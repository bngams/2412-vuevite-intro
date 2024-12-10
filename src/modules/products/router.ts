export default [
    {
      path: '/products',
      component: () => import('./pages/Catalog.vue'), // Lazy-loaded
      meta: { authRequired: true }, 
      children: [
        {
          path: '/details/:id',
          component: () => import('./pages/ProductDetails.vue'), // Lazy-loaded
          name: 'ProductDetail'
        },
        // {
        //   path: '/categories/:name',
        //   component: () => import('./pages/ProductDetails.vue'), // Lazy-loaded
        //   name: 'ProductDetail'
        // }
      ]
    }
];