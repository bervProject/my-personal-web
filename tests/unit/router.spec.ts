import router from '@/router';

describe('router.ts', () => {
  it('Check attributes', () => {
    const path = router.getRoutes().map(route => route.path);
    expect(path).toStrictEqual([
      // '/community/blog',
      // '/community/speaking',
      '/',
      // '/donate',
      // '/experience',
      // '/projects',
      // '/portofolio',
      // '/songs',
      // '/favorite-audio',
      // '/about',
      // '/certification',
      // '/community'
    ]);
  });
});
