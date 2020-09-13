import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "SearchRecipes" */ '@/components/views/SearchRecipes.vue'),
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import(/* webpackChunkName: "RecipeDetail" */ '@/components/views/RecipeDetail.vue'),
    },
    { path: '*', redirect: '/play/random' },
  ],
});

export default router;
