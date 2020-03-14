import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue'),
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/Projects.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
