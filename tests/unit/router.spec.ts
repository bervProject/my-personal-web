import { expect, describe, it } from 'vitest';

import router from '@/router';

describe('router.ts', () => {
  it('Check attributes', () => {
    const path = router.getRoutes().map(route => route.path);
    expect(path).toContain('/');
    expect(path).toContain('/certification');
    expect(path).toContain('/songs');
  });
});
