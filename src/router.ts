import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/HomePage.vue'),
    },
    {
      path: '/community/blog',
      name: 'blog',
      component: () =>
        import(/* webpackChunkName: "blog" */ './views/BlogPage.vue'),
    },
    {
      path: '/donate',
      name: 'donate',
      component: () =>
        import(/* webpackChunkName: "donate" */ './views/DonatePage.vue'),
    },
    {
      path: '/experience',
      name: 'experience',
      component: () =>
        import(/* webpackChunkName: "experience" */ './views/ExperiencePage.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () =>
        import(/* webpackChunkName: "projects" */ './views/ProjectsPage.vue'),
    },
    {
      path: '/portofolio',
      name: 'portofolio',
      component: () =>
        import(/* webpackChunkName: "portofolio" */ './views/PortofolioPage.vue'),
    },
    {
      path: '/songs',
      name: 'songs',
      component: () =>
        import(/* webpackChunkName: "songs" */ './views/SongsPage.vue'),
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
      component: () =>
        import(/* webpackChunkName: "about" */ './views/AboutPage.vue'),
    },
    {
      path: '/certification',
      name: 'certification',
      component: () =>
        import(/* webpackChunkName: "certification" */ './views/CertificationPage.vue'),
    },
    {
      path: '/community/speaking',
      name: 'speaking',
      component: () =>
        import(/* webpackChunkName: "speakers" */ './views/SpeakingHistoryPage.vue'),
    },
    {
      path: '/community',
      name: 'community',
      component: () =>
        import(/* webpackChunkName: "community" */ './views/CommunityPage.vue'),
    },
  ],
});
