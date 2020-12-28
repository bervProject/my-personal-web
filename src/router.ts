import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/education',
      name: 'education',
      component: () =>
        import(/* webpackChunkName: "education" */ './views/Education.vue'),
    },
    {
      path: '/experience',
      name: 'experience',
      component: () =>
        import(/* webpackChunkName: "experience" */ './views/Experience.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () =>
        import(/* webpackChunkName: "projects" */ './views/Projects.vue'),
    },
    {
      path: '/portofolio',
      name: 'portofolio',
      component: () =>
        import(/* webpackChunkName: "portofolio" */ './views/Portofolio.vue'),
    },
    {
      path: '/favorite-audio',
      name: 'favorite-audio',
      component: () =>
        import(
          /* webpackChunkName: "portofolio" */ './views/FavoriteAudio.vue'
        ),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
