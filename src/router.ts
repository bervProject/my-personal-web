import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/Home.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () =>
        import(/* webpackChunkName: "blog" */ './views/Blog.vue'),
    },
    {
      path: '/donate',
      name: 'donate',
      component: () =>
        import(/* webpackChunkName: "donate" */ './views/Donate.vue'),
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
      path: '/songs',
      name: 'songs',
      component: () =>
        import(/* webpackChunkName: "songs" */ './views/Songs.vue'),
    },
    {
      path: '/favorite-audio',
      name: 'favorite-audio',
      component: () =>
        import(
          /* webpackChunkName: "favorite-audio" */ './views/FavoriteAudio.vue'
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
