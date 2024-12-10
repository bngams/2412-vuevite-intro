export default [
    {
      path: '/products',
      component: () => import('./Products.vue'), // Lazy-loaded
      meta: { authRequired: true }, 
      children: [
        {
          path: 'details/:id',
          component: () => import('./pages/ProductDetails.vue'), // Lazy-loaded
          name: 'ProductDetail'
        },
        {
          path: '',
          component: () => import('./pages/Catalog.vue'), // Lazy-loaded
          name: 'Catalog'
        }
      ]
    },
];