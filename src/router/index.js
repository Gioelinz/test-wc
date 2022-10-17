/* import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = new VueRouter({
  mode: 'abstract',
  base: process.env.BASE_URL,
  routes
})

Vue.mixin(router);

export default router */

/* let initialized = false;

export default function () {

  if (initialized) return;

  Vue.use(VueRouter);

  const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ];

  const router = new VueRouter({
    mode: 'abstract',
    base: process.env.BASE_URL,
    routes
  });

  Vue.mixin({ router });

  router.replace('/');

  initialized = true;
} */