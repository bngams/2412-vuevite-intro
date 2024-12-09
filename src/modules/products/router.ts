export default [
    {
      path: '/products',
      component: () => import('./pages/Catalog.vue'), // Lazy-loaded
      children: [
        {
          path: ':id',
          component: () => import('./pages/ProductDetails.vue'), // Lazy-loaded
          name: 'ProductDetail'
        }
      ]
    }
];