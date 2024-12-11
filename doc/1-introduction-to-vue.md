---
name: "1-introduction-to-vue.md"
title: "Création projet Vue.js"
description: "Mise en place projet"
order: "1"
---



# Atelier : Construire un projet Vue + Vite étape par étape

## Étape 1 : Initialiser l'application Vite
**Commit** : [ff42cbf](https://github.com/bngams/2412-vuevite-intro/commit/ff42cbffeb873cc9894ecbb66fa93851bee5fd49)


**Titre** : ":tada: premier commit avec l'initialisation du projet"


**Objectif** : Configurer le projet initial Vite + Vue.

**Actions**
1. Créez un nouveau projet Vue en utilisant Vite :
   `
   npm create vite@latest
   `
   Sélectionnez le modèle Vue lorsque vous y êtes invité.

2. Accédez au dossier du projet et installez les dépendances :
   `
   cd votre-nom-de-projet
   npm install
   `

3. Lancez le serveur de développement :
   `
   npm run dev
   `

---

## Étape 2 : Ajouter des composants et Vuetify
**Commit** : [2597b4b](https://github.com/bngams/2412-vuevite-intro/commit/2597b4b4228d7e56444e939521cc3ce966604bcb)

**Titre** : "WIP - ajout des composants et Vuetify"

**Objectif** : Intégrer Vuetify et créer des composants de base.

**Actions**
1. Installez Vuetify :
* Dépendance principale:
   `npm install vuetify`
* Pour la compilation avec vite
   `npm install vite-plugin-vuetify`
* Pour les icônes
`npm install @mdi/font`

2. Configurez Vuetify dans un fichier  `src/plugins/vuetify.ts` :
   ```javascript
	// @ts-ignore:next-line
	import 'vuetify/styles';
	import '@mdi/font/css/materialdesignicons.css';
	import { createVuetify } from 'vuetify'
	import * as components from 'vuetify/components'
	import * as directives from 'vuetify/directives'

	const vuetify = createVuetify({
	    components,
	    directives,
	    theme: {
	        defaultTheme: 'light',
	    },
	    icons: {
	        defaultSet: 'mdi', // Use Material Design Icons (mdi)
	    },
	})

	export default vuetify;
   ```
3. Importer votre configuration Vuetify dans un le fichier `main.ts` :
```
...
createApp(App)
    .use(vuetify) // your vuetify conf to import
    .mount('#app');
```

4. Créez un composant de page de base sous `src/pages/Welcome.vue`:
   ```vue
   <template>
     <div>
       <h1>Bienvenue dans votre application Vue avec Vuetify !</h1>
     </div>
   </template>
   ```

5. Mettez à jour `App.vue` pour utiliser la mise en page et la barre d'application de Vuetify :
   ```vue
   <template>
     <v-app>
       <v-app-bar app>
          ...
       </v-app-bar>
       ... insert your welcome page component here
     </v-app>
   </template>
   ```

---

## Étape 3 : Configurer Vuetify et le Header
**Commit** : [54b3f1a](https://github.com/bngams/2412-vuevite-intro/commit/54b3f1ad0f20e097d7f573382b38219151d9910b)

**Titre** : ":construction: configuration de Vuetify et utilisation avec Header"

**Objectif** : Ajouter un composant header en utilisant Vuetify.

**Actions**
1. Créez un composant `Header.vue` dans `src/components/layout` pour y insérer votre app bar vuetify :
   ```vue
   <template>
     <v-app-bar app>
       <v-toolbar-title>Mon App</v-toolbar-title>
     </v-app-bar>
   </template>
   ```

2. Mettez à jour `App.vue` pour utiliser le nouveau composant header :
   ```vue
   <template>
     <v-app>
       <Header />
       <Welcome />
     </v-app>
   </template>
   ```

---

## Étape 4 : Préparer le composant Header avec navigation
**Commit** : [2d20aec](https://github.com/bngams/2412-vuevite-intro/commit/2d20aec2ff878d316b2d773d4281c8f27ac114d2)

**Titre** : "préparer le composant header avec navigation"

**Objectif** : Ajouter des liens de navigation dans le header.

**Actions**
1. Améliorez le composant `Header.vue` :
   ```vue
   <template>
     <v-app-bar app>
       <v-toolbar-title>Mon App</v-toolbar-title>
       <v-spacer></v-spacer>
       <v-btn text to="/home">Accueil</v-btn>
       ...
     </v-app-bar>
   </template>
   ```

2. Stylisez le header

---

## Étape 5 : Préparer les composants de page
**Commit** : [78c345f](https://github.com/bngams/2412-vuevite-intro/commit/78c345f69fc6a893e8d95f0d1480e9e3aedc2174)

**Titre** : "préparer les composants de page"

**Objectif** : Créer des composants de page séparés.

**Actions**
1. Créez `HomePage.vue` et `AboutPage.vue` dans le répertoire `src/pages` avec des modèles simples par exemple :
   ```vue
   <!-- HomePage.vue -->
   <template>
     <h1>Bienvenue sur la page d'accueil</h1>
   </template>
   ```

## Étape 6 : Installer Vue Router et définir les routes

**Commit** : [5a88891](https://github.com/bngams/2412-vuevite-intro/commit/5a888917230d9e9604fa6523cacc56844a6a34df)

**Titre** : "installer vue-router, définir des routes simples, utiliser le composant router"

**Objectif** : Configurer Vue Router et définir des routes de base.

**Actions**

1.  Installez Vue Router :  `npm install vue-router`
2. Configurer (charger) le router dans le  `main.ts`:
```
	createApp(App)
	    .use(vuetify)
	    .use(router)
	    .mount('#app')
```

3.  Créez un fichier de configuration du routeur `src/router/index.js`:
```
	import { createRouter, createWebHistory } from 'vue-router';
    import HomePage from '../pages/HomePage.vue';
    import AboutPage from '../pages/AboutPage.vue';

    const routes = [
      { path: '/home', component: HomePage },
      { path: '/about', component: AboutPage },
    ];

    const router = createRouter({
      history: createWebHistory(),
      routes,
    });

    export default router;
```
4.  Modifier le fichier App.vue pour l'utilisation des routes, insérer le composant  `<router-view>` à l'endroit souhaité pour afficher les pages.


## Étape 7 : Compléter les routes avec redirection et page non trouvée
**Commit** : [c319cfa](https://github.com/bngams/2412-vuevite-intro/commit/c319cfa30c8aed1a8172987ff8ed2a8ce45b37b4)
**Titre** : "compléter les routes avec redirection et non trouvé"
**Objectif** : Améliorer le routage avec des redirections et une page 404.

**Actions**

Compléter votre fichier router pour ajouter une redirection par défaut vers la page Home (si pas d'url précisée ou disons si url racine `/`, alors on doit être redirigé vers `/home`)

## Étape 8 : Créer un module de fonctionnalité produits avec ses propres routes (lazy laoding)
**Commit** : [978c6c3](https://github.com/bngams/2412-vuevite-intro/commit/978c6c3e29f87deb4b31b7a103d745ac25b87e23)

**Titre** : "fonctionnalités produits"

**Objectif** : Implémenter un module produit et ses fonctionnalités.

**Actions**

Compléter l'application avec les fonctionnalités produit.
Navigation vers le catalogue, puis sur les pages détaillées des produits.
Les données sont récupérées en HTTP (API JS Fetch ou Axios)

Voici un aperçu de l'interface:
![application-demo](/_assets/video_step_8.gif "Aperçu de l'application")


## Étape 9 : Gestion de l’ajout au panier avec Provide/Inject

**Commit** : [619ebbb3](https://github.com/bngams/2412-vuevite-intro/commit/619ebbb3dd2efb8d2aecf7b633a3acb5b7bfecd0)

**Titre** : "Ajout de la gestion du panier avec Provide/Inject"

**Objectif** : Implémenter la gestion du panier d’achat dans l’application Vue.js en utilisant l’API `Provide`/`Inject`. Cela permettra de partager facilement les données et fonctions liées au panier à travers différents composants sans prop-drilling.

**Résultat attendu**: À la fin de cette étape, l’application Vue dispose d’un panier fonctionnel qui :
- Permet d’ajouter, de retirer, et de vider des produits.
- Partage la logique du panier entre les composants via `Provide` et `Inject`.
- Offre une interface utilisateur réactive pour interagir avec le panier.

Voici un aperçu de l'interface:
![application-demo](/_assets/video_step_9.gif "Aperçu de l'application")

### 1. Créer un fichier de gestion du panier
- **Fichier** : `src/store/cart.ts`
- **But** : Centraliser la logique et les données du panier pour les rendre accessibles à tous les composants.

```
import { reactive, computed } from 'vue';

export const useCart = () => {
  const state = reactive({
    items: [] as { id: string; name: string; price: number; quantity: number }[],
  });

  const addToCart = (product: { id: string; name: string; price: number }) => {
    const item = state.items.find((item) => item.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      state.items.push({ ...product, quantity: 1 });
    }
  };

  const removeFromCart = (productId: string) => {
    state.items = state.items.filter((item) => item.id !== productId);
  };

  const clearCart = () => {
    state.items = [];
  };

  const totalItems = computed(() =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  return {
    state,
    addToCart,
    removeFromCart,
    clearCart,
    totalItems,
  };
};
```

### 2. Configurer `Provide` dans un composant parent
- **Fichier** : `src/App.vue`
- **But** : Fournir l’accès au panier et aux fonctions associées à tous les composants enfants.

```
<script lang="ts" setup>
import { provide } from 'vue';
import { useCart } from './store/cart';

const cart = useCart();
provide('cart', cart);
</script>

<template>
  <v-app>
    <Header />
    <router-view />
  </v-app>
</template>
```

**Explication** :
- La fonction `provide` partage l’objet `cart` à tous les composants enfants.
- Les enfants peuvent accéder aux données et aux fonctions du panier sans passer par les props.


### 3. Utiliser `Inject` dans un composant enfant
- **Fichier** : `src/modules/products/components/ProductCard.vue`
- **But** : Ajouter un produit au panier lorsqu’un bouton est cliqué.

Ceci est un exemple de la logique à reproduire ou adapter:

```
<script lang="ts" setup>
import { inject } from 'vue';

const cart = inject('cart');

if (!cart) {
  throw new Error('Cart is not provided!');
}

const addToCart = (product: { id: string; name: string; price: number }) => {
  cart.addToCart(product);
};
</script>

<template>
  <div>
    <h3>{{ product.name }}</h3>
    <p>{{ product.price }} €</p>
    <v-btn @click="addToCart(product)">Ajouter au panier</v-btn>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
```

**Explication** :
- La fonction `inject` permet de récupérer le panier et ses fonctions depuis le composant parent.
- Si le panier n’est pas fourni, une erreur est levée.


### 4. Ajouter l'affichage du nombre total d'articles dans le `Header`
- **Fichier** : `src/components/layout/Header.vue`
- **But** : Afficher le nombre total d'articles du panier dans la barre d'application.

```
<script setup lang="ts">
import { inject } from 'vue';

const cart = inject('cart');

if (!cart) {
  throw new Error('Cart is not provided!');
}
</script>

<template>
  <v-app-bar :elevation="2" app>
    <v-app-bar-title>ACME</v-app-bar-title>
    <div>
      <v-btn variant="text" to="/">Home</v-btn>
      <v-btn variant="text" to="/about">About</v-btn>
      <v-btn variant="text" to="/products">Products</v-btn>
    </div>
    <v-spacer></v-spacer>
    <v-btn icon to="/cart">
      <v-icon>mdi-cart</v-icon>
      <v-badge
        v-if="cart.totalItems() > 0"
        :content="cart.totalItems()"
        color="primary"
        overlap
      ></v-badge>
    </v-btn>
    <v-btn variant="text" to="/login">Login</v-btn>
    <v-btn variant="text" to="/logout">Logout</v-btn>
  </v-app-bar>
</template>
```

**Explication** :
- Le composant `Header.vue` utilise l’injection pour accéder au panier et au nombre total d’articles.
- La méthode `cart.totalItems()` permet de calculer dynamiquement le nombre total d’articles.
- Le badge est affiché uniquement lorsque le nombre d’articles est supérieur à zéro.



### 5. Afficher le contenu du panier
- **Fichier** : `src/pages/Cart.vue` ou `src/modules/products/pages/Cart.vue`
- **But** : Afficher la liste des produits dans le panier.

Créer la page Panier (composants, et routes associées...)

```
<script lang="ts" setup>
import { inject } from 'vue';

// use inject to get cart object...
// const cart = ...

if (!cart) {
  throw new Error('Cart is not provided!');
}
</script>

<template>
  <v-container>
    <h2>Votre Panier</h2>
    <!-- Display cart items and handle removeFromCart to delete an item from the cart -->
    <!-- Implements clear cart event -->
    <v-btn @click="console.log('TODO')">Vider le panier</v-btn>
  </v-container>
</template>
```

**Explication** :
- Le composant `Cart.vue` récupère le panier via `inject` et affiche son contenu.
- Les fonctions `removeFromCart` et `clearCart` permettent de gérer le panier directement.


### 6. Créer le composant `CartProvider`
- **Fichier** : `src/modules/products/providers/CartProvider.vue`
- **But** : Encapsuler la logique `Provide` dans un composant dédié pour une meilleure séparation des rôles au sein de l'application.

```
<script lang="ts" setup>
import { provide, Slot } from 'vue';
import { useCart } from '@/store/cart';

const cart = useCart();
provide('cart', cart);
</script>

<template>
  <slot />
</template>
</code>
```

**Explication** :
- Le composant `CartProvider` encapsule la logique `Provide` pour partager le panier avec les composants enfants via le slot.
- Cela améliore la modularité en rendant l’application plus flexible et en facilitant le test du code.

### 7. Mettre à jour `App.vue` pour utiliser le `CartProvider`
- **Fichier** : `src/App.vue`
- **But** : Intégrer le composant `CartProvider` pour encapsuler le panier dans l’application.

```
<script setup lang="ts">
import Header from './components/layout/Header.vue';
import CartProvider from './modules/products/providers/CartProvider.vue';
</script>

<template>
  <v-app>
    <CartProvider>
      <Header></Header>
      <v-main>
        <v-container>
          <RouterView />
        </v-container>
      </v-main>
    </CartProvider>
  </v-app>
</template>

<style scoped>
</style>
```

**Explication** :
- `CartProvider` est utilisé pour encapsuler toute la logique de gestion du panier.
- Tous les composants enfants (par exemple, `Header` et `RouterView`) peuvent accéder aux données du panier sans configuration supplémentaire.

