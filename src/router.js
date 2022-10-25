import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      //component: Home
      component: () => import(/* webpackChunkName: "about" */ './views/ListProducts.vue')
    },

    {
      path: '/all-locations',
      name: 'all-locations',
      //component: Home
      component: () => import(/* webpackChunkName: "about" */ './views/AllLocations.vue')
    },

    {
      path: '/add-location',
      name: 'add-location',
      //component: Home
      component: () => import(/* webpackChunkName: "about" */ './views/AddLocation.vue')
    },
    {
      path: '/add-category',
      name: 'add-category',
      //component: Home
      component: () => import(/* webpackChunkName: "about" */ './views/AddCategory.vue')
    },
    {
      path: '/add-product',
      name: 'add-product',
      //component: Home
      component: () => import(/* webpackChunkName: "about" */ './views/AddProduct.vue')
    },
    {
      path: '/all-productcategory',
      name: 'all-productcategory',
      //component: Home
      component: () => import(/* webpackChunkName: "about" */ './views/AllProductCategory.vue')
    }
  ]
})
