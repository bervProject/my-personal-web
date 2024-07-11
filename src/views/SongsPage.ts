import { defineComponent } from 'vue';
export default defineComponent({
  name: 'SongsPage',
  metaInfo: {
    title: 'Songs'
  },
  data() {
    return {
      trackData: [
        'https://open.spotify.com/embed/track/3Ibi0uokAZfx3rdyP1AMaC',
        'https://open.spotify.com/embed/track/6Yi4keGPfx2D77dDu2kSN0',
        'https://open.spotify.com/embed/track/1zhP8lw0v5wAYJeKvyrhwu',
        'https://open.spotify.com/embed/track/7ePyrOcnlE6KPWgsy2ouQB',
        'https://open.spotify.com/embed/track/0zQE5JOKWYFg2hQWWhuChj',
        'https://open.spotify.com/embed/track/4q4Uzzu5VOOUFLjDDLsruS'
      ],
      youtubeData: [
        'https://www.youtube.com/embed/fzrdJRQcybo',
        'https://www.youtube.com/embed/aUafSVi4oU4',
        'https://www.youtube.com/embed/liOraEJkqgw',
        'https://www.youtube.com/embed/z3MkcEIq7c0',
        'https://www.youtube.com/embed/xouVF8Udk_s'
      ],
    };
  }
});
