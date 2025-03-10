import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';

// eslint-disable-next-line
const anotherRoutes: RouteRecordRaw[] = [
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
];

const homeRoute: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "home" */ './views/HomePage.vue'),
  },
  {
    path: '/certification',
    name: 'certification',
    component: () =>
      import(/* webpackChunkName: "certification" */ './views/CertificationPage.vue'),
  },
  {
    path: '/songs',
    name: 'songs',
    component: () =>
      import(/* webpackChunkName: "songs" */ './views/SongsPage.vue'),
  },
]

const allRoute = homeRoute;

export default createRouter({
  history: createWebHashHistory(),
  routes: allRoute,
});
