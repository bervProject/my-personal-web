import router from '@/router';

describe('router.ts', () => {
  it('Check attributes', () => {
    expect(router.mode).toEqual('history');
    const path = router.getRoutes().map(route => route.path);
    expect(path).toStrictEqual([
      '',
      '/community/blog',
      '/donate',
      '/experience', 
      '/projects',
      '/portofolio',
      '/songs',
      '/favorite-audio',
      '/about',
      '/certification',
      '/community/speaking',
      '/community'
    ]);
  });
});
